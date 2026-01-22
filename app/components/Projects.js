export default function Projects() {
  const projects = [
    {
      title: 'Infrastructure Development',
      description: 'Large-scale infrastructure projects with sustainable design principles.',
      category: 'Infrastructure',
    },
    {
      title: 'Urban Planning',
      description: 'Comprehensive urban planning solutions for modern cities.',
      category: 'Planning',
    },
    {
      title: 'Water Management',
      description: 'Advanced water management systems and sustainable solutions.',
      category: 'Water Systems',
    },
    {
      title: 'Transportation',
      description: 'Innovative transportation solutions and network optimization.',
      category: 'Transport',
    },
    {
      title: 'Environmental Engineering',
      description: 'Eco-friendly engineering solutions for sustainable development.',
      category: 'Environment',
    },
    {
      title: 'Building Design',
      description: 'Modern architectural design with energy-efficient solutions.',
      category: 'Architecture',
    },
  ]

  return (
    <section id="projects" className="section-container bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="section-title">Our Projects</h2>
        <p className="section-subtitle">
          Showcasing our portfolio of successful projects and achievements
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
              <div className="text-white text-6xl font-bold opacity-30">{index + 1}</div>
            </div>
            <div className="p-6">
              <span className="text-sm font-semibold text-primary mb-2 inline-block">
                {project.category}
              </span>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
              <a
                href="#contact"
                className="text-primary font-semibold hover:underline inline-flex items-center"
              >
                View Details →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

