export default function HealthIndicators() {
  return (
    <div className="card card-hover animate-fade-in overflow-hidden">
      <div className="card-content p-0 h-full">
        {/* Construction Site Image - Full Card */}
        <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
          <img 
            src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop" 
            alt="Construction Site" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

