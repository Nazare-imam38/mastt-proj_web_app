'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'

// Custom Legend Component to show all categories
const CustomLegend = ({ categories }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4 px-2">
      {categories.map((item, index) => (
        <div key={index} className="flex items-center gap-1.5 sm:gap-2">
          <div 
            className="w-3 h-3 sm:w-4 sm:h-4 rounded-sm flex-shrink-0" 
            style={{ backgroundColor: item.color }}
          ></div>
          <span className="text-[10px] sm:text-xs text-gray-700 whitespace-nowrap">{item.category}</span>
        </div>
      ))}
    </div>
  )
}

export default function RiskCharts() {
  // All categories for legend
  const allCategories = [
    { category: 'Financial/Fraud', count: 3, color: '#ef4444' },
    { category: 'Capability', count: 2, color: '#3b82f6' },
    { category: 'Delivery of Services', count: 2, color: '#06b6d4' },
    { category: 'Safety', count: 2, color: '#3b82f6' },
    { category: 'Environment', count: 1, color: '#f59e0b' },
    { category: 'Legislative Compliance', count: 0, color: '#60a5fa' },
    { category: 'Reputation', count: 0, color: '#f97316' },
    { category: 'Security', count: 0, color: '#a855f7' },
    { category: 'No-Category', count: 0, color: '#ec4899' },
  ]

  // Only categories with count > 0 for chart display
  const riskCategoryData = allCategories.filter(item => item.count > 0)

  const riskTableData = [
    { title: 'Quality Issues (2)', rating: 'Medium' },
    { title: 'Supply Chain Disruptions (1)', rating: 'Medium' },
    { title: 'Political Instability & Corruption (2)', rating: 'Medium' },
    { title: 'Injuries Onsite (4)', rating: 'Low' },
    { title: 'Weather-Related Delays (1)', rating: 'Low' },
    { title: 'Regulatory Compliance Issues (1)', rating: 'Low' },
    { title: 'OH&S Incidents (1)', rating: 'Very Low' },
    { title: 'Technology Failures (1)', rating: 'Very Low' },
  ]

  const getRatingColor = (rating) => {
    switch (rating) {
      case 'High': return 'bg-red-500'
      case 'Medium': return 'bg-yellow-500'
      case 'Low': return 'bg-green-500'
      case 'Very Low': return 'bg-green-400'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="card card-hover animate-fade-in">
      <div className="card-content p-4 sm:p-6">
        <div className="mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-200/60">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">10 risks for selected categories</h2>
        </div>
        
        <div className="mb-6 sm:mb-8 bg-gray-50 rounded-lg p-3 sm:p-4 md:p-5">
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={riskCategoryData} margin={{ top: 5, right: 10, left: 0, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis 
                dataKey="category" 
                angle={-45}
                textAnchor="end"
                height={80}
                style={{ fontSize: '10px', fontWeight: '500' }}
                interval={0}
              />
              <YAxis style={{ fontSize: '10px' }} width={30} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  padding: '8px',
                  fontSize: '12px'
                }}
              />
              <Legend 
                content={<CustomLegend categories={allCategories} />}
              />
              <Bar 
                dataKey="count" 
                name="Number of Risks" 
                radius={[8, 8, 0, 0]}
              >
                {riskCategoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 sm:mt-8">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-5">Risk Table</h3>
          <div className="overflow-x-auto rounded-lg border border-gray-200 -mx-2 sm:mx-0">
            <table className="w-full border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-2 sm:py-3 px-3 sm:px-6 font-semibold text-gray-700 text-xs sm:text-sm">Title</th>
                  <th className="text-left py-2 sm:py-3 px-3 sm:px-6 font-semibold text-gray-700 text-xs sm:text-sm">Post-Rating</th>
                </tr>
              </thead>
              <tbody>
                {riskTableData.map((risk, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-2 sm:py-3 px-3 sm:px-6 text-gray-700 flex items-center font-medium text-xs sm:text-sm">
                      <span className="text-amber-500 mr-1 sm:mr-2 flex-shrink-0">→</span>
                      <span className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-xs font-bold mr-1 sm:mr-2 text-white flex-shrink-0">R</span>
                      <span className="truncate">{risk.title}</span>
                    </td>
                    <td className="py-2 sm:py-3 px-3 sm:px-6">
                      <span className={`${getRatingColor(risk.rating)} text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap`}>
                        {risk.rating}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

