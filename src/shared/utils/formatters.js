/**
 * Format timestamp thành ngày giờ dễ đọc
 */
export function formatTimestamp(timestamp) {
  if (!timestamp) return '-';
  const date = new Date(timestamp);
  return date.toLocaleString('vi-VN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}
export function formatNumber(value, decimals = 1) {
  if (value === null || value === undefined) return '-';
  return Number(value).toFixed(decimals);
}

/**
 * Format temperature với đơn vị
 */
export function formatTemperature(temp) {
  return `${formatNumber(temp)}°C`;
}

/**
 * Format humidity với đơn vị
 */
export function formatHumidity(hum) {
  return `${formatNumber(hum)}%`;
}

/**
 * Format device state
 */
export function formatDeviceState(state) {
  return state ? 'BẬT' : 'TẮT';
}

/**
 * Parse ISO datetime string cho date input
 */
export function toDateTimeLocal(isoString) {
  if (!isoString) return '';
  const date = new Date(isoString);
  const offset = date.getTimezoneOffset();
  const localDate = new Date(date.getTime() - offset * 60 * 1000);
  return localDate.toISOString().slice(0, 16);
}