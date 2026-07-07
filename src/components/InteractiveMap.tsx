import React from 'react';
import { motion } from 'framer-motion';

export default function InteractiveMap() {
  return (
    <section id="localisation" className="relative min-h-screen w-full bg-zinc-900 py-20 px-4 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-4xl w-full text-center mb-12">
        <h2 style={{ fontFamily: 'Oswald, sans-serif' }} className="text-4xl font-bold uppercase tracking-tight text-white">
          Cargaison repérée à Mahares
        </h2>
        <p className="text-zinc-400 text-sm mt-2 font-mono">LOCATION // PLAGE DE MAHARES, RUE DE LA MER</p>
      </div>

      {/* Le conteneur de la carte immersive */}
      <div className="relative z-10 w-full max-w-3xl aspect-video bg-zinc-950 border border-zinc-800 rounded-none shadow-2xl overflow-hidden flex items-center justify-center">
        
        {/* Simulation d'arrière-plan satellite de la côte de Mahares */}
        <div className="absolute inset-0 bg-neutral-950 opacity-80 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:16px_1px]" />

        {/* Effet d'ondes radar / cercles pulsés (Wow Effect) */}
        <div className="absolute flex items-center justify-center">
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.6, scale: 0.8 }}
              animate={{ opacity: 0, scale: 2.5 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 1,
                ease: "easeOut"
              }}
              className="absolute h-40 w-40 rounded-full border-2 border-amber-500/40"
            />
          ))}
        </div>

        {/* Marqueur Container Maritime Central */}
        <div className="relative flex flex-col items-center z-20">
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="bg-red-600 border border-red-500 text-[10px] font-mono px-3 py-1.5 shadow-xl font-bold rounded uppercase tracking-wider text-white"
          >
            📦 THE CONTAINER
          </motion.div>
          <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 shadow-[0_0_15px_#f59e0b]" />
        </div>

        {/* Badge d'informations flottant sur la map */}
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-zinc-900/90 border border-zinc-800 p-4 backdrop-blur-md max-w-sm font-mono text-left text-xs space-y-2">
          <p className="text-amber-400 font-bold">📍 POSITION :</p>
          <p className="text-zinc-300">Plage de Mahares, à côté de la zone artistique Mahares 3060.</p>
          <p className="text-zinc-500 text-[10px]">Ouvert tous les jours : 12h00 - 22h00</p>
          <a 
            href="https://maps.google.com" // Mets ton vrai lien Google Maps ici
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full text-center bg-zinc-800 hover:bg-amber-500 hover:text-black text-white py-2 font-bold transition-colors uppercase text-[10px]"
          >
            Lancer l'itinéraire (Waze / Google Maps)
          </a>
        </div>
      </div>
    </section>
  );
}