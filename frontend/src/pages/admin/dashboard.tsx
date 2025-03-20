import { useState ,useEffect} from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const AdminDashboard = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showChangePassword, setShowChangePassword] = useState(false);


  // const handleLogout = () => {
  //   localStorage.removeItem('admin_token');
  //   router.push('/admin/login');
  // };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_GRAPHQL_URI}`, {
        query: `
          mutation ChangePassword($email: String!, $oldPassword: String!, $newPassword: String!) {
            changePassword(email: $email, oldPassword: $oldPassword, newPassword: $newPassword)
            {
            message
            }
          }
        `,
        variables: {
          email,
          oldPassword,
          newPassword,
        },
      });

      const responseMessage = res.data?.data?.changePassword;
      if (responseMessage) {
        setMessage('Password updated successfully');
        setError('');
      } else {
        setMessage('');
        setError('Failed to update password');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to update password');
    }
  };
  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
    }
  }, [router]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600">Admin Portal</h1>
      </div>

      <nav className="mt-6">
        <div
          className={`p-4 flex items-center ${
            activeTab === 'dashboard' ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
          } cursor-pointer`}
          onClick={() => setActiveTab('dashboard')}
        >
          <div className="mr-3" />
          <span>Dashboard</span>
        </div>
        <div
          className={`p-4 flex items-center ${
            activeTab === 'users' ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
          } cursor-pointer`}
          onClick={() => setActiveTab('users')}
        >
          <div className="mr-3" />
          <span>Users</span>
        </div>
        <div
          className={`p-4 flex items-center ${
            activeTab === 'referrals' ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
          } cursor-pointer`}
          onClick={() => setActiveTab('referrals')}
        >
          <div className="mr-3" />
          <span>Referrals</span>
        </div>
        <div
          className={`p-4 flex items-center ${
            activeTab === 'settings' ? 'bg-blue-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
          } cursor-pointer`}
          onClick={() => setActiveTab('settings')}
        >
          <div className="mr-3" />
          <span>Settings</span>
        </div>

        {/* Change Password Button */}
        <div
          className="p-4 flex items-center text-gray-700 hover:bg-gray-100 cursor-pointer"
          onClick={() => setShowChangePassword(!showChangePassword)}
        >
          <div className="mr-3" />
          <span>Change Password</span>
        </div>

        {/* Change Password Form (Toggle) */}
        {showChangePassword && (
          <div className="p-4 bg-gray-100 border-t">
            <form onSubmit={handleChangePassword} className="flex flex-col gap-3">
              {message && <p className="text-green-500">{message}</p>}
              {error && <p className="text-red-500">{error}</p>}

              <input
                type="email"
                placeholder="Email"
                className="p-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Old Password"
                className="p-2 border rounded"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="New Password"
                className="p-2 border rounded"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <button className="bg-blue-500 text-white p-2 rounded" type="submit">
                Update Password
              </button>
            </form>
          </div>
        )}

        {/* Logout Button */}
        <div
          className="p-4 flex items-center text-gray-700 hover:bg-gray-100 cursor-pointer mt-auto"
          onClick={() => { localStorage.removeItem('admin_token'); router.push('/admin/login'); }}
        >
          <div className="mr-3" />
          <span>Logout</span>
        </div>
      </nav>
    </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="p-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold">
              {activeTab === 'dashboard' && 'Dashboard'}
              {activeTab === 'users' && 'User Management'}
              {activeTab === 'referrals' && 'Referral Management'}
              {activeTab === 'settings' && 'Settings'}
            </h2>
            <div className="flex items-center">
              <span className="mr-4">Welcome</span>
              <button 
                onClick={() => { localStorage.removeItem('admin_token'); router.push('/admin/login'); }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Logout
              </button>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default AdminDashboard;
