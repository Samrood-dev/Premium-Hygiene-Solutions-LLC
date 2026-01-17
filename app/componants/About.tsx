import { CheckCircle } from "lucide-react";

// About Section
const About = () => {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">About Premium Hygiene Solutions LLC </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To provide exceptional cleaning services that exceed our clients' expectations while maintaining the highest standards of professionalism and environmental responsibility.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                To be the most trusted and preferred cleaning service provider, known for our reliability, quality, and customer satisfaction.
              </p>
  
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Experience</h3>
              <p className="text-gray-600">
                With over 10 years of experience in the cleaning industry, we have served thousands of satisfied customers across the region.
              </p>
            </div>
  
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Trained and background-checked professionals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Eco-friendly cleaning products</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">100% satisfaction guarantee</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Flexible scheduling and competitive pricing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Fully insured and bonded</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default  About