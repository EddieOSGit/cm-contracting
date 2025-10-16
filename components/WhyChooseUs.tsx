
import React from 'react';

// FIX: Define SVG icon for use within the component.
const CheckBadgeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const features = [
  {
    name: 'Uncompromising Quality',
    description: 'We use only the finest materials and employ meticulous craftsmanship to ensure every detail is perfect, delivering results that last.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Customer-Centric Approach',
    description: 'Your vision is our blueprint. We listen, collaborate, and maintain clear communication throughout the project to ensure your complete satisfaction.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Licensed, Insured & Trusted',
    description: 'As a fully licensed and insured contractor with a BBB A+ rating, you can have complete peace of mind when you work with us.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Local, Woman-Owned Business',
    description: 'We are proud to be a part of the Tri-Cities community and bring a unique perspective and commitment to excellence to every project.',
    icon: CheckBadgeIcon,
  },
];

// FIX: Create a valid React functional component to replace placeholder text.
const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold font-poppins text-slate-900 sm:text-4xl">
              Your Vision, Expertly Crafted
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              At C & M Contracting, we believe that a successful remodel is more than just construction; it's a partnership. We combine your ideas with our expertise to create spaces that are not only beautiful but also perfectly suited to your lifestyle.
            </p>
            <div className="mt-8 space-y-6">
              {features.map((feature) => (
                <div key={feature.name} className="flex">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-sky-600" aria-hidden="true" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-bold font-poppins text-slate-900">{feature.name}</h3>
                    <p className="mt-2 text-base text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 lg:mt-0" aria-hidden="true">
            <img 
              className="relative mx-auto rounded-lg shadow-xl" 
              width={490} 
              src="https://images.unsplash.com/photo-1683372101362-2efc3e75650e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVtb2RlbGluZ3xlbnwwfHwwfHx8MA%3D%3D" 
              alt="Home remodeling project"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;