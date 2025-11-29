import React from 'react';
import { Gauge, CheckCircle } from 'lucide-react';
import { useDeviceControl } from './hooks/useDeviceControl';
import { ControlPanel } from './components/ControlPanel';
import { QuickActions } from './components/QuickActions';

/**
 * Trang điều khiển thiết bị
 */
export function DeviceControlPage() {
  const {
    ledState,
    fanState,
    loading,
    controlling,
    error,
    successMessage,
    handleLedChange,
    handleFanChange,
    handleAllOn,
    handleAllOff
  } = useDeviceControl();

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Gauge className="w-8 h-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-800">Điều khiển thiết bị</h1>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
          <CheckCircle className="w-5 h-5" />
          {successMessage}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          ⚠️ {error}
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Đang tải trạng thái...</p>
          </div>
        </div>
      )}

      {/* Content */}
      {!loading && (
        <div className="space-y-6">
          {/* Quick Actions */}
          <QuickActions
            onAllOn={handleAllOn}
            onAllOff={handleAllOff}
            disabled={controlling}
          />

          {/* Control Panel */}
          <div className="bg-white rounded-lg shadow p-6">
            <ControlPanel
              ledState={ledState}
              fanState={fanState}
              onLedChange={handleLedChange}
              onFanChange={handleFanChange}
              disabled={controlling}
            />
          </div>

          {/* Status Info */}
          {controlling && (
            <div className="text-center text-sm text-gray-500">
                Đang gửi lệnh điều khiển...
            </div>
          )}
        </div>
      )}
    </div>
  );
}