'use client'

export default function ScheduleWorm() {
  const milestones = [
    { 
      name: 'Project Charter Approved', 
      date: '31 Jan 2024', 
      phase: 'Initiation', 
      status: 'complete', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    { 
      name: 'Concept Design Complete', 
      date: '29 Jun 2024', 
      phase: 'Design', 
      status: 'complete', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    { 
      name: 'Detailed Design Complete', 
      date: '25 Jul 2024', 
      phase: 'Design', 
      status: 'complete', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    { 
      name: 'Construction Documentation Complete', 
      date: '29 Sep 2024', 
      phase: 'Design', 
      status: 'complete', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    { 
      name: 'Contract Award', 
      date: '30 Nov 2024', 
      phase: 'Procurement', 
      status: 'complete', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    { 
      name: 'Site Mobilization', 
      date: '20 Dec 2024', 
      phase: 'Delivery', 
      status: 'complete', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    { 
      name: 'Early Works Complete', 
      date: '24 Feb 2025', 
      phase: 'Delivery', 
      status: 'complete', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    { 
      name: 'Main Works Complete', 
      date: '20 Mar 2026', 
      phase: 'Delivery', 
      status: 'in-progress', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    { 
      name: 'Practical Completion / Substantial...', 
      date: '26 May 2026', 
      phase: 'Delivery', 
      status: 'warning', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    { 
      name: 'Final Payment', 
      date: '22 Aug 2026', 
      phase: 'Close', 
      status: 'pending', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      name: 'Project Closure', 
      date: '21 Oct 2026', 
      phase: 'Close', 
      status: 'pending', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'complete': return 'from-green-400 to-green-600'
      case 'in-progress': return 'from-blue-400 to-blue-600'
      case 'warning': return 'from-red-400 to-red-600'
      case 'pending': return 'from-gray-300 to-gray-500'
      default: return 'from-gray-300 to-gray-500'
    }
  }

  const getStatusGradient = (status) => {
    switch (status) {
      case 'complete': return 'from-green-400 to-green-600'
      case 'in-progress': return 'from-blue-400 to-blue-600'
      case 'warning': return 'from-red-400 to-red-600'
      case 'pending': return 'from-gray-300 to-gray-500'
      default: return 'from-gray-300 to-gray-500'
    }
  }

  return (
    <div className="card card-hover animate-fade-in">
      <div className="card-content p-4 sm:p-6">
        <div className="mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-200/60">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Schedule Worm</h2>
        </div>
      <div className="overflow-x-auto pb-4 -mx-2 sm:mx-0">
        <div className="flex space-x-4 sm:space-x-6 min-w-max px-2 sm:px-0">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex flex-col items-center min-w-[160px] sm:min-w-[180px] md:min-w-[200px] group">
              <div className="flex items-center w-full mb-2 sm:mb-3">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${getStatusGradient(milestone.status)} rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 transition-all duration-300 border-2 sm:border-4 border-white z-10 relative`}>
                  <div className="w-5 h-5 sm:w-6 sm:h-6">{milestone.icon}</div>
                </div>
                {index < milestones.length - 1 && (
                  <div className={`flex-1 h-1.5 sm:h-2 bg-gradient-to-r ${getStatusGradient(milestone.status)} mx-2 sm:mx-3 rounded-full shadow-sm`}></div>
                )}
              </div>
              <div className="text-center bg-gray-50 rounded-xl p-3 sm:p-4 w-full border border-gray-200 group-hover:bg-blue-50 transition-colors">
                <div className="text-xs sm:text-sm font-bold text-gray-800 mb-1.5 sm:mb-2 leading-tight">{milestone.name}</div>
                <div className="text-[10px] sm:text-xs text-gray-600 mb-1.5 sm:mb-2 font-medium">{milestone.date}</div>
                <div className={`text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full inline-block bg-gradient-to-r ${getStatusGradient(milestone.status)} text-white shadow-sm`}>
                  {milestone.phase}
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  )
}

