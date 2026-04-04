import { useState } from 'react';
import { Header } from '../components/Header';
import { PropertyCard } from '../components/PropertyCard';
import { mockProperties } from '../data/mockData';
import { Search, Sliders } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';

export function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredProperties = mockProperties.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input 
            className="pl-10" 
            placeholder="Search properties..." 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}
