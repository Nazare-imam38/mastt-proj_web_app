'use client'

import ProjectHeader from './components/ProjectHeader'
import ProjectDescription from './components/ProjectDescription'
import LocationMap from './components/LocationMap'
import Stakeholders from './components/Stakeholders'
import HealthIndicators from './components/HealthIndicators'
import BudgetOverview from './components/BudgetOverview'
import ProjectSummary from './components/ProjectSummary'
import BudgetChart from './components/BudgetChart'
import BudgetTable from './components/BudgetTable'
import ScheduleWorm from './components/ScheduleWorm'
import ProjectPhases from './components/ProjectPhases'
import RiskCharts from './components/RiskCharts'
import CashFlowChart from './components/CashFlowChart'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <ProjectHeader />
      
      <div className="max-w-[1920px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-10">
        <div className="grid grid-cols-12 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7">
          
          {/* Overview Section */}
          <section id="overview" className="col-span-12 grid grid-cols-12 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            {/* Project Description - Takes 2/3 width on large, full on small */}
            <div className="col-span-12 lg:col-span-8">
              <ProjectDescription />
            </div>
            
            {/* Health Indicators - Takes 1/3 width on large, full on small */}
            <div className="col-span-12 lg:col-span-4">
              <HealthIndicators />
            </div>
            
            {/* Location Map - Takes 1/2 width on medium+, full on small */}
            <div className="col-span-12 md:col-span-6">
              <LocationMap />
            </div>
            
            {/* Stakeholders - Takes 1/2 width on medium+, full on small */}
            <div className="col-span-12 md:col-span-6">
              <Stakeholders />
            </div>
          </section>

          {/* Budget Section */}
          <section id="budget" className="col-span-12 grid grid-cols-12 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <div className="col-span-12 mb-4 sm:mb-6 md:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="h-1 w-8 sm:w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Budget & Financials</h2>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 ml-10 sm:ml-14 md:ml-16">Financial overview and budget analysis</p>
            </div>
            
            {/* Budget Overview - Full width */}
            <div className="col-span-12">
              <BudgetOverview />
            </div>
            
            {/* Project Summary - Takes 1/3 width on large */}
            <div className="col-span-12 lg:col-span-4">
              <ProjectSummary />
            </div>
            
            {/* Budget Chart - Takes 2/3 width on large */}
            <div className="col-span-12 lg:col-span-8">
              <BudgetChart />
            </div>
            
            {/* Budget Table - Full width */}
            <div className="col-span-12">
              <BudgetTable />
            </div>
          </section>

          {/* Schedule Section */}
          <section id="schedule" className="col-span-12 grid grid-cols-12 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <div className="col-span-12 mb-4 sm:mb-6 md:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="h-1 w-8 sm:w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Schedule & Timeline</h2>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 ml-10 sm:ml-14 md:ml-16">Project milestones and phase timeline</p>
            </div>
            
            {/* Schedule Worm - Full width */}
            <div className="col-span-12">
              <ScheduleWorm />
            </div>
            
            {/* Project Phases - Full width */}
            <div className="col-span-12">
              <ProjectPhases />
            </div>
          </section>

          {/* Risks Section */}
          <section id="risks" className="col-span-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <div className="mb-4 sm:mb-6 md:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="h-1 w-8 sm:w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">Risk Management</h2>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 ml-10 sm:ml-14 md:ml-16">Risk assessment and monitoring</p>
            </div>
            <RiskCharts />
          </section>

          {/* Cash Flow Section */}
          <section id="cashflow" className="col-span-12 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <CashFlowChart />
            
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-center py-4 sm:py-6 md:py-8 mt-8 sm:mt-12 md:mt-16 border-t border-gray-700/50 backdrop-blur-sm">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs sm:text-sm md:text-base font-medium">
            POWERED BY <span className="font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent text-sm sm:text-base md:text-lg hover:scale-105 transition-transform duration-300 inline-block">mastt</span>
          </p>
        </div>
      </footer>
    </main>
  )
}
