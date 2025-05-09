import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../utils/auth';

const AdminLogin = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/admin/login', form);
      setToken(res.data.token);
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[#0d2a66]">Admin Login</h2>
        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full mb-4 px-4 py-2 border rounded-md"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full mb-6 px-4 py-2 border rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-[#f27b06] text-white py-2 rounded-md hover:bg-[#e06d00]"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
