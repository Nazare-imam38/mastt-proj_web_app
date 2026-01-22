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

  // Generate month labels for the timeline
  const generateMonthLabels = () => {
    const labels = []
    const startDate = new Date(2023, 9) // October 2023
    const endDate = new Date(2027, 0) // January 2027
    
    for (let d = new Date(startDate); d <= endDate; d.setMonth(d.getMonth() + 1)) {
      const month = d.toLocaleDateString('en-US', { month: 'short' })
      const year = d.getFullYear()
      const monthIndex = d.getMonth()
      const yearNum = d.getFullYear()
      const monthsSinceStart = (yearNum - 2023) * 12 + monthIndex
      const position = ((monthsSinceStart - timelineStart) / timelineDuration) * 100
      
      // Only show every 3 months to avoid clutter
      if (monthIndex % 3 === 0 || month === 'Oct' || month === 'Jan') {
        labels.push({
          label: `${month} '${year.toString().slice(-2)}`,
          position: position
        })
      }
    }
    return labels
  }

  const monthLabels = generateMonthLabels()

  return (
    <div className="card card-hover animate-fade-in">
      <div className="card-content p-4 sm:p-6">
        <div className="mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-200/60">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Project Phases</h2>
        </div>
      
        <div className="relative overflow-x-auto -mx-2 sm:mx-0">
          {/* Gantt Chart Container */}
          <div className="min-w-[600px] sm:min-w-[800px] px-2 sm:px-0">
            {/* Timeline Header with Month Labels */}
            <div className="relative mb-2" style={{ height: '35px' }}>
              <div className="flex justify-between text-[10px] sm:text-xs font-semibold text-gray-600 mb-1">
                <span>Oct 2023</span>
                <span>Jan 2027</span>
              </div>
              <div className="relative h-5 sm:h-6 border-b-2 border-gray-300">
                {monthLabels.map((label, idx) => (
                  <div
                    key={idx}
                    className="absolute top-0 transform -translate-x-1/2"
                    style={{ left: `${label.position}%` }}
                  >
                    <div className="w-px h-full bg-gray-400"></div>
                    <div className="absolute top-0.5 sm:top-1 left-1/2 transform -translate-x-1/2 text-[8px] sm:text-[10px] text-gray-600 whitespace-nowrap">
                      {label.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gantt Chart Grid */}
            <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden">
              {/* Grid Lines */}
              <div className="absolute inset-0">
                {monthLabels.map((label, idx) => (
                  <div
                    key={idx}
                    className="absolute top-0 bottom-0 w-px bg-gray-200"
                    style={{ left: `${label.position}%` }}
                  ></div>
                ))}
              </div>

              {/* Phase Rows */}
              <div className="relative">
                {phasesWithPosition.map((phase, index) => (
                  <div key={index} className="relative border-b border-gray-200 last:border-0" style={{ height: '50px' }}>
                    {/* Phase Label */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-28 md:w-32 bg-gray-50 border-r border-gray-200 flex items-center px-2 sm:px-3 md:px-4 z-20">
                      <span className="text-xs sm:text-sm font-semibold text-gray-900 truncate">{phase.name}</span>
                    </div>
                    
                    {/* Phase Bar */}
                    <div className="relative ml-20 sm:ml-28 md:ml-32 h-full">
                      <div
                        className={`absolute top-1.5 sm:top-2 bottom-1.5 sm:bottom-2 bg-gradient-to-r ${phase.gradient} rounded-md flex items-center justify-center text-white text-[10px] sm:text-xs font-bold shadow-md hover:shadow-lg transform hover:scale-y-105 transition-all duration-300 border border-white/30 z-10`}
                        style={{
                          left: `${phase.left}%`,
                          width: `${phase.width}%`,
                        }}
                      >
                        <span className="px-1 sm:px-2 truncate">{phase.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Today Line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-red-500 z-30 pointer-events-none"
                style={{ left: `${todayPercent}%` }}
              >
                <div className="absolute -top-5 sm:-top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-red-500 text-white text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded shadow-lg font-semibold whitespace-nowrap">
                    Today: {todayDate}
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 sm:border-l-4 border-r-3 sm:border-r-4 border-t-3 sm:border-t-4 border-transparent border-t-red-500"></div>
                </div>
              </div>

              {/* Completion Marker */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-green-500 z-30 pointer-events-none"
                style={{ left: `${completionPercent}%` }}
              >
                <div className="absolute -bottom-5 sm:-bottom-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-500 text-white text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded shadow-lg font-semibold whitespace-nowrap">
                    Completion: {completionDate}
                  </div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 sm:border-l-4 border-r-3 sm:border-r-4 border-b-3 sm:border-b-4 border-transparent border-b-green-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

