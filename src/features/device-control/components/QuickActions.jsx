import React from 'react';
import { Power, Zap } from 'lucide-react';

/**
 * Quick actions: Bật/Tắt tất cả
 */
export function QuickActions({ onAllOn, onAllOff, disabled }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 border">
      <h3 className="text-sm font-semibold text-gray-600 mb-3">
        Hành động nhanh
      </h3>
      <div className="flex gap-3">
        <button
          onClick={onAllOn}
          disabled={disabled}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          <Zap className="w-4 h-4" />
          Bật tất cả
        </button>
        
        <button
          onClick={onAllOff}
          disabled={disabled}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          <Power className="w-4 h-4" />
          Tắt tất cả
        </button>
      </div>
    </div>
  );
}