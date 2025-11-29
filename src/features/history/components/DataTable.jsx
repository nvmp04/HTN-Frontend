import React from 'react';
import { formatTimestamp } from '../../../shared/utils/formatters';

/**
 * Bảng hiển thị lịch sử dữ liệu
 */
export function DataTable({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        Không có dữ liệu
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50 border-b-2">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
              Thời gian
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
              Nhiệt độ (°C)
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
              Độ ẩm (%)
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
              Ánh sáng
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
              Tiny
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
              LED
            </th>
            <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
              Fan
            </th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50 transition">
              <td className="px-4 py-3 text-sm text-gray-600">
                {formatTimestamp(row.timestamp)}
              </td>
              <td className="px-4 py-3 text-center text-sm font-medium text-red-600">
                {row.tem?.toFixed(1)}
              </td>
              <td className="px-4 py-3 text-center text-sm font-medium text-blue-600">
                {row.hum?.toFixed(1)}
              </td>
              <td className="px-4 py-3 text-center text-sm font-medium text-yellow-600">
                {row.light}
              </td>
              <td className="px-4 py-3 text-center text-sm font-medium text-purple-600">
                {row.tiny?.toFixed(1)}
              </td>
              <td className="px-4 py-3 text-center">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                  row.led ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                }`}>
                  {row.led ? 'BẬT' : 'TẮT'}
                </span>
              </td>
              <td className="px-4 py-3 text-center">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                  row.fan ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                }`}>
                  {row.fan ? 'BẬT' : 'TẮT'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}