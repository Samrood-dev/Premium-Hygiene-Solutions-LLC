import { Star } from "lucide-react";
import MotionContainer from "./MotionContainer/MotionContainer";
import MotionItem from "./MotionItem/MotionItem";
import TriangleArrow from "./TriangleArrow";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      date: "December 2024",
      service: "Home Cleaning",
      review:
        "Absolutely fantastic service! The team was professional, thorough, and my house has never looked better.",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      rating: 5,
      date: "November 2024",
      service: "Office Cleaning",
      review:
        "We've been using PremiumHygiene for our office and couldn't be happier. Always on time and professional.",
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      date: "January 2025",
      service: "Deep Cleaning",
      review:
        "They exceeded my expectations! Every corner was spotless. Worth every penny.",
      avatar: "ER",
    },
    {
      name: "David Thompson",
      rating: 4,
      date: "December 2024",
      service: "Commercial Cleaning",
      review:
        "Great service overall. Minor issue once, but resolved quickly and professionally.",
      avatar: "DT",
    },
    {
      name: "Lisa Martinez",
      rating: 5,
      date: "October 2024",
      service: "Home Cleaning",
      review:
        "As a busy mom, having them come bi-weekly has been a lifesaver. Highly recommended!",
      avatar: "LM",
    },
    {
      name: "James Wilson",
      rating: 5,
      date: "November 2024",
      service: "Office Cleaning",
      review:
        "Professional, reliable, and eco-friendly. Our office has never been cleaner.",
      avatar: "JW",
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "10,000+", label: "Cleanings Completed" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "98%", label: "Client Retention" },
  ];

  const renderStars = (rating: number) =>
    [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
      />
    ));

  return (
    <section id="reviews" className=" bg-white">
      <TriangleArrow />
      <div className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <MotionContainer className="text-center mb-12">
            <MotionItem>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
            </MotionItem>
            <MotionItem>
              <p className="text-gray-600 max-w-2xl text-xl mx-auto">
                Don't just take our word for it. Here's what our customers say.
              </p>
            </MotionItem>
          </MotionContainer>

          {/* Stats */}
          <MotionContainer className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <MotionItem key={index}>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-xl">{stat.label}</div>
                </div>
              </MotionItem>
            ))}
          </MotionContainer>

          {/* Reviews */}
          <MotionContainer className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {reviews.map((review, index) => (
              <MotionItem key={index} className="min-w-70 max-w-[320px] h-96 bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition snap-center">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-semibold text-lg mr-4">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-xl text-gray-900">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>

                <div className="flex mb-3">{renderStars(review.rating)}</div>

                <div className="mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 text-lg px-4 py-1 rounded-full">
                    {review.service}
                  </span>
                </div>

                <p className="text-gray-700 text-xl leading-relaxed">
                  {review.review}
                </p>
              </MotionItem>
            ))}
          </MotionContainer>

          {/* CTA */}
          <MotionContainer className="mt-16">
            <div className="text-center bg-linear-to-r from-primary to-primary-dark rounded-lg p-12">
              <MotionItem>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Experience the Difference?
                </h3>
              </MotionItem>
              <MotionItem>
                <p className="text-blue-100 text-md mb-6 max-w-2xl mx-auto">
                  Join hundreds of satisfied customers who trust PremiumHygiene.
                </p>
              </MotionItem>
              <MotionItem>
                <a
                  href="/booking"
                  className="inline-block bg-white text-primary px-8 py-3 rounded-lg text-2xl font-semibold hover:bg-gray-100 transition"
                >
                  Book Your Cleaning Today
                </a>
              </MotionItem>
            </div>
          </MotionContainer>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
