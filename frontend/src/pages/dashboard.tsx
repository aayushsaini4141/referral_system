import React, { useState } from "react";
// import { Menu, Bell, X, Home, User, Settings, BarChart } from 'lucide-react';
import {
  Menu,
  Bell,
  X,
  Home,
  User,
  Settings,
  BarChart,
  DollarSign,
  Copy,
  Medal,
  // TrendingUp,
  Trophy,
  Share2,
  Users,
  Filter,
} from "lucide-react";
const DashboardLayout = () => {
  const [filter, setFilter] = useState("All"); // State for filter selection
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [tempFilter, setTempFilter] = useState("All"); // Tem

  const applyFilter = () => {
    setFilter(tempFilter);
    setIsFilterOpen(false);
  };

  const mockData = {
    user: {
      name: "John Doe",
      email: "john@example.com",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=facearea&facepad=2&q=80",
      badge: "🥈 Silver Partner",
      totalReferrals: 23,
      totalEarnings: 34500,
      currentCommission: "10%",
      referralLink: "https://ooulet.com/ref/johndoe",
      totalUpgrades: 8,
    },
    recentReferrals: [
      {
        name: "Alice Store",
        date: "2024-03-15",
        status: "Upgraded",
        Plan: "startup(Y)",
        amount: 2999,
        comission:300,
      },
      {
        name: "Bob Shop",
        date: "2024-03-14",
        status: "Pending",
        Plan: "startup(Y)",
        amount: 2999,
        comission:300,
      },
      {
        name: "Carol Boutique",
        date: "2024-03-13",
        status: "Upgraded",
        Plan: "startup(Y)",
        amount: 2999,
        comission:300,
      },
      {
        name: "David Mart",
        date: "2024-03-12",
        status: "Upgraded",
        Plan: "startup(Y)",
        amount: 2999,
        comission:300,
      },
    ],
  };
  
  const filteredReferrals = mockData.recentReferrals.filter((referral) => {
    switch (filter) {
      case "Successful":
        return referral.status === "Upgraded";
      case "Pending":
        return referral.status === "Pending";
      default:
        return true;
    }
  });


  const NavLinks = () => (
    <nav className="space-y-2">
      <a
        href="#"
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
      >
        <Home className="h-5 w-5 mr-3" />
        Dashboard
      </a>
      <a
        href="#"
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
      >
        <BarChart className="h-5 w-5 mr-3" />
        Analytics
      </a>
      <a
        href="#"
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
      >
        <User className="h-5 w-5 mr-3" />
        Profile
      </a>
      <a
        href="#"
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
      >
        <Settings className="h-5 w-5 mr-3" />
        Settings
      </a>
    </nav>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="w-full bg-white border-b border-gray-200 px-4 py-3 fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center justify-between">
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>

          <div className="flex items-center space-x-3">
            <img src="/6.png" className="h-9 w-9 rounded-full" alt="Name" />
            <span className="hidden md:inline text-sm font-medium text-gray-700">
              John Doe
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bell className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </header>
      <aside className="hidden lg:block fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-gray-200 pt-20">
        <div className="p-4">
          <NavLinks />
        </div>
      </aside>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-gray-800/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
            <div className="p-4 pt-20">
              <NavLinks />
            </div>
          </div>
        </div>
      )}

      <main className="lg:ml-64 pt-16 min-h-screen">
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Dashboard</h1>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-500">
                    Total Referrals
                  </h3>
                  <Users className="text-purple-600" size={20} />
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  {mockData.user.totalReferrals}
                </p>
                {/* <div className="mt-2 flex items-center text-sm text-green-600">
                  <TrendingUp size={16} className="mr-1" />
                  <span>12% increase</span>
                </div> */}
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-500">
                    Total Earnings
                  </h3>
                  <DollarSign className="text-purple-600" size={20} />
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  ₹{mockData.user.totalEarnings}
                </p>
                {/* <div className="mt-2 flex items-center text-sm text-green-600">
                  <TrendingUp size={16} className="mr-1" />
                  <span>8% increase</span>
                </div> */}
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-500">
                    Current Badge
                  </h3>
                  <Medal className="text-purple-600" size={20} />
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  {mockData.user.badge}
                </p>
                {/* <p className="mt-2 text-sm text-gray-500">2 upgrades to Gold</p> */}
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-500">
                    Total Upgrades
                  </h3>
                  <Trophy className="text-purple-600" size={20} />
                </div>
                <p className="text-2xl font-bold text-gray-900">
                  {mockData.user.totalUpgrades}
                </p>
                {/* <p className="mt-2 text-sm text-gray-500">Top 10%</p> */}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Your Referral Link
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <input
                type="text"
                value={mockData.user.referralLink}
                readOnly
                className="flex-1 p-2 bg-gray-50 rounded border"
              />
              <div className="flex flex-row gap-4 w-full sm:w-auto">
                <button className="flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 w-full sm:w-auto">
                  <Copy size={16} />
                  Copy
                </button>
                <button className="flex items-center justify-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 w-full sm:w-auto">
                  <Share2 size={16} />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 mb-4">
            <button
              onClick={() => {
                setIsFilterOpen(true);
                setTempFilter(filter); // Initialize temp filter with current filter
              }}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Filter size={16} />
              Filter
              {filter !== "All" && (
                <span className="text-sm bg-purple-500 px-2 py-0.5 rounded-full">
                  {filter}
                </span>
              )}
            </button>
          </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4 px-4 border-b">
            Recent Referrals
          </h2>
          {filteredReferrals.map((referral, index) => (
            <div key={index}>
              <div className="border-b border-border pb-4 mb-4 px-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-500">
                      Store Name{" "}
                      <div className="text-base font-medium text-gray-700">
                        {" "}
                        {referral.name}
                      </div>
                    </p>
                    <p className="text-xs text-gray-500">
                      Plan{" "}
                      <div className="text-base font-medium text-gray-700">
                        {referral.Plan}
                      </div>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-700 px-2">
                    ₹{referral.amount}
                    </p>
                    <span
                      className={`px-2 text-xs font-semibold rounded-full ${
                        referral.status === "Upgraded"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {referral.status}
                    </span>
                    <p className="text-base font-bold text-gray-700 px-2">comission
                    ₹{referral.comission}
                    </p>

                  </div>
                  
                </div>
                <p className="text-xs text-muted-foreground whitespace-nowrap text-gray-500">
                  {referral.date}
                </p>
               
              </div>
            </div>
            ))}
             {isFilterOpen && (
          <>
            {/* Overlay */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsFilterOpen(false)}
            />
            
            {/* Filter Panel */}
            <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 z-50 transform transition-transform duration-300 ease-out shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Filter Referrals</h3>
                <button 
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <button
                    className={`p-4 rounded-lg border-2 transition-all ${
                      tempFilter === "Successful"
                        ? "border-green-600 bg-green-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setTempFilter("Successful")}
                  >
                    <span className="text-sm font-medium">Successful</span>
                    <div className="text-xs text-gray-500 mt-1">
                      {mockData.recentReferrals.filter(r => r.status === "Upgraded").length} referrals
                    </div>
                  </button>
                  
                  <button
                    className={`p-4 rounded-lg border-2 transition-all ${
                      tempFilter === "Pending"
                        ? "border-yellow-500 bg-yellow-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setTempFilter("Pending")}
                  >
                    <span className="text-sm font-medium">Pending</span>
                    <div className="text-xs text-gray-500 mt-1">
                      {mockData.recentReferrals.filter(r => r.status === "Pending").length} referrals
                    </div>
                  </button>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => {
                      setTempFilter("All");
                      setFilter("All");
                      setIsFilterOpen(false);
                    }}
                    className="flex-1 py-2 px-4 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50"
                  >
                    Clear
                  </button>
                  <button
                    onClick={applyFilter}
                    className="flex-1 py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
