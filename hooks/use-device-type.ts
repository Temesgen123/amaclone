import { useState, useEffect } from 'react';

function useDeviceType() {
  const [deviceType, setDeviceType] = useState('unknown');
  useEffect(() => {
    const handleresize = () => {
      setDeviceType(window.innerWidth <= 768 ? 'mobile' : 'desktop');
    };
    handleresize(); //Set initial value
    window.addEventListener('resize', handleresize);
    return () => window.removeEventListener('resize', handleresize);
  }, []);
  return deviceType;
}
export default useDeviceType;
