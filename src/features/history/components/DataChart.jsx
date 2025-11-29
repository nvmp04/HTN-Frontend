import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { formatTimestamp } from '../../../shared/utils/formatters';

/**
 * Biểu đồ line chart cho lịch sử dữ liệu
 */
export function DataChart({ data }) {
  if (!data || data.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        Không có dữ liệu để hiển thị biểu đồ
      </div>
    );
  }

  // Format data cho chart
  const chartData = data.map(item => ({
    time: new Date(item.timestamp).toLocaleTimeString('vi-VN', {
      hour: '2-digit',
      minute: '2-digit'
    }),
    tem: item.tem,
    hum: item.hum,
    light: item.light,
    tiny: item.tiny
  }));

  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="time" 
            tick={{ fontSize: 12 }}
          />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="tem" 
            stroke="#ef4444" 
            name="Nhiệt độ (°C)"
            strokeWidth={2}
          />
          <Line 
            type="monotone" 
            dataKey="hum" 
            stroke="#3b82f6" 
            name="Độ ẩm (%)"
            strokeWidth={2}
          />
          <Line 
            type="monotone" 
            dataKey="light" 
            stroke="#eab308" 
            name="Ánh sáng"
            strokeWidth={2}
          />
          <Line 
            type="monotone" 
            dataKey="tiny" 
            stroke="#a855f7" 
            name="Tiny"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}