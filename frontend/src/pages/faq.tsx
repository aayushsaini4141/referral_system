import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    topic: "General Questions",
    questions: [
      {
        question: "What is the Ooulet Partner Program?",
        answer:
          "The Ooulet Partner Program allows individuals to earn commissions by referring businesses to subscribe to Ooulet’s plans. Partners receive a percentage-based commission for every successful plan upgrade made through their referral.",
      },
      {
        question: "Who can join the Ooulet Partner Program?",
        answer:
          "Anyone can join the program, including freelancers, digital marketers, business consultants, and content creators. No prior experience is required.",
      },
      {
        question: "Is there a fee to join the Partner Program?",
        answer: "No, joining the Ooulet Partner Program is completely free",
      },
      {
        question: "How do I refer a customer?",
        answer:
          "Once you join the program, you will receive a unique referral link. Share this link with potential customers. When they subscribe to an Ooulet plan using your link, you will earn a commission.",
      },
    ],
  },
  {
    topic: "Commission & Earnings",
    questions: [
      {
        question: "How much commission do I earn per referral?",
        answer: {
          description:
            "Your commission is based on the number of successful upgrades you bring in a month: ",
          table: [
            { badge: "No Badge", upgrades: "0", commissionRate: "0%" },
            { badge: "Bronze", upgrades: "1-10", commissionRate: "10%" },
            { badge: "Silver", upgrades: "11-25", commissionRate: "12%" },
            { badge: "Gold", upgrades: "26-50", commissionRate: "15%" },
            { badge: "Platinum", upgrades: "51-100", commissionRate: "18%" },
            { badge: "Diamond", upgrades: "100+", commissionRate: "20%" },
          ],
        },
      },
      {
        question: "Will I continue to earn from my referrals after the first month?",
        answer:
          "No, commissions are earned only on the initial upgrade. If the customer renews their plan, it will not count as a new upgrade for commission purposes.",
      },
      {
        question: "What happens if a referred customer cancels their plan?",
        answer:
          "If a customer cancels or requests a refund, the commission for that upgrade will not be counted.",
      },
    ],
  },
  {
    topic: "Payouts",
    questions: [
      {
        question: "How often will I receive my earnings?",
        answer: "Payouts are processed weekly for successful upgrades from Monday to Sunday. Payments are released every Monday, excluding public and bank holidays. If Monday is a holiday, the payout will be made on the next working day.",
      },
      {
        question: "What is the minimum payout amount?",
        answer: "There is no minimum payout amount. Whatever you earn within the week will be paid in the next scheduled payout.",
      },
      {
        question: " How will I receive my payouts?",
        answer: "Payouts are made only via bank transfer. We do not support UPI, Google Pay, Paytm, or any other digital wallets.",
      },
      {
        question: " What bank details do I need to provide for payouts?",
        answer: {
          description: "To receive payouts, you must provide:",
          list: ["Account Holder’s Name.", "Bank Name.", "Account Number.", "IFSC Code."],
        }
      },
      {
        question: " Will my earnings be taxed?",
        answer: "Yes, all payouts are subject to applicable tax deductions under Indian law (if applicable). Ooulet may deduct TDS (Tax Deducted at Source) as per regulations",
      },
    ],
  },
  {
    topic: "Program Rules & Conditions",
    questions: [
      {
        question: " Can I refer myself and earn a commission?",
        answer: "No, self-referrals are strictly prohibited. If found, your account may be suspended, and commissions will be revoked.",
      },
      {
        question: "What if I refer someone, but they don’t upgrade immediately?",
        answer: "As long as they upgrade within 30 days of clicking your referral link, the sale will be credited to you.",
      },
      {
        question: "How can I track my referrals and earnings?",
        answer: "You can track all your referrals, earnings, and payouts through the Ooulet Partner Dashboard available in the app.",
      },
      {
        question: "Can my referral link expire?",
        answer: "Yes, referral links expire after 30 days. If the user upgrades after 30 days without clicking your link again, it won’t be credited to you",
      },
      {
        question: "What happens if my referral doesn’t use my link?",
        answer: "If a customer subscribes without using your referral link, the sale will not be counted under your account.",
      },
      {
        question: "Can I leave the program anytime?",
        answer: "Yes, you can opt out anytime by contacting support. However, pending payouts will be settled as per our policy.",
      },
    ],
  },
  {
    topic: "Badges & Leaderboard",
    questions: [
      {
        question: " What are Partner Badges?",
        answer: {
          description:
            "Your commission is based on the number of successful upgrades you bring in a month: ",
          table: [
            { badge: "No Badge", upgrades: "0", commissionRate: "0%" },
            { badge: "Bronze", upgrades: "1-10", commissionRate: "10%" },
            { badge: "Silver", upgrades: "11-25", commissionRate: "12%" },
            { badge: "Gold", upgrades: "26-50", commissionRate: "15%" },
            { badge: "Platinum", upgrades: "51-100", commissionRate: "18%" },
            { badge: "Diamond", upgrades: "100+", commissionRate: "20%" },
          ],
        },
      },
      {
        question: "What is the Partner Leaderboard?",
        answer:
          "The Leaderboard is a monthly contest where the Top 10 performers are showcased based on their total upgrades and earnings.",
      },
      {
        question: "How can I get featured on the leaderboard?",
        answer:
          "Simply refer more customers and upgrade as many users as possible within the month. The leaderboard resets every month.",
      },
    ],
  },
  {
    topic: "Support & Contact",
    questions: [
      {
        question: "How can I get support for the Partner Program?",
        answer: "For any queries, contact us at: support@ooulet.com. Else, Initiate chat from ooulet Application",
      },
    ]
  }
];


export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1250px] mx-auto p-2">
    <h1 className="text-lg font-bold text-center my-6">Frequently Asked Questions</h1>
    {faqs.map((faq, topicIndex) => (
      <div key={topicIndex} className="mb-6 px-3 border rounded-md shadow-md">
        <h2 className="text-base font-semibold border-b py-3">{faq.topic}</h2>
        {faq.questions.map((item, qIndex) => {
          const index = topicIndex * 10 + qIndex;
          return (
            <div key={index} className="mb-4">
              <button
                className="text-sm w-full flex justify-between items-center text-left py-2 font-medium"
                onClick={() => toggleQuestion(index)}
              >
                {item.question}
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className=" text-sm text-gray-700">
                  {typeof item.answer === "string" ? (
                    <p>{item.answer}</p>
                  ) : Array.isArray(item.answer) ? (
                    <ul className="list-disc pl-5">
                      {item.answer.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <div>
                      <p className="mb-2">{item.answer.description}</p>
                      {'table' in item.answer ? (
                        <table className="w-full border-collapse border border-gray-300 mt-2 text-sm text-center">
                          <thead>
                            <tr className="bg-gray-200">
                              <th className="border border-gray-300 py-2 ">Badge</th>
                              <th className="border border-gray-300 py-2">Upgrades</th>
                              <th className="border border-gray-300 py-2">Commission</th>
                            </tr>
                          </thead>
                          <tbody>
                            {item.answer.table.map((row, rowIndex) => (
                              <tr key={rowIndex}>
                                <td className="border border-gray-300 py-2">{row.badge}</td>
                                <td className="border border-gray-300 py-2">{row.upgrades}</td>
                                <td className="border border-gray-300 py-2">{row.commissionRate}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      ) : (
                        <ul className="list-disc pl-5">
                          {item.answer.list.map((point, index) => (
                            <li key={index}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    ))}
  </div>
  );
}