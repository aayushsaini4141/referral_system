import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import "@/styles/globals.css";
import {
  Menu,
  Bell,
  X,
  Home,
  User,
  Settings,
  BarChart,
  Medal,
  Trophy,
  Share2,
  Users,
  IndianRupee,
  Filter,
  Wallet,
  Hourglass,
  ChevronDownIcon,
} from "lucide-react";

// Define the exact query structure to match your backend schema
// This is likely where your 400 error is coming from
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
  const [filter, setFilter] = useState("All");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [tempFilter, setTempFilter] = useState("All");
  const [userData, setUserData] = useState({
    name: "Asus ROG", // Default fallback value
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

  const applyFilter = () => {
    setFilter(tempFilter);
    setIsFilterOpen(false);
  };

  // Mock data for everything except name and referral link
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
        status: "Pennding",
        Plan: "Startup (Y)",
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
      {/* {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
          <p>Error fetching user data. Using default values instead.</p>
        </div>
      )} */}

      <header className="w-full bg-[var(--icon-color)] border-b border-gray-200 px-4 py-3 fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center justify-between">
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
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

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bell className="h-6 w-6 text-white" />
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
          <X className="h-6 w-6 text-gray-600" />

            <div className="p-4 pt-10">
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
          <div className="">
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
        </div>
        <div className="px-4 mb-4 flex flex-row justify-between items-center">
        <button
            onClick={() => {
              setIsFilterOpen(true);
              setTempFilter(filter);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-[var(--icon-color)] text-white text-sm rounded-lg transition-colors"
          >
            <div>
            <p className="text-left">Today</p>
            <p className="text-xs">22 Feb 2025</p>
            </div>
            <ChevronDownIcon size={20} />
            {filter !== "All" && (
              <span className="text-sm bg-[var(--icon-color)] px-2 py-0.5 rounded-full">
                {filter}
              </span>
            )}
          </button>
          <button
            onClick={() => {
              setIsFilterOpen(true);
              setTempFilter(filter);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-[var(--icon-color)] text-white text-sm rounded-lg transition-colors"
          >
            <Filter size={20} />
            Filter
            {filter !== "All" && (
              <span className="text-sm bg-[var(--icon-color)] px-2 py-0.5 rounded-full">
                {filter}
              </span>
            )}
          </button>
          
          
        </div>
        <div className="m-4 pb-4 bg-white border shadow-md rounded-xl">
          <h2 className="text-base font-semibold border-b border-gray-100 text-gray-900 mb-4 px-4 py-4">
            Referrals
          </h2>
          {filteredReferrals.map((referral, index) => (
            <div key={index}>
         <div className="border-b border-gray-100 pb-4 mb-4 px-4">
  <div className="flex justify-between items-start">
    {/* Left Side */}
    <div>
      <div className="text-xs text-gray-500">Store Name</div>
      <div className="text-sm font-medium text-gray-700">{referral.name}</div>

      <div className="text-xs text-gray-500 mt-2">Plan</div>
      <div className="text-sm font-medium text-gray-700">{referral.Plan}</div>
      {/* Date aligned to the left */}
      <div className="text-xs text-gray-500 mt-2 pt-2">{referral.date}</div>
    </div>

    {/* Right Side */}
    <div className="text-right">
      <div className="text-xs text-gray-500">Commission</div>
      <div className="text-sm font-medium text-gray-700">₹{referral.comission}</div>

      <div className="text-xs text-gray-500 mt-2">Price</div>
      <div className="text-sm font-medium text-gray-700">₹{referral.amount}</div>

      <div className=" mt-2"></div>
      <span
        className={`px-2 py-1 text-xs font-semibold rounded-md ${
          referral.status === "Successfull"
            ? "bg-green-100 text-green-800"
            :"bg-yellow-100 text-yellow-800"
        }`}
      >
        {referral.status}
      </span>
    </div>
  </div>
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
                        {
                          mockData.recentReferrals.filter(
                            (r) => r.status === "Upgraded"
                          ).length
                        }{" "}
                        referrals
                      </div>
                    </button>

                    <button
                      className={`p-4 rounded-lg border-2 transition-all ${
                        tempFilter === "Unpaid"
                          ? "border-yellow-500 bg-yellow-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setTempFilter("Pending")}
                    >
                      <span className="text-sm font-medium">Pending</span>
                      <div className="text-xs text-gray-500 mt-1">
                        {
                          mockData.recentReferrals.filter(
                            (r) => r.status === "Pending"
                          ).length
                        }{" "}
                        referrals
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
                      className="flex-1 py-2 px-4 bg-[var(--icon-color)] text-white rounded-lg"
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
