import React from 'react';
import { Lightbulb, Fan } from 'lucide-react';
import { DeviceSwitch } from './DeviceSwitch';

/**
 * Panel điều khiển tất cả thiết bị
 */
export function ControlPanel({ ledState, fanState, onLedChange, onFanChange, disabled }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Điều khiển thiết bị
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DeviceSwitch
          icon={Lightbulb}
          label="Đèn LED"
          isOn={ledState}
          onChange={onLedChange}
          disabled={disabled}
          color="yellow"
        />
        
        <DeviceSwitch
          icon={Fan}
          label="Quạt"
          isOn={fanState}
          onChange={onFanChange}
          disabled={disabled}
          color="blue"
        />
      </div>
    </div>
  );
}