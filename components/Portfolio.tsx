
import React, { useState } from 'react';

const portfolioItems = [
  { id: 1, category: 'Kitchen', image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW9kZXJuJTIwRmFybWhvdXNlJTIwS2l0Y2hlbnxlbnwwfHwwfHx8MA%3D%3D', title: 'Modern Farmhouse Kitchen' },
  { id: 3, category: 'Flooring', image: 'https://plus.unsplash.com/premium_photo-1683129678799-a30041cebb62?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEhhcmR3b29kJTIwRmxvb3JpbmclMjBJbnN0YWxsYXRpb258ZW58MHx8MHx8fDA%3D', title: 'Hardwood Flooring Installation' },
  { id: 4, category: 'Remodel', image: 'https://images.unsplash.com/photo-1760072513357-9d450e935a80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8T3BlbiUyMENvbmNlcHQlMjBMaXZpbmd8ZW58MHx8MHx8fDA%3D', title: 'Open Concept Living' },
  { id: 5, category: 'Kitchen', image: 'https://images.unsplash.com/photo-1707243103665-1de6cbf8f66f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3BlbiUyMENvbmNlcHQlMjBMaXZpbmd8ZW58MHx8MHx8fDA%3D', title: 'Sleek & Minimalist Kitchen' },
  { id: 6, category: 'Bathroom', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmF0aHJvb218ZW58MHx8MHx8fDA%3D', title: 'Guest Bathroom Update' },
  { id: 7, category: 'Remodel', image: 'https://images.unsplash.com/photo-1611066415884-1eca899980ce?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fEhvbWUlMjBSZW5vdmF0aW9ufGVufDB8fDB8fHww', title: 'Full Home Renovation' },
];

const categories = ['All', 'Kitchen', 'Bathroom', 'Flooring', 'Remodel'];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold font-poppins text-slate-900 sm:text-4xl">
            Our Work
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Explore a selection of our recent projects and see the quality and craftsmanship we bring to every home.
          </p>
        </div>
        <div className="flex justify-center space-x-2 sm:space-x-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-sky-600 text-white'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg shadow-lg aspect-square">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 flex items-end">
                <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-bold text-xl">{item.title}</h3>
                  <p className="text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;