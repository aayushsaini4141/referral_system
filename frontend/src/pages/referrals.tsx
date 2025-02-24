import { ChevronDownIcon, Filter, X } from "lucide-react";
import React,{useState} from "react";
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
const Referrals=()=> {
  const [filter, setFilter] = useState("All");
const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [tempFilter, setTempFilter] = useState("All");

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
  const applyFilter = () => {
    setFilter(tempFilter);
    setIsFilterOpen(false);
  };
    return (
      <>
       <div className="px-4 mb-4 flex flex-row justify-between items-center mt-4">
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
            : 
            "bg-yellow-100 text-yellow-800"
            
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
      </>
    );
  }
export default Referrals;
  