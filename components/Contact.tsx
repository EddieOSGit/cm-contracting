
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold font-poppins text-slate-900 sm:text-4xl">
            Ready to Transform Your Home?
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Contact us today for a no-obligation consultation. Let's discuss your vision and create a plan to bring it to life.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-slate-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold font-poppins mb-6">Send Us a Message</h3>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Full name</label>
                <input type="text" name="name" id="name" autoComplete="name" placeholder="Full name" className="block w-full shadow-sm py-3 px-4 placeholder-slate-500 focus:ring-sky-500 focus:border-sky-500 border-slate-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" autoComplete="email" placeholder="Email address" className="block w-full shadow-sm py-3 px-4 placeholder-slate-500 focus:ring-sky-500 focus:border-sky-500 border-slate-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone</label>
                <input type="text" name="phone" id="phone" autoComplete="tel" placeholder="Phone number" className="block w-full shadow-sm py-3 px-4 placeholder-slate-500 focus:ring-sky-500 focus:border-sky-500 border-slate-300 rounded-md" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" rows={4} placeholder="Tell us about your project..." className="block w-full shadow-sm py-3 px-4 placeholder-slate-500 focus:ring-sky-500 focus:border-sky-500 border border-slate-300 rounded-md"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                  Request Free Quote
                </button>
              </div>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold font-poppins mb-4">Contact Information</h3>
              <p className="text-lg text-slate-600"><strong>Phone:</strong> <a href="tel:5098201667" className="text-sky-600 hover:underline">(509) 820-1667</a></p>
              <p className="text-lg text-slate-600"><strong>Address:</strong> 3119 W 7th Ave, Kennewick, WA 99336</p>
              <p className="text-lg text-slate-600"><strong>License:</strong> #CMCONCL828PD</p>
            </div>
             <div>
              <h3 className="text-2xl font-bold font-poppins mb-4">Service Area</h3>
              <p className="text-lg text-slate-600">Proudly serving Kennewick, Pasco, Richland, West Richland, and the greater Tri-Cities area across Benton and Franklin Counties.</p>
            </div>
             <div className="h-64 bg-slate-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.940476481188!2d-119.18341668444264!3d46.19504897911634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54987a17480a7923%3A0xf69a19c67a7b8e1a!2s3119%20W%207th%20Ave%2C%20Kennewick%2C%20WA%2099336!5e0!3m2!1sen!2sus!4v1684351000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="C & M Contracting Location"
                ></iframe>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
