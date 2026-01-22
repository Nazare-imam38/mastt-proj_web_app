export default function Statistics() {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: '📊' },
    { number: '200+', label: 'Happy Clients', icon: '😊' },
    { number: '50+', label: 'Team Members', icon: '👥' },
    { number: '15+', label: 'Years Experience', icon: '⭐' },
  ]

  return (
    <section className="section-container bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
        <p className="text-lg text-blue-100 max-w-3xl mx-auto">
          Numbers that speak for themselves
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-5xl mb-4">{stat.icon}</div>
            <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
            <div className="text-blue-100 text-lg">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

