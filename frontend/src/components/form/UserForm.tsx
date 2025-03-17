import { useState } from "react";
import "@/styles/globals.css";
 
const UserForm = ({ onNext }: { onNext: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessName: "",
    agreement: false,
  });
 
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    agreement: "",
  });
 
  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear errors when typing
  };
 
  // Validate form
  const validate = () => {
    const newErrors = { name: "", phone: "", email: "", agreement: "" };
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.agreement) newErrors.agreement = "You must agree to the Partner Program Agreement.";
    return newErrors;
  };
 
 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.values(newErrors).some((err) => err !== "")) {
      setErrors(newErrors);
      return;
    }
 
    // Prepare data
    const requestData = {
      name: formData.name,
      phoneNumber: formData.phone,
      email: formData.email,
      businessName: formData.businessName || "",
    };
 
    try {
      const graphqlUri = process.env.NEXT_PUBLIC_GRAPHQL_URI;
      if (!graphqlUri) {
        throw new Error("GraphQL URI is not defined");
      }

      const response = await fetch(graphqlUri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            mutation CreateReferral($input: CreateReferralInput!) {
              createReferral(input: $input) {
                name
                referralCode
              }
            }
          `,
          variables: { input: requestData },
        }),
      });
 
      const result = await response.json();
      console.log("Referral Created:", result.data.createReferral);
      onNext(); // Proceed to Step 3 (Terms & Conditions)
    } catch (error) {
      console.error("Error creating referral:", error);
    }
  }; 
 
  return (
    <>
    
    <div className="w-full border-b h-20 flex justify-center items-center">
      <img src="newlogo2.png" alt="hello" className="h-12 w-auto "/>

    </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">Ooulet Partner Program</h2>
        <p className="text-center text-gray-600 mb-6">Complete your profile to start earning</p>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label className="text-gray-500 block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md text-gray-900"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>
 
        
 
        <div>
  <label className="text-gray-500 block text-sm font-medium">Phone Number</label>
  <input
    type="tel"
    name="phone"
    value={formData.phone}
    onChange={(e) => {
      const value = e.target.value;
      // Allow only numbers and ensure it's not longer than 10 digits
      if (/^\d*$/.test(value) && value.length <= 10) {
        handleChange(e);
      }
    }}
    className="w-full px-4 py-2 border rounded-md text-gray-900"
    placeholder="Enter your phone number"
  />
  {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
</div>

 
        <div>
          <label className="text-gray-500 block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md text-gray-900"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>

        <div>
          <label className="text-gray-500 block text-sm font-medium">Business Name (Optional)</label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md text-gray-900"
            placeholder="Enter your business name"
          />
        </div>
 
        <div className="flex items-start ">
          <input
            type="checkbox"
            name="agreement"
            checked={formData.agreement}
            onChange={handleChange}
            className="mr-2 size-6 "
          />
          <label className="text-gray-600 text-sm pt-0.5">
          I agree to the Partner Program Agreement and Terms of Service</label>
        </div>
        {errors.agreement && <p className="text-red-500 text-xs">{errors.agreement}</p>}
 
        <button
          type="submit"
          className="w-full bg-[var(--icon-color)] text-white py-2 rounded-md "
        >
          Join Partner Program
        </button>
      </form>
    </div>
    </div>

    </>
  );
};
 
export default UserForm;
 
 