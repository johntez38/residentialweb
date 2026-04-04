import { Header } from '../components/Header';
import { PropertyMap } from '../components/PropertyMap';
import { useGeolocation } from '../hooks/useGeolocation';
import { mockProperties } from '../data/mockData';

export function MapViewPage() {
  const { latitude, longitude } = useGeolocation();
  const center: [number, number] = [latitude || -1.2921, longitude || 36.8219];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-6">
        <div className="h-[600px] w-full bg-white rounded-lg shadow-lg overflow-hidden">
          <PropertyMap properties={mockProperties} center={center} />
        </div>
      </div>
    </div>
  );
}
