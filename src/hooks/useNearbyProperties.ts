import { useState, useEffect } from 'react';
import { Property, mockProperties } from '../data/mockData';
import { calculateDistance } from '../utils/distance';

export function useNearbyProperties(userLat: number | null, userLng: number | null, radiusKm: number = 5) {
  const [nearbyProperties, setNearbyProperties] = useState<Array<Property & { distance: number }>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userLat || !userLng) {
      setNearbyProperties([]);
      return;
    }

    setLoading(true);
    
    // Calculate distances and filter within radius
    const propertiesWithDistance = mockProperties
      .map(property => ({
        ...property,
        distance: calculateDistance(userLat, userLng, property.lat, property.lng)
      }))
      .filter(property => property.distance <= radiusKm)
      .sort((a, b) => a.distance - b.distance);
    
    setNearbyProperties(propertiesWithDistance);
    setLoading(false);
  }, [userLat, userLng, radiusKm]);

  return { nearbyProperties, loading };
}
