import { Home, ShoppingCart, BarChart3, Settings } from "lucide-react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-[#3087D1] !text-white p-5 flex flex-col">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
      <nav className="space-y-4 !text-white">
        <SidebarItem icon={<Home size={20} />} label="Dashboard" routes={'/'}/>
        <SidebarItem icon={<ShoppingCart size={20} />} label="Products"  routes={'/products'}/>
        <SidebarItem icon={<BarChart3 size={20} />} label="Analytics" routes={'/analytics'}/>
        <SidebarItem icon={<Settings size={20} />} label="Settings" routes={'/settings'}/>
      </nav>
    </div>
  );
};

const SidebarItem = ({ icon, label,routes }) => {
  return (
    <Link to={routes} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition-all">
      {icon}
      <span className="text-lg">{label}</span>
    </Link>
  );
};

export default Sidebar;
