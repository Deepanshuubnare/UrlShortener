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
      {user ? (
        <button
          onClick={handleLogout}
          className="rounded-2xl bg-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-rose-500/20 transition hover:bg-rose-400"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => navigate({ to: '/auth' })}
          className="rounded-2xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default AuthButton;
