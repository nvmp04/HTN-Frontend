import React from 'react';

/**
 * Switch component cho thiết bị
 */
export function DeviceSwitch({ icon: Icon, label, isOn, onChange, disabled, color = 'blue' }) {
  const colorClasses = {
    blue: 'bg-blue-600',
    yellow: 'bg-yellow-500',
    green: 'bg-green-600',
  };

  return (
    <div className="bg-white border-2 rounded-lg p-6 hover:shadow-lg transition">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Icon 
            className={`w-8 h-8 ${isOn ? `text-${color}-600` : 'text-gray-400'}`} 
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{label}</h3>
            <p className="text-sm text-gray-500">
              {isOn ? 'Đang bật' : 'Đang tắt'}
            </p>
          </div>
        </div>
        
        {/* Status Indicator */}
        <div 
          className={`w-4 h-4 rounded-full ${
            isOn ? `${colorClasses[color]} animate-pulse` : 'bg-gray-300'
          }`}
        />
      </div>

      {/* Toggle Switch */}
      <button
        onClick={() => onChange(!isOn)}
        disabled={disabled}
        className={`
          relative w-full h-12 rounded-full transition-all duration-300
          ${isOn ? colorClasses[color] : 'bg-gray-300'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90 cursor-pointer'}
        `}
      >
        <div
          className={`
            absolute top-1 w-10 h-10 bg-white rounded-full shadow-lg
            transition-all duration-300 ease-in-out
            ${isOn ? 'right-1' : 'left-1'}
          `}
        />
        <span className="text-white font-semibold">
          {isOn ? 'BẬT' : 'TẮT'}
        </span>
      </button>
    </div>
  );
}