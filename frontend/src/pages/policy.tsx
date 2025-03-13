import React from "react";

const PolicyPage = () => {
  return (
    <div className="max-w-[1250px] mx-auto p-6 text-gray-800">
      <h1 className="text-lg font-bold text-center mb-6">
        Partner Program Payout Policy
      </h1>
      <p className="mb-4 font-semibold  text-base">Effective Date: March 01, 2025</p>
      <p className="mb-4 text-sm">
        This Payout Policy (&quot;Policy&quot;) governs the payment terms for Partners
        participating in the Ooulet Partner Program (&quot;Program&quot;). By enrolling in
        the Program, the Partner agrees to comply with this Policy in
        conjunction with the Ooulet Partner Agreement.
      </p>
      <ol className="list-decimal mt-6 ml-12">
        <li className=" text-base font-semibold mt-6 mb-4">
          Eligibility for Payouts
        </li>
        <ul className="list-[lower-alpha] list-inside text-sm">
          <li>
            The Partner shall be eligible for payouts only for successful and
            confirmed plan upgrades.
          </li>
          <li>
            Upgrades that are canceled, refunded, or disputed shall not qualify
            for payouts.
          </li>
          <li>
            Pending referrals that have not yet been confirmed shall not be
            counted as successful upgrades.
          </li>
        </ul>
        <li className=" text-base font-semibold mt-6 mb-4">
          Payout Structure & Commission
        </li>
        <ul className="list-[lower-alpha] list-inside text-sm">
          <li>
            The Partner shall receive commissions based on the following tiered
            structure:
          </li>
          <div className="overflow-x-auto my-4">
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
          <li>
            The commission percentage applies progressively based on the number
            of upgrades in a given month.
          </li>
          <li>
            The commission is calculated based on the total value of the
            subscription plan purchased by the referred user.
          </li>
        </ul>

        <li className=" text-base font-semibold mt-6 mb-4">Payout Schedule</li>
        <ul className="list-[lower-alpha] list-inside text-sm">
          <li>
            Payouts shall be processed on a weekly basis for upgrades completed
            the previous week.
          </li>
          <li>
            Payouts shall be released every Monday, excluding public and bank
            holidays.
          </li>
          <li>
            The Partner must ensure that their bank account details are accurate
            to avoid delays.
          </li>
        </ul>

        <li className=" text-base font-semibold mt-6 mb-4">Payout Method</li>
        <ul className="list-[lower-alpha] list-inside text-sm">
          <li>
            Payouts shall be processed on a weekly basis for upgrades completed
            between Monday to Sunday of the previous week.
          </li>
          <li>
            Payouts shall be processed exclusively via bank transfer to the
            Partner’s registered bank account.
          </li>
          <li>
            No payouts shall be made via UPI, Google Pay, Paytm, or any other
            digital wallets
          </li>
          <li>
            The Partner must provide valid bank account details to receive
            payouts, including:
            <ul className="list-disc list-inside text-sm ml-12">
              <li>Account Holder’s Name.</li>
              <li>Bank Name.</li>
              <li>Account Number.</li>
              <li>IFSC Code.</li>
            </ul>
          </li>
        </ul>

        <li className=" text-base font-semibold mt-6 mb-4">
          Tax Deductions & Compliance
        </li>
        <ul className="list-[lower-alpha] list-inside text-sm">
          <li>
            All payouts shall be subject to applicable tax deductions (if
            applicable) as per Indian tax laws.
          </li>
          <li>
            The Partner is responsible for complying with any tax obligations
            arising from their earnings under this Program.
          </li>
          <li>
            Ooulet reserves the right to deduct TDS (Tax Deducted at Source) as
            per the Income Tax Act, 1961, and provide a TDS certificate where
            applicable.
          </li>
        </ul>

        <li className=" text-base font-semibold mt-6 mb-4">
          Disputes & Withholding Of Payouts
        </li>
        <ul className="list-[lower-alpha] list-inside text-sm">
          <li>
            Ooulet reserves the right to withhold payouts in case of:
            <ul className="list-disc list-inside text-sm ml-12">
              <li>Suspected fraudulent activity.</li>
              <li>Misuse of the referral system.</li>
              <li>
                Chargebacks, disputes, or refund requests from referred users.
              </li>
            </ul>
          </li>
          <li>
            If a dispute arises regarding a payout, the Partner must notify
            Ooulet within 7 days of receiving the payout.
          </li>
          <li>
            Ooulet’s decision regarding payout disputes shall be final and
            binding.
          </li>
        </ul>

        <li className=" text-base font-semibold mt-6 mb-4">
          Modification Of Payout Policy
        </li>
        <ul className="list-[lower-alpha] list-inside text-sm">
          <li>
            Ooulet reserves the right to amend this Payout Policy at any time at
            its sole discretion.
          </li>
          <li>
            Any modifications shall be communicated via email or through the
            Ooulet Partner Dashboard
          </li>
        </ul>
      <li className=" text-base font-semibold mt-6 mb-4">Contact Information</li>
      <ul className=" list-inside text-sm">
      <li className="mb-2">
        For any payout-related queries, you can contact us at: {" "}
      <span className="font-semibold">support@ooulet.com</span>
      </li>
      <li>By participating in the Ooulet Partner Program, the Partner acknowledges and agrees
      to the terms set forth in this Payout Policy.</li>
      </ul>
      </ol>

    </div>
  );
};

export default PolicyPage;
