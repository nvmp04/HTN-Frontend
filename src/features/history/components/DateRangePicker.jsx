// ============================================
// features/history/components/DateRangePicker.jsx
// ============================================

import React from 'react';
import { Calendar } from 'lucide-react';

/**
 * Component chọn khoảng thời gian
 */
export function DateRangePicker({ startTime, endTime, onStartChange, onEndChange, onSearch, disabled }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center gap-2 mb-3">
        <Calendar className="w-5 h-5 text-blue-600" />
        <h3 className="font-semibold text-gray-700">Lọc theo thời gian</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Từ ngày
          </label>
          <input
            type="datetime-local"
            value={startTime}
            onChange={(e) => onStartChange(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Đến ngày
          </label>
          <input
            type="datetime-local"
            value={endTime}
            onChange={(e) => onEndChange(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div className="flex items-end">
          <button
            onClick={onSearch}
            disabled={disabled}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Tìm kiếm
          </button>
        </div>
      </div>
    </div>
  );
}