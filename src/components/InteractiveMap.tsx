"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function InteractiveMap() {
  const [isNavigating, setIsNavigating] = useState(false);
  const [systemLog, setSystemLog] = useState("⚡ STANDBY // AWAITING TARGET TRIANGULATION");
  const [pulseCount, setPulseCount] = useState(3060);

  // Ton URL d'itinéraire GPS réelle corrigée
  const googleMapsUrl = "https://maps.google.com/?q=The+Container+Mahares";

  useEffect(() => {
    // Logs de télémesure nettoyés de toute mention de plage
    const logs = [
      "📡 CONNECTING TO SATELLITE MS-3060...",
      "🔓 SECURE LINK ESTABLISHED // COSTEVAL_NET",
      "🌊 PORT AREA STATUS: CALM // WIND: 8 KNOTS E",
      "📦 CONTAINER STRUCTURE LOCKED // RED SECTOR",
      "⚓ CARGO LOADING ZONE: ROUTE DE LA MER DETECTED",
      "🎯 TARGET LOCKED // THE CONTAINER IS READY",
      "🍟 CRISPY FRY PACK DEPLOYMENT: IN QUEUE"
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
    <section id="localisation" className="relative min-h-screen w-full bg-zinc-950 py-20 px-4 flex flex-col items-center justify-center overflow-hidden">
      {/* Grille de fond millimétrée monochrome */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_60%)]" />

      {/* En-tête Tactique Épuré */}
      <div className="relative z-10 max-w-4xl w-full text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-zinc-800 bg-zinc-900/50 text-zinc-400 font-mono text-[9px] uppercase tracking-[0.25em] mb-4">
          <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
          SYSTEM STATUS: OPERATIONAL // MH-3060
        </div>
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
          CARGAISON REPÉRÉE À <span className="text-amber-500">MAHARÈS</span>
        </h2>
        <p className="text-zinc-500 text-xs mt-2 font-mono uppercase tracking-widest">
          Coordinates Terminal // Tactical Map v2.5
        </p>
      </div>

      {/* Le conteneur de la carte immersive */}
      <div className="relative z-10 w-full max-w-4xl aspect-[16/10] sm:aspect-video bg-black border-2 border-zinc-900 rounded-none shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden flex items-center justify-center">
        
        {/* Réticule de visée central gris */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-zinc-900/50 pointer-events-none" />
        <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-zinc-900/50 pointer-events-none" />

        {/* EFFET RADAR SONAR ROTATIF MONOCHROME */}
        <div className="absolute left-[62%] top-[54.6%] -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square pointer-events-none overflow-hidden">
          <div className="w-full h-full animate-[spin_10s_linear_infinite] opacity-10" style={{ backgroundImage: 'conic-gradient(from 0deg, rgba(255,255,255,0.2) 0deg, rgba(255,255,255,0) 90deg, transparent 360deg)' }} />
        </div>

        {/* Tracé Topographique (Gris Neutre) */}
        <svg className="absolute inset-0 w-full h-full text-zinc-900 pointer-events-none" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 50 -100 Q 180 80 320 120 T 550 240 T 680 380 T 900 600" stroke="#18181b" strokeWidth="4" />
          <path d="M 50 -100 Q 180 80 320 120 T 550 240 T 680 380 T 900 600" stroke="#27272a" strokeWidth="1" strokeOpacity="0.3" />
          <path d="M 90 -100 Q 220 100 360 140 T 590 260 T 720 400" stroke="#27272a" strokeWidth="1" strokeOpacity="0.1" />
          <text x="600" y="160" fill="#18181b" className="text-[9px] font-mono tracking-[0.3em] uppercase">GOLFE DE GABÈS // MEDITERRANEE</text>
        </svg>

        {/* Tracé d'itinéraire tactique */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 450" fill="none">
          <path id="route-line" d="M 120 60 L 260 130 L 440 270 L 496 246" stroke="#18181b" strokeWidth="1.5" strokeDasharray="5 5" />
          <motion.path 
            d="M 120 60 L 260 130 L 440 270 L 496 246" 
            stroke="#ffffff" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={isNavigating ? { pathLength: 1 } : { pathLength: [0, 0.35, 0.35, 0] }}
            transition={isNavigating ? { duration: 2, ease: "easeInOut" } : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {/* Vecteur Route */}
        <div className="absolute left-[15%] top-[13%] flex items-center gap-2 font-mono text-[9px] text-zinc-700">
          <span className="h-1 w-1 bg-zinc-800 rounded-full" />
          <span>INBOUND // GP1</span>
        </div>

        {/* Secteur Artistique M-3060 */}
        <div className="absolute left-[54%] top-[65%] flex flex-col items-start z-10 font-mono text-[9px]">
          <div className="flex items-center gap-1.5 bg-black/80 px-1.5 py-0.5 border border-zinc-900 text-zinc-500">
            <span className="h-1.5 w-1.5 bg-zinc-700 rounded-none animate-pulse" />
            <span>M-3060 ART SECTOR</span>
          </div>
          <div className="w-[1px] h-5 border-l border-dashed border-zinc-800 ml-2" />
        </div>

        {/* Ondes Radar Ambre Discrètes */}
        <div className="absolute left-[62%] top-[54.6%] flex items-center justify-center pointer-events-none">
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

        {/* ================= NOUVEAU : LE MARQUEUR GOURMAND ANIMÉ (BURGER QUI FUME) ================= */}
        <div className="absolute left-[62%] top-[54.6%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 group cursor-pointer">
          
          {/* Émanation de fumée animée en SVG au-dessus du burger */}
          <div className="w-10 h-6 relative opacity-75 group-hover:opacity-100 transition-opacity duration-300 flex justify-center space-x-0.5 mb-0.5">
            <svg className="w-1.5 h-full text-amber-500/60 animate-[bounce_1.4s_infinite]" viewBox="0 0 20 100" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round">
              <path d="M10,90 Q20,60 10,30 T10,0" />
            </svg>
            <svg className="w-1.5 h-full text-amber-500/80 animate-[bounce_1.7s_infinite_200ms]" viewBox="0 0 20 100" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round">
              <path d="M10,90 Q0,60 10,30 T10,0" />
            </svg>
            <svg className="w-1.5 h-full text-amber-500/60 animate-[bounce_1.2s_infinite_400ms]" viewBox="0 0 20 100" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round">
              <path d="M10,90 Q20,60 10,30 T10,0" />
            </svg>
          </div>

          {/* Badge Burger Premium avec pulsation d'onde */}
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="bg-zinc-950 border-2 border-amber-500 text-xl p-2 rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-transform duration-300 group-hover:scale-125 group-hover:border-white"
          >
            🍔
          </motion.div>

          {/* Flèche d'ancrage tactique */}
          <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-amber-500 -mt-0.5 transition-colors group-hover:border-t-white" />

          {/* Étiquette d'identification du conteneur rouge */}
          <div className="mt-1.5 bg-red-700 border border-red-500 text-white text-[8px] font-mono px-2 py-0.5 shadow-md font-black uppercase tracking-wider whitespace-nowrap rounded-none">
            📦 THE CONTAINER
          </div>
        </div>

        {/* Console de Logs Télémétrie Blanche */}
        <div className="absolute top-4 right-4 bg-zinc-950/90 border border-zinc-900 p-2 font-mono text-[9px] text-zinc-500 hidden md:block max-w-xs shadow-xl backdrop-blur-md">
          <div className="flex justify-between text-zinc-700 mb-1 font-bold border-b border-zinc-900 pb-0.5">
            <span>📡 TELEMETRY HUB</span>
            <span>IDX:{pulseCount}</span>
          </div>
          <p className="text-white font-medium tracking-tight transition-all duration-300">{systemLog}</p>
        </div>

        {/* Panneau Principal d'Informations (Mises à jour géographiques réelles) */}
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-black/95 border border-zinc-900 p-4 backdrop-blur-md max-w-xs font-mono text-left text-[11px] space-y-3 shadow-2xl">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-1.5">
            <span className="text-zinc-400 font-bold">📍 POSITION RECOGNITION</span>
            <span className="text-zinc-700 text-[9px]">GRID.REF</span>
          </div>
          <p className="text-zinc-400 leading-relaxed">
            Route de la Mer, Mahares. Face au secteur portuaire, amarré à la lisière des installations industrielles et de la zone <span className="text-white font-bold">Maharès 3060</span>.
          </p>
          <div className="grid grid-cols-2 gap-2 bg-zinc-950 p-2 border border-zinc-900 text-[10px] text-zinc-600">
            <p>LAT: 34.5193° N</p>
            <p>LONG: 10.4792° E</p>
          </div>
          
          <div className="flex flex-col gap-2 pt-1">
            <button 
              onClick={() => {
                setIsNavigating(true);
                setSystemLog("📡 INTERCEPTING PATHWAY... CALCULATING ETA");
                setTimeout(() => {
                  setIsNavigating(false);
                  setSystemLog("🎯 ARRIVAL VECTOR COMPUTED // ACCESS READY");
                }, 2200);
              }}
              className="w-full text-center bg-zinc-900 hover:bg-zinc-800 text-white py-2 font-bold transition-all uppercase text-[10px] tracking-wider border border-zinc-800"
            >
              {isNavigating ? "⚡ SYNCHRONISATION..." : "🔍 Activer le Scanner"}
            </button>

            <a 
              href={googleMapsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center bg-red-700 hover:bg-red-600 text-white py-2 font-black transition-all uppercase text-[10px] tracking-widest shadow-[0_0_15px_rgba(185,28,28,0.3)]"
            >
              Lancer le GPS Direct ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}