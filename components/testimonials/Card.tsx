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
    <div className="relative mr-16">
            {/* Testimonial Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 relative z-10">
                {/* Profile Image */}
                <div className="w-[80px] h-[80px] rounded-full overflow-hidden">
                    <img
                        src={testimonial.image} // Dynamically render the profile picture
                        alt={testimonial.writer}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Testimonial */}
                <div className="mt-2">
                    <p className="text-[16px] text-[#5E6282]">{testimonial.des}</p>
                    <div className="mt-4 text-[18px]">
                        <p className="font-bold text-gray-900">{testimonial.writer}</p>
                        <p className="text-[#5E6282]">{testimonial.location}</p>
                    </div>
                </div>
            </div>

            {/* Additional Info */}
            <div className="absolute h-[360px] sm:h-[220px] top-32 left-10 w-full border bg-gray-100 rounded-lg z-0 ">
                <div className="px-6 absolute bottom-0 py-4">
                    <p className="font-bold text-gray-800">{testimonial.name}Chris Thomas</p>
                    <p className="text-sm text-gray-600">{testimonial.pos}CEO of Red Button</p>
                </div>
            </div>

        </div>
  );
};

export default TestimonialCard;




  