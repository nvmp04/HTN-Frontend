import React from 'react';
import { RefreshCw, Activity } from 'lucide-react';
import { useSensorData } from './hooks/useSensorData';
import { SensorGrid } from './components/SensorGrid';
import { LastUpdateTime } from './components/LastUpdateTime';

/**
 * Trang Dashboard - Hiển thị dữ liệu cảm biến realtime
 */
export function DashboardPage() {
  const { data, loading, error, lastUpdate, refresh } = useSensorData();

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        </div>
        
        <button
          onClick={refresh}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          {loading ? 'Đang tải...' : 'Làm mới'}
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          ⚠️ {error}
        </div>
      )}

      {/* Loading State - Chỉ hiện lần đầu */}
      {loading && !data && (
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Đang tải dữ liệu...</p>
          </div>
        </div>
      )}

      {/* Content */}
      {data && (
        <>
          {/* Last Update Time */}
          <div className="bg-white rounded-lg shadow p-4">
            <LastUpdateTime timestamp={data.timestamp} />
          </div>

          {/* Sensor Grid */}
          <div className="bg-white rounded-lg shadow p-6">
            <SensorGrid data={data} />
          </div>

          {/* Auto Refresh Info */}
          <div className="text-center text-sm text-gray-500">
            Tự động cập nhật mỗi 5 giây
          </div>
        </>
      )}
    </div>
  );
}