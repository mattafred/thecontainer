"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function InteractiveMap() {
  const [isNavigating, setIsNavigating] = useState(false);

  // Coordonnées réelles approximatives de la Plage de Maharès pour le bouton GPS
  const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=34.5228,10.5042";

  return (
    <section id="localisation" class="relative min-h-screen w-full bg-zinc-950 py-20 px-4 flex flex-col items-center justify-center overflow-hidden">
      {/* Grille de fond typée "Radar Militaire / Satellite" */}
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08)_0%,transparent_60%)]" />

      {/* En-tête Tactique */}
      <div class="relative z-10 max-w-4xl w-full text-center mb-12">
        <div class="inline-flex items-center gap-2 px-3 py-1 border border-amber-500/30 bg-amber-500/10 text-amber-400 font-mono text-[10px] uppercase tracking-[0.2em] mb-4">
          <span class="h-2 w-2 rounded-full bg-amber-500 animate-ping" />
          Tactical Navigation System // Online
        </div>
        <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
          CARGAISON REPÉRÉE À <span class="text-amber-500">MAHARÈS</span>
        </h2>
        <p class="text-zinc-400 text-sm mt-2 font-mono uppercase tracking-widest">
          Zone Côtière // Route de la Mer — Tunisie
        </p>
      </div>

      {/* Le conteneur de la carte immersive */}
      <div class="relative z-10 w-full max-w-4xl aspect-[16/10] sm:aspect-video bg-zinc-950 border-2 border-zinc-800 rounded-none shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex items-center justify-center">
        
        {/* Lignes de repères et visée de ciblage */}
        <div class="absolute top-0 bottom-0 left-1/2 w-[1px] bg-zinc-800/40 pointer-events-none" />
        <div class="absolute left-0 right-0 top-1/2 h-[1px] bg-zinc-800/40 pointer-events-none" />

        {/* Tracé de la Côte de Maharès (SVG Vectoriel) avec effet néon */}
        <svg class="absolute inset-0 w-full h-full text-zinc-900 pointer-events-none" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ligne de côte stylisée */}
          <path d="M 150 -50 Q 250 120 400 180 T 650 320 T 900 500" stroke="#27272a" strokeWidth="3" strokeDasharray="8 4" />
          <path d="M 150 -50 Q 250 120 400 180 T 650 320 T 900 500" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.15" />
          <text x="520" y="220" fill="#3f3f46" class="text-[10px] font-mono tracking-widest uppercase">Mer Méditerranée</text>
        </svg>

        {/* ================= EFFET WOW : L'ITINÉRAIRE ANIMÉ (SVG) ================= */}
        <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 450" fill="none">
          {/* Ligne d'itinéraire pointillée en arrière-plan */}
          <path id="route-line" d="M 100 80 L 280 150 L 410 290 L 496 246" stroke="#3f3f46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 4" />
          
          {/* Ligne d'itinéraire lumineuse animée au clic */}
          <motion.path 
            d="M 100 80 L 280 150 L 410 290 L 496 246" 
            stroke="#f59e0b" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={isNavigating ? { pathLength: 1 } : { pathLength: [0, 0.4, 0.4, 0] }}
            transition={isNavigating ? { duration: 2, ease: "easeInOut" } : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {/* Point de Départ Intermédiaire (ex: Entrée de Ville / Sfax) */}
        <div class="absolute left-[12.5%] top-[17.7%] flex items-center gap-2 font-mono text-[9px] text-zinc-500">
          <span class="h-1.5 w-1.5 bg-zinc-700 rounded-full" />
          <span>ROUTE GP1 // INBOUND</span>
        </div>

        {/* Graphiques Technologiques "Maharès 3060 Art Zone" */}
        <div class="absolute left-[51%] top-[64.4%] flex flex-col items-start z-10 font-mono text-[9px] text-zinc-400">
          <div class="flex items-center gap-1.5">
            <div class="h-2 w-2 bg-blue-500/40 border border-blue-500 rounded-none animate-pulse" />
            <span class="font-black text-blue-400">MAHARÈS 3060 // ART HUBS</span>
          </div>
          <div class="w-[1px] h-6 bg-blue-500/30 ml-1.5" />
        </div>

        {/* Cercles de Scanners Radar Pulsés */}
        <div class="absolute left-[62%] top-[54.6%] flex items-center justify-center pointer-events-none">
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.4, scale: 0.5 }}
              animate={{ opacity: 0, scale: 2.2 }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 1, ease: "easeOut" }}
              class="absolute h-32 w-32 rounded-full border border-amber-500/40"
            />
          ))}
        </div>

        {/* MARQUEUR FINAL : THE CONTAINER */}
        <div class="absolute left-[62%] top-[54.6%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
          <motion.div 
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            class="bg-red-700 border-2 border-red-500 text-[10px] font-mono px-2.5 py-1 shadow-[0_0_15px_rgba(185,28,28,0.5)] font-black text-white whitespace-nowrap"
          >
            ⚓ THE CONTAINER
          </motion.div>
          <div class="w-2.5 h-2.5 bg-amber-500 rounded-full mt-1.5 shadow-[0_0_20px_#f59e0b] border border-black" />
        </div>

        {/* Panneau Latéral d'Informations Flottant */}
        <div class="absolute bottom-4 left-4 right-4 sm:right-auto bg-zinc-950/95 border border-zinc-800 p-4 backdrop-blur-md max-w-xs font-mono text-left text-[11px] space-y-3 shadow-xl">
          <div class="flex items-center justify-between border-b border-zinc-800 pb-1.5">
            <span class="text-amber-500 font-bold">📍 POSITION RECOGNITION</span>
            <span class="text-zinc-500 text-[9px]">SYS:3060</span>
          </div>
          <p class="text-zinc-300 leading-relaxed">
            Plage de Mahares, Route de la Mer. À proximité immédiate des structures métalliques et artistiques du projet <span class="text-blue-400 font-bold">Maharès 3060</span>.
          </p>
          <div class="bg-zinc-900/60 p-2 border border-zinc-800 text-[10px] text-zinc-400 space-y-1">
            <p>LAT: 34.5228° N</p>
            <p>LONG: 10.5042° E</p>
          </div>
          
          <div class="flex flex-col gap-2 pt-1">
            {/* Bouton 1 : Déclencher la simulation d'itinéraire (Wow effect) */}
            <button 
              onClick={() => {
                setIsNavigating(true);
                setTimeout(() => setIsNavigating(false), 2500);
              }}
              class="w-full text-center bg-zinc-800 hover:bg-zinc-700 text-amber-400 py-2 font-bold transition-all uppercase text-[10px] tracking-wider border border-zinc-700"
            >
              {isNavigating ? "⚡ Analyse du tracé..." : "🔍 Simuler l'itinéraire"}
            </button>

            {/* Bouton 2 : Lancer le vrai GPS mobile */}
            <a 
              href={googleMapsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              class="block w-full text-center bg-amber-500 hover:bg-amber-400 text-black py-2 font-black transition-all uppercase text-[10px] tracking-wider"
            >
              Lancer le GPS (Maps / Waze) ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}