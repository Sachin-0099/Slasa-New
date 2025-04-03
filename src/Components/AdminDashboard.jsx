import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Card } from "./Card";
import Sidebar from "./Sidebar";

const data = [
  { name: "Jan", sales: 400 },
  { name: "Feb", sales: 300 },
  { name: "Mar", sales: 500 },
  { name: "Apr", sales: 700 },
  { name: "May", sales: 600 },
];

const pieData = [
  { name: "Electronics", value: 400 },
  { name: "Furniture", value: 300 },
  { name: "Clothing", value: 200 },
  { name: "Others", value: 100 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

export default function AdminDashboard() {
  const [products, setProducts] = useState([
    { id: 1, name: "Wooden Table", price: "$120" },
    { id: 2, name: "Ceramic Vase", price: "$50" },
    { id: 3, name: "Wall Art", price: "$80" },
  ]);

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      <Sidebar />
      
      <main className="flex-1 p-6 space-y-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        
        {/* Graph and Pie Chart Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 bg-white shadow-lg rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="name" tick={{ fill: "#6b7280" }} />
                <YAxis tick={{ fill: "#6b7280" }} />
                <Tooltip />
                <Bar dataKey="sales" fill="#6366F1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6 bg-white shadow-lg rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Category Sales</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Product List Below */}
        <Card className="p-6 bg-white shadow-lg rounded-xl">
          <h2 className="text-xl font-semibold mb-4">Product List</h2>
          <ul className="space-y-4">
            {products.map((product) => (
              <li key={product.id} className="flex justify-between p-3 bg-gray-100 rounded-lg">
                <span className="font-medium">{product.name}</span>
                <span className="text-gray-700">{product.price}</span>
              </li>
            ))}
          </ul>
        </Card>
      </main>
    </div>
  );
}