import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-20 px-6 py-5 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
        <div className="text-2xl font-black tracking-tighter text-white drop-shadow-md">
          BASIL THAI
        </div>
        <a 
          href="#order" 
          className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg"
        >
          Order Online
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=2000')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-stone-900/50"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-12">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg text-balance">
            Authentic Thai Food in <span className="text-emerald-400">Champaign, IL</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 mb-10 font-medium max-w-2xl mx-auto text-balance">
            Fresh ingredients, bold flavors, and traditional recipes. Ready for pickup or delivery right here in town.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#order" className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-emerald-900/50 shadow-xl w-full sm:w-auto">
              Start Your Order
            </a>
            <a href="#menu" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg transition-all w-full sm:w-auto">
              Explore Menu
            </a>
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      <section id="menu" className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight text-stone-900">Champaign Favorites</h2>
          <p className="text-stone-500 text-lg max-w-2xl mx-auto">The dishes our local community keeps coming back for, prepared fresh to order.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Authentic Pad Thai", desc: "Thin rice noodles stir-fried with egg, crushed peanuts, bean sprouts, and scallions in our signature tamarind sauce.", price: "$14" },
            { name: "Spicy Drunken Noodles", desc: "Wide rice noodles stir-fried with a spicy basil sauce, bell peppers, onions, tomatoes, and fresh basil leaves.", price: "$15" },
            { name: "Classic Green Curry", desc: "Traditional Thai green curry paste simmered in coconut milk with bamboo shoots, bell peppers, and sweet basil.", price: "$16" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-stone-900">{item.name}</h3>
                <span className="text-emerald-600 font-bold bg-emerald-50 px-3 py-1 rounded-full text-sm">{item.price}</span>
              </div>
              <p className="text-stone-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="bg-stone-950 text-white py-24 px-6 mt-auto">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-6 tracking-tight">Visit Us on North Neil</h2>
            <p className="text-stone-400 mb-10 text-lg leading-relaxed max-w-md">
              Located conveniently in Champaign, we're your neighborhood spot for quick lunches and memorable dinners.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-stone-800 p-3 rounded-xl text-emerald-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Address</h4>
                  <p className="text-stone-400">2000 N Neil St<br/>Champaign, IL 61820</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-stone-800 p-3 rounded-xl text-emerald-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Hours</h4>
                  <p className="text-stone-400">Open Daily<br/>10:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-80 bg-stone-900 rounded-3xl border border-stone-800 flex items-center justify-center shadow-2xl overflow-hidden relative group">
             {/* Map Placeholder - Replace iframe src with their actual Google Maps embed link */}
             <div className="absolute inset-0 flex items-center justify-center text-stone-500 font-medium">
               [ Embed Google Map Here ]
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-stone-600 py-8 text-center text-sm border-t border-stone-900">
        <p>&copy; {new Date().getFullYear()} Basil Thai Kitchen. All rights reserved.</p>
      </footer>
    </main>
  );
}
