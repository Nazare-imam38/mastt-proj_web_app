export default function LocationMap() {
  return (
    <div className="card card-hover animate-fade-in">
      <div className="card-content p-6">
        <div className="mb-6 pb-4 border-b border-gray-200/60">
          <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Location</h2>
        </div>
        <div className="w-full h-56 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg relative flex items-center justify-center overflow-hidden mb-5">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 20px)'
        }}></div>
          <div className="flex flex-col items-center text-gray-500 z-10">
            <svg className="w-10 h-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span className="text-xs font-medium text-gray-500">Map View</span>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-6 h-6 bg-blue-600 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-700 space-y-1">
          <p className="font-medium">Laurier Ave F, Rideau St, St Patrick St</p>
          <p className="text-gray-500 text-xs">BYWARD MARKET, ILE DE HULL, LEBRETON DEVELOPMENT</p>
        </div>
      </div>
    </div>
  )
}

