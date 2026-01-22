'use client'

export default function ProjectPhases() {
  // Helper function to convert date string to months since start
  const dateToMonths = (dateStr) => {
    const [month, year] = dateStr.split(' ')
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const monthIndex = months.indexOf(month)
    const yearNum = parseInt(year)
    return (yearNum - 2023) * 12 + monthIndex
  }

  // Helper function to convert date string with day to months since start
  const dateWithDayToMonths = (dateStr) => {
    const parts = dateStr.split(' ')
    const day = parseInt(parts[0])
    const month = parts[1]
    const year = parseInt(parts[2])
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const monthIndex = months.indexOf(month)
    const totalMonths = (year - 2023) * 12 + monthIndex
    return totalMonths + (day / 30) // Approximate day as fraction of month
  }

  const timelineStart = dateToMonths('Oct 2023')
  const timelineEnd = dateToMonths('Jan 2027')
  const timelineDuration = timelineEnd - timelineStart

  const phases = [
    { name: 'Initiation', start: 'Oct 2023', end: 'Jan 2024', gradient: 'from-blue-800 to-blue-900' },
    { name: 'Planning', start: 'Jan 2024', end: 'Apr 2024', gradient: 'from-blue-400 to-blue-500' },
    { name: 'Design', start: 'Apr 2024', end: 'Oct 2024', gradient: 'from-orange-500 to-orange-600' },
    { name: 'Procurement', start: 'Oct 2024', end: 'Jan 2025', gradient: 'from-red-500 to-red-600' },
    { name: 'Delivery', start: 'Jan 2025', end: 'Jul 2026', gradient: 'from-blue-300 to-blue-400' },
    { name: 'Close', start: 'Jul 2026', end: 'Oct 2026', gradient: 'from-orange-500 to-orange-600' },
  ]

  const todayDate = 'Apr 2025'
  const completionDate = '21 Oct 2026'

  // Calculate positions and widths for each phase
  const phasesWithPosition = phases.map(phase => {
    const startMonths = dateToMonths(phase.start)
    const endMonths = dateToMonths(phase.end)
    const leftPercent = ((startMonths - timelineStart) / timelineDuration) * 100
    const widthPercent = ((endMonths - startMonths) / timelineDuration) * 100
    return {
      ...phase,
      left: leftPercent,
      width: widthPercent
    }
  })

  // Calculate today line position
  const todayMonths = dateToMonths(todayDate)
  const todayPercent = ((todayMonths - timelineStart) / timelineDuration) * 100

  // Calculate completion marker position
  const completionMonths = dateWithDayToMonths(completionDate)
  const completionPercent = ((completionMonths - timelineStart) / timelineDuration) * 100

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
            {phasesWithPosition.map((phase, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${phase.gradient} h-16 rounded-lg flex items-center justify-center text-white text-sm font-bold absolute shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white/50 z-0`}
                style={{
                  left: `${phase.left}%`,
                  width: `${phase.width}%`,
                }}
              >
                {phase.name}
              </div>
            ))}

            {/* Today Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-red-600 z-10 shadow-lg"
              style={{ left: `${todayPercent}%` }}
            >
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg font-bold">
                Today: Delivery {todayDate}
              </div>
            </div>

            {/* Completion Marker */}
            <div
              className="absolute top-0 bottom-0 w-1.5 bg-gradient-to-b from-green-500 to-green-600 z-10 shadow-lg"
              style={{ left: `${completionPercent}%` }}
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

