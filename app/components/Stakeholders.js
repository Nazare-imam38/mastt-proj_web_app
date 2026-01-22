export default function Stakeholders() {
  return (
    <div className="card card-hover animate-fade-in">
      <div className="card-content p-4 sm:p-6">
        <div className="mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-200/60">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Project Key Stakeholders</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <div>
            <h3 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wide">Client Members</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <span className="text-gray-900 font-medium block text-sm sm:text-base">Emily Carter</span>
                  <span className="text-gray-500 text-xs sm:text-sm">Director of Urban Development</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <span className="text-gray-900 font-medium block text-sm sm:text-base">James Reynolds</span>
                  <span className="text-gray-500 text-xs sm:text-sm">Senior Project Sponsor</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wide">Project Team Members</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <span className="text-gray-900 font-medium block text-sm sm:text-base">Sarah Mitchell</span>
                  <span className="text-gray-500 text-xs sm:text-sm">Project Manager</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <span className="text-gray-900 font-medium block text-sm sm:text-base">Daniel Liu</span>
                  <span className="text-gray-500 text-xs sm:text-sm">Lead Architect</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <span className="text-gray-900 font-medium block text-sm sm:text-base">Rachel Thompson</span>
                  <span className="text-gray-500 text-xs sm:text-sm">Structural Engineer</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

