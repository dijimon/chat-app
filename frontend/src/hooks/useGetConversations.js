import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useLogout from './useLogout.js';

const useGetConversations = () => {
  const { logout } = useLogout();
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);

      try {
        const res = await fetch('/api/users');
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        console.log('1---');
        toast.error(error.message);
        if (error.message.toLowerCase().includes('unauthorized')) {
          console.log('logout-------');
          await logout();
        }
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
