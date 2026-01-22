export default function BudgetTable() {
  const budgetData = [
    { name: 'Budget', amount: 34000000 },
    { name: '> Forecast Final Cost', amount: 33505000 },
    { name: 'Upper Variance', amount: 495000, isVariance: true, isPositive: true },
    { name: 'Lower Variance', amount: 2615000, isVariance: true, isPositive: true },
    { name: 'Paid to Date', amount: 4977139 },
  ]

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="card card-hover animate-fade-in">
      <div className="card-content p-6">
        <div className="mb-6 pb-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Budget vs FFC Table</h2>
        </div>
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-3 px-6 font-semibold text-gray-700 text-sm">Name</th>
                <th className="text-right py-3 px-6 font-semibold text-gray-700 text-sm">Amount</th>
              </tr>
            </thead>
            <tbody>
              {budgetData.map((row, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-6 text-gray-700 font-medium text-sm">{row.name}</td>
                  <td className={`py-3 px-6 text-right font-semibold text-sm ${
                    row.isVariance && row.isPositive ? 'text-emerald-600' : 'text-gray-900'
                  }`}>
                    {formatCurrency(row.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

