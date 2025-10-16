import React from 'react';

// FIX: Define SVG icons for use within the component.
const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.5 1.5 0 012.122 0l8.954 8.955M3.75 21V9.75M20.25 21V9.75M8.25 21v-6.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75V21" />
    </svg>
);

const KitchenIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
    </svg>
);

const BathroomIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1.5-1.5m1.5 1.5V21m3.75-18v11.25a2.25 2.25 0 002.25 2.25h2.25" />
    </svg>
);

const FlooringIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
);

const services = [
  {
    icon: <HomeIcon className="h-10 w-10 text-white" />,
    name: 'Complete Home Remodeling',
    description: 'From concept to completion, we handle full-scale renovations to transform your entire living space.',
  },
  {
    icon: <KitchenIcon className="h-10 w-10 text-white" />,
    name: 'Kitchen Renovations',
    description: 'Custom cabinets, modern countertops, and functional layouts to create the kitchen you\'ve always wanted.',
  },
  {
    icon: <BathroomIcon className="h-10 w-10 text-white" />,
    name: 'Bathroom Upgrades',
    description: 'Turn your bathroom into a personal spa with our expert tiling, fixture installation, and design services.',
  },
  {
    icon: <FlooringIcon className="h-10 w-10 text-white" />,
    name: 'Flooring & Tiling',
    description: 'We install a wide variety of high-quality flooring, including hardwood, vinyl, and custom tile work.',
  },
];

// FIX: Create a valid React functional component to replace placeholder text.
const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold font-poppins text-slate-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            We offer a comprehensive range of remodeling services to enhance the beauty and functionality of your home.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.name} className="pt-6">
              <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-md">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-sky-600 rounded-md shadow-lg">
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-bold font-poppins text-slate-900 tracking-tight">{service.name}</h3>
                  <p className="mt-5 text-base text-slate-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
