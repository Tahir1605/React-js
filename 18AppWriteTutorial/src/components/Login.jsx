import { useState } from 'react';
import { account } from '../appwriteConfig';
import { useNavigate,Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await account.createEmailPasswordSession(email, password);
      alert('Login successful!');
      navigate('/');
    } catch (err) {
      alert('Login failed: ' + err.message);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500'>
    <div className='bg-white p-10 rounded-xl shadow-xl max-w-md w-full'>
      <h2 className='text-gray-800 text-center font-extrabold text-4xl mb-8'>
        Welcome Back
      </h2>
      <div className='mb-6'>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className='w-full px-6 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-500 outline-none text-gray-700 bg-gray-100 focus:ring-2 focus:ring-indigo-500'
        />
      </div>
      <div className='mb-6'>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className='w-full px-6 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-500 outline-none text-gray-700 bg-gray-100 focus:ring-2 focus:ring-indigo-500'
        />
      </div>
      <div className='flex justify-between items-center mb-6'>
        <div className='flex items-center'>
          <input type="checkbox" id="remember-me" className="w-4 h-4 text-indigo-500 rounded" />
          <label htmlFor="remember-me" className='ml-2 text-gray-700'>Remember Me</label>
        </div>
        <a href="#" className='text-indigo-500 hover:text-indigo-700 text-sm'>Forgot Password?</a>
      </div>
      <div className='flex justify-center'>
        <button
          onClick={handleLogin}
          className='w-full py-3 px-5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none transition duration-200 ease-in-out transform hover:scale-105'
        >
          Login
        </button>
      </div>
      <div className='flex justify-center mt-4'>
        <p className='text-sm text-gray-600'>
          Don't have an account?{' '}
          <Link to="/signup" className='text-indigo-500 hover:text-indigo-700'>Sign up</Link>
        </p>
      </div>
    </div>
  </div>
  
  );
}
