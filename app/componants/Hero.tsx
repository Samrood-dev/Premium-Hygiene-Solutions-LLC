
const Hero = () => {
    return (
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Professional Cleaning Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We provide top-quality cleaning services for homes and offices. Experience the sparkle of a professionally cleaned space.
            </p>
            <a href="/booking" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
              Book an Appointment
            </a>
          </div>
        </div>
      </section>
    );
  };

  export default Hero