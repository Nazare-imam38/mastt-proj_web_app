export default function ProjectDescription() {
  return (
    <div className="card card-hover animate-fade-in">
      <div className="card-content p-6">
        <div className="mb-6 pb-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Project Description</h2>
        </div>
        <div className="flex-1">
          <div className="w-full h-56 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg mb-5 flex items-center justify-center overflow-hidden">
            <div className="flex flex-col items-center text-gray-500">
              <svg className="w-10 h-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span className="text-xs font-medium text-gray-500">Building Image Placeholder</span>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed text-base">
            The Skyline Tower Development is a high-rise mixed-use project designed to redefine the city skyline with a combination of residential, commercial, and retail spaces. Featuring state-of-the-art architecture and premium amenities, the tower will serve as a landmark in urban development. The project aims to deliver modern living and working spaces while incorporating sustainable design principles, smart technology integration, and energy-efficient systems.
          </p>
        </div>
      </div>
    </div>
  )
}

