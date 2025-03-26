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
      status: 'Paid',
      date: '2024-03-15',
    },
    {
      id: '2',
      partnerName: 'DataPro Services',
      amount: 2800,
      status: 'Pending',
      date: '2024-03-14',
    },
    {
      id: '3',
      partnerName: 'Cloud Systems Inc',
      amount: 1200,
      status: 'Hold',
      date: '2024-03-13',
    }
  ];

  const statusColors = {
    Paid: 'bg-green-100 text-green-800',
    Pending: 'bg-yellow-100 text-yellow-800',
    Hold: 'bg-red-100 text-red-800'
  };
   
  const statusIcons = {
    Paid: CheckCircle,
    Pending: Clock,
    Hold: XCircle
  };

    const [searchTerm, setSearchTerm] = useState("");
  
    const filteredPayouts = mockPayouts.filter((payout) =>
      ["partnerName", "status"].some((key) =>

        payout[key as keyof typeof payout].toString().toLowerCase().includes(searchTerm.toLowerCase())) 

    );


  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
        <AdminHeader />
  
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