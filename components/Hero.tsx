import React from 'react';

const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" {...props}>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const ShieldCheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 019-4.521 11.955 11.955 0 019 4.521A12.02 12.02 0 0021 7.056a11.955 11.955 0 01-5.618-4.016z" />
    </svg>
);

const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const trustBadges = [
  { icon: <StarIcon className="h-10 w-10 text-sky-400" />, text: 'BBB A+ Rated' },
  { icon: <UserIcon className="h-10 w-10 text-sky-400" />, text: 'Woman-Owned' },
  { icon: <ShieldCheckIcon className="h-10 w-10 text-sky-400" />, text: 'Licensed & Insured' },
  { icon: <MapPinIcon className="h-10 w-10 text-sky-400" />, text: 'Tri-Cities Local' },
];

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-bg bg-cover bg-center -mt-20">
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl text-center text-white px-4">
          <h1 className="font-poppins text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Quality Craftsmanship. Personalized Service. Beautiful Results.
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Your trusted Kennewick partner for complete home transformations. Specializing in kitchen, bathroom, and complete home remodeling since 2018.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-sky-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-sky-700 transition-all duration-300 text-lg">
              Get a Free Quote
            </a>
            <a href="#portfolio" className="bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-lg hover:bg-white/30 transition-all duration-300 text-lg">
              View Our Work
            </a>
          </div>
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 justify-center">
            {trustBadges.map((badge) => (
              <div key={badge.text} className="flex flex-col items-center">
                <div className="mb-2">{badge.icon}</div>
                <p className="text-slate-100 font-semibold">{badge.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;