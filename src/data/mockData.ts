export interface Property {
  id: string;
  name: string;
  location: string;
  address: string;
  lat: number;
  lng: number;
  price: number;
  bedrooms: number;
  bathrooms: number;
  type: 'Apartment' | 'House' | 'Condo' | 'Studio';
  status: 'available' | 'pending' | 'rented';
  images: string[];
  description: string;
  amenities: string[];
  landlordId: string;
  createdAt: Date;
}

// Nairobi coordinates: -1.2921, 36.8219
export const mockProperties: Property[] = [
  {
    id: '1',
    name: 'Sunset Apartments',
    location: 'Westlands, Nairobi',
    address: '123 Westlands Road, Nairobi',
    lat: -1.2675,
    lng: 36.8036,
    price: 45000,
    bedrooms: 2,
    bathrooms: 2,
    type: 'Apartment',
    status: 'available',
    images: [],
    description: 'Beautiful 2-bedroom apartment in the heart of Westlands',
    amenities: ['Parking', 'Security', 'Water', 'Electricity'],
    landlordId: 'user1',
    createdAt: new Date()
  },
  {
    id: '2',
    name: 'Green Valley Estate',
    location: 'Kilimani, Nairobi',
    address: '45 Kilimani Road, Nairobi',
    lat: -1.2903,
    lng: 36.7812,
    price: 75000,
    bedrooms: 3,
    bathrooms: 2,
    type: 'House',
    status: 'available',
    images: [],
    description: 'Spacious 3-bedroom house with garden',
    amenities: ['Garden', 'Parking', 'Security', 'Water'],
    landlordId: 'user1',
    createdAt: new Date()
  },
  {
    id: '3',
    name: 'CBD Heights',
    location: 'CBD, Nairobi',
    address: '78 Moi Avenue, Nairobi',
    lat: -1.2833,
    lng: 36.8172,
    price: 35000,
    bedrooms: 1,
    bathrooms: 1,
    type: 'Studio',
    status: 'pending',
    images: [],
    description: 'Modern studio apartment in central business district',
    amenities: ['Security', 'Elevator', 'Water'],
    landlordId: 'user2',
    createdAt: new Date()
  }
];
