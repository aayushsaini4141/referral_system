// import axios from 'axios';
import "@/styles/globals.css";
import {
  
  Users,
  UserCheck,
  RefreshCw,
  TrendingUp,
  Wallet,
  CheckCircle,Search, Filter,Clock, XCircle,
  
} from "lucide-react";
import AdminHeader from '@/components/admin/adminHeader';
import { useState } from "react";

const AdminDashboard = () => {
  // const router = useRouter();
  // const [email, setEmail] = useState('');
  // const [oldPassword, setOldPassword] = useState('');
  // const [newPassword, setNewPassword] = useState('');
  // const [message, setMessage] = useState('');
  // const [error, setError] = useState('');
  // const [showDropdown, setShowDropdown] = useState(false);
  // const [showChangePassword, setShowChangePassword] = useState(false);

  const mockData = {
    totalPartners: 1248,
  activePartners: 987,
  inactivePartners: 261,
  totalReferrals: 5629,
  totalUpgrades: 2891,
  pendingPayouts: 42,
  approvedPayouts: 156
  };

  const mockPayouts = [
    {
      id: '1',
      partnerName: 'TechCorp Solutions',
      amount: 4500,
      status: 'Processed',
      date: '2024-03-15',
      bankAccount: '****4589',
      reference: 'PAY-2024031501'
    },
    {
      id: '2',
      partnerName: 'DataPro Services',
      amount: 2800,
      status: 'Pending',
      date: '2024-03-14',
      bankAccount: '****7823',
      reference: 'PAY-2024031402'
    },
    {
      id: '3',
      partnerName: 'Cloud Systems Inc',
      amount: 1200,
      status: 'Failed',
      date: '2024-03-13',
      bankAccount: '****9034',
      reference: 'PAY-2024031303'
    }
  ];

  const statusColors = {
    Processed: 'bg-green-100 text-green-800',
    Pending: 'bg-yellow-100 text-yellow-800',
    Failed: 'bg-red-100 text-red-800'
  };
  
  const statusIcons = {
    Processed: CheckCircle,
    Pending: Clock,
    Failed: XCircle
  };

    const [searchTerm, setSearchTerm] = useState("");
  
    // Filter logic
    const filteredPayouts = mockPayouts.filter((payout) =>
      ["partnerName", "status"].some((key) =>

        payout[key as keyof typeof payout].toString().toLowerCase().includes(searchTerm.toLowerCase())      )
    );
  

  // const handleChangePassword = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post(`${process.env.NEXT_PUBLIC_GRAPHQL_URI}`, {
  //       query: `
  //         mutation ChangePassword($email: String!, $oldPassword: String!, $newPassword: String!) {
  //           changePassword(email: $email, oldPassword: $oldPassword, newPassword: $newPassword) {
  //             message
  //           }
  //         }
  //       `,
  //       variables: { email, oldPassword, newPassword },
  //     });

  //     const responseMessage = res.data?.data?.changePassword;
  //     if (responseMessage) {
  //       setMessage('Password updated successfully');
  //       setError('');
  //     } else {
  //       setMessage('');
  //       setError('Failed to update password');
  //     }
  //   } catch (err) {
  //     console.error('Error:', err);
  //     setError('Failed to update password');
  //   }
  // };

  // useEffect(() => {
  //   const token = localStorage.getItem('admin_token');
  //   if (!token) {
  //     router.push('/admin/login');
  //   }
  // }, [router]);

  // const dropdownRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(event.target as Node)) {
  //       setShowDropdown(false);
  //     }
  //   };

  //   if (showDropdown) {
  //     document.addEventListener('mousedown', handleClickOutside);
  //   } else {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   }

  //   return () => document.removeEventListener('mousedown', handleClickOutside);
  // }, [showDropdown]);


  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
        <AdminHeader />
  {/* Header - Full Width */}
  {/* <header className="bg-white shadow-sm p-4 w-full">
    <div className="max-w-[1440px] mx-auto flex justify-between items-center px-4">
      <h1>Admin Panel</h1>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="bg-[var(--icon-color)] text-white px-4 py-2 rounded-md transition-all duration-300"
        >
          Profile
        </button>
        <div
          className={`absolute right-0 mt-2 w-48 bg-white border rounded shadow-md transition-all duration-300 transform ${
            showDropdown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-10px] pointer-events-none'
          }`}
        >
          <button
            onClick={() => setShowChangePassword(true)}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-all duration-200"
          >
            Change Password
          </button>
          <button
            onClick={() => {
              localStorage.removeItem('admin_token');
              router.push('/admin/login');
            }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-all duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </header> */}
  {/* {showChangePassword && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        onClick={() => setShowChangePassword(false)}
      >
        <div
          className="bg-white p-6 rounded shadow-lg w-96 relative"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-lg font-semibold mb-4">Change Password</h3>
          {message && <p className="text-green-500">{message}</p>}
          {error && <p className="text-red-500">{error}</p>}
          <form onSubmit={handleChangePassword} className="flex flex-col gap-3">
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
            <button
              onClick={() => setShowChangePassword(false)}
              className="p-2 border rounded"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    )} */}

  

  
  <main className="max-w-[1440px] w-full mx-auto flex-grow">
    <div className="m-4 bg-white shadow-md border rounded-xl">
          
            <h1 className="text-base font-semibold text-gray-900 m-4">
              Dashboard Overview
            </h1>
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-2 m-3">
              <div className="bg-[var(--box-color)] p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <Users className="text-[var(--icon-color)]" size={20} />
                  <h3 className="text-sm font-medium text-center text-gray-500 pl-2 pr-2">
                  Total Partners
                  </h3>
                </div>
                <p className="text-lg font-medium text-center text-gray-900">
                  {mockData.totalPartners}
                </p>
              </div>
              <div className="bg-[var(--box-color)] p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <UserCheck className="text-[var(--icon-color)]" size={22} />
                  <h3 className="text-sm font-medium text-center  text-gray-500">
                  Active Partners
                  </h3>
                </div>
                <p className="text-lg font-medium text-center text-gray-900">
                  {mockData.activePartners}
                </p>
              </div>
              <div className="bg-[var(--box-color)] p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <RefreshCw className="text-[var(--icon-color)]" size={20} />
                  <h3 className="text-sm font-medium text-center text-gray-500">
                  Total Referrals
                  </h3>
                </div>
                <p className="text-lg font-medium text-center text-gray-900">
                  {mockData.totalReferrals}
                </p>
              </div>
              <div className="bg-[var(--box-color)] p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="text-[var(--icon-color)]" size={20} />
                  <h3 className="text-sm font-medium text-center text-gray-500  pl-2 pr-2">
                  Total Upgrades
                  </h3>
                </div>
                <p className="text-lg font-medium text-center text-gray-900">
                  ₹{mockData.totalUpgrades}
                </p>
              </div>
              <div className="bg-[var(--box-color)] p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <Wallet className="text-[var(--icon-color)]" size={20} />
                  <h3 className="text-sm font-medium text-center text-gray-500 pl-1">
                  Pending Payouts
                  </h3>
                </div>
                <p className="text-lg font-medium text-center text-gray-900">
                  ₹{mockData.pendingPayouts}
                </p>
              </div>
              <div className="bg-[var(--box-color)] p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <CheckCircle className="text-[var(--icon-color)]" size={20} />
                  <h3 className="text-sm font-medium text-center text-gray-500 pl-1 pr-2">
                  Approved Payouts
                  </h3>
                </div>
                <p className="text-lg font-medium text-center text-gray-900">
                  {mockData.approvedPayouts}
                </p>
              </div>
            </div>
        </div>

        <div className="space-y-6 m-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Payout Management</h1>
      </div>

      <div className="bg-white rounded-xl shadow">
        {/* Search Bar */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <div className="flex space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search payouts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg bg-gray-50"
              />
            </div>
            <button className="flex items-center space-x-1 px-3 py-2 border border-gray-200 rounded-lg">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">Partner</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">Amount</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">Status</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">Bank Account</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">Reference</th>
                <th className="px-6 py-3 text-sm font-semibold text-gray-600">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredPayouts.length > 0 ? (
                filteredPayouts.map((payout) => {
                  const StatusIcon = statusIcons[payout.status as keyof typeof statusIcons];
                  return (
                    <tr key={payout.id} className="border-t border-gray-200">
                      <td className="px-6 py-4 font-medium">{payout.partnerName}</td>
                      <td className="px-6 py-4">{payout.amount.toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${
                            statusColors[payout.status as keyof typeof statusColors]
                          }`}
                        >
                          <StatusIcon className="w-4 h-4" />
                          <span>{payout.status}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4">{payout.bankAccount}</td>
                      <td className="px-6 py-4">{payout.reference}</td>
                      <td className="px-6 py-4">{payout.date}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={6} className="text-center py-4 text-gray-500">
                    No results found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
  </main>
</div>

  );
};

export default AdminDashboard;