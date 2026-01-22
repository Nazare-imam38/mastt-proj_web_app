'use client'

import Navbar from './Navbar'

export default function ProjectHeader() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-[1920px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            mastt
          </div>
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-4 sm:px-5 py-2 rounded-lg sm:rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <div className="text-[10px] sm:text-xs uppercase tracking-wide opacity-90 mb-0.5">Planned Completion</div>
            <div className="text-xs sm:text-sm">21 Oct 2026</div>
          </div>
        </div>
        <Navbar />
      </div>
    </header>
  )
}

