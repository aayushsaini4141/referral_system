import React from "react";

interface Payout {
  date: string;
  amount: number;
  status: "Pending" | "Hold" | "Successful";
}

const payouts: Payout[] = [
  { date: "10-03-25", amount: 250, status: "Pending" },
  { date: "03-03-25", amount: 200, status: "Successful" },
  { date: "26-02-25", amount: 180, status: "Hold" },
  { date: "19-02-25", amount: 150, status: "Successful" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-800";
    case "Hold":
      return "bg-red-100 text-red-800";
    case "Successful":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const Payouts: React.FC = () => {
  const latestPayout = payouts[0];

  return (
    <>
      {/* Payout Overview */}
      <div className="m-4 bg-white shadow-md border rounded-xl p-4">
        <h1 className="text-base font-semibold text-gray-900 mb-4">Payout Overview</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <div className="text-sm text-black font-medium">Recent Payout</div>
            <div className="text-lg font-semibold">₹{latestPayout.amount.toFixed(2)}</div>
            <div className="text-xs font-medium text-black pt-2">Payout On</div>
            <div className="text-xs font-medium text-black">{latestPayout.date}</div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow">
            <div className="text-sm text-black font-medium">Next Payout</div>
            <div className="text-lg font-semibold">₹{latestPayout.amount.toFixed(2)}</div>
            <div className="text-xs font-medium text-black pt-2">Payout On</div>
            <div className="text-xs font-medium text-black">{latestPayout.date}</div>
          </div>
        </div>
      </div>

      {/* Payout History */}
      <div className="m-4 pb-4 bg-white border shadow-md rounded-xl">
      <h1 className="text-base font-semibold border-b border-gray-100 text-gray-900 mb-4 px-4 py-4">Payout History</h1>
        <div className="space-y-4">
          {payouts.map((payout, index) => (
            <div key={index} className="flex justify-between items-center p-2 border-b">
              {/* Left Side */}
              <div>
                <div className="text-xs text-gray-500">Amount</div>
                <div className="text-sm font-medium text-gray-700 pt-1">₹{payout.amount.toFixed(2)}</div>

                {/* <div className="text-xs text-gray-500 mt-2">Date</div> */}
                <div className="text-sm font-medium text-gray-700 pt-3">{payout.date}</div>
              </div>

              {/* Right Side */}
              <div className={`px-2 py-1 text-xs font-semibold rounded-md ${getStatusColor(payout.status)}`}>
                {payout.status}
              </div>
            </div>

          ))}        </div>
      </div>
    </>
  );
};

export default Payouts;
