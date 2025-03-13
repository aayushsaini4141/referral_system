import React from "react";

const TermsConditionsPage = () => {
  return (
    <div className="max-w-[1250px] mx-auto p-6 text-gray-800">
      <h1 className="text-lg font-bold text-center mb-6">
        Partner Program – Terms
      </h1>
      <p className="mb-4  text-base font-semibold">Effective Date: March 01, 2025</p>
      <p className="mb-4 text-sm">
        These Terms & Conditions (&quot;Agreement&quot;) govern participation in the
        Ooulet Partner Program (&quot;Program&quot;). By enrolling in the Program, you
        (&quot;Partner&quot;) agree to comply with the terms outlined herein.
      </p>

      <ol className="list-decimal mt-6 ml-12">
        <li className=" text-base font-semibold mt-6 mb-4">Eligibility</li>
        <ul className="list-[lower-alpha]  list-inside text-sm ">
          <li>
            The Program is open to individuals and businesses legally residing
            in India.
          </li>
          <li>Partners must be at least 18 years of age.</li>
          <li>
            Ooulet Technologies Private Limited (&quot;Company&quot;) reserves the right
            to approve or reject any Partner application at its sole discretion.
          </li>
        </ul>

        <li className=" text-base font-semibold mt-6 mb-4">Partner Responsibilities</li>
        <ul className="list-[lower-alpha]   list-inside text-sm ">
          <li>
            Partners shall promote and refer businesses to Ooulet in a lawful
            and ethical manner.
          </li>
          <li>
            Misleading advertising, spamming, or false representations about
            Ooulet are strictly prohibited.
          </li>
          <li>
            Partners shall not impersonate Ooulet or act as an official
            representative.
          </li>
        </ul>

        <li className=" text-base font-semibold mt-6 mb-4">Commission Structure</li>
        <ul className="list-[lower-alpha]   list-inside text-sm">
          <li className="mb-4">
            Partners will earn a commission based on successful plan upgrades,
            as follows:
          </li>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm text-center">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 py-2">Badge</th>
                  <th className="border border-gray-300 py-2">Upgrades</th>
                  <th className="border border-gray-300 py-2">
                    Commission
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 py-2">No Badge</td>
                  <td className="border border-gray-300 py-2">0</td>
                  <td className="border border-gray-300 py-2">0%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 py-2">Bronze</td>
                  <td className="border border-gray-300 py-2">1-10</td>
                  <td className="border border-gray-300 py-2">10%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 py-2">Silver</td>
                  <td className="border border-gray-300 py-2">11-25</td>
                  <td className="border border-gray-300 py-2">12%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 py-2">Gold</td>
                  <td className="border border-gray-300 py-2">26-50</td>
                  <td className="border border-gray-300 py-2">15%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 py-2">Platinum</td>
                  <td className="border border-gray-300 py-2">51-100</td>
                  <td className="border border-gray-300 py-2">18%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 py-2">Diamond</td>
                  <td className="border border-gray-300 py-2">100+</td>
                  <td className="border border-gray-300 py-2">20%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <li className="mt-4">
            Upgrades are counted weekly (Monday-Sunday), and only confirmed
            upgrades will be considered
          </li>
          <li>
            Canceled or refunded transactions will not be eligible for
            commissions.
          </li>
        </ul>

        <li className=" text-base font-semibold mt-6 mb-4">Payout Terms</li>
        <ul className="list-[lower-alpha]   list-inside text-sm ">
          <li>
            Commissions will be paid weekly on Mondays via bank transfer only.
          </li>
          <li>
            No payments will be made via UPI, GPay, Paytm, or other wallet
            services.
          </li>
          <li>
            Partners must provide valid bank account details to receive payouts.
          </li>
          <li>
            The Company reserves the right to withhold payouts if fraudulent
            activity is suspected.
          </li>
        </ul>

        <li className=" text-base font-semibold mt-6 mb-4">Badge & Reward System</li>
        <ul className="list-[lower-alpha]   list-inside text-sm ">
          <li> Partners will receive badges based on their performance:</li>

          <ul className="list-disc pl-12">
            <li>
              <strong>Bronze:</strong> 1-10 Upgrades.
            </li>
            <li>
              <strong>Silver:</strong> 11-25 Upgrades.
            </li>
            <li>
              <strong>Gold:</strong> 26-50 Upgrades.
            </li>
            <li>
              <strong>Platinum:</strong> 51-100 Upgrades.
            </li>
            <li>
              <strong>Diamond:</strong> 100+ Upgrades.
            </li>
          </ul>
          <li>
            The Company may introduce additional rewards or performance-based
            incentives at its discretion.
          </li>
        </ul>

        <li className=" text-base font-semibold mt-6 mb-4">
          Partner Conduct & Compliance
        </li>
        <ul className="list-[lower-alpha]   list-inside text-sm">
          <li>
            Partners must comply with all applicable Indian laws, including
            taxation and financial regulations.
          </li>
          <li>
            The Company may terminate a Partner’s account for unethical
            practices, fraud, or policy violations.
          </li>
          <li>
            Partners shall not engage in self-referrals or any fraudulent
            activities to earn commissions.
          </li>
        </ul>

        <li className=" text-base font-semibold mt-6 mb-4">
          Program Modification & Termination
        </li>
        <ul className="list-[lower-alpha]   list-inside text-sm ">
          <li>
            The Company reserves the right to modify, suspend, or terminate the
            Program at any time.
          </li>
          <li>
            {" "}
            In the event of termination, any pending commissions will be paid as
            per the payout schedule.
          </li>
        </ul>

        <li className=" text-base font-semibold mt-6 mb-4">Limitation of Liability</li>
        <ul className="list-[lower-alpha]   list-inside text-sm ">
          <li>
            The Company is not responsible for any losses, damages, or missed
            payouts due to incorrect bank details provided by the Partner.
          </li>
          <li>
            The Partner agrees to indemnify and hold Ooulet Technologies Private
            Limited harmless against any claims arising from participation in
            the Program.
          </li>
        </ul>

        <li className=" text-base font-semibold mt-6 mb-4">
          Governing Law & Dispute Resolution
        </li>
        <ul className="list-[lower-alpha]   list-inside text-sm">
          <li>This Agreement shall be governed by the laws of India</li>
          <li>
            Any disputes arising from this Agreement shall be resolved through
            arbitration in Roorkee, Haridwar, India, in accordance with the
            Arbitration and Conciliation Act, 1996.
          </li>
        </ul>

        <li className=" text-base font-semibold mt-6 mb-4">Contact Information</li>
        <ul className="text-sm ">
          <li className="mb-4">
            If you have any questions or concerns about this Ooulet Partner
            Program - Terms & Conditions, you can contact us at:{" "}
            <span className="font-semibold">support@ooulet.com</span>
          </li>
          <li>
            By enrolling in the Program, you acknowledge that you have read,
            understood, and agreed to these Terms & Conditions.
          </li>
        </ul>
      </ol>
    </div>
  );
};

export default TermsConditionsPage;
