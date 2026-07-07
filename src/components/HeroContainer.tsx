import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroContainer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative h-screen w-full bg-zinc-950 perspective-1000 overflow-hidden">
      
      {/* ================= BACKGROUND: MAHARES UNIVERSE ================= */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-orange-500 via-amber-600 to-zinc-950 px-4 text-center">
        <div 
          className="absolute inset-0 bg-[url('/images/mahares-bg.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay"
        />
        
        <div className="relative z-10 max-w-2xl px-4">
          <span className="mb-2 block text-xs font-bold tracking-[0.3em] text-amber-300 uppercase font-mono">
            MAHARES 3060
          </span>
          <h1 style={{ fontFamily: 'Oswald, sans-serif' }} className="text-6xl font-black tracking-tight text-white md:text-8xl uppercase">
            THE CONTAINER
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-zinc-100 font-light">
            Burgers Premium & Expérience immersive au bord de la plage.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#menu" className="bg-amber-500 px-8 py-4 text-xs font-bold uppercase tracking-wider text-black transition-transform active:scale-95">
              Voir le Cargo Menu
            </a>
            <a href="#localisation" className="border-2 border-white px-8 py-4 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-transform active:scale-95">
              Localisation
            </a>
          </div>
        </div>
      </div>

      {/* ================= FOREGROUND: PORTES DU CONTAINER 3D ================= */}
      {/* Porte Gauche */}
      <motion.div
        animate={{ rotateY: isOpen ? -115 : 0 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformOrigin: "left center" }}
        onClick={() => setIsOpen(true)}
        className="absolute left-0 top-0 z-20 flex h-full w-1/2 flex-col justify-between border-r-2 border-zinc-900 bg-red-700 p-6 shadow-2xl cursor-pointer select-none"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.15)_0%,rgba(255,255,255,0.05)_50%,rgba(0,0,0,0.25)_100%)]" />
        <div className="relative z-30 font-mono text-[10px] tracking-wider text-red-200 opacity-80 space-y-1">
          <p>SYS.ID: TC-RED-06</p>
          <p>MAX.GR: 30400 KG</p>
          <p>TARE: 2100 KG</p>
        </div>
        <div className="relative z-30 flex items-center justify-end h-full pr-2">
          <div className="h-24 w-1.5 bg-zinc-800 rounded shadow-md border border-zinc-600" />
        </div>
      </motion.div>

      {/* Porte Droite */}
      <motion.div
        animate={{ rotateY: isOpen ? 115 : 0 }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformOrigin: "right center" }}
        onClick={() => setIsOpen(true)}
        className="absolute right-0 top-0 z-20 flex h-full w-1/2 flex-col justify-between bg-red-700 p-6 shadow-2xl cursor-pointer select-none"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.25)_0%,rgba(255,255,255,0.05)_50%,rgba(0,0,0,0.15)_100%)]" />
        <div className="relative z-30 font-mono text-[10px] tracking-wider text-red-200 text-right opacity-80 space-y-1">
          <p>NET.CAP: 33.2 CBM</p>
          <p>ORIGIN: TUNISIA</p>
          <p>STATUS: READY</p>
        </div>
        <div className="relative z-30 flex items-center justify-start h-full pl-2">
          <div className="h-24 w-1.5 bg-zinc-800 rounded shadow-md border border-zinc-600" />
        </div>
        <div className="relative z-30 text-right font-mono text-[10px] text-red-950 font-bold">
          <p>▲ DO NOT STACK</p>
        </div>
      </motion.div>

      {/* Bouton d'invitation central (disparaît si ouvert) */}
      {!isOpen && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-none">
          <motion.button 
            onClick={() => setIsOpen(true)}
            className="pointer-events-auto rounded-full bg-amber-500 text-black px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest shadow-2xl animate-bounce"
          >
            OUVRIR LE CONTAINER
          </motion.button>
        </div>
      )}
    </div>
  );
}