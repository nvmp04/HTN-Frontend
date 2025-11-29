import { API_BASE_URL } from '../utils/constants';

/**
 * Base fetch wrapper với error handling
 */
async function apiRequest(endpoint, options = {}) {
  try {
    // Only add Content-Type when there's a body (e.g., POST/PUT)
    const headers = {
      ...options.headers,
    };
    if (options.body && !Object.prototype.hasOwnProperty.call(headers, 'Content-Type')) {
      headers['Content-Type'] = 'application/json';
    }

    const requestUrl = `${API_BASE_URL}${endpoint}`;
    const requestOptions = {
      ...options,
      headers,
    };

    // Helpful debug log for network requests
    console.debug('API Request:', requestOptions.method || 'GET', requestUrl, requestOptions);

    const response = await fetch(requestUrl, requestOptions);

    if (!response.ok) {
      // Try to parse an error body, otherwise fall back to status
      const errorBody = await response.text().catch(() => '');
      let parsed = {};
      try {
        parsed = errorBody ? JSON.parse(errorBody) : {};
      } catch (e) {
        parsed = { detail: errorBody };
      }
      throw new Error(parsed.detail || `HTTP ${response.status}`);
    }

    // Avoid parsing when there's no content (e.g., 204 No Content)
    const contentType = response.headers.get('Content-Type');
    if (!contentType || contentType.indexOf('application/json') === -1) {
      // Return text or empty when no JSON
      const text = await response.text().catch(() => '');
      return text || null;
    }

    return await response.json();
  } catch (error) {
    // Network/Fetch errors will appear here (e.g., CORS, DNS, server down)
    console.error('API Error:', error.message || error);
    throw error;
  }
}

export const apiClient = {
  get: (endpoint) => apiRequest(endpoint),
  post: (endpoint, data) =>
    apiRequest(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};