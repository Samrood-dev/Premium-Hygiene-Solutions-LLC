import { Star } from "lucide-react";

// Reviews Section
const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      date: "December 2024",
      service: "Home Cleaning",
      review: "Absolutely fantastic service! The team was professional, thorough, and my house has never looked better. They paid attention to every detail and were very respectful of my home. I'll definitely be using PremiumHygiene regularly.",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      rating: 5,
      date: "November 2024",
      service: "Office Cleaning",
      review: "We've been using PremiumHygiene for our office for 6 months now and couldn't be happier. They're always on time, professional, and our workspace looks immaculate. Our employees have noticed the difference!",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      date: "January 2025",
      service: "Deep Cleaning",
      review: "I hired PremiumHygiene for a deep clean before moving into my new apartment. They exceeded my expectations! Every corner was spotless, and they even cleaned areas I didn't think about. Worth every penny!",
      avatar: "ER"
    },
    {
      name: "David Thompson",
      rating: 4,
      date: "December 2024",
      service: "Commercial Cleaning",
      review: "Great service overall. The cleaning crew is efficient and does a good job. There was a minor scheduling issue once, but they resolved it quickly and professionally. Would recommend!",
      avatar: "DT"
    },
    {
      name: "Lisa Martinez",
      rating: 5,
      date: "October 2024",
      service: "Home Cleaning",
      review: "I'm so impressed with PremiumHygiene! As a busy mom of three, having them come bi-weekly has been a lifesaver. The team is trustworthy, friendly, and my home always sparkles when they're done.",
      avatar: "LM"
    },
    {
      name: "James Wilson",
      rating: 5,
      date: "November 2024",
      service: "Office Cleaning",
      review: "Professional, reliable, and thorough. They use eco-friendly products which was important to us. Our office has never been cleaner. Highly recommend PremiumHygiene to any business!",
      avatar: "JW"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "10,000+", label: "Cleanings Completed" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "98%", label: "Client Retention" }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">What Our Clients Say</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our satisfied customers have to say about our cleaning services.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="min-w-70 max-w-[320px] bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition snap-center"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-lg mr-4">
                  {review.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>

              <div className="flex mb-3">{renderStars(review.rating)}</div>

              <div className="mb-3">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                  {review.service}
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed">{review.review}</p>
            </div>
          ))}
        </div>


        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary to-primary-dark rounded-lg p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust PremiumHygiene for their cleaning needs.
          </p>
          <a href="/booking" className="inline-block bg-white text-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
            Book Your Cleaning Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews