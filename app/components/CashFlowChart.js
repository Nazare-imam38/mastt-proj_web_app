'use client'

import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function CashFlowChart() {
  // Cash flow data matching the dashboard - cumulative should reach ~33M by Dec 2026
  const cashFlowData = [
    { month: "Dec '23", paid: 0, contract: 0, uncommitted: 0, risk: 0, clientCont: 0, projectCont: 0, cumulative: 0 },
    { month: "Jan '24", paid: 50000, contract: 150000, uncommitted: 30000, risk: 0, clientCont: 0, projectCont: 0, cumulative: 230000 },
    { month: "Feb '24", paid: 80000, contract: 200000, uncommitted: 50000, risk: 0, clientCont: 0, projectCont: 0, cumulative: 560000 },
    { month: "Mar '24", paid: 120000, contract: 250000, uncommitted: 80000, risk: 0, clientCont: 0, projectCont: 0, cumulative: 1010000 },
    { month: "Apr '24", paid: 150000, contract: 300000, uncommitted: 100000, risk: 0, clientCont: 0, projectCont: 0, cumulative: 1560000 },
    { month: "May '24", paid: 180000, contract: 350000, uncommitted: 120000, risk: 0, clientCont: 0, projectCont: 0, cumulative: 2210000 },
    { month: "Jun '24", paid: 220000, contract: 400000, uncommitted: 150000, risk: 0, clientCont: 0, projectCont: 0, cumulative: 2980000 },
    { month: "Jul '24", paid: 250000, contract: 450000, uncommitted: 180000, risk: 0, clientCont: 0, projectCont: 0, cumulative: 3860000 },
    { month: "Aug '24", paid: 280000, contract: 500000, uncommitted: 200000, risk: 0, clientCont: 0, projectCont: 0, cumulative: 4840000 },
    { month: "Sep '24", paid: 320000, contract: 550000, uncommitted: 230000, risk: 0, clientCont: 0, projectCont: 0, cumulative: 5940000 },
    { month: "Oct '24", paid: 350000, contract: 600000, uncommitted: 250000, risk: 0, clientCont: 0, projectCont: 0, cumulative: 7150000 },
    { month: "Nov '24", paid: 380000, contract: 650000, uncommitted: 280000, risk: 0, clientCont: 0, projectCont: 0, cumulative: 8460000 },
    { month: "Dec '24", paid: 420000, contract: 700000, uncommitted: 300000, risk: 0, clientCont: 0, projectCont: 0, cumulative: 9880000 },
    { month: "Jan '25", paid: 450000, contract: 750000, uncommitted: 320000, risk: 30000, clientCont: 0, projectCont: 0, cumulative: 11400000 },
    { month: "Feb '25", paid: 480000, contract: 800000, uncommitted: 350000, risk: 30000, clientCont: 0, projectCont: 0, cumulative: 13000000 },
    { month: "Mar '25", paid: 520000, contract: 850000, uncommitted: 380000, risk: 30000, clientCont: 0, projectCont: 0, cumulative: 14710000 },
    { month: "Apr '25", paid: 550000, contract: 900000, uncommitted: 400000, risk: 30000, clientCont: 0, projectCont: 0, cumulative: 16520000 },
    { month: "May '25", paid: 580000, contract: 950000, uncommitted: 430000, risk: 30000, clientCont: 0, projectCont: 0, cumulative: 18430000 },
    { month: "Jun '25", paid: 620000, contract: 1000000, uncommitted: 450000, risk: 30000, clientCont: 0, projectCont: 0, cumulative: 20450000 },
    { month: "Jul '25", paid: 650000, contract: 1050000, uncommitted: 480000, risk: 30000, clientCont: 0, projectCont: 0, cumulative: 22580000 },
    { month: "Aug '25", paid: 750000, contract: 1200000, uncommitted: 550000, risk: 50000, clientCont: 30000, projectCont: 30000, cumulative: 24860000 },
    { month: "Sep '25", paid: 800000, contract: 1300000, uncommitted: 600000, risk: 50000, clientCont: 30000, projectCont: 30000, cumulative: 27270000 },
    { month: "Oct '25", paid: 850000, contract: 1400000, uncommitted: 650000, risk: 50000, clientCont: 30000, projectCont: 30000, cumulative: 29810000 },
    { month: "Nov '25", paid: 800000, contract: 1300000, uncommitted: 600000, risk: 50000, clientCont: 30000, projectCont: 30000, cumulative: 32320000 },
    { month: "Dec '25", paid: 750000, contract: 1200000, uncommitted: 550000, risk: 50000, clientCont: 30000, projectCont: 30000, cumulative: 34750000 },
    { month: "Jan '26", paid: 700000, contract: 1100000, uncommitted: 500000, risk: 50000, clientCont: 30000, projectCont: 30000, cumulative: 37100000 },
    { month: "Feb '26", paid: 650000, contract: 1000000, uncommitted: 450000, risk: 50000, clientCont: 30000, projectCont: 30000, cumulative: 39370000 },
    { month: "Mar '26", paid: 600000, contract: 950000, uncommitted: 400000, risk: 50000, clientCont: 30000, projectCont: 30000, cumulative: 41560000 },
    { month: "Apr '26", paid: 550000, contract: 900000, uncommitted: 350000, risk: 50000, clientCont: 30000, projectCont: 30000, cumulative: 43670000 },
    { month: "May '26", paid: 500000, contract: 850000, uncommitted: 300000, risk: 50000, clientCont: 30000, projectCont: 30000, cumulative: 45700000 },
    { month: "Jun '26", paid: 450000, contract: 800000, uncommitted: 250000, risk: 50000, clientCont: 30000, projectCont: 30000, cumulative: 47650000 },
    { month: "Jul '26", paid: 400000, contract: 750000, uncommitted: 200000, risk: 50000, clientCont: 30000, projectCont: 30000, cumulative: 49520000 },
    { month: "Aug '26", paid: 350000, contract: 700000, uncommitted: 150000, risk: 50000, clientCont: 30000, projectCont: 30000, cumulative: 51310000 },
    { month: "Sep '26", paid: 300000, contract: 650000, uncommitted: 100000, risk: 50000, clientCont: 30000, projectCont: 30000, cumulative: 53020000 },
    { month: "Oct '26", paid: 250000, contract: 600000, uncommitted: 50000, risk: 50000, clientCont: 30000, projectCont: 30000, cumulative: 54650000 },
    { month: "Nov '26", paid: 200000, contract: 550000, uncommitted: 0, risk: 50000, clientCont: 30000, projectCont: 30000, cumulative: 56200000 },
    { month: "Dec '26", paid: 150000, contract: 500000, uncommitted: 0, risk: 0, clientCont: 0, projectCont: 0, cumulative: 57750000 },
  ]

  return (
    <div className="card card-hover animate-fade-in">
      <div className="card-content p-6">
        <div className="mb-6 pb-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Cash Flow</h2>
        </div>
        <div className="bg-gray-50 rounded-lg p-5">
          <ResponsiveContainer width="100%" height={420}>
            <ComposedChart data={cashFlowData} margin={{ top: 5, right: 30, left: 20, bottom: 80 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis 
                dataKey="month" 
                angle={-45}
                textAnchor="end"
                height={100}
                style={{ fontSize: '11px', fontWeight: '500' }}
              />
              <YAxis 
                yAxisId="left"
                label={{ value: '$', angle: -90, position: 'insideLeft', style: { fontWeight: 'bold' } }}
                domain={[0, 3900000]}
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                yAxisId="right"
                orientation="right"
                label={{ value: '$ Cumulative', angle: 90, position: 'insideRight', style: { fontWeight: 'bold' } }}
                domain={[0, 60000000]}
                style={{ fontSize: '12px' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb', 
                  borderRadius: '12px',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  padding: '12px'
                }}
                formatter={(value) => `$${value.toLocaleString()}`}
              />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
              <Bar yAxisId="left" dataKey="paid" stackId="a" fill="#10b981" name="Paid" radius={[0, 0, 0, 0]} />
              <Bar yAxisId="left" dataKey="contract" stackId="a" fill="#3b82f6" name="Contract" radius={[0, 0, 0, 0]} />
              <Bar yAxisId="left" dataKey="uncommitted" stackId="a" fill="#1e293b" name="Uncommitted" radius={[0, 0, 0, 0]} />
              <Bar yAxisId="left" dataKey="risk" stackId="a" fill="#eab308" name="Risk" radius={[0, 0, 0, 0]} />
              <Bar yAxisId="left" dataKey="clientCont" stackId="a" fill="#a855f7" name="Client Cont." radius={[0, 0, 0, 0]} />
              <Bar yAxisId="left" dataKey="projectCont" stackId="a" fill="#ef4444" name="Project Cont." radius={[8, 8, 0, 0]} />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="cumulative" 
                stroke="#f97316" 
                strokeWidth={4}
                dot={{ r: 5, fill: '#f97316', strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 7 }}
                name="Cumulative Overlay"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

