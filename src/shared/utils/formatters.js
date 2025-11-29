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

/**
 * Convert datetime-local value or other input into ISO-like string: YYYY-MM-DDTHH:mm:ss
 * Accepts strings like 'YYYY-MM-DDTHH:mm', 'YYYY-MM-DDTHH:mm:ss' or Date objects.
 */
export function toIsoDatetimeString(input) {
  if (!input && input !== 0) return '';

  if (input instanceof Date) {
    const pad = (n) => String(n).padStart(2, '0');
    const year = input.getFullYear();
    const month = pad(input.getMonth() + 1);
    const day = pad(input.getDate());
    const hours = pad(input.getHours());
    const minutes = pad(input.getMinutes());
    const seconds = pad(input.getSeconds());
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
  }

  const str = String(input);
  // If it's already a full ISO local 'YYYY-MM-DDTHH:mm:ss', normalize length.
  const isoWithSecRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/;
  const isoMinRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;
  if (isoWithSecRegex.test(str)) return str;
  if (isoMinRegex.test(str)) return `${str}:00`;

  // Fallback: try creating Date and format as local datetime with seconds
  const date = new Date(str);
  if (isNaN(date)) return str; // return original if not a valid date
  return toIsoDatetimeString(date);
}