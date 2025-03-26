import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const AdminLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_GRAPHQL_URI}`, {
        query: `
          mutation AdminLogin($email: String!, $password: String!) {
            adminLogin(email: $email, password: $password)
          }
        `,
        variables: { email, password },
      });

      const responseMessage = res.data?.data?.adminLogin;

      if (responseMessage.includes('Token')) {
        const token = responseMessage.split('Token: ')[1];
        localStorage.setItem('admin_token', token);
        router.push('/admin/dashboard');
      } else {
        setError('Invalid credentials');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError('Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
       <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-md">
       <h2 className="text-2xl font-bold text-center text-gray-900">Admin Panel for Ooulet Partner Program</h2>
       <p className="text-center text-gray-600 mb-6"></p>
      <form onSubmit={handleLogin} className="mt-4 space-y-4">
        {error && <p className="text-red-500">{error}</p>}
        <div>
        <label className="text-gray-500 block text-sm font-medium">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        </div>
        <div>
        <label className="text-gray-500 block text-sm font-medium">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        </div>
        <button type="submit" className="w-full bg-[var(--icon-color)] text-white py-2 rounded-md ">Login</button>
      </form>
      </div>
    </div>
  );
};

export default AdminLogin;
