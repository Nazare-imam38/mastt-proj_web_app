'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function RiskCharts() {
  const riskCategoryData = [
    { category: 'Financial/Fraud', count: 3 },
    { category: 'Capability', count: 2 },
    { category: 'Delivery of Services', count: 2 },
    { category: 'Safety', count: 2 },
    { category: 'Environment', count: 1 },
  ]

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
      case 'Medium': return 'from-yellow-400 to-yellow-600'
      case 'Low': return 'from-green-500 to-green-700'
      case 'Very Low': return 'from-green-300 to-green-500'
      default: return 'from-gray-400 to-gray-600'
    }
  }

  return (
    <div className="card card-hover animate-fade-in">
      <div className="card-content p-6">
        <div className="mb-6 pb-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">10 risks for selected categories</h2>
        </div>
        
        <div className="mb-8 bg-gray-50 rounded-lg p-5">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={riskCategoryData} margin={{ top: 5, right: 30, left: 20, bottom: 80 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis 
                dataKey="category" 
                angle={-45}
                textAnchor="end"
                height={100}
                style={{ fontSize: '12px', fontWeight: '500' }}
              />
              <YAxis style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  padding: '12px'
                }}
              />
              <Legend />
              <Bar dataKey="count" fill="#ef4444" name="Number of Risks" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-5">Risk Table</h3>
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-3 px-6 font-semibold text-gray-700 text-sm">Title</th>
                  <th className="text-left py-3 px-6 font-semibold text-gray-700 text-sm">Post-Rating</th>
                </tr>
              </thead>
              <tbody>
                {riskTableData.map((risk, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-6 text-gray-700 flex items-center font-medium text-sm">
                      <span className="text-amber-500 mr-2">→</span>
                      <span className="w-5 h-5 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-xs font-bold mr-2 text-white">R</span>
                      {risk.title}
                    </td>
                    <td className="py-3 px-6">
                      <span className={`bg-gradient-to-r ${getRatingColor(risk.rating)} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
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

