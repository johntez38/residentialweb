import { MapPin, Bed, Bath, Square } from 'lucide-react';

export function PropertyCard({ property }: { property: any }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={property.image || "https://images.unsplash.com/photo-1568605114967-8130f3a36994"} 
        alt={property.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.name}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MapPin className="w-4 h-4 mr-1" /> {property.location}
        </div>
        <div className="text-xl font-bold text-blue-600 mb-4">${property.price.toLocaleString()}</div>
        <div className="flex justify-between text-gray-600 text-sm border-t pt-4">
          <span className="flex items-center gap-1"><Bed className="w-4 h-4" /> {property.beds}</span>
          <span className="flex items-center gap-1"><Bath className="w-4 h-4" /> {property.baths}</span>
          <span className="flex items-center gap-1"><Square className="w-4 h-4" /> {property.sqft} sqft</span>
        </div>
      </div>
    </div>
  );
}
