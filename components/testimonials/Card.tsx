import React from "react";

// Define the Testimonial type
type Testimonial = {
  image: string;
  des: string;
  writer: string;
  location: string;
  name: string;
  pos: string;
};

type TestimonialCardProps = {
  testimonial: Testimonial;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="relative">
      {/* Testimonial Card */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        {/* Profile Image */}
        <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
          <img
            src={testimonial.image}
            alt={`Image of ${testimonial.writer}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="mt-4">
          <p className="text-sm text-gray-600">{testimonial.des}</p>
          <div className="mt-4">
            <p className="font-bold text-gray-900">{testimonial.writer}</p>
            <p className="text-gray-500">{testimonial.location}</p>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="absolute top-28 left-4 w-[90%] bg-gray-100 rounded-lg p-4 shadow-md">
        <p className="font-bold text-gray-800">{testimonial.name}</p>
        <p className="text-sm text-gray-600">{testimonial.pos}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;




  