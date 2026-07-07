"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroContainer() {
  const [isOpen, setIsOpen] = useState(false);

  // Déclenche l'ouverture automatique des portes 1 seconde après le chargement
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Variantes d'animation pour les portes et le contenu
  const leftDoorVariants = {
    closed: { rotateY: 0 },
    open: { rotateY: -115, transition: { duration: 1.2, ease: "easeInOut" } }
  };

  const rightDoorVariants = {
    closed: { rotateY: 0 },
    open: { rotateY: 115, transition: { duration: 1.2, ease: "easeInOut" } }
  };

  const contentVariants = {
    closed: { scale: 0.9, opacity: 0 },
    open: { scale: 1, opacity: 1, transition: { duration: 1, delay: 0.3, ease: "easeOut" } }
  };

  return (
    <div className="relative h-screen w-full bg-zinc-950 overflow-hidden" style={{ perspective: "1200px" }}>
      
      {/* ================= ARRIÈRE-PLAN : RÉVÉLATION DE L'UNIVERS COLORÉ MAHARES ================= */}
      <motion.div 
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={contentVariants}
        className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
      >
        {/* ILLUSTRATION MODE DESKTOP / LAPTOP (COULEURS D'ORIGINE GARDEES) */}
        <div 
          className="absolute inset-0 hidden md:block bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('/images/bg-desktop.jpg')" }} 
        />

        {/* ILLUSTRATION MODE SMARTPHONE (COULEURS D'ORIGINE GARDEES) */}
        <div 
          className="absolute inset-0 block md:hidden bg-cover bg-center opacity-85"
          style={{ backgroundImage: "url('/images/bg-mobile.jpg')" }} 
        />

        {/* Overlay progressif noir en bas pour détacher le texte et préparer la transition vers le menu */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-zinc-950" />
        
        <div className="relative z-10 max-w-3xl px-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          <span className="mb-3 block text-xs font-mono tracking-[0.4em] text-amber-400 uppercase font-bold">
            ⚓ Établi à Mahares // Route de la Mer
          </span>
          <h1 className="text-6xl font-black tracking-tighter md:text-9xl text-white">
            THE CONTAINER
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base md:text-lg text-white font-medium leading-relaxed">
            Vos burgers premium servis frais et chauds directement depuis notre structure industrielle. Une expérience brute et authentique.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#menu" className="bg-amber-500 text-black px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all hover:bg-amber-400 hover:tracking-[0.2em] shadow-lg">
              Consulter le Cargo (Menu)
            </a>
            <a href="#localisation" className="border-2 border-white bg-black/40 backdrop-blur-md text-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition-all hover:bg-white/20 shadow-lg">
              Cap sur la Carte
            </a>
          </div>
        </div>
      </motion.div>

      {/* ================= PORTE GAUCHE DU CONTAINER ================= */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={leftDoorVariants}
        style={{ transformOrigin: "left center" }}
        onClick={() => setIsOpen(!isOpen)} // Permet de refermer/rouvrir manuellement au clic
        className="absolute left-0 top-0 z-20 flex h-full w-1/2 flex-col justify-between border-r border-zinc-950 bg-red-700 p-6 md:p-12 shadow-2xl cursor-pointer"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.15)_0%,rgba(255,255,255,0.05)_50%,rgba(0,0,0,0.3)_100%)] pointer-events-none" />
        <div className="relative z-10 font-mono text-[10px] md:text-xs tracking-widest text-red-100/80 space-y-1">
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
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={rightDoorVariants}
        style={{ transformOrigin: "right center" }}
        onClick={() => setIsOpen(!isOpen)} // Permet de refermer/rouvrir manuellement au clic
        className="absolute right-0 top-0 z-20 flex h-full w-1/2 flex-col justify-between bg-red-700 p-6 md:p-12 shadow-2xl cursor-pointer"
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

    </div>
  );
}