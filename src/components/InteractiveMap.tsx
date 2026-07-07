"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function InteractiveMap() {
  const [isNavigating, setIsNavigating] = useState(false);
  const [systemLog, setSystemLog] = useState("⚡ STANDBY // AWAITING TARGET TRIANGULATION");
  const [pulseCount, setPulseCount] = useState(3060);

  const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=34.5228,10.5042";

  // Simulateur de flux de données tactiques en direct
  useEffect(() => {
    const logs = [
      "📡 CONNECTING TO SATELLITE MS-3060...",
      "🔓 SECURE LINK ESTABLISHED // COSTEVAL_NET",
      "🌊 SEA STATUS: CALM // WIND: 8 KNOTS E",
      "🔥 BURGER CORE TEMPERATURE: NOMINAL",
      "⚓ CARGO LOADING ZONE: MAHARES BEACH DETECTED",
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
    <section id="localisation" class="relative min-h-screen w-full bg-zinc-950 py-20 px-4 flex flex-col items-center justify-center overflow-hidden">
      {/* Grille de fond millimétrée */}
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#141417_1px,transparent_1px),linear-gradient(to_bottom,#141417_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40" />
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.06)_0%,transparent_60%)]" />

      {/* En-tête Tactique */}
      <div class="relative z-10 max-w-4xl w-full text-center mb-10">
        <div class="inline-flex items-center gap-2 px-3 py-1 border border-amber-500/30 bg-amber-500/5 text-amber-400 font-mono text-[9px] uppercase tracking-[0.25em] mb-4">
          <span class="h-2 w-2 rounded-full bg-amber-500 animate-ping" />
          SYSTEM STATUS: ULTRA-OPERATIONAL // MH-3060
        </div>
        <h2 class="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
          CARGAISON REPÉRÉE À <span class="text-amber-500">MAHARÈS</span>
        </h2>
        <p class="text-zinc-500 text-xs mt-2 font-mono uppercase tracking-widest">
          Coordinates Terminal // Tactical Map v2.4
        </p>
      </div>

      {/* Le conteneur de la carte immersive */}
      <div class="relative z-10 w-full max-w-4xl aspect-[16/10] sm:aspect-video bg-black border-2 border-zinc-800 rounded-none shadow-[0_0_60px_rgba(245,158,11,0.03)] overflow-hidden flex items-center justify-center">
        
        {/* Réticule de visée central */}
        <div class="absolute top-0 bottom-0 left-1/2 w-[1px] bg-zinc-900 pointer-events-none" />
        <div class="absolute left-0 right-0 top-1/2 h-[1px] bg-zinc-900 pointer-events-none" />

        {/* ================= NOUVEAU : EFFET RADAR SONAR ROTATIF ================= */}
        <div class="absolute left-[62%] top-[54.6%] -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square pointer-events-none overflow-hidden">
          <div class="w-full h-full animate-[spin_8s_linear_infinite] opacity-20" style={{ backgroundImage: 'conic-gradient(from 0deg, rgba(245,158,11,0.4) 0deg, rgba(245,158,11,0) 90deg, transparent 360deg)' }} />
        </div>

        {/* Tracé Topographique de la Côte de Maharès (SVG complexe) */}
        <svg class="absolute inset-0 w-full h-full text-zinc-900 pointer-events-none" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 50 -100 Q 180 80 320 120 T 550 240 T 680 380 T 900 600" stroke="#1f1f23" strokeWidth="4" />
          <path d="M 50 -100 Q 180 80 320 120 T 550 240 T 680 380 T 900 600" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.1" />
          
          {/* Lignes concentriques d'isobathes (profondeur marine) */}
          <path d="M 90 -100 Q 220 100 360 140 T 590 260 T 720 400" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.03" />
          <text x="600" y="160" fill="#27272a" class="text-[9px] font-mono tracking-[0.3em] uppercase">GOLFE DE GABÈS // MEDITERRANEE</text>
        </svg>

        {/* Tracé d'itinéraire laser pointillé */}
        <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 450" fill="none">
          <path id="route-line" d="M 120 60 L 260 130 L 440 270 L 496 246" stroke="#27272a" strokeWidth="1.5" strokeDasharray="5 5" />
          
          {/* Ligne laser réactive */}
          <motion.path 
            d="M 120 60 L 260 130 L 440 270 L 496 246" 
            stroke="#f59e0b" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={isNavigating ? { pathLength: 1 } : { pathLength: [0, 0.35, 0.35, 0] }}
            transition={isNavigating ? { duration: 2, ease: "easeInOut" } : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {/* Vecteur GP1 */}
        <div class="absolute left-[15%] top-[13%] flex items-center gap-2 font-mono text-[9px] text-zinc-600">
          <span class="h-1 w-1 bg-zinc-800 rounded-full" />
          <span>INBOUND // GP1 SUITE</span>
        </div>

        {/* NOUVEAU : Indicateur Graphique Spécifique Zone Artistique Mahares 3060 */}
        <div class="absolute left-[54%] top-[65%] flex flex-col items-start z-10 font-mono text-[9px]">
          <div class="flex items-center gap-1.5 bg-zinc-950/80 px-1.5 py-0.5 border border-zinc-800 text-zinc-400">
            <span class="h-1.5 w-1.5 bg-amber-500 rounded-none animate-pulse" />
            <span>M-3060 ART SECTOR</span>
          </div>
          <div class="w-[1px] h-5 border-l border-dashed border-zinc-700 ml-2" />
        </div>

        {/* Ondes Radar Pulsées */}
        <div class="absolute left-[62%] top-[54.6%] flex items-center justify-center pointer-events-none">
          {[1, 2].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.5, scale: 0.6 }}
              animate={{ opacity: 0, scale: 2 }}
              transition={{ duration: 4, repeat: Infinity, delay: index * 2, ease: "linear" }}
              class="absolute h-40 w-40 rounded-full border border-amber-500/20"
            />
          ))}
        </div>

        {/* MARQUEUR GEOCIBLE : THE CONTAINER */}
        <div class="absolute left-[62%] top-[54.6%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
          <motion.div 
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            class="bg-zinc-950 border-2 border-amber-500 text-amber-500 text-[10px] font-mono px-3 py-1 shadow-[0_0_20px_rgba(245,158,11,0.2)] font-black uppercase tracking-wider whitespace-nowrap"
          >
            📦 THE CONTAINER
          </motion.div>
          <div class="w-2 h-2 bg-white rounded-full mt-1.5 shadow-[0_0_15px_#ffffff] border border-black" />
        </div>

        {/* ================= NOUVEAU : CONSOLE DE LOGS SATELLITE EN DIRECT ================= */}
        <div class="absolute top-4 right-4 bg-zinc-950/90 border border-zinc-800 p-2 font-mono text-[9px] text-zinc-400 hidden md:block max-w-xs shadow-xl backdrop-blur-md">
          <div class="flex justify-between text-zinc-600 mb-1 font-bold border-b border-zinc-900 pb-0.5">
            <span>📡 TELEMETRY HUB</span>
            <span>IDX:{pulseCount}</span>
          </div>
          <p class="text-amber-500 font-bold tracking-tight transition-all duration-300">{systemLog}</p>
        </div>

        {/* Panneau Principal d'Informations */}
        <div class="absolute bottom-4 left-4 right-4 sm:right-auto bg-black/95 border border-zinc-800 p-4 backdrop-blur-md max-w-xs font-mono text-left text-[11px] space-y-3 shadow-2xl">
          <div class="flex items-center justify-between border-b border-zinc-800 pb-1.5">
            <span class="text-amber-500 font-bold">📍 POSITION RECOGNITION</span>
            <span class="text-zinc-600 text-[9px]">GRID.REF</span>
          </div>
          <p class="text-zinc-400 leading-relaxed">
            Plage de Mahares, Route de la Mer. Face au port, ancré à la lisière des installations industrielles du pôle artistique <span class="text-white font-bold">Maharès 3060</span>.
          </p>
          <div class="grid grid-cols-2 gap-2 bg-zinc-950 p-2 border border-zinc-900 text-[10px] text-zinc-500">
            <p>LAT: 34.5228° N</p>
            <p>LONG: 10.5042° E</p>
          </div>
          
          <div class="flex flex-col gap-2 pt-1">
            <button 
              onClick={() => {
                setIsNavigating(true);
                setSystemLog("📡 INTERCEPTING PATHWAY... CALCULATING ETA");
                setTimeout(() => {
                  setIsNavigating(false);
                  setSystemLog("🎯 ARRIVAL VECTOR COMPUTED // ACCESS READY");
                }, 2200);
              }}
              class="w-full text-center bg-zinc-900 hover:bg-zinc-800 text-amber-500 py-2 font-bold transition-all uppercase text-[10px] tracking-wider border border-zinc-800"
            >
              {isNavigating ? "⚡ SYNCHRONISATION..." : "🔍 Activer le Scanner d'Itinéraire"}
            </button>

            <a 
              href={googleMapsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              class="block w-full text-center bg-amber-500 hover:bg-amber-400 text-black py-2 font-black transition-all uppercase text-[10px] tracking-widest shadow-[0_0_15px_rgba(245,158,11,0.2)]"
            >
              Lancer le GPS Direct ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}