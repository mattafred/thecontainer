"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroContainer() {
  // Par défaut, on initialise l'état selon le stockage de session pour éviter les flashs graphiques
  const [animationStage, setAnimationStage] = useState(() => {
    if (typeof window !== "undefined") {
      const hasVisited = sessionStorage.getItem("container_opened");
      return hasVisited ? "opening" : "closed";
    }
    return "closed";
  });

  useEffect(() => {
    // Si le conteneur a déjà été ouvert pendant cette session, on ne rejoue pas l'animation
    const hasVisited = sessionStorage.getItem("container_opened");
    if (hasVisited) {
      setAnimationStage("opening");
      return;
    }

    // Séquence automatique pour la première visite
    const unlockTimer = setTimeout(() => setAnimationStage("unlocking"), 800);
    const openTimer = setTimeout(() => {
      setAnimationStage("opening");
      sessionStorage.setItem("container_opened", "true");
    }, 1800);

    return () => {
      clearTimeout(unlockTimer);
      clearTimeout(openTimer);
    };
  }, []);

  // 1. Animation des crémones / poignées (Pivotement initial)
  const leftCremoneVariants = {
    closed: { rotateY: 0 },
    unlocking: { rotateY: 90, transition: { duration: 0.8, ease: "easeIn" } },
    opening: { rotateY: 90, x: -20, opacity: 0.8, transition: { duration: 0.1 } }
  };

  const rightCremoneVariants = {
    closed: { rotateY: 0 },
    unlocking: { rotateY: -90, transition: { duration: 0.8, ease: "easeIn" } },
    opening: { rotateY: -90, x: 20, opacity: 0.8, transition: { duration: 0.1 } }
  };

  // 2. Animation 3D des panneaux de portes lourds
  const leftDoorVariants = {
    closed: { rotateY: 0 },
    unlocking: { rotateY: 0 },
    opening: { rotateY: -120, transition: { duration: 1.4, ease: "cubicBezier(0.25, 1, 0.5, 1)" } }
  };

  const rightDoorVariants = {
    closed: { rotateY: 0 },
    unlocking: { rotateY: 0 },
    opening: { rotateY: 120, transition: { duration: 1.4, ease: "cubicBezier(0.25, 1, 0.5, 1)" } }
  };

  // 3. Révélation progressive du fond artistique
  const contentVariants = {
    closed: { scale: 0.92, opacity: 0 },
    unlocking: { scale: 0.95, opacity: 0.3 },
    opening: { scale: 1, opacity: 1, transition: { duration: 1.2, delay: 0.2 } }
  };

  return (
    <div className="relative h-screen w-full bg-zinc-950 overflow-hidden" style={{ perspective: "1400px" }}>
      
      {/* ================= ARRIÈRE-PLAN : MAHARES SANS FILTRE ================= */}
      <motion.div 
        initial={animationStage === "opening" ? "opening" : "closed"}
        animate={animationStage}
        variants={contentVariants}
        className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
      >
        <div 
          className="absolute inset-0 hidden md:block bg-cover bg-center opacity-85"
          style={{ backgroundImage: "url('/images/bg-desktop.jpg')" }} 
        />
        <div 
          className="absolute inset-0 block md:hidden bg-cover bg-center opacity-90"
          style={{ backgroundImage: "url('/images/bg-mobile.jpg')" }} 
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-zinc-950" />
        
        <div className="relative z-10 max-w-3xl px-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
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

      {/* ================= PORTE GAUCHE + MÉCANISME ================= */}
      <motion.div
        initial={animationStage === "opening" ? "opening" : "closed"}
        animate={animationStage}
        variants={leftDoorVariants}
        style={{ transformOrigin: "left center" }}
        className="absolute left-0 top-0 z-20 flex h-full w-1/2 flex-col justify-between border-r border-zinc-950 bg-red-700 p-6 md:p-12 shadow-2xl select-none"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.15)_0%,rgba(255,255,255,0.05)_50%,rgba(0,0,0,0.3)_100%)] pointer-events-none" />
        
        <div className="relative z-10 font-mono text-[10px] md:text-xs tracking-widest text-red-100/80 space-y-1">
          <p>SYS.ID: TC-RED-06</p>
          <p>MAX.GR: 30400 KG</p>
          <p>TARE: 2100 KG</p>
        </div>

        <div className="absolute inset-y-0 right-4 md:right-8 w-6 flex items-center justify-center z-30" style={{ perspective: "400px" }}>
          <div className="absolute inset-y-0 w-1 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 border-x border-black/40 shadow-md" />
          <motion.div 
            variants={leftCremoneVariants}
            style={{ transformOrigin: "center center" }}
            className="w-12 h-4 bg-zinc-800 rounded-sm border border-zinc-600 flex items-center justify-start shadow-xl"
          >
            <div className="w-8 h-1 bg-zinc-900 ml-1 rounded-sm shadow-inner" />
          </motion.div>
        </div>
      </motion.div>

      {/* ================= PORTE DROITE + MÉCANISME ================= */}
      <motion.div
        initial={animationStage === "opening" ? "opening" : "closed"}
        animate={animationStage}
        variants={rightDoorVariants}
        style={{ transformOrigin: "right center" }}
        className="absolute right-0 top-0 z-20 flex h-full w-1/2 flex-col justify-between bg-red-700 p-6 md:p-12 shadow-2xl select-none"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.3)_0%,rgba(255,255,255,0.05)_50%,rgba(0,0,0,0.15)_100%)] pointer-events-none" />
        
        <div className="relative z-10 font-mono text-[10px] md:text-xs tracking-widest text-red-200/80 text-right space-y-1">
          <p>NET.CAP: 33.2 CBM</p>
          <p>ORIGIN: TUNISIA</p>
          <p>STATUS: READY</p>
        </div>

        <div className="absolute inset-y-0 left-4 md:left-8 w-6 flex items-center justify-center z-30" style={{ perspective: "400px" }}>
          <div className="absolute inset-y-0 w-1 bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 border-x border-black/40 shadow-md" />
          <motion.div 
            variants={rightCremoneVariants}
            style={{ transformOrigin: "center center" }}
            className="w-12 h-4 bg-zinc-800 rounded-sm border border-zinc-600 flex items-center justify-end shadow-xl"
          >
            <div className="w-8 h-1 bg-zinc-900 mr-1 rounded-sm shadow-inner" />
          </motion.div>
        </div>
        
        <div className="relative z-10 text-right font-mono text-[10px] md:text-xs text-zinc-950 font-black tracking-wider">
          <p>▲ DO NOT STACK</p>
        </div>
      </motion.div>

    </div>
  );
}