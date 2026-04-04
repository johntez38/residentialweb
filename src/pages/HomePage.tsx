import { Header } from '../components/Header';
import { useGeolocation } from '../hooks/useGeolocation';
import { useNearbyProperties } from '../hooks/useNearbyProperties';
import { PropertyCard } from '../components/PropertyCard';
import { MapPin, Navigation, Home } from 'lucide-react';

export function HomePage() {
  const { loading: gpsLoading, latitude, longitude, error } = useGeolocation();
  const { nearbyProperties, loading: propertiesLoading } = useNearbyProperties(latitude, longitude, 5);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Home className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Home</h1>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 max-w-md mx-auto">
            {gpsLoading ? <span>Detecting location...</span> : <span>📍 Showing properties near you</span>}
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nearbyProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}
