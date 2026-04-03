import { useState, useEffect } from 'react';
import { toast } from 'sonner';

interface GeolocationState {
  loading: boolean;
  error: string | null;
  latitude: number | null;
  longitude: number | null;
}

export function useGeolocation() {
  const [state, setState] = useState<GeolocationState>({
    loading: true,
    error: null,
    latitude: null,
    longitude: null
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setState({
        loading: false,
        error: 'Geolocation is not supported by your browser',
        latitude: null,
        longitude: null
      });
      toast.error('GPS not supported');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setState({
          loading: false,
          error: null,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
        toast.success('Location detected!');
      },
      (error) => {
        let errorMessage = 'Unable to get your location';
        switch(error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Please allow location access to see nearby properties';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Location information unavailable';
            break;
          case error.TIMEOUT:
            errorMessage = 'Location request timed out';
            break;
        }
        setState({
          loading: false,
          error: errorMessage,
          latitude: null,
          longitude: null
        });
        toast.error(errorMessage);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  }, []);

  return state;
}
