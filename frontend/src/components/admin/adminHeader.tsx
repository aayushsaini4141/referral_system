// components/Header.tsx
import { useRouter } from "next/router";
import React from "react";
import { useState, useEffect, useRef  } from 'react';
import axios from 'axios';


const AdminHeader = () => {
    const router = useRouter();
      const [email, setEmail] = useState('');
      const [oldPassword, setOldPassword] = useState('');
      const [newPassword, setNewPassword] = useState('');
      const [message, setMessage] = useState('');
      const [error, setError] = useState('');
      const [showDropdown, setShowDropdown] = useState(false);
      const [showChangePassword, setShowChangePassword] = useState(false);
      const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Add your search logic here
  };
      
      // const handleChangePassword = async (e: React.FormEvent) => {
      //   e.preventDefault();
      //   try {
      //     const res = await axios.post(`${process.env.NEXT_PUBLIC_GRAPHQL_URI}`, {
      //       query: `
      //         mutation ChangePassword($email: String!, $oldPassword: String!, $newPassword: String!) {
      //           changePassword(email: $email, oldPassword: $oldPassword, newPassword: $newPassword) {
      //             message
      //           }
      //         }
      //       `,
      //       variables: { email, oldPassword, newPassword },
      //     });
    
      //     const responseMessage = res.data?.data?.changePassword;
      //     if (responseMessage) {
      //       setMessage('Password updated successfully');
      //       setError('');
      //     } else {
      //       setMessage('');
      //       setError('Failed to update password');
      //     }
      //   } catch (err) {
      //     console.error('Error:', err);
      //     setError('Failed to update password');
      //   }
      // };
    

      const handleChangePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
          const res = await axios.post(`${process.env.NEXT_PUBLIC_GRAPHQL_URI}`, {
            query: `
              mutation ChangePassword($email: String!, $oldPassword: String!, $newPassword: String!) {
                changePassword(email: $email, oldPassword: $oldPassword, newPassword: $newPassword) {
                  message
                }
              }
            `,
            variables: { email, oldPassword, newPassword },
          });
     
          const responseMessage = res.data?.data?.changePassword;
     
          if (responseMessage) {
            setMessage('Password updated successfully');
            setError('');
     
            // ✅ Clear all the fields
            setEmail('');
            setOldPassword('');
            setNewPassword('');
           
            // ✅ Automatically close the modal after 2 seconds
            setTimeout(() => {
              setShowChangePassword(false);
              setMessage('');
            });
     
          } else {
            setMessage('');
            setError('Failed to update password');
          }
        } catch (err) {
          console.error('Error:', err);
          setError('Failed to update password');
        }
      };
 


      useEffect(() => {
        const token = localStorage.getItem('admin_token');
        if (!token) {
          router.push('/admin/login');
        }
      }, [router]);
    
      const dropdownRef = useRef(null);
    
      useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (dropdownRef.current && !(dropdownRef.current as HTMLElement).contains(event.target as Node)) {
            setShowDropdown(false);
          }
        };
    
        if (showDropdown) {
          document.addEventListener('mousedown', handleClickOutside);
        } else {
          document.removeEventListener('mousedown', handleClickOutside);
        }
    
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, [showDropdown]);
      

    return (
        <div className="">
        <header className="bg-white shadow-sm p-4 w-full">
    <div className="max-w-[1440px] mx-auto flex justify-between items-center px-4">
      <h1>Admin Panel</h1>

      <form onSubmit={handleSearch} className="flex-1 mx-4 max-w-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="bg-[var(--icon-color)] text-white px-4 py-2 rounded-md transition-all duration-300"
        >
          Profile
        </button>
        <div
          className={`absolute right-0 mt-2 w-48 bg-white border rounded shadow-md transition-all duration-300 transform ${
            showDropdown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-10px] pointer-events-none'
          }`}
        >
          <button
            onClick={() => setShowChangePassword(true)}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-all duration-200"
          >
            Change Password
          </button>
          <button
            onClick={() => {
              localStorage.removeItem('admin_token');
              router.push('/admin/login');
            }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-all duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </header>
  {showChangePassword && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    onClick={() => setShowChangePassword(false)}
  >
    <div
      className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
      onClick={(e) => e.stopPropagation()}
    >
      <h3 className="text-lg text-center font-semibold mb-4">Change Password</h3>
      {message && <p className="text-green-500">{message}</p>}
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleChangePassword} className="flex flex-col">
        <label className="text-gray-500 block text-sm font-medium">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 border rounded mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-gray-500 block text-sm font-medium">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full p-2 border rounded mb-2"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <label className="text-gray-500 block text-sm font-medium">New Password</label>
        <input
          type="password"
          placeholder="Enter new password"
          className="w-full p-2 border rounded mb-2"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button className="bg-blue-500 text-white p-2 rounded-lg my-2" type="submit">
          Update Password
        </button>
        <button
          onClick={() => setShowChangePassword(false)}
          className="p-2 border rounded-lg"
        >
          Cancel
        </button>
      </form>
    </div>
  </div>
)}

  </div>
    );
};

export default AdminHeader;
