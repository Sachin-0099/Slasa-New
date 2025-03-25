import React from 'react';
import '../App.css'; // For any custom CSS, though Tailwind handles most styling

const HeaderMain = () => {
  return (
    <div className="App border">
      <nav className="navbar bg-white p-0 border-l-2">
        <div className="flex justify-start space-x-4 py-2 overflow-x-auto no-scrollbar">
          {/* Category 1 */}
          <div className="flex-shrink-0 border-2 border-gray-500 rounded-md px-3 py-1">
            <a href="#" className="text-black text-base sm:text-sm">Acrylic Accessories</a>
          </div>
          {/* Category 2 */}
          <div className="flex-shrink-0 border-2 border-gray-500 rounded-md px-3 py-1">
            <a href="#" className="text-black text-base sm:text-sm">Shop</a>
          </div>
          {/* Category 3 */}
          <div className="flex-shrink-0 border-2 border-gray-500 rounded-md px-3 py-1">
            <a href="#" className="text-black text-base sm:text-sm">Photography & Videography</a>
          </div>
          {/* Category 4 */}
          <div className="flex-shrink-0 border-2 border-gray-500 rounded-md px-3 py-1">
            <a href="#" className="text-black text-base sm:text-sm">Other Services</a>
          </div>
          {/* Add more categories if necessary */}
        </div>
      </nav>
    </div>
  );
};

export default HeaderMain;
