import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Gagal memuat data:', err);
        setError('Gagal memuat data pengguna dari server. Silakan coba lagi nanti.');
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10 font-sans">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-xl p-6 md:p-8">
        
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Daftar Pengguna (Users)</h1>
          <p className="text-sm text-gray-500 mt-1">
            Praktikum React: Data Fetching dengan Axios & Client-side Search
          </p>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Cari berdasarkan nama pengguna..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-80 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        {loading && (
          <div className="text-center py-10 text-gray-500">
            <p>Memuat data pengguna...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm mb-4">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="overflow-x-auto border border-gray-200 rounded-lg">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-100 border-b border-gray-200 text-gray-700 text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4">ID</th>
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Username</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Phone</th>
                  <th className="py-3 px-4">Website</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm text-gray-600">
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 font-medium text-gray-900">{user.id}</td>
                      <td className="py-3 px-4 font-semibold text-gray-800">{user.name}</td>
                      <td className="py-3 px-4">{user.username}</td>
                      <td className="py-3 px-4 text-blue-600">{user.email}</td>
                      <td className="py-3 px-4">{user.phone}</td>
                      <td className="py-3 px-4 text-gray-500">{user.website}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-8 text-gray-500">
                      Data pengguna tidak ditemukan dengan kata kunci &quot;{searchTerm}&quot;.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}