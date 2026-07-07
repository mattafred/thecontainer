"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroContainer() {
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
    <div ref={containerRef} className="relative h-[180vh] bg-neutral-900" style={{ perspective: "1200px" }}>
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        
        {/* ================= ARRIÈRE-PLAN : RÉVÉLATION DE L'UNIVERS MAHARES ================= */}
        <motion.div 
          style={{ scale: contentScale, opacity: contentOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950 px-4 text-center"
        >
          {/* ILLUSTRATION MODE DESKTOP / LAPTOP */}
          <div 
            className="absolute inset-0 hidden md:block bg-cover bg-center opacity-40 mix-blend-luminosity transition-all duration-300"
            style={{ backgroundImage: "url('/images/bg-desktop.jpg')" }} 
          />

          {/* ILLUSTRATION MODE SMARTPHONE */}
          <div 
            className="absolute inset-0 block md:hidden bg-cover bg-center opacity-45 mix-blend-luminosity transition-all duration-300"
            style={{ backgroundImage: "url('/images/bg-mobile.jpg')" }} 
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

        {/* ================= PORTE GAUCHE DU CONTAINER ================= */}
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

        {/* ================= PORTE DROITE DU CONTAINER ================= */}
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
  );
}