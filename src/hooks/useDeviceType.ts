// hooks/useDeviceType.ts
import {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';

export type DeviceType = 'mobile' | 'tablet';

interface UseDeviceTypeResult {
  deviceType: DeviceType;
  screenWidth: number;
}

const useDeviceType = (): UseDeviceTypeResult => {
  const [deviceType, setDeviceType] = useState<DeviceType>('mobile');
  const [screenWidth, setScreenWidth] = useState<number>(
    Dimensions.get('window').width,
  );

  useEffect(() => {
    const determineDeviceType = () => {
      const {width, height} = Dimensions.get('window');
      setScreenWidth(width);

      if (Math.min(width, height) >= 600) {
        setDeviceType('tablet');
      } else {
        setDeviceType('mobile');
      }
    };

    determineDeviceType();

    const subscription = Dimensions.addEventListener(
      'change',
      determineDeviceType,
    );

    return () => subscription?.remove();
  }, []);

  return {deviceType, screenWidth};
};

export default useDeviceType;
