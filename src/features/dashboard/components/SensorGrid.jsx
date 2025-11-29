import React from 'react';
import { SensorCard } from './SensorCard';
import { DeviceStatusCard } from './DeviceStatusCard';
import { Thermometer, Droplets, Sun, Activity, Lightbulb, Fan } from 'lucide-react';

/**
 * Grid hiển thị tất cả cảm biến và thiết bị
 */
export function SensorGrid({ data }) {
  if (!data) {
    return (
      <div className="text-center text-gray-500 py-8">
        Không có dữ liệu
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Cảm biến */}
      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-700">Cảm biến</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <SensorCard
            icon={Thermometer}
            label="Nhiệt độ"
            value={data.tem?.toFixed(1) || '-'}
            unit="°C"
            color="red"
          />
          <SensorCard
            icon={Droplets}
            label="Độ ẩm"
            value={data.hum?.toFixed(1) || '-'}
            unit="%"
            color="blue"
          />
          <SensorCard
            icon={Sun}
            label="Ánh sáng"
            value={data.light || '-'}
            unit="lux"
            color="yellow"
          />
          <SensorCard
            icon={Activity}
            label="Tiny"
            value={data.tiny?.toFixed(1) || '-'}
            unit=""
            color="purple"
          />
        </div>
      </div>

      {/* Thiết bị */}
      <div>
        <h3 className="text-lg font-semibold mb-3 text-gray-700">Trạng thái thiết bị</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DeviceStatusCard
            icon={Lightbulb}
            label="Đèn LED"
            isOn={data.led}
            color="yellow"
          />
          <DeviceStatusCard
            icon={Fan}
            label="Quạt"
            isOn={data.fan}
            color="blue"
          />
        </div>
      </div>
    </div>
  );
}