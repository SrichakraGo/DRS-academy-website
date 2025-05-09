import { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken, removeToken } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [enrollments, setEnrollments] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  // Fetch enrollments
  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate('/admin/login');
      return;
    }

    axios
      .get('http://localhost:5000/api/admin/enrollments', {
        headers: { 'x-auth-token': token },
      })
      .then((res) => setEnrollments(res.data))
      .catch((err) => {
        removeToken();
        navigate('/admin/login');
      });
  }, []);

  // Logout function
  const handleLogout = () => {
    removeToken();
    navigate('/admin/login');
  };

  // Filter enrollments based on search text
  const filtered = enrollments.filter((e) =>
    `${e.fullName} ${e.email} ${e.course} ${e.currentClass}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="bg-[#0d2a66] text-white px-6 py-4 flex justify-between items-center sticky top-0 shadow z-50">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-[#f27b06] hover:bg-[#e06d00] px-4 py-2 rounded-md"
        >
          Logout
        </button>
      </div>

      <div className="p-6">
        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by name, class, course..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full">
            <thead>
              <tr className="bg-[#031d49] text-white text-left">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Class</th>
                <th className="p-3">Course</th>
                <th className="p-3">Message</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan="6" className="p-4 text-center text-gray-500">
                    No matching records found.
                  </td>
                </tr>
              ) : (
                filtered.map((e, idx) => (
                  <tr key={idx} className="border-b text-sm hover:bg-gray-50">
                    <td className="p-3">{e.fullName}</td>
                    <td className="p-3">{e.email}</td>
                    <td className="p-3">{e.phone}</td>
                    <td className="p-3">{e.currentClass}</td>
                    <td className="p-3">{e.course}</td>
                    <td className="p-3">{e.message}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
