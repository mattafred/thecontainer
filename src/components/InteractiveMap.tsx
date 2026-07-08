"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function InteractiveMap() {
  const [isNavigating, setIsNavigating] = useState(false);
  const [systemLog, setSystemLog] = useState("⚡ STANDBY // TARGET LOCKED");
  const [pulseCount, setPulseCount] = useState(3060);

  const googleMapsUrl = "https://maps.google.com/?q=The+Container+Mahares";

  useEffect(() => {
    const logs = [
      "📡 CONNECTING TO SATELLITE MS-3060...",
      "🔓 SECURE LINK ESTABLISHED // COSTEVAL_NET",
      "📦 CONTAINER STRUCTURE LOCKED // RED SECTOR",
      "⚓ CARGO LOADING ZONE: ROUTE DE LA MER",
      "🎯 TARGET LOCKED // THE CONTAINER IS READY"
    ];
    let i = 0;
    const interval = setInterval(() => {
      setSystemLog(logs[i]);
      i = (i + 1) % logs.length;
      setPulseCount(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    // CORRECTION : Utilisation de py-16 md:py-24 à la place de min-h-screen pour respecter le flux naturel du DOM
    <section id="localisation" className="relative w-full bg-zinc-950 py-16 md:py-24 px-4 flex flex-col items-center justify-center overflow-hidden">
      {/* Grille de fond */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-50 pointer-events-none" />

      {/* En-tête Tactique */}
      <div className="relative z-10 max-w-4xl w-full text-center mb-8 md:mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-zinc-800 bg-zinc-900/50 text-zinc-400 font-mono text-[9px] uppercase tracking-[0.25em] mb-4">
          <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
          SYSTEM STATUS: OPERATIONAL // MH-3060
        </div>
        <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-white">
          CARGAISON REPÉRÉE À <span className="text-amber-500">MAHARÈS</span>
        </h2>
        <p className="text-zinc-500 text-xs mt-2 font-mono uppercase tracking-widest">
          Coordinates Terminal // Tactical Map v2.5
        </p>
      </div>

      {/* Le conteneur adaptatif : flex-col sur mobile, md:aspect-video sur desktop */}
      <div className="relative z-10 w-full max-w-4xl bg-black border-2 border-zinc-900 flex flex-col md:block md:aspect-video shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden">
        
        {/* ================= ZONE CARTE / RADAR ================= */}
        <div className="relative w-full h-[280px] sm:h-[350px] md:absolute md:inset-0 md:h-full overflow-hidden flex items-center justify-center border-b border-zinc-900 md:border-b-0">
          
          {/* Réticules gris */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-zinc-900/50" />
          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-zinc-900/50" />

          {/* Radar tournant */}
          <div className="absolute left-[50%] md:left-[62%] top-[50%] md:top-[54.6%] -translate-x-1/2 -translate-y-1/2 w-[200%] md:w-[150%] aspect-square pointer-events-none">
            <div className="w-full h-full animate-[spin_10s_linear_infinite] opacity-10" style={{ backgroundImage: 'conic-gradient(from 0deg, rgba(255,255,255,0.2) 0deg, rgba(255,255,255,0) 90deg, transparent 360deg)' }} />
          </div>

          {/* Ondes Radar */}
          <div className="absolute left-[50%] md:left-[62%] top-[50%] md:top-[54.6%] flex items-center justify-center pointer-events-none">
            {[1, 2].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.4, scale: 0.5 }}
                animate={{ opacity: 0, scale: 2.2 }}
                transition={{ duration: 4, repeat: Infinity, delay: index * 2, ease: "linear" }}
                className="absolute h-36 w-36 rounded-full border border-amber-500/10"
              />
            ))}
          </div>

          {/* MARQUEUR GOURMAND (Burger) */}
          <div className="absolute left-[50%] md:left-[62%] top-[50%] md:top-[54.6%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 group">
            <div className="w-10 h-6 relative opacity-75 flex justify-center space-x-0.5 mb-0.5">
              <svg className="w-1.5 h-full text-amber-500/60 animate-[bounce_1.4s_infinite]" viewBox="0 0 20 100" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round"><path d="M10,90 Q20,60 10,30 T10,0" /></svg>
              <svg className="w-1.5 h-full text-amber-500/80 animate-[bounce_1.7s_infinite_200ms]" viewBox="0 0 20 100" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round"><path d="M10,90 Q0,60 10,30 T10,0" /></svg>
            </div>
            <div className="bg-zinc-950 border-2 border-amber-500 text-xl p-2 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)]">
              🍔
            </div>
            <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-amber-500 -mt-0.5" />
            <div className="mt-1.5 bg-red-700 border border-red-500 text-white text-[8px] font-mono px-2 py-0.5 font-black uppercase tracking-wider whitespace-nowrap">
              📦 THE CONTAINER
            </div>
          </div>
        </div>

        {/* Console de Logs (Masquée sur mobile) */}
        <div className="absolute top-4 right-4 bg-zinc-950/90 border border-zinc-900 p-2 font-mono text-[9px] text-zinc-500 hidden md:block max-w-xs shadow-xl backdrop-blur-md z-20">
          <div className="flex justify-between text-zinc-700 mb-1 font-bold border-b border-zinc-900 pb-0.5">
            <span>📡 TELEMETRY HUB</span>
            <span>IDX:{pulseCount}</span>
          </div>
          <p className="text-white font-medium tracking-tight">{systemLog}</p>
        </div>

        {/* ================= PANNEAU D'INFORMATIONS ET BOUTONS ================= */}
        <div className="relative w-full md:absolute md:bottom-4 md:left-4 z-20 bg-black md:bg-black/95 border-t md:border border-zinc-900 p-5 backdrop-blur-md max-w-full md:max-w-xs font-mono text-left text-[11px] space-y-4 shadow-2xl">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5">
            <span className="text-zinc-400 font-bold">📍 POSITION RECOGNITION</span>
            <span className="text-zinc-700 text-[9px]">GRID.REF</span>
          </div>
          <p className="text-zinc-400 leading-relaxed">
            Route de la Mer, Mahares. Face au secteur portuaire, amarré à la lisière des installations industrielles et de la zone <span className="text-white font-bold">Maharès 3060</span>.
          </p>
          <div className="grid grid-cols-2 gap-2 bg-zinc-950 p-2 border border-zinc-900 text-[10px] text-zinc-500">
            <p>LAT: 34.5193° N</p>
            <p>LONG: 10.4792° E</p>
          </div>
          
          <div className="flex flex-col gap-2 pt-1">
            <button 
              onClick={() => {
                setIsNavigating(true);
                setSystemLog("📡 INTERCEPTING PATHWAY...");
                setTimeout(() => setIsNavigating(false), 2000);
              }}
              className="w-full text-center bg-zinc-900 hover:bg-zinc-800 text-white py-3 font-bold transition-all uppercase text-[10px] tracking-wider border border-zinc-800"
            >
              {isNavigating ? "⚡ SYNCHRONISATION..." : "🔍 Activer le Scanner"}
            </button>

            <a 
              href={googleMapsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center bg-red-700 hover:bg-red-600 text-white py-3 font-black transition-all uppercase text-[10px] tracking-widest shadow-[0_0_15px_rgba(185,28,28,0.3)]"
            >
              Lancer le GPS Direct ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}