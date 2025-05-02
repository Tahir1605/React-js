import { useEffect, useState } from 'react';
import { account } from '../appwriteConfig';
import Logout from './Logout';
import { Link } from 'react-router-dom';
import LogNav from './LogNav';

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    account.get()
      .then((userData) => setUser(userData))
      .catch(() => setUser(null));
  }, []);

  return (

    <div className='h-screen bg-gradient-to-r from-blue-500 to-purple-500'>
      {user ? (
        <div>
            <LogNav/>
           <div className='flex justify-center my-10'>
             <h1 className='bg-gradient-to-r from-blue-600 to-purple-800 shadow-sm text-white px-8 py-6 rounded-lg text-center text-3xl font-semibold'>Welcome , <span>{user.email}</span></h1>
          </div>
        </div>
      

      ) : (
        <div className='flex justify-center items-center h-screen'>
          <div className='bg-gradient-to-r from-blue-600 to-purple-800 shadow-sm text-white px-8 py-6 rounded-lg text-center'>
            <p className='text-4xl'>
              Please Login
            </p>
            <Link to='/login'>
              <button className='px-5 py-2 my-5 rounded-lg bg-green-500 font-semibold text-xl'>Go to login</button>
            </Link>
          </div>

        </div>
      )}

    </div>

  );
}
