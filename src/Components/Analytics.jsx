import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const data = [
  { name: "Jan", sales: 400, revenue: 2400 },
  { name: "Feb", sales: 300, revenue: 2210 },
  { name: "Mar", sales: 500, revenue: 2290 },
  { name: "Apr", sales: 600, revenue: 2000 },
  { name: "May", sales: 700, revenue: 2181 },
];

const pieData = [
  { name: "Electronics", value: 400 },
  { name: "Furniture", value: 300 },
  { name: "Clothing", value: 300 },
  { name: "Books", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Analytics = () => {
  const navigate = useNavigate();
  
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Navigation Button */}
      <button
        onClick={() => navigate('/')}
        className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition flex items-center space-x-2 mb-6"
      >
        <ArrowLeft size={20} />
        <span>Back</span>
      </button>
      
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Analytics Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sales Bar Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Sales Overview</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#4A5568" />
              <YAxis stroke="#4A5568" />
              <Tooltip />
              <Bar dataKey="sales" fill="#3182CE" barSize={50} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Line Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Revenue Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#4A5568" />
              <YAxis stroke="#4A5568" />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#48BB78" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Category Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value" label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;