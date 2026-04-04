import { Header } from '@/components/Header';
import { useGeolocation } from '@/hooks/useGeolocation';
import { useNearbyProperties } from '@/hooks/useNearbyProperties';
import { PropertyCard } from '@/components/PropertyCard';
import { MapPin, Navigation, Home } from 'lucide-react';
export function HomePage() {
  const { loading: gpsLoading, latitude, longitude, error } = useGeolocation();
  const { nearbyProperties, loading: propertiesLoading } = useNearbyProperties(latitude, longitude, 5);
return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section with GPS Status */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Home className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect Home
          </h1>
          <p className="text-xl mb-6">
            Discover residential properties near your current location
          </p>
          
          {/* GPS Status Card */}
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 max-w-md mx-auto">
            {gpsLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Detecting your location...</span>
              </div>
            ) : error ? (
              <div className="flex items-center justify-center gap-2 text-yellow-200">
                <MapPin className="w-5 h-5" />
                <span>{error}</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <Navigation className="w-5 h-5 text-green-300" />
                <span>📍 Found you! Showing properties within 5km</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Properties Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">
          {nearbyProperties.length > 0 
            ? `🏠 ${nearbyProperties.length} Properties Near You` 
            : 'Properties Available'}
        </h2>
        
        {propertiesLoading || gpsLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          </div>
        ) : nearbyProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <MapPin className="w-12 h-12 mx-auto text-gray-400 mb-3" />
            <p className="text-gray-600">
              {error 
                ? "Enable location or use search to find properties" 
                : "No properties found within 5km. Try expanding your search!"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
