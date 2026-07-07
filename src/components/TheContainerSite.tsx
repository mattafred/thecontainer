"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Structure de données complète (Menu + Suppléments mis à jour)
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
  const containerRef = useRef<HTMLDivElement>(null);

  // Gestion du scroll pour l'effet d'ouverture 3D du container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const leftDoorRotateY = useTransform(scrollYProgress, [0, 0.4], [0, -115]);
  const rightDoorRotateY = useTransform(scrollYProgress, [0, 0.4], [0, 115]);
  const contentScale = useTransform(scrollYProgress, [0, 0.4], [0.85, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  return (
    <main className="bg-zinc-950 text-white min-h-screen font-sans selection:bg-amber-500 selection:text-black">
      
      {/* ================= SECTION 1: HERO VIEWPORT (CONTAINER WOW EFFECT) ================= */}
      <div ref={containerRef} className="relative h-[180vh] bg-neutral-900" style={{ perspective: "1200px" }}>
        <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
          
          {/* ARRIÈRE-PLAN : RÉVÉLATION DE L'UNIVERS MAHARES */}
          <motion.div 
            style={{ scale: contentScale, opacity: contentOpacity }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950 px-4 text-center"
          >
            {/* ILLUSTRATION MODE DESKTOP / LAPTOP */}
            <div 
              className="absolute inset-0 hidden md:block bg-cover bg-center opacity-40 mix-blend-luminosity transition-all duration-300"
              style={{ backgroundImage: "url('/bg-desktop.jpg')" }} 
            />

            {/* ILLUSTRATION MODE SMARTPHONE */}
            <div 
              className="absolute inset-0 block md:hidden bg-cover bg-center opacity-45 mix-blend-luminosity transition-all duration-300"
              style={{ backgroundImage: "url('/bg-mobile.jpg')" }} 
            />

            {/* Overlay dégradé pour garantir la lisibilité du texte */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-red-950/20 to-zinc-950" />
            
            <div className="relative z-10 max-w-3xl px-4">
              <span className="mb-3 block text-xs font-mono tracking-[0.4em] text-amber-300 uppercase animate-pulse">
                ⚓ Établi à Mahares // Route de la Mer
              </span>
              <h1 className="text-6xl font-black tracking-tighter md:text-9xl text-white drop-shadow-md">
                THE CONTAINER
              </h1>
              <p className="mx-auto mt-6 max-w-md text-base md:text-lg text-zinc-100 font-light leading-relaxed">
                Vos burgers premium servis frais et chauds directement depuis notre structure industrielle. Une expérience brute et authentique.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a href="#menu" className="bg-amber-500 text-black px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all hover:bg-amber-400 hover:tracking-[0.2em]">
                  Consulter le Cargo (Menu)
                </a>
                <a href="#localisation" className="border border-white/40 bg-white/5 backdrop-blur-md text-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all hover:bg-white/20">
                  Cap sur la Carte
                </a>
              </div>
            </div>
          </motion.div>

          {/* PORTE GAUCHE DU CONTAINER */}
          <motion.div
            style={{ rotateY: leftDoorRotateY, transformOrigin: "left center" }}
            className="absolute left-0 top-0 z-20 flex h-full w-1/2 flex-col justify-between border-r-2 border-zinc-950 bg-red-700 p-6 md:p-12 shadow-2xl"
          >
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.15)_0%,rgba(255,255,255,0.05)_50%,rgba(0,0,0,0.3)_100%)] pointer-events-none" />
            <div className="relative z-10 font-mono text-[10px] md:text-xs tracking-widest text-red-200/80 space-y-1">
              <p>SYS.ID: TC-RED-06</p>
              <p>MAX.GR: 30400 KG</p>
              <p>TARE: 2100 KG</p>
            </div>
            <div className="relative z-10 flex items-center justify-end h-full">
              <div className="h-40 w-3 bg-zinc-900 rounded-sm border-l border-zinc-700/50 shadow-lg" />
            </div>
          </motion.div>

          {/* PORTE DROITE DU CONTAINER */}
          <motion.div
            style={{ rotateY: rightDoorRotateY, transformOrigin: "right center" }}
            className="absolute right-0 top-0 z-20 flex h-full w-1/2 flex-col justify-between bg-red-700 p-6 md:p-12 shadow-2xl"
          >
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.3)_0%,rgba(255,255,255,0.05)_50%,rgba(0,0,0,0.15)_100%)] pointer-events-none" />
            <div className="relative z-10 font-mono text-[10px] md:text-xs tracking-widest text-red-200/80 text-right space-y-1">
              <p>NET.CAP: 33.2 CBM</p>
              <p>ORIGIN: TUNISIA</p>
              <p>STATUS: READY</p>
            </div>
            <div className="relative z-10 flex items-center justify-start h-full">
              <div className="h-40 w-3 bg-zinc-900 rounded-sm border-r border-zinc-700/50 shadow-lg" />
            </div>
            <div className="relative z-10 text-right font-mono text-[10px] md:text-xs text-zinc-950 font-black tracking-wider">
              <p>▲ DO NOT STACK</p>
            </div>
          </motion.div>

          {/* INDICATEUR DE SCROLL */}
          <div className="absolute bottom-8 z-30 flex flex-col items-center animate-bounce text-white/40 text-[10px] font-mono tracking-[0.3em]">
            <span>SCROLLEZ POUR OUVRIR</span>
            <svg className="w-4 h-4 mt-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

        </div>
      </div>

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

      {/* ================= SECTION 3: IMMERSIVE LOCALISATION ================= */}
      <section id="localisation" className="py-24 bg-zinc-900/40 border-t border-zinc-900 scroll-mt-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase">
              LOC // <span className="text-amber-500">NOUS TROUVER</span>
            </h2>
            <p className="text-xs font-mono text-zinc-400 mt-2 uppercase tracking-widest">Route de la Mer, Mahares, Tunisie</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* HORAIRES */}
            <div className="bg-zinc-950 border border-zinc-800 p-8 flex flex-col justify-between">
              <div>
                <span className="text-amber-500 font-mono text-xs block mb-4">[STATUS: OPEN]</span>
                <h3 className="text-2xl font-bold mb-6">Heures de Service</h3>
                <div className="space-y-4 font-mono text-sm text-zinc-300">
                  <div className="flex justify-between py-1 border-b border-zinc-900">
                    <span>Lundi - Dimanche</span>
                    <span className="text-white">12:00 - 22:00</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-zinc-900">
                <a 
                  href="https://maps.google.com/?q=The+Container+Mahares" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full text-center block bg-zinc-900 border border-zinc-700 text-white font-mono text-xs font-bold uppercase py-4 tracking-wider hover:bg-zinc-800 transition-colors"
                >
                  Ouvrir l'itinéraire GPS ↗
                </a>
              </div>
            </div>

            {/* VRAIE CARTE GOOGLE MAPS INTEGREE */}
            <div className="md:col-span-2 relative h-[380px] md:h-auto bg-zinc-950 border border-zinc-800 overflow-hidden flex items-center justify-center min-h-[350px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.3519746297484!2d10.479200676331295!3d34.519309492923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ffdb74e27ce321%3A0x2fe0fa7b24c2d071!2sThe%20Container!5e0!3m2!1sfr!2stn!4v1783424741855!5m2!1sfr!2stn" 
                className="absolute inset-0 w-full h-full grayscale invert opacity-75 contrast-125 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-500"
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center font-mono text-[10px] text-zinc-600 border-t border-zinc-900">
        <p>© {new Date().getFullYear()} UN CONCEPT PAR THE CONTAINER - MAHARES. TOUS DROITS RÉSERVÉS.</p>
      </footer>
    </main>
  );
}