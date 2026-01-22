'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the map component to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

export default function LocationMap() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Import Leaflet CSS only on client side
    import('leaflet/dist/leaflet.css')
    
    // Fix for default marker icon
    import('leaflet').then((L) => {
      delete L.default.Icon.Default.prototype._getIconUrl
      L.default.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      })
    })
  }, [])

  // Coordinates for Laurier Ave F, Rideau St, St Patrick St area in Ottawa
  const position = [45.4280, -75.6941]

  return (
    <div className="card card-hover animate-fade-in">
      <div className="card-content p-4 sm:p-6">
        <div className="mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-200/60">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Location</h2>
        </div>
        <div className="w-full h-56 sm:h-64 md:h-80 rounded-lg overflow-hidden mb-4 sm:mb-5 border border-gray-200 shadow-sm">
          {isClient ? (
            <MapContainer
              center={position}
              zoom={15}
              style={{ height: '100%', width: '100%', zIndex: 0 }}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  <div className="text-sm">
                    <p className="font-semibold">Project Location</p>
                    <p className="text-gray-600">Laurier Ave F, Rideau St, St Patrick St</p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <div className="text-gray-400 text-sm">Loading map...</div>
            </div>
          )}
        </div>
        <div className="text-xs sm:text-sm text-gray-700 space-y-1">
          <p className="font-medium">Laurier Ave F, Rideau St, St Patrick St</p>
          <p className="text-gray-500 text-[10px] sm:text-xs">BYWARD MARKET, ILE DE HULL, LEBRETON DEVELOPMENT</p>
        </div>
      </div>
    </div>
  )
}

