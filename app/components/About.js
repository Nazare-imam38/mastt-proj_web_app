export default function About() {
  return (
    <section id="about" className="section-container bg-white">
      <div className="text-center mb-12">
        <h2 className="section-title">About Our Project</h2>
        <p className="section-subtitle">
          We are dedicated to delivering excellence in every project we undertake
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our mission is to provide innovative solutions and outstanding service
            to our clients, ensuring the highest standards of quality and professionalism
            in every project we deliver.
          </p>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            To be a leading organization recognized for excellence, innovation,
            and commitment to sustainable development practices.
          </p>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

