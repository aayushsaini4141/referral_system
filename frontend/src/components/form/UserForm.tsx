import { useState } from "react";

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

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.values(newErrors).some((err) => err !== "")) {
      setErrors(newErrors);
      return;
    }
    onNext(); // Proceed to Step 3 (Terms & Conditions)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900">Join Ooulet Partner Program</h2>
        <p className="text-center text-gray-600 mb-6">Complete your profile to start earning</p>
      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Business Name (Optional)</label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter your business name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            name="agreement"
            checked={formData.agreement}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-sm">I agree to the Partner Program Agreement</label>
        </div>
        {errors.agreement && <p className="text-red-500 text-xs">{errors.agreement}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Next
        </button>
      </form>
    </div>
    </div>
  );
};

export default UserForm;
