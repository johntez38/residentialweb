import { Home, Search, Map as MapIcon } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-xl text-blue-600">
          <Home className="w-6 h-6" />
          <span>ResiWeb</span>
        </div>
        <nav className="flex gap-6">
          <a href="/" className="hover:text-blue-600 flex items-center gap-1">Home</a>
          <a href="/search" className="hover:text-blue-600 flex items-center gap-1">Search</a>
          <a href="/map" className="hover:text-blue-600 flex items-center gap-1">Map</a>
        </nav>
      </div>
    </header>
  );
}
