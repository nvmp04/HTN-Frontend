import React from 'react';
import { Clock } from 'lucide-react';
import { formatTimestamp } from '../../../shared/utils/formatters';

/**
 * Hiển thị thời gian cập nhật cuối
 */
export function LastUpdateTime({ timestamp }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <Clock className="w-4 h-4" />
      <span>Cập nhật lúc: {formatTimestamp(timestamp)}</span>
    </div>
  );
}
