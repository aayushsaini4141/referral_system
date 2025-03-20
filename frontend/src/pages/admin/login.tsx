// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import axios from 'axios';

// const AdminLogin = () => {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`${process.env.NEXT_PUBLIC_GRAPHQL_URI}`, {
//         query: `
//           mutation {
//             adminLogin(email: "${email}", password: "${password}")
//           }
//         `
//       });

//       const message = res.data?.data?.adminLogin;
//       if (message === 'Login Sucessfully') {
//         localStorage.setItem('admin_token', 'your_mock_token'); // Replace with actual token logic
//         router.push('/admin/dashboard');
//       } else {
//         setError('Invalid credentials');
//       }
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     } catch (err) {
//       setError('Login failed');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <form onSubmit={handleLogin} className="bg-gray-600 p-6 rounded shadow-md w-96">
//         <h2 className="text-xl font-bold mb-4">Admin Login</h2>
//         {error && <p className="text-red-500">{error}</p>}
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full p-2 border rounded mb-3"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full p-2 border rounded mb-3"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button className="w-full bg-blue-500 text-white p-2 rounded" type="submit">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;

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
    <div className="min-h-screen flex justify-center items-center">
      <form onSubmit={handleLogin} className="bg-white p-8 shadow-md rounded">
        <h2 className="text-2xl mb-4">Admin Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
