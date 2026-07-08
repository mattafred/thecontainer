"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function InteractiveMap() {
  const [isNavigating, setIsNavigating] = useState(false);
  const [systemLog, setSystemLog] = useState("⚡ STANDBY // TARGET LOCKED");
  const [pulseCount, setPulseCount] = useState(3060);
  
  // États locaux pour charger les composants Leaflet de manière asynchrone côté client
  const [MapComponents, setMapComponents] = useState<any>(null);
  const [customIcon, setCustomIcon] = useState<any>(null);

  const googleMapsUrl = "https://maps.google.com/?q=The+Container+Mahares";
  const POSITION: [number, number] = [34.519309, 10.479200];

  useEffect(() => {
    // 1. Chargement dynamique de Leaflet uniquement côté client
    import('leaflet').then((LModule) => {
      import('react-leaflet').then((ReactLeafletModule) => {
        // Enregistrement des composants requis
        setMapComponents({
          MapContainer: ReactLeafletModule.MapContainer,
          TileLayer: ReactLeafletModule.TileLayer,
          Marker: ReactLeafletModule.Marker,
          useMap: ReactLeafletModule.useMap
        });

        // Instanciation de l'icône sans risquer de faire planter le serveur
        const icon = new LModule.default.DivIcon({
          className: 'custom-tactical-marker',
          html: `<div style="position: relative; display: flex; justify-content: center; align-items: center; width: 30px; height: 30px;">
                   <div style="position: absolute; width: 24px; height: 24px; background-color: rgba(245,158,11,0.2); border: 2px solid #f59e0b; border-radius: 50%; animation: pulse 2s infinite;"></div>
                   <div style="width: 8px; height: 8px; background-color: #f59e0b; border-radius: 50%; z-index: 50;"></div>
                 </div>`,
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        });
        setCustomIcon(icon);
      });
    });

    // 2. Gestionnaire de la console technique de bord
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

  // Sous-composant interne pour forcer la mise à jour des dimensions
  function MapController() {
    if (!MapComponents) return null;
    const map = MapComponents.useMap();
    useEffect(() => {
      setTimeout(() => { map.invalidateSize(); }, 400);
    }, [map]);
    return null;
  }

  return (
    <section id="localisation" className="relative w-full bg-zinc-950 py-16 md:py-24 px-4 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-50 pointer-events-none" />

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

      <div className="relative z-10 w-full max-w-4xl bg-black border-2 border-zinc-900 flex flex-col md:block md:aspect-video shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden">
        
        {/* ZONE DE RENDU CARTO SAFEHOUSE */}
        <div className="relative w-full h-[300px] sm:h-[380px] md:absolute md:inset-0 md:h-full overflow-hidden border-b border-zinc-900 md:border-b-0 z-10 bg-zinc-950">
          {MapComponents && customIcon ? (
            <MapComponents.MapContainer 
              center={POSITION} 
              zoom={15} 
              zoomControl={false}
              scrollWheelZoom={false}
              style={{ width: '100%', height: '100%', background: '#09090b', zIndex: 1 }}
            >
              <MapController />
              <MapComponents.TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution='© OpenStreetMap'
              />
              <MapComponents.Marker position={POSITION} icon={customIcon} />
            </MapComponents.MapContainer>
          ) : (
            // Écran de chargement radar en attendant le montage du composant
            <div className="w-full h-full flex flex-col items-center justify-center font-mono text-xs text-zinc-500 tracking-widest uppercase animate-pulse">
              <span>📡 INITIALIZING TACTICAL RADAR...</span>
            </div>
          )}

          <div className="absolute inset-0 bg-red-500/5 mix-blend-color pointer-events-none z-20" />
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-zinc-800/40 pointer-events-none z-20" />
          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-zinc-800/40 pointer-events-none z-20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)] pointer-events-none z-20" />
        </div>

        {/* Console de Telemetrie Hub */}
        <div className="absolute top-4 right-4 bg-zinc-950/90 border border-zinc-900 p-2 font-mono text-[9px] text-zinc-500 hidden md:block max-w-xs shadow-xl backdrop-blur-md z-30">
          <div className="flex justify-between text-zinc-700 mb-1 font-bold border-b border-zinc-900 pb-0.5">
            <span>📡 TELEMETRY HUB</span>
            <span>IDX:{pulseCount}</span>
          </div>
          <p className="text-white font-medium tracking-tight">{systemLog}</p>
        </div>

        {/* Panneau d'informations tactiques */}
        <div className="relative w-full md:absolute md:bottom-4 md:left-4 z-30 bg-black md:bg-black/95 border-t md:border border-zinc-900 p-5 backdrop-blur-md max-w-full md:max-w-xs font-mono text-left text-[11px] space-y-4 shadow-2xl">
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
                setSystemLog("📡 RE-INDEXING SATELLITE PATH...");
                setTimeout(() => setIsNavigating(false), 1500);
              }}
              className="w-full text-center bg-zinc-900 hover:bg-zinc-800 text-white py-3 font-bold transition-all uppercase text-[10px] tracking-wider border border-zinc-800"
            >
              {isNavigating ? "⚡ SYNCHRONISATION..." : "🔍 Recalibrer la zone"}
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
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse {
          0% { transform: scale(0.5); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        .leaflet-control-attribution { display: none !important; }
      `}} />
    </section>
  );
}