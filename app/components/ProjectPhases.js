'use client'

export default function ProjectPhases() {
  const phases = [
    { name: 'Initiation', start: 'Oct 2023', end: 'Jan 2024', gradient: 'from-blue-800 to-blue-900', width: 12.5 },
    { name: 'Planning', start: 'Jan 2024', end: 'Apr 2024', gradient: 'from-blue-400 to-blue-500', width: 12.5 },
    { name: 'Design', start: 'Apr 2024', end: 'Oct 2024', gradient: 'from-orange-500 to-orange-600', width: 25 },
    { name: 'Procurement', start: 'Oct 2024', end: 'Jan 2025', gradient: 'from-red-500 to-red-600', width: 12.5 },
    { name: 'Delivery', start: 'Jan 2025', end: 'Jul 2026', gradient: 'from-blue-300 to-blue-400', width: 62.5 },
    { name: 'Close', start: 'Jul 2026', end: 'Oct 2026', gradient: 'from-orange-500 to-orange-600', width: 12.5 },
  ]

  const todayDate = 'Apr 2025'
  const completionDate = '21 Oct 2026'

  return (
    <div className="card card-hover animate-fade-in">
      <div className="card-content p-6">
        <div className="mb-6 pb-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Project Phases</h2>
        </div>
      
      <div className="relative">
        {/* Timeline Header */}
        <div className="flex justify-between text-sm font-semibold text-gray-600 mb-3 px-2">
          <span>Oct 2023</span>
          <span>Jan 2027</span>
        </div>

        {/* Gantt Chart */}
        <div className="relative h-40 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200 shadow-inner">
          <div className="flex items-center h-full relative">
            {phases.map((phase, index) => {
              const leftOffset = phases.slice(0, index).reduce((sum, p) => sum + p.width, 0)
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-r ${phase.gradient} h-16 rounded-lg flex items-center justify-center text-white text-sm font-bold absolute shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white/50`}
                  style={{
                    left: `${leftOffset}%`,
                    width: `${phase.width}%`,
                  }}
                >
                  {phase.name}
                </div>
              )
            })}

            {/* Today Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-red-600 z-10 shadow-lg"
              style={{ left: '50%' }}
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg font-bold">
                Today: Delivery {todayDate}
              </div>
            </div>

            {/* Completion Marker */}
            <div
              className="absolute top-0 bottom-0 w-1.5 bg-gradient-to-b from-green-500 to-green-600 z-10 shadow-lg"
              style={{ left: '95%' }}
            >
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-800 font-bold whitespace-nowrap bg-white px-3 py-2 rounded-lg shadow-lg border-2 border-green-500">
                Completion: {completionDate}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

