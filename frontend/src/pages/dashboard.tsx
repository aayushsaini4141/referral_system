import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import "@/styles/globals.css";
import {
  Menu,
  Bell,
  X,
  Home,
  User,
  BarChart,
  Medal,
  Trophy,
  Share2,
  Users,
  IndianRupee,
  Wallet,
  Hourglass,
  CircleCheckBigIcon,
  FileQuestion,
  FileSignature,
  FileTerminal,
  EarthLockIcon,
} from "lucide-react";

const mockData = {
  user: {
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=facearea&facepad=2&q=80",
    badge: "Silver",
    totalReferrals: 75,
    totalUpgrades: 50,
    pendingReferrals: 25,
    totalEarnings: 34500.55,
    unpaidPayouts: 1200,
    // currentCommission: "10%",

    // email: "john@example.com",
  },
  recentReferrals: [
    {
      name: "Alice Store",
      date: "21 Feb 2025, 11.50 AM",
      status: "Successfull",
      Plan: "Startup (Y)",
      amount: 2999,
      comission: 300,
    },
    {
      name: "Bob Shop",
      date: "21 Feb 2025, 11.50 AM",
      status: "Pending",
      Plan: "Free",
      amount: 0.00,
      comission: 0.00,
    },
    {
      name: "Carol Boutique",
      date: "21 Feb 2025, 11.50 AM",
      status: "Successfull",
      Plan: "Startup (Y)",
      amount: 2999,
      comission: 300,
    },
    {
      name: "David Mart",
      date: "21 Feb 2025, 11.50 AM",
      status: "Pending",
      Plan: "Free",
      amount: 0.00,
      comission: 0.00,
    },
    {
      name: "Ayush",
      date: "21 Feb 2025, 11.50 AM",
      status: "Successfull",
      Plan: "Startup (Y)",
      amount: 2999,
      comission: 300,
    },
  ],
};

const GET_USER_DATA = gql`
  query GetUserByName($name: String!) {
    referralByName(name: $name) {
      name
      referralLink
      # Add other fields you need
    }
  }
`;

const DashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: "Alex", // Default fallback value
    referralLink: "https://ooulet.com/ref/johndoe", // Default fallback value
  });

  // Update to use the name parameter
  const { loading, data } = useQuery(GET_USER_DATA, {
    variables: { name: userData.name }, // Use the current user's name to fetch their data
    fetchPolicy: "network-only",
    onError: (error) => {
      console.error("GraphQL error:", error);
      // Keep using default values if there's an error
    },
  });

  useEffect(() => {
    if (data && data.referralByName) {
      setUserData({
        name: data.referralByName.name || userData.name,
        referralLink: data.referralByName.referralLink || userData.referralLink,
      });
    }
  }, [data, userData.name, userData.referralLink]);

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
        href="referrals"
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
      >
        <BarChart className="h-5 w-5 mr-3" />
        Refferals
      </a>
      <a
        href="payouts"
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
      >
        <CircleCheckBigIcon className="h-5 w-5 mr-3" />
        Payouts
      </a>
      <a
        href="profile"
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
      >
        <User className="h-5 w-5 mr-3" />
        Profile
      </a>
      <a
        href="faq"
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
      >
        <FileQuestion className="h-5 w-5 mr-3" />
        FAQs
      </a>
      <a
        href="agreement"
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
      >
        <FileSignature className="h-5 w-5 mr-3" />
        Agreement
      </a>
      <a
        href="terms"
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
      >
        <FileTerminal className="h-5 w-5 mr-3" />
        Terms
      </a>
      <a
        href="policy"
        className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
      >
        <EarthLockIcon className="h-5 w-5 mr-3" />
        Payout Policy
      </a>
    </nav>
  );

  return (
    <div className="min-h-screen bg-gray-50">
     

<header className="w-full bg-[var(--icon-color)] border-b border-gray-200 px-4 py-3 fixed top-0 left-0 right-0 z-10">
  <div className="flex items-center justify-between">
  
    <button
      className="lg:hidden p-2 rounded-lg"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      {isMobileMenuOpen ? (
        <X className="h-6 w-6 text-gray-600" />
      ) : (
        <Menu className="h-6 w-6 text-white" />
      )}
    </button>

    <div className="hidden">
      <img src="/6.png" className="h-9 w-9 rounded-full" alt="Profile" />
      <span className="hidden md:inline text-sm font-medium text-white">
        {loading ? "Loading..." : userData.name}
      </span>
    </div>

    {/* Notifications Button */}
    <div className="flex items-center space-x-4">
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <Bell className="h-6 w-6 text-white" />
      </button>
    </div>
  </div>
</header>

{/* Sidebar for larger screens */}
<aside className="hidden lg:block fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-gray-200 pt-20">
  <div className="p-4">
    <NavLinks />
  </div>
</aside>

{/* Mobile Menu */}
{isMobileMenuOpen && (
  <div className="lg:hidden fixed inset-0 z-50">
    {/* Background Overlay (Click to Close) */}
    <div
      className="fixed inset-0 bg-gray-800/50"
      onClick={() => setIsMobileMenuOpen(false)}
    />

    {/* Sidebar Menu */}
    <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
      {/* Close Button (Fixed) */}
      <div className="flex justify-end p-4">
        <button
          className="p-2 rounded-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="p-4">
        <NavLinks />
      </div>
    </div>
  </div>
)}

      <main className="lg:ml-64 pt-16 min-h-screen">
        <div className="bg-white p-3 rounded-xl shadow-md border  m-4 ">
          <h2 className="text-base font-semibold text-gray-900 mb-4">
            Your Unique Referral Link
          </h2>
          <div className="flex text-gray-600 sm:flex-row sm:items-center gap-2">
            <input
              type="text-xs text-gray-900"
              value={loading ? "Loading..." : userData.referralLink}
              readOnly
              className="flex-1 p-2 bg-gray-50 rounded border w-10/12"
            />
            <div className="flex gap-4 w-auto">
              <button className="flex items-center justify-center gap-2 bg-[var(--icon-color)] text-white md:px-4 px-3 py-2 rounded-lg w-full text-sm ">
                <Share2 size={12} />
                Share
              </button>
            </div>
          </div>
        </div>

        <div className="m-4 bg-white shadow-md border rounded-xl">
          
            <h1 className="text-base font-semibold text-gray-900 m-4">
              Dashboard Overview
            </h1>
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-2 m-3">
              <div className="bg-[var(--box-color)] p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <Users className="text-[var(--icon-color)]" size={20} />
                  <h3 className="text-sm font-medium text-center text-gray-500 pl-2 pr-2">
                    Total Referrals
                  </h3>
                </div>
                <p className="text-lg font-medium text-center text-gray-900">
                  {mockData.user.totalReferrals}
                </p>
              </div>
              <div className="bg-[var(--box-color)] p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <Trophy className="text-[var(--icon-color)]" size={22} />
                  <h3 className="text-sm font-medium text-center  text-gray-500">
                    Successfull Referrals
                  </h3>
                </div>
                <p className="text-lg font-medium text-center text-gray-900">
                  {mockData.user.totalUpgrades}
                </p>
              </div>
              <div className="bg-[var(--box-color)] p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <Hourglass className="text-[var(--icon-color)]" size={20} />
                  <h3 className="text-sm font-medium text-center text-gray-500">
                    Pending Referrals
                  </h3>
                </div>
                <p className="text-lg font-medium text-center text-gray-900">
                  {mockData.user.pendingReferrals}
                </p>
              </div>
              <div className="bg-[var(--box-color)] p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <IndianRupee className="text-[var(--icon-color)]" size={20} />
                  <h3 className="text-sm font-medium text-center text-gray-500  pl-2 pr-2">
                    Total Earnings
                  </h3>
                </div>
                <p className="text-lg font-medium text-center text-gray-900">
                  ₹{mockData.user.totalEarnings}
                </p>
              </div>
              <div className="bg-[var(--box-color)] p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <Wallet className="text-[var(--icon-color)]" size={20} />
                  <h3 className="text-sm font-medium text-center text-gray-500 pl-1">
                    Unpaid Payouts
                  </h3>
                </div>
                <p className="text-lg font-medium text-center text-gray-900">
                  ₹{mockData.user.unpaidPayouts}
                </p>
              </div>
              <div className="bg-[var(--box-color)] p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <Medal className="text-[var(--icon-color)]" size={20} />
                  <h3 className="text-sm font-medium text-center text-gray-500 pl-1 pr-2">
                    Current Badge
                  </h3>
                </div>
                <p className="text-lg font-medium text-center text-gray-900">
                  {mockData.user.badge}
                </p>
              </div>
            </div>
        </div>
      
       
      </main>
    </div>
  );
};

export default DashboardLayout;