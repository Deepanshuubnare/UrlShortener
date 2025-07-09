import React, { useEffect, useState } from 'react';
import { getCurrentUser, logoutUser } from '../api/user.api'; 
import { useNavigate } from '@tanstack/react-router';
import { useDispatch } from 'react-redux';
import { logout } from '../store/slice/authSlice';

const AuthButton = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getCurrentUser();
        setUser(data);
      } catch (err) {
        console.error("Failed to fetch user", err);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser(); 
      dispatch(logout()); 
      setUser(null); 
      window.location.reload();
      navigate({ to: '/auth' }); 

    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="flex items-center gap-3">
      {/* Optional greeting */}
      {/* {user && <span className="text-sm text-gray-600">Hi, {user.name}</span>} */}
      
      {user ? (
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md shadow transition duration-200"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => navigate({ to: '/auth' })}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md shadow transition duration-200"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default AuthButton;
