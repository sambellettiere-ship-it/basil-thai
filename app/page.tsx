import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-20 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
        {/* Recreated Logo from Image */}
        <div className="flex flex-col items-center leading-none bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-stone-100">
          <div className="flex items-center gap-1">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#7cc242]">
              <path d="M17.5,2C15,2 12,4 10.5,6.5C9,4 6,2 3.5,2C3.5,2 2,12 8,16.5C8,16.5 7,20 7,22L9,22C9,19 10.5,17 10.5,17C10.5,17 12,19 12,22L14,22C14,20 13,16.5 13,16.5C19,12 17.5,2 17.5,2Z" />
            </svg>
            <span className="text-[#7cc242] font-semibold text-2xl tracking-tight">Basil</span>
          </div>
          <span className="text-[#f51663] font-black text-3xl tracking-[0.15em] uppercase -mt-1">Thai</span>
          <span className="font-serif text-stone-900 text-sm tracking-[0.2em] uppercase mt-1">Kitchen</span>
        </div>

        <a 
          href="#order" 
          className="bg-[#7cc242] hover:bg-[#6ab035] text-white px-7 py-3 rounded-full font-bold transition-transform hover:scale-105 shadow-lg shadow-[#7cc242]/30"
        >
          Order Online
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=2000')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/50 to-[#f51663]/20"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-[#7cc242]/50 bg-[#7cc242]/10 backdrop-blur-sm text-[#7cc242] font-semibold tracking-wide text-sm">
            Authentic Recipes • Fresh Ingredients
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-xl text-balance leading-tight">
            Spice Up Your Day in <br/>
            <span className="text-[#f51663] drop-shadow-[0_0_15px_rgba(245,22,99,0.5)]">Champaign, IL</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-10 font-medium max-w-2xl mx-auto text-balance drop-shadow-md">
            Experience the vibrant fusion of traditional Thai flavors. Ready for pickup or delivery right here in town.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a href="#order" className="bg-[#f51663] hover:bg-[#d41355] text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#f51663]/40 w-full sm:w-auto hover:-translate-y-1">
              Start Your Order
            </a>
            <a href="#menu" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-[#7cc242] px-8 py-4 rounded-full font-bold text-lg transition-all w-full sm:w-auto hover:-translate-y-1">
              Explore Menu
            </a>
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      <section id="menu" className="py-24 px-6 max-w-7xl mx-auto w-full relative">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#7cc242]/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#f51663]/5 rounded-full blur-3xl -z-10"></div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-stone-900">
            <span className="text-[#7cc242]">Champaign</span> Favorites
          </h2>
          <div className="w-24 h-1.5 bg-[#f51663] mx-auto mb-6 rounded-full"></div>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto font-medium">
            The dishes our local community keeps coming back for, prepared fresh to order.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Authentic Pad Thai", desc: "Thin rice noodles stir-fried with egg, crushed peanuts, bean sprouts, and scallions in our signature tamarind sauce.", price: "$14", tag: "Popular" },
            { name: "Spicy Drunken Noodles", desc: "Wide rice noodles stir-fried with a spicy basil sauce, bell peppers, onions, tomatoes, and fresh basil leaves.", price: "$15", tag: "Spicy" },
            { name: "Classic Green Curry", desc: "Traditional Thai green curry paste simmered in coconut milk with bamboo shoots, bell peppers, and sweet basil.", price: "$16", tag: "Chef's Choice" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border-2 border-stone-100 hover:border-[#7cc242] hover:shadow-2xl hover:shadow-[#7cc242]/10 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#7cc242] to-[#f51663] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-bold text-[#f51663] uppercase tracking-wider mb-2 block">{item.tag}</span>
                  <h3 className="text-2xl font-black text-stone-900">{item.name}</h3>
                </div>
                <span className="text-white font-black bg-[#7cc242] px-4 py-1.5 rounded-full text-lg shadow-md">{item.price}</span>
              </div>
              <p className="text-stone-600 leading-relaxed font-medium mt-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="bg-stone-900 text-white py-24 px-6 mt-auto border-t-[6px] border-[#f51663]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Visit Us on North Neil</h2>
            <p className="text-stone-300 mb-10 text-lg leading-relaxed max-w-md">
              Located conveniently in Champaign, we're your neighborhood spot for quick lunches and memorable dinners.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-[#7cc242]/20 p-4 rounded-2xl text-[#7cc242] border border-[#7cc242]/30">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-white">Address</h4>
                  <p className="text-stone-400 font-medium">2000 N Neil St<br/>Champaign, IL 61820</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="bg-[#f51663]/20 p-4 rounded-2xl text-[#f51663] border border-[#f51663]/30">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-white">Hours</h4>
                  <p className="text-stone-400 font-medium">Open Daily<br/>10:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-96 bg-stone-800 rounded-3xl border-4 border-stone-800 flex items-center justify-center shadow-2xl overflow-hidden relative group">
             {/* Map Placeholder - Replace iframe src with their actual Google Maps embed link */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000')] bg-cover bg-center opacity-40 mix-blend-luminosity grayscale group-hover:grayscale-0 transition-all duration-500"></div>
             <div className="relative z-10 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-white font-bold shadow-lg">
               [ Embed Google Map Here ]
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-stone-500 py-12 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start leading-none opacity-80 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-1">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#7cc242]">
                <path d="M17.5,2C15,2 12,4 10.5,6.5C9,4 6,2 3.5,2C3.5,2 2,12 8,16.5C8,16.5 7,20 7,22L9,22C9,19 10.5,17 10.5,17C10.5,17 12,19 12,22L14,22C14,20 13,16.5 13,16.5C19,12 17.5,2 17.5,2Z" />
              </svg>
              <span className="text-[#7cc242] font-semibold text-xl tracking-tight">Basil</span>
            </div>
            <span className="text-[#f51663] font-black text-2xl tracking-[0.15em] uppercase -mt-1">Thai</span>
            <span className="font-serif text-stone-400 text-xs tracking-[0.2em] uppercase mt-1">Kitchen</span>
          </div>
          
          <p className="text-sm font-medium">&copy; {new Date().getFullYear()} Basil Thai Kitchen. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
