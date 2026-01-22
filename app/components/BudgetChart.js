'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function BudgetChart() {
  const data = [
    {
      name: 'Budget',
      Budget: 34000000,
      'Forecast Final Cost': 33505000,
      'Payment Progress': 4977139,
    },
  ]

  return (
    <div className="card card-hover animate-fade-in">
      <div className="card-content p-6">
        <div className="mb-6 pb-4 border-b border-gray-200/60">
          <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Budget vs FFC Chart</h2>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={80} />
              <Tooltip 
                formatter={(value) => `$${value.toLocaleString()}`}
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  padding: '12px'
                }}
              />
              <Legend />
              <Bar dataKey="Budget" fill="#f97316" radius={[8, 8, 0, 0]} />
              <Bar dataKey="Forecast Final Cost" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              <Bar dataKey="Payment Progress" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

