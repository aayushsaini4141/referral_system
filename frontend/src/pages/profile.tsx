import React from "react";

const Profile = () => {
  // Dummy profile data
  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    businessName: "Doe Enterprises",
    phoneNumber: "+1 234 567 8901",
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Profile</h2>
        <div className="space-y-4">
          <ProfileItem label="Name" value={userProfile.name} />
          <ProfileItem label="Email" value={userProfile.email} />
          <ProfileItem label="Business Name" value={userProfile.businessName} />
          <ProfileItem label="Phone Number" value={userProfile.phoneNumber} />
        </div>
      </div>
    </div>
  );
};

type ProfileItemProps = {
  label: string;
  value: string;
};

const ProfileItem: React.FC<ProfileItemProps> = ({ label, value }) => (
  <div>
    <p className="text-gray-500 text-sm">{label}</p>
    <p className="text-gray-800 font-medium">{value}</p>
  </div>
);

export default Profile;
