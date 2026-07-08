"use client";

import React from 'react';
import HeroContainer from "./HeroContainer";
import InteractiveMap from "./InteractiveMap";

// Structure de données complète du menu
const MENU_ITEMS = {
  burgers: [
    { name: "CHICKEN BURGER", price: "12.00 DT" },
    { name: "CHEESEBURGER", price: "13.00 DT" },
    { name: "BACON BURGER", price: "15.00 DT" },
    { name: "BACON EGG", price: "16.00 DT" },
    { name: "LE DOUBLE [HEAVY LOAD]", price: "18.00 DT", highlight: true },
  ],
  supplements: [
    { name: "SUPPL. OEUF", price: "+1.00 DT" },
    { name: "SUPPL. CHEDDAR", price: "+2.00 DT" },
    { name: "SUPPL. STEAK", price: "+5.00 DT" },
    { name: "SUPPL. CHICKEN", price: "+3.00 DT" },
  ],
  sides: [
    { name: "Portion Frites [CRISPY FRY PACK]", price: "5.00 DT" },
  ],
  fluids: [
    { name: "Soda Frais", price: "3.00 DT" },
    { name: "Eau Minérale", price: "3.00 DT" },
    { name: "Mojito Maison", price: "7.00 DT" },
  ]
};

export default function TheContainerSite() {
  return (
    <main className="bg-zinc-950 text-white min-h-screen font-sans selection:bg-amber-500 selection:text-black">
      
      {/* ================= SECTION 1: HERO VIEWPORT ================= */}
      <HeroContainer />

      {/* ================= SECTION 2: LE CARGO MENU ================= */}
      <section id="menu" className="py-24 px-4 max-w-5xl mx-auto scroll-mt-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase">
            MAIN CARGO // <span className="text-amber-500">LES BURGERS</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* SECTION BURGERS */}
          <div className="border border-zinc-800 bg-zinc-900/50 p-6 md:p-8 backdrop-blur-sm">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-amber-400 mb-6 flex justify-between border-b border-zinc-800 pb-2">
              <span>[SEC.01] LES BURGERS</span>
              <span>PRICE</span>
            </h3>
            <div className="space-y-4">
              {MENU_ITEMS.burgers.map((item, idx) => (
                <div key={idx} className={`p-4 border transition-all ${item.highlight ? 'bg-red-950/40 border-red-700 font-black' : 'bg-zinc-950/60 border-zinc-800 hover:border-zinc-700'}`}>
                  <div className="flex justify-between items-center">
                    <span className="text-sm md:text-base tracking-wide font-bold">{item.name}</span>
                    <span className="font-mono bg-amber-500 text-black text-xs px-2 py-1 font-bold rounded-sm">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SIDES, FLUIDS & ACCESSORIES */}
          <div className="space-y-8">
            {/* SUPPLÉMENTS */}
            <div className="border border-zinc-800 bg-zinc-900/50 p-6 md:p-8 backdrop-blur-sm">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-amber-400 mb-6 border-b border-zinc-800 pb-2">
                <span>+ EXTRA ACCESSORIES // SUPPLÉMENTS</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {MENU_ITEMS.supplements.map((item, idx) => (
                  <div key={idx} className="bg-zinc-950 p-3 flex justify-between items-center border border-zinc-800/80">
                    <span className="text-xs font-mono text-zinc-300 font-semibold">{item.name}</span>
                    <span className="text-xs font-mono font-bold text-amber-400 bg-zinc-900 px-2 py-0.5 border border-zinc-800">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SIDES & FLUIDS GRID */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* SIDES */}
              <div className="border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-sm">
                <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-blue-400 mb-4 border-b border-zinc-800 pb-2">
                  SIDES
                </h4>
                {MENU_ITEMS.sides.map((item, idx) => (
                  <div key={idx} className="bg-zinc-950 p-3 border border-zinc-800 rounded-sm">
                    <p className="text-xs font-bold text-zinc-200">{item.name}</p>
                    <p className="text-sm font-mono text-amber-400 font-bold mt-2 text-right">{item.price}</p>
                  </div>
                ))}
              </div>

              {/* FLUIDS */}
              <div className="border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-sm">
                <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-blue-400 mb-4 border-b border-zinc-800 pb-2">
                  FLUIDS
                </h4>
                <div className="space-y-2">
                  {MENU_ITEMS.fluids.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs py-1.5 border-b border-zinc-800/40 last:border-0">
                      <span className="text-zinc-300 font-medium">{item.name}</span>
                      <span className="font-mono text-amber-400 font-bold bg-zinc-950 px-1.5 py-0.5">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MENTION INFÉRIEURE */}
        <div className="mt-12 text-center">
          <p className="text-[10px] md:text-xs font-mono tracking-widest text-zinc-500 uppercase">
            ⚠️ DO NOT STACK // SERVED FRESH & HOT DIRECT FROM THE CONTAINER
          </p>
        </div>

        {/* REDIRECTION DE COMMANDE */}
        <div className="mt-12 bg-gradient-to-r from-red-900 to-zinc-900 border border-red-700/40 p-8 text-center max-w-xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest text-red-400 mb-2">⚡ COMMANDE EN LIGNE</p>
          <h4 className="text-xl font-bold mb-4">Commandez directement via notre outil</h4>
          <a 
            href="https://take.app/fr/THECONTAINER" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block bg-white text-black px-8 py-3 text-xs font-mono font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors"
          >
            Ouvrir la commande digitale ↗
          </a>
        </div>
      </section>

      {/* ================= SECTION 3: MAP TACTIQUE INTERACTIVE ================= */}
      <InteractiveMap />

      {/* ================= SECTION 4: LE FOOTER (FORCÉ EN SUPERPOSITION OPAQUE) ================= */}
      <footer className="relative z-30 w-full py-12 bg-zinc-950 text-center font-mono text-[10px] text-zinc-600 border-t border-zinc-900 clear-both block">
        {/* Liens réseaux sociaux avec couleur de secours blanche pour forcer la visibilité */}
        <div className="flex justify-center gap-8 mb-6 text-xs font-bold tracking-widest uppercase relative z-40">
          <a 
            href="https://www.instagram.com/thecontainermahares/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-amber-500 transition-colors duration-200 flex items-center gap-1.5 p-2 bg-zinc-900/50 border border-zinc-800/60 rounded-sm"
          >
            📸 INSTAGRAM ↗
          </a>
          <a 
            href="https://www.facebook.com/thecontainermahares" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-300 hover:text-blue-500 transition-colors duration-200 flex items-center gap-1.5 p-2 bg-zinc-900/50 border border-zinc-800/60 rounded-sm"
          >
            👥 FACEBOOK ↗
          </a>
        </div>
        <p className="text-zinc-500 tracking-wider">© 2026 THE CONTAINER - MAHARES // ROUTE DE LA MER. TOUS DROITS RÉSERVÉS.</p>
      </footer>

    </main>
  );
}