import React from 'react';

/**
 * Component chọn số lượng records
 */
export function LimitSelector({ limit, onChange, onApply, disabled }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-semibold text-gray-700 mb-3">Số lượng bản ghi</h3>
      <div className="flex gap-3">
        <select
          value={limit}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value={10}>10 bản ghi</option>
          <option value={50}>50 bản ghi</option>
          <option value={100}>100 bản ghi</option>
          <option value={200}>200 bản ghi</option>
          <option value={500}>500 bản ghi</option>
        </select>
        
        <button
          onClick={onApply}
          disabled={disabled}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Áp dụng
        </button>
      </div>
    </div>
  );
}