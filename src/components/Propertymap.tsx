export function PropertyMap({ properties, center }: any) {
  return (
    <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-lg border-2 border-dashed border-gray-400">
      <div className="text-center">
        <p className="text-gray-600 font-medium">Map View Placeholder</p>
        <p className="text-sm text-gray-500">Center: {center[0]}, {center[1]}</p>
        <p className="text-sm text-gray-500">Loading {properties.length} markers...</p>
      </div>
    </div>
  );
}
