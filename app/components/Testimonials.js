export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Smith',
      role: 'Project Manager',
      company: 'ABC Corporation',
      content: 'Outstanding work and exceptional attention to detail. The team delivered exactly what we needed on time and within budget.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      role: 'Director',
      company: 'XYZ Industries',
      content: 'Professional, reliable, and innovative solutions. We highly recommend their services for any major project.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'Tech Solutions Inc',
      content: 'The best decision we made was choosing this team. Their expertise and dedication are unmatched.',
      rating: 5,
    },
  ]

  return (
    <section className="section-container bg-white">
      <div className="text-center mb-12">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="section-subtitle">
          What our clients say about working with us
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 mb-6 italic leading-relaxed">
              "{testimonial.content}"
            </p>
            <div>
              <div className="font-bold text-gray-900">{testimonial.name}</div>
              <div className="text-sm text-gray-500">
                {testimonial.role} at {testimonial.company}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

