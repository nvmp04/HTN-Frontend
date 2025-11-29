import { useState, useEffect } from 'react';
import { getHistoryData, getDataByRange } from '../../../shared/api/endpoints';
import { toIsoDatetimeString } from '../../../shared/utils/formatters';

/**
 * Hook để quản lý lịch sử dữ liệu
 */
export function useHistoryData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(100);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [viewMode, setViewMode] = useState('limit'); // 'limit' or 'range'

  // Fetch by limit
  const fetchByLimit = async (newLimit) => {
    setLoading(true);
    setError(null);
    try {
      const result = await getHistoryData(newLimit);
      setData(result.reverse()); // Reverse để mới nhất ở trên
      setViewMode('limit');
    } catch (err) {
      setError(err.message || 'Không thể tải dữ liệu');
    } finally {
      setLoading(false);
    }
  };

  // Fetch by range
  const fetchByRange = async () => {
    if (!startTime || !endTime) {
      setError('Vui lòng chọn khoảng thời gian');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const s = toIsoDatetimeString(startTime);
      const e = toIsoDatetimeString(endTime);

      // Local validation: start < end
      const sDate = new Date(s);
      const eDate = new Date(e);
      if (isNaN(sDate) || isNaN(eDate) || sDate >= eDate) {
        setError('Thời gian bắt đầu phải nhỏ hơn thời gian kết thúc và phải hợp lệ');
        setLoading(false);
        return;
      }

      const result = await getDataByRange(s, e);
      setData(result.reverse());
      setViewMode('range');
    } catch (err) {
      setError(err.message || 'Không thể tải dữ liệu');
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchByLimit(limit);
  }, []);

  return {
    data,
    loading,
    error,
    limit,
    startTime,
    endTime,
    viewMode,
    setLimit,
    setStartTime,
    setEndTime,
    fetchByLimit,
    fetchByRange
  };
}