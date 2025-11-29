import React from 'react';

/**
 * Card hiển thị trạng thái thiết bị (LED, Fan)
 */
export function DeviceStatusCard({ icon: Icon, label, isOn, color = 'gray' }) {
  const statusColor = isOn ? 'green' : 'gray';
  const statusText = isOn ? 'BẬT' : 'TẮT';

  return (
    <div className="border-2 rounded-lg p-4 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Icon 
            className={`w-6 h-6 ${isOn ? `text-${color}-500` : 'text-gray-400'}`} 
          />
          <span className="font-medium text-gray-700">{label}</span>
        </div>
        <div className="flex items-center gap-2">
          <div 
            className={`w-3 h-3 rounded-full ${
              isOn ? 'bg-green-500 animate-pulse' : 'bg-gray-300'
            }`}
          />
          <span className={`font-semibold ${
            isOn ? 'text-green-600' : 'text-gray-500'
          }`}>
            {statusText}
          </span>
        </div>
      </div>
    </div>
  );
}