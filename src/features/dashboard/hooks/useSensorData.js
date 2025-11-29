import { useState, useEffect, useCallback } from 'react';
import { getLatestData } from '../../../shared/api/endpoints';
import { POLLING_INTERVAL } from '../../../shared/utils/constants';

/**
 * Hook để fetch dữ liệu cảm biến realtime
 */
export function useSensorData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const result = await getLatestData();
      setData(result);
      setError(null);
      setLastUpdate(new Date());
      
      // Chỉ set loading = false lần đầu
      if (loading) {
        setLoading(false);
      }
    } catch (err) {
      setError(err.message || 'Không thể tải dữ liệu');
      setLoading(false);
    }
  }, [loading]);

  // Fetch ngay khi mount
  useEffect(() => {
    fetchData();
  }, []);

  // Auto polling mỗi 5s
  useEffect(() => {
    const interval = setInterval(fetchData, POLLING_INTERVAL);
    return () => clearInterval(interval);
  }, [fetchData]);

  // Manual refresh
  const refresh = () => {
    setLoading(true);
    fetchData();
  };

  return {
    data,
    loading,
    error,
    lastUpdate,
    refresh
  };
}