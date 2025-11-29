// Use Vite env var in development for a proxy or leave empty to use same origin
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

export const POLLING_INTERVAL = 5000; // 5 seconds

export const SENSOR_UNITS = {
  temperature: '°C',
  humidity: '%',
  light: 'lux',
  tiny: ''
};

export const DEVICE_STATES = {
  ON: true,
  OFF: false
};