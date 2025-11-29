import React from 'react';
import { HiOutlineChartBar, HiOutlineAdjustments, HiOutlineClock } from 'react-icons/hi';

export default function Navbar({ currentPage, onNavigate }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: HiOutlineChartBar },
    { id: 'control', label: 'Điều khiển', icon: HiOutlineAdjustments },
    { id: 'history', label: 'Lịch sử', icon: HiOutlineClock }
  ];

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold">IoT System</div>
          <div className="flex gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded transition ${
                  currentPage === item.id
                    ? 'bg-blue-700'
                    : 'hover:bg-blue-500'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
