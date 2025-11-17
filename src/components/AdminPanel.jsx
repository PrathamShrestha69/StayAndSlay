import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get("https://stay-and-slay-backend.vercel.app/api/getData");
      const data = res.data;
      setRows(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(
        err?.response?.data?.message || err.message || "Failed to fetch"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter(
      (r) =>
        (r.fullName || "").toLowerCase().includes(q) ||
        (r.email || "").toLowerCase().includes(q) ||
        (r.phoneNumber || "").toLowerCase().includes(q) ||
        (r.collegeName || "").toLowerCase().includes(q)
    );
  }, [rows, query]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-between mb-4 xl:flex xl:flex-row">
        <h1 className="text-2xl font-bold">Admin Panel</h1>

        <div className="flex items-center gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name, email, phone or college"
            className="input input-sm input-bordered w-64"
          />
          <button className="btn btn-sm" onClick={fetchData} disabled={loading}>
            {loading ? "Refreshing..." : "Refresh"}
          </button>
        </div>
      </div>

      {error && <div className="mb-4 text-red-600">{error}</div>}

      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-amber-950 text-white">
            <tr>
              <th className="px-4 py-2 text-left text-sm">Full name</th>
              <th className="px-4 py-2 text-left text-sm">Email</th>
              <th className="px-4 py-2 text-left text-sm">Phone</th>
              <th className="px-4 py-2 text-left text-sm">WhatsApp</th>
              <th className="px-4 py-2 text-left text-sm">College</th>
              <th className="px-4 py-2 text-left text-sm">Studies</th>
              <th className="px-4 py-2 text-left text-sm">Registered At</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-6 text-center text-sm text-gray-500"
                >
                  {loading ? "Loading..." : "No records found"}
                </td>
              </tr>
            )}

            {filtered.map((row) => (
              <tr key={row._id || row.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm">{row.fullName}</td>
                <td className="px-4 py-2 text-sm">{row.email}</td>
                <td className="px-4 py-2 text-sm">{row.phoneNumber}</td>
                <td className="px-4 py-2 text-sm">{row.whatsappNumber}</td>
                <td className="px-4 py-2 text-sm">{row.collegeName}</td>
                <td className="px-4 py-2 text-sm">{row.studies}</td>
                <td className="px-4 py-2 text-sm">
                  {row.createdAt
                    ? new Date(row.createdAt).toLocaleString()
                    : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
