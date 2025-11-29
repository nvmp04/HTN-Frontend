import React, { useState } from 'react';
import { History, BarChart3, Table2 } from 'lucide-react';
import { useHistoryData } from './hooks/useHistoryData';
import { DateRangePicker } from './components/DateRangePicker';
import { LimitSelector } from './components/LimitSelector';
import { DataChart } from './components/DataChart';
import { DataTable } from './components/DataTable';

/**
 * Trang lịch sử dữ liệu
 */
export function HistoryPage() {
  const {
    data,
    loading,
    error,
    limit,
    startTime,
    endTime,
    setLimit,
    setStartTime,
    setEndTime,
    fetchByLimit,
    fetchByRange
  } = useHistoryData();

  const [displayMode, setDisplayMode] = useState('table'); // 'table' or 'chart'

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <History className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">Lịch sử dữ liệu</h1>
        </div>

        {/* Toggle Display Mode */}
        <div className="flex gap-2">
          <button
            onClick={() => setDisplayMode('table')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              displayMode === 'table'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <Table2 className="w-4 h-4" />
            Bảng
          </button>
          <button
            onClick={() => setDisplayMode('chart')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              displayMode === 'chart'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            Biểu đồ
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          ⚠️ {error}
        </div>
      )}

      {/* Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <DateRangePicker
            startTime={startTime}
            endTime={endTime}
            onStartChange={setStartTime}
            onEndChange={setEndTime}
            onSearch={fetchByRange}
            disabled={loading}
          />
        </div>
        <div>
          <LimitSelector
            limit={limit}
            onChange={setLimit}
            onApply={() => fetchByLimit(limit)}
            disabled={loading}
          />
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Đang tải dữ liệu...</p>
          </div>
        </div>
      )}

      {/* Content */}
      {!loading && data.length > 0 && (
        <div className="bg-white rounded-lg shadow p-6">
          <div className="mb-4 text-sm text-gray-600">
            📊 Hiển thị {data.length} bản ghi
          </div>

          {displayMode === 'table' ? (
            <DataTable data={data} />
          ) : (
            <DataChart data={data} />
          )}
        </div>
      )}

      {/* No Data */}
      {!loading && data.length === 0 && (
        <div className="bg-white rounded-lg shadow p-12 text-center text-gray-500">
          Không có dữ liệu
        </div>
      )}
    </div>
  );
}