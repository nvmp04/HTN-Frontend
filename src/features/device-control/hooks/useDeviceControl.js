import { useState, useEffect } from 'react';
import { getLatestData, controlDevices } from '../../../shared/api/endpoints';

/**
 * Hook để điều khiển thiết bị
 */
export function useDeviceControl() {
  const [ledState, setLedState] = useState(false);
  const [fanState, setFanState] = useState(false);
  const [loading, setLoading] = useState(true);
  const [controlling, setControlling] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Fetch trạng thái hiện tại
  useEffect(() => {
    const fetchCurrentState = async () => {
      try {
        const data = await getLatestData();
        setLedState(data.led);
        setFanState(data.fan);
        setLoading(false);
      } catch (err) {
        setError('Không thể tải trạng thái thiết bị');
        setLoading(false);
      }
    };

    fetchCurrentState();
  }, []);

  // Điều khiển thiết bị
  const control = async (newLedState, newFanState) => {
    setControlling(true);
    setError(null);
    setSuccessMessage(null);

    try {
      await controlDevices(newLedState, newFanState);
      setLedState(newLedState);
      setFanState(newFanState);
      setSuccessMessage('Điều khiển thành công!');
      
      // Clear success message sau 3s
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (err) {
      setError(err.message || 'Không thể điều khiển thiết bị');
    } finally {
      setControlling(false);
    }
  };

  const handleLedChange = (newState) => {
    control(newState, fanState);
  };

  const handleFanChange = (newState) => {
    control(ledState, newState);
  };

  const handleAllOn = () => {
    control(true, true);
  };

  const handleAllOff = () => {
    control(false, false);
  };

  return {
    ledState,
    fanState,
    loading,
    controlling,
    error,
    successMessage,
    handleLedChange,
    handleFanChange,
    handleAllOn,
    handleAllOff
  };
}