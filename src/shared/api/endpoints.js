import { apiClient } from './client';

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
  const params = new URLSearchParams({
    start_time: startTime,
    end_time: endTime,
  });
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