import { useState } from 'react';
import { Header } from '../components/Header';
import { PropertyMap } from '../components/PropertyMap';
import { useGeolocation } from '../hooks/useGeolocation';
import { mockProperties } from '../data/mockData';
import { Property } from '../data/mockData';
import { Navigation } from 'lucide-react';

export function MapViewPage() {
  const { latitude, longitude, loading } = useGeolocation();
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  
  const center: [number, number] = (latitude && longitude) 
    ? [latitude, longitude] 
    : [-1.2921, 36.8219]; // Default to Nairobi

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 border-b">
            <h1 className="text-2xl font-bold flex items-center gap-2">
              <Navigation className="w-6 h-6 text-blue-500" />
              Property Map
            </h1>
            <p className="text-gray-600 mt-1">
              {loading 
                ? "Detecting your location..." 
                : latitude && longitude 
                  ? "📍 Showing properties near your location" 
                  : "📍 Showing all properties (enable GPS for nearby results)"}
            </p>
          </div>
          
          <div style={{ height: 'calc(100vh - 200px)' }} className="w-full">
            <PropertyMap 
              properties={mockProperties}
              center={center}
              onPropertyClick={setSelectedProperty}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
