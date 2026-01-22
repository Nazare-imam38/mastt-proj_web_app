export default function Stakeholders() {
  return (
    <div className="card card-hover animate-fade-in">
      <div className="card-content p-6">
        <div className="mb-6 pb-4 border-b border-gray-200/60">
          <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Project Key Stakeholders</h2>
        </div>
        
        <div className="space-y-5">
          <div>
            <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Client Members</h3>
            <ul className="space-y-2">
              <li className="flex items-start py-2 border-b border-gray-100 last:border-0">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <span className="text-gray-900 font-medium block">Emily Carter</span>
                  <span className="text-gray-500 text-sm">Director of Urban Development</span>
                </div>
              </li>
              <li className="flex items-start py-2 border-b border-gray-100 last:border-0">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <span className="text-gray-900 font-medium block">James Reynolds</span>
                  <span className="text-gray-500 text-sm">Senior Project Sponsor</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Project Team Members</h3>
            <ul className="space-y-2">
              <li className="flex items-start py-2 border-b border-gray-100 last:border-0">
                <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <span className="text-gray-900 font-medium block">Sarah Mitchell</span>
                  <span className="text-gray-500 text-sm">Project Manager</span>
                </div>
              </li>
              <li className="flex items-start py-2 border-b border-gray-100 last:border-0">
                <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <span className="text-gray-900 font-medium block">Daniel Liu</span>
                  <span className="text-gray-500 text-sm">Lead Architect</span>
                </div>
              </li>
              <li className="flex items-start py-2 border-b border-gray-100 last:border-0">
                <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <div>
                  <span className="text-gray-900 font-medium block">Rachel Thompson</span>
                  <span className="text-gray-500 text-sm">Structural Engineer</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

