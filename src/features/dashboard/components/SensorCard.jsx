import React from 'react';

/**
 * Card hiển thị 1 cảm biến
 */
export function SensorCard({ icon: Icon, label, value, unit, color = 'blue' }) {
  const colorClasses = {
    red: 'text-red-500 bg-red-50 border-red-200',
    blue: 'text-blue-500 bg-blue-50 border-blue-200',
    yellow: 'text-yellow-500 bg-yellow-50 border-yellow-200',
    green: 'text-green-500 bg-green-50 border-green-200',
    purple: 'text-purple-500 bg-purple-50 border-purple-200',
  };

  return (
    <div className={`border-2 rounded-lg p-4 ${colorClasses[color]}`}>
      <div className="flex items-center gap-3 mb-3">
        <Icon className={`w-6 h-6 ${colorClasses[color].split(' ')[0]}`} />
        <span className="font-medium text-gray-700">{label}</span>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-gray-800">
          {value}
          {unit && <span className="text-xl ml-1">{unit}</span>}
        </div>
      </div>
    </div>
  );
}