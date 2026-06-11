import React, { useState } from 'react';
import { loginUser } from '../api/user.api';
import {useDispatch, useSelector} from 'react-redux';
import { login } from '../store/slice/authSlice';
import { useNavigate } from '@tanstack/react-router';

const LoginForm = ({ state }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const auth=useSelector((state)=>state.auth);
    console.log(auth);
    const handleSubmit = async (e) => {
        e.preventDefault();
  if (loading) return;
        setLoading(true);
        setError('');

        try {
            const data = await loginUser(email, password);   
            dispatch(login(data.user));
            navigate({to:"/dashboard"});
            setLoading(false);
            console.log("login success!")
           
        } catch (err) {
            setLoading(false);
            setError(err.message || 'Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="rounded-[1.75rem] border border-slate-800/80 bg-slate-950/95 px-8 pt-6 pb-8 mb-4 shadow-2xl shadow-slate-950/40">
                <h2 className="text-2xl font-semibold text-slate-100 text-center mb-6">Login</h2>

                {error && (
                    <div className="mb-4 rounded-2xl border border-rose-500/20 bg-rose-900/90 p-3 text-sm text-rose-200">
                        {error}
                    </div>
                )}

                <div className="mb-4">
                    <label className="block text-slate-300 text-sm font-medium mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full rounded-2xl border border-slate-700 bg-slate-900/95 py-3 px-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-slate-300 text-sm font-medium mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="w-full rounded-2xl border border-slate-700 bg-slate-900/95 py-3 px-4 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
                        id="password"
                        type="password"
                        placeholder="***********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className={`w-full rounded-2xl bg-gradient-to-r from-cyan-500 to-slate-700 py-3 px-4 text-sm font-semibold text-white shadow-lg shadow-cyan-500/10 transition hover:from-cyan-400 hover:to-slate-600 focus:outline-none ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        type="submit"
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                </div>

                <div className="text-center mt-4">
                    <p className="cursor-pointer text-sm text-slate-400">
                        Don't have an account? <span onClick={() => state(false)} className="text-cyan-300 hover:text-cyan-100">Register</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
