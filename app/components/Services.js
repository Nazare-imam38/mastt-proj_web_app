export default function Services() {
  const services = [
    {
      title: 'Consulting Services',
      description: 'Expert consultation to guide your project from concept to completion.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Design & Planning',
      description: 'Comprehensive design and planning services tailored to your needs.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Project Management',
      description: 'Professional project management ensuring timely and efficient delivery.',
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Quality Control',
      description: 'Rigorous quality assurance and testing at every stage of development.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: 'Implementation',
      description: 'Seamless implementation with minimal disruption to your operations.',
      color: 'from-red-500 to-red-600',
    },
    {
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance to ensure long-term success.',
      color: 'from-teal-500 to-teal-600',
    },
  ]

  return (
    <section id="services" className="section-container bg-white">
      <div className="text-center mb-12">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive solutions tailored to meet your specific requirements
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className={`bg-gradient-to-br ${service.color} p-8 text-white h-full`}>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/90 leading-relaxed">{service.description}</p>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-block px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

