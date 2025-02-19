import { useState } from "react";
import { useRouter } from "next/router";

const Terms = () => {
  const [accepted, setAccepted] = useState(false);
  const router = useRouter();

  const handleAccept = () => {
    if (accepted) {
      router.push("/dashboard"); // Redirect to dashboard
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-center">Terms & Conditions</h2>
      <p className="mt-4 text-gray-600 text-sm">
        By using this system, you agree to the following terms and conditions...
      </p>

      <div className="flex items-center mt-4">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => setAccepted(e.target.checked)}
          className="w-5 h-5"
        />
        <label className="ml-2 text-sm">I accept the terms and conditions</label>
      </div>

      <button
        onClick={handleAccept}
        disabled={!accepted}
        className={`w-full mt-4 py-2 rounded-md ${
          accepted ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-gray-300 text-gray-600"
        }`}
      >
        Accept & Continue
      </button>
    </div>
  );
};

export default Terms;
