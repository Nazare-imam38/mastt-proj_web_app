'use client'

import Navbar from './Navbar'

export default function ProjectHeader() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm sticky top-0 z-50 transition-all duration-300">
      {/* Status Bar - RSS Style */}
      <div className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white w-full">
        <div className="max-w-[1920px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-center py-2 sm:py-2.5">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold opacity-95">PLANNED COMPLETION</span>
              </div>
              <div className="h-4 w-px bg-white/40"></div>
              <div className="text-xs sm:text-sm font-bold">21 Oct 2026</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Header Content */}
      <div className="max-w-[1920px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}
          <div className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent flex-shrink-0 hover:scale-105 transition-transform duration-300 cursor-pointer order-1 sm:order-none">
            mastt
          </div>
          
          {/* Navbar in the center */}
          <div className="flex-1 flex justify-center w-full sm:w-auto order-2 sm:order-none">
            <Navbar />
          </div>
          
          {/* Spacer to balance layout - hidden on mobile */}
          <div className="hidden sm:block w-[120px] md:w-[140px] flex-shrink-0"></div>
        </div>
      </div>
    </header>
  )
}

