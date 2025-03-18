// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import axios from 'axios';

// const AdminDashboard = () => {
//   const router = useRouter();
//   const [adminData, setAdminData] = useState<{ email: string } | null>(null);

//   useEffect(() => {
//     const token = localStorage.getItem('admin_token');
//     if (!token) {
//       router.push('/admin/login');
//     } else {
//       axios.post(`${process.env.NEXT_PUBLIC_GRAPHQL_URI}`, {
//         query: `
//           query {
//             adminMe(email: "admin@gmail.com")
//           }
//         `,
//         headers: { Authorization: `Bearer ${token}` }
//       }).then(res => {
//         setAdminData({ email: res.data?.data?.adminMe });
//       }).catch(() => {
//         router.push('/admin/login');
//       });
//     }
//   }, [router]);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold">Admin Dashboard</h2>
//       {adminData ? (
//         <p>Welcome, {adminData.email}</p>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;


import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

// Define types for our data
interface AdminData {
  email: string;
}

interface UserStats {
  totalUsers: number;
  newUsersToday: number;
  activeUsers: number;
}

interface ReferralStats {
  totalReferrals: number;
  activeReferrals: number;
  conversionRate: number;
}

interface ReferralData {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  businessName: string | null;
  referralCode: string;
  referralLink: string;
  createdAt: string;
  stores: Array<{
    storeId: string;
    storeName: string;
    visitedAt?: string;
  }>;
}

interface UserData {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  isActive: boolean;
}

const AdminDashboard = () => {
  const router = useRouter();
  const [adminData, setAdminData] = useState<AdminData | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  // State for dashboard data
  const [userStats, setUserStats] = useState<UserStats | null>(null);
  const [referralStats, setReferralStats] = useState<ReferralStats | null>(null);
  const [recentReferrals, setRecentReferrals] = useState<ReferralData[]>([]);
  const [allReferrals, setAllReferrals] = useState<ReferralData[]>([]);
  const [allUsers, setAllUsers] = useState<UserData[]>([]);
  
  // Search and filter state
  const [referralSearch, setReferralSearch] = useState('');
  const [userSearch, setUserSearch] = useState('');
  const [, setSelectedReferral] = useState<ReferralData | null>(null);

  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showChangePassword, setShowChangePassword] = useState(false);
  // Get admin token
  const getToken = () => localStorage.getItem('admin_token');

  // Fetch admin data
  const fetchAdminData = async () => {
    const token = getToken();
    if (!token) {
      router.push('/admin/login');
      return;
    }

    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_GRAPHQL_URI}`, {
        query: `
          query {
            adminMe(email: "admin@gmail.com")
          }
        `,
        headers: { Authorization: `Bearer ${token}` }
      });
      
      setAdminData({ email: res.data?.data?.adminMe });
      return token;
    } catch (error) {
      console.error('Admin authentication failed:', error);
      router.push('/admin/login');
      return null;
    }
  };

  // Fetch dashboard data
  const fetchDashboardData = async (token: string) => {
    setIsRefreshing(true);
    try {
      // Fetch all referrals
      const referralsRes = await axios.post(`${process.env.NEXT_PUBLIC_GRAPHQL_URI}`, {
        query: `
          query {
            getAllReferrals {
              id
              name
              email
              phoneNumber
              businessName
              referralCode
              referralLink
              createdAt
              stores {
                storeId
                storeName
                visitedAt
              }
            }
          }
        `,
        headers: { Authorization: `Bearer ${token}` }
      });

      const referralsData = referralsRes.data?.data?.getAllReferrals || [];
      setAllReferrals(referralsData);
      
      // Get recent referrals (last 5)
      const sortedReferrals = [...referralsData].sort((a, b) => 
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setRecentReferrals(sortedReferrals.slice(0, 5));

      // Calculate referral stats
      const activeReferrals = referralsData.filter((ref: { stores: string | unknown[]; }) => ref.stores.length > 0).length;
      setReferralStats({
        totalReferrals: referralsData.length,
        activeReferrals,
        conversionRate: referralsData.length > 0 
          ? Math.round((activeReferrals / referralsData.length) * 100) 
          : 0
      });

      // Fetch users data
      const usersRes = await axios.post(`${process.env.NEXT_PUBLIC_GRAPHQL_URI}`, {
        query: `
          query {
            getAllUsers {
              id
              name
              email
              createdAt
              isActive
            }
          }
        `,
        headers: { Authorization: `Bearer ${token}` }
      });

      const usersData = usersRes.data?.data?.getAllUsers || [];
      setAllUsers(usersData);

      // Calculate user stats
      const today = new Date().toISOString().split('T')[0];
      const newUsersToday = usersData.filter((user: { createdAt: string; }) => 
        user.createdAt.startsWith(today)
      ).length;
      
      const activeUsers = usersData.filter((user: { isActive: unknown; }) => user.isActive).length;
      
      setUserStats({
        totalUsers: usersData.length,
        newUsersToday,
        activeUsers
      });

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  // Initial data loading
  useEffect(() => {
    const loadData = async () => {
      const token = await fetchAdminData();
      if (token) {
        await fetchDashboardData(token);
      }
    };
    
    loadData();
  }, [router]);

  // Handle manual refresh
  const handleRefresh = async () => {
    const token = getToken();
    if (token) {
      await fetchDashboardData(token);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    router.push('/admin/login');
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_GRAPHQL_URI}`, {
        query: `
          mutation ChangePassword($email: String!, $oldPassword: String!, $newPassword: String!) {
            changePassword(email: $email, oldPassword: $oldPassword, newPassword: $newPassword)
            {
            message}
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

  // Filter referrals based on search
  const filteredReferrals = allReferrals.filter(referral => 
    referral.name.toLowerCase().includes(referralSearch.toLowerCase()) ||
    referral.email.toLowerCase().includes(referralSearch.toLowerCase()) ||
    referral.referralCode.toLowerCase().includes(referralSearch.toLowerCase())
  );

  // Filter users based on search
  const filteredUsers = allUsers.filter(user => 
    user.name.toLowerCase().includes(userSearch.toLowerCase()) ||
    user.email.toLowerCase().includes(userSearch.toLowerCase())
  );

  // View referral details
  const viewReferralDetails = (referral: ReferralData) => {
    setSelectedReferral(referral);
  };

  // Close referral details modal

  // Delete referral (you would implement the actual API call)
  const deleteReferral = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this referral?')) {
      const token = getToken();
      if (!token) return;

      try {
        await axios.post(`${process.env.NEXT_PUBLIC_GRAPHQL_URI}`, {
          query: `
            mutation {
              deleteReferral(id: "${id}")
            }
          `,
          headers: { Authorization: `Bearer ${token}` }
        });
        
        // Refresh data after deletion
        await fetchDashboardData(token);
      } catch (error) {
        console.error('Error deleting referral:', error);
        alert('Failed to delete referral');
      }
    }
  };

  // Export referrals to CSV
  const exportReferralsToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Business', 'Referral Code', 'Created Date', 'Stores Count'];
    const csvData = filteredReferrals.map(ref => [
      ref.name,
      ref.email,
      ref.phoneNumber,
      ref.businessName || 'N/A',
      ref.referralCode,
      new Date(ref.createdAt).toLocaleDateString(),
      ref.stores.length.toString()
    ]);
    
    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'referrals.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

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
          onClick={handleLogout}
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
              <button 
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="mr-4 text-gray-600 hover:text-blue-600 flex items-center"
              >
                <div className={`mr-1 ${isRefreshing ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              <span className="mr-4">Welcome, {adminData?.email}</span>
              <button 
                onClick={handleLogout}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        {activeTab === 'dashboard' && (
          <div className="p-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-gray-500 text-sm font-medium">Total Users</h3>
                <p className="text-3xl font-bold mt-2">{userStats?.totalUsers || 0}</p>
                <div className="mt-2 text-green-500 text-sm">+{userStats?.newUsersToday || 0} today</div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-gray-500 text-sm font-medium">Active Users</h3>
                <p className="text-3xl font-bold mt-2">{userStats?.activeUsers || 0}</p>
                <div className="mt-2 text-gray-500 text-sm">
                  {userStats && userStats.totalUsers > 0 
                    ? Math.round((userStats.activeUsers / userStats.totalUsers) * 100) 
                    : 0}% of total
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-gray-500 text-sm font-medium">Total Referrals</h3>
                <p className="text-3xl font-bold mt-2">{referralStats?.totalReferrals || 0}</p>
                <div className="mt-2 text-gray-500 text-sm">{referralStats?.activeReferrals || 0}
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-gray-500 text-sm font-medium">Conversion Rate</h3>
                <p className="text-3xl font-bold mt-2">{referralStats?.conversionRate || 0}%</p>
                <div className="mt-2 text-gray-500 text-sm">Active referrals as a percentage of total referrals</div>
              </div>
            </div>

            {/* Recent Referrals */}
            <h3 className="text-lg font-semibold mb-4">Recent Referrals</h3>
            <div className="bg-white rounded-lg shadow-md p-4">
              {recentReferrals.length > 0 ? (
                <ul>
                  {recentReferrals.map(referral => (
                    <li key={referral.id} className="flex justify-between items-center border-b py-2">
                      <span>{referral.name} ({referral.referralCode})</span>
                      <button onClick={() => viewReferralDetails(referral)} className="text-blue-500">View</button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No recent referrals found.</p>
              )}
            </div>
          </div>
        )}

        {/* User Management */}
        {activeTab === 'users' && (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">User Management</h3>
            <input
              type="text"
              placeholder="Search users..."
              value={userSearch}
              onChange={(e) => setUserSearch(e.target.value)}
              className="border p-2 rounded mb-4 w-full"
            />
            <div className="bg-white rounded-lg shadow-md p-4">
              {filteredUsers.length > 0 ? (
                <ul>
                  {filteredUsers.map(user => (
                    <li key={user.id} className="flex justify-between items-center border-b py-2">
                      <span>{user.name} ({user.email})</span>
                      <span className={`text-${user.isActive ? 'green' : 'red'}-500`}>
                        {user.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No users found.</p>
              )}
            </div>
          </div>
        )}

        {/* Referral Management */}
        {activeTab === 'referrals' && (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Referral Management</h3>
            <input
              type="text"
              placeholder="Search referrals..."
              value={referralSearch}
              onChange={(e) => setReferralSearch(e.target.value)}
              className="border p-2 rounded mb-4 w-full"
            />
            <div className="bg-white rounded-lg shadow-md p-4">
              {filteredReferrals.length > 0 ? (
                <ul>
                  {filteredReferrals.map(referral => (
                    <li key={referral.id} className="flex justify-between items-center border-b py-2">
                      <span>{referral.name} ({referral.referralCode})</span>
                      <div>
                        <button onClick={() => viewReferralDetails(referral)} className="text-blue-500 mr-2">View</button>
                        <button onClick={() => deleteReferral(referral.id)} className="text-red-500">Delete</button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No referrals found.</p>
              )}
            </div>
            <button onClick={exportReferralsToCSV} className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
              Export to CSV
            </button>
          </div>
        )}

        {/* Settings */}
        {activeTab === 'settings' && (
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4">Settings</h3>
            <p>Settings content goes here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
