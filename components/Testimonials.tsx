
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "C & M Contracting transformed our outdated kitchen into the kitchen of our dreams. Lorena's attention to detail was incredible. We couldn't be happier!",
    name: 'The Johnson Family',
    location: 'Kennewick, WA',
  },
  {
    quote: "Professional, reliable, and the quality of their work is top-notch. They handled our complete home remodel on time and on budget. Highly recommend!",
    name: 'Mark & Susan R.',
    location: 'Richland, WA',
  },
  {
    quote: "The new flooring they installed is absolutely beautiful. The entire process was smooth and stress-free. It's refreshing to work with such a professional, woman-owned business.",
    name: 'Jessica P.',
    location: 'Pasco, WA',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold font-poppins text-slate-900 sm:text-4xl">
          What Our Clients Say
        </h2>
        <div className="mt-8 relative h-48">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <blockquote className="text-xl text-slate-700 italic">
                “{testimonial.quote}”
              </blockquote>
              <cite className="mt-4 block font-bold text-slate-800 not-italic">
                {testimonial.name}
              </cite>
              <p className="text-slate-500">{testimonial.location}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <button onClick={prevTestimonial} className="bg-white text-sky-600 p-2 rounded-full shadow-md hover:bg-slate-200 transition-colors">
            &larr;
          </button>
          <button onClick={nextTestimonial} className="bg-white text-sky-600 p-2 rounded-full shadow-md hover:bg-slate-200 transition-colors">
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
