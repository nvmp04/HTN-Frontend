import { apiClient } from './client';
import { toIsoDatetimeString } from '../utils/formatters';

/**
 * Health check
 */
export async function checkHealth() {
  return apiClient.get('/');
}

/**
 * Lấy dữ liệu cảm biến mới nhất
 */
export async function getLatestData() {
  return apiClient.get('/data/latest');
}

/**
 * Lấy lịch sử dữ liệu
 */
export async function getHistoryData(limit = 100) {
  return apiClient.get(`/data/history?limit=${limit}`);
}

/**
 * Lấy dữ liệu theo khoảng thời gian
 */
export async function getDataByRange(startTime, endTime) {
  // Ensure startTime and endTime are in the required ISO-like format
  const s = toIsoDatetimeString(startTime);
  const e = toIsoDatetimeString(endTime);

  // Validate result format: YYYY-MM-DDTHH:mm:ss
  const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/;
  if (!isoRegex.test(s) || !isoRegex.test(e)) {
    throw new Error('start_time and end_time must be ISO format: YYYY-MM-DDTHH:mm:ss');
  }

  // Validate start < end
  const sDate = new Date(s);
  const eDate = new Date(e);
  if (isNaN(sDate) || isNaN(eDate) || sDate >= eDate) {
    throw new Error('start_time must be before end_time');
  }

  const params = new URLSearchParams({ start_time: s, end_time: e });
  return apiClient.get(`/data/range?${params}`);
}

/**
 * Điều khiển thiết bị (LED, Fan)
 */
export async function controlDevices(ledState, fanState) {
  return apiClient.post('/control', {
    led_state: ledState,
    fan_state: fanState,
  });
}