import { account } from '../appwriteConfig';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await account.deleteSession('current');
    alert('Logged out!');
    navigate('/login');
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}
