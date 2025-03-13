import React from "react";

const AgreementPage = () => {
  return (
    <div className="max-w-[1250px] mx-auto p-6 text-gray-800">
      <h1 className="text-lg font-bold text-center mb-6">
        Ooulet Partner Agreement
      </h1>
      <p className="mb-4 text-sm">
        This Partner Agreement (&quot;Agreement&quot;) is effective as of the date the
        Partner enrolls in the Ooulet Partner Program and is entered into by and
        between:
      </p>
      <p className="text-sm">
        <span className="mb-4 font-semibold">
          Ooulet Technologies Private Limited,{" "}
        </span>
        a company incorporated under the laws of India, having its registered
        office at Roorkee, India (&quot;Company&quot; or &quot;Ooulet&quot;), and{" "}
        <span className="mb-4 font-semibold">The Partner, </span> an individual
        or business entity applying for and participating in the Ooulet Partner
        Program (&quot;Partner&quot;).
      </p>

      <ol className="list-decimal mt-6 ml-12">
        <li className="  text-base font-semibold mb-4">Definitions</li>
        <ul className="list-[lower-alpha] list-inside text-sm">
          <li>&quot;Company&quot; Ooulet Technologies Private Limited.</li>
          <li>
            &quot;Partner&quot; An individual or entity participating in the
            Ooulet Partner Program.
          </li>
          <li>&quot;Program&quot; The Ooulet Partner Program.</li>
          <li>
            &quot;Referral&quot; A new user who signs up and upgrades a plan
            through the Partner’s referral link.
          </li>
          <li>
            &quot;Commission&quot; The monetary reward earned by the Partner for
            each successful upgrade.
          </li>
        </ul>

        <li className="  text-base font-semibold mt-6 mb-4">
          Agreement Acceptance
        </li>
        <ul className="list-[lower-alpha] list-inside text-sm">
          <li>
            By applying for the Program, the Partner agrees to comply with this
            Agreement.
          </li>
          <li>
            Ooulet reserves the right to accept or reject any Partner
            application at its discretion.
          </li>
        </ul>

        <li className="  text-base font-semibold mt-6 mb-4">
          Partner Responsibilities
        </li>
        <ul className="list-[lower-alpha] list-inside text-sm">
          <li>
            The Partner shall promote Ooulet in a lawful and ethical manner.
          </li>
          <li>
            The Partner shall not engage in:
            <ul className="list-disc ml-12">
              <li>False or misleading advertising.</li>
              <li>Spamming or unauthorized promotions.</li>
              <li>Any fraudulent or deceptive activities.</li>
            </ul>
          </li>
          <li>
            The Partner shall not use Ooulet’s trademarks, branding, or name
            without prior approval.
          </li>
        </ul>

        <li className="text-base font-semibold mt-6 mb-4">
          Commission Structure
        </li>
        <ul className="list-[lower-alpha] list-inside text-sm">
          <li className="mb-4">
            The Partner shall earn a commission based on successful plan
            upgrades as follows:
            <table className="text-sm w-full border-collapse border border-gray-300 mt-4  mr-2 text-center">
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
                  <td className="border border-gray-300  py-2">No Badge</td>
                  <td className="border border-gray-300  py-2">0</td>
                  <td className="border border-gray-300  py-2">0%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300  py-2">Bronze</td>
                  <td className="border border-gray-300  py-2">1-10</td>
                  <td className="border border-gray-300  py-2">10%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300  py-2">Silver</td>
                  <td className="border border-gray-300  py-2">11-25</td>
                  <td className="border border-gray-300  py-2">12%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300  py-2">Gold</td>
                  <td className="border border-gray-300  py-2">26-50</td>
                  <td className="border border-gray-300  py-2">15%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300  py-2">Platinum</td>
                  <td className="border border-gray-300  py-2">51-100</td>
                  <td className="border border-gray-300  py-2">18%</td>
                </tr>
                <tr>
                  <td className="border border-gray-300  py-2">Diamond</td>
                  <td className="border border-gray-300  py-2">100+</td>
                  <td className="border border-gray-300  py-2">20%</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            Canceled, refunded, or disputed transactions will not qualify for
            commissions.
          </li>
          <li>Commission earnings shall be calculated on a weekly basis.</li>
        </ul>

        <li className="  text-base font-semibold mt-6 mb-4">Payout Terms</li>
        <ul className="list-[lower-alpha] list-inside text-sm">
          <li>
            Payouts will be made on a weekly basis, every Monday (excluding
            public/bank holidays).
          </li>
          <li>
            Only successful and confirmed upgrades will be eligible for payout.
          </li>
          <li>Payouts will be made exclusively via bank transfer.</li>
          <li>
            The Partner must provide valid bank account details to receive
            payouts.
          </li>
          <li>
            Ooulet reserves the right to withhold payouts in case of suspected
            fraudulent activity.
          </li>
        </ul>

        <li className="  text-base font-semibold mt-6 mb-4">
          Badge & Reward System
        </li>

        <ul className="list-[lower-alpha] list-inside text-sm">
          <li>
            Partners will receive badges based on their cumulative performance:
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
          </li>
          <li>
            The Company may introduce additional incentives at its discretion.
          </li>
        </ul>

        <li className="  text-base font-semibold mt-6 mb-4">Term & Termination</li>
        <ul className="list-[lower-alpha] list-inside text-sm">
          <li>
            This Agreement remains in effect until terminated by either party.
          </li>
          <li>
            Ooulet may terminate this Agreement immediately if the Partner:
            <ul className="list-disc pl-12">
              <li>Engages in fraud, misconduct, or violation of policies.</li>
              <li>Uses misleading marketing tactics.</li>
            </ul>
          </li>
          <li>
            Upon termination, all unpaid commissions may be forfeited at
            Ooulet’s discretion
          </li>
        </ul>

        <li className="  text-base font-semibold mt-6 mb-4">Confidentiality</li>
        <ul className="list-[lower-alpha] list-inside text-sm">
          <li>
            The Partner agrees not to disclose any confidential information
            obtained from Ooulet.
          </li>
          <li>This obligation shall survive termination of this Agreement</li>
        </ul>

        <li className="  text-base font-semibold mt-6 mb-4">
          Liability & Indemnification
        </li>
        <ul className="list-[lower-alpha] list-inside text-sm">
          <li>The Partner participates in the Program at their own risk.</li>
          <li>
            The Partner shall indemnify Ooulet against any claims arising from
            their participation.
          </li>
        </ul>

        <li className="  text-base font-semibold mt-6 mb-4">Modifications</li>
        <ul className="list-[lower-alpha] list-inside text-sm">
          <li>
            Ooulet reserves the right to modify this Agreement at any time.
          </li>
          <li>
            Continued participation in the Program constitutes acceptance of any
            modifications.
          </li>
        </ul>

        <li className="  text-base font-semibold mt-6 mb-4">
          Governing law & Dispute Resolution
        </li>
        <ul className="list-[lower-alpha] list-inside text-sm">
          <li>This Agreement shall be governed by the laws of India.</li>
          <li>
            Any disputes shall be resolved through arbitration in Roorkee,
            Haridwar, India, in accordance with the Arbitration and Conciliation
            Act, 1996
          </li>
        </ul>

        <li className="  text-base font-semibold mt-6 mb-4">Miscellaneous</li>
        <ul className="list-[lower-alpha] list-inside text-sm">
          <li>
            This Agreement constitutes the entire agreement between the parties.
          </li>
          <li>
            {" "}
            If any provision is found to be unenforceable, the remaining
            provisions shall remain in effect.
          </li>
        </ul>

        <li className="  text-base font-semibold mt-6 mb-4">Contact Information</li>
        <ul className="mb-4 text-sm">
          <li className="mb-2">
            If you have any questions or concerns about this Partner Agreement ,
            you can contact us at:{" "}
            <span className="font-semibold">support@ooulet.com</span>
          </li>
          <li>
            By enrolling in the Ooulet Partner Program, the Partner acknowledges
            and agrees to the terms outlined in this Agreement.
          </li>
        </ul>
      </ol>
    </div>
  );
};

export default AgreementPage;
