---
import Layout from '../layouts/Layout.astro';
import HeroContainer from '../components/HeroContainer.tsx';
import InteractiveMap from '../components/InteractiveMap.tsx';

const MENU_ITEMS = {
  burgers: [
    { name: "CHICKEN BURGER", price: "12.00 DT" },
    { name: "CHEESEBURGER", price: "13.00 DT" },
    { name: "BACON BURGER", price: "15.00 DT" },
    { name: "BACON EGG", price: "16.00 DT" },
    { name: "LE DOUBLE [HEAVY LOAD]", price: "18.00 DT", highlight: true },
  ],
  supplements: [
    { name: "SUPPL. OEUF", price: "+1.00 DT" },
    { name: "SUPPL. CHEDDAR", price: "+2.00 DT" },
    { name: "SUPPL. STEAK", price: "+5.00 DT" },
    { name: "SUPPL. CHICKEN", price: "+3.00 DT" },
  ],
  sides: [
    { name: "Portion Frites [CRISPY FRY PACK]", price: "5.00 DT" },
  ],
  fluids: [
    { name: "Soda Frais", price: "3.00 DT" },
    { name: "Eau Minérale", price: "3.00 DT" },
    { name: "Mojito Maison", price: "7.00 DT" },
  ]
};
---

<Layout title="The Container | Eat & Drink - Mahares">
  
  <HeroContainer client:load />

  <section id="menu" class="py-24 px-4 max-w-5xl mx-auto scroll-mt-12">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
        MAIN CARGO // <span class="text-amber-500">LES BURGERS</span>
      </h2>
      <div class="w-16 h-1 bg-amber-500 mx-auto mt-4"></div>
    </div>

    <div class="grid md:grid-cols-2 gap-12 items-start">
      
      <div class="border border-zinc-800 bg-zinc-900/50 p-6 md:p-8 backdrop-blur-sm">
        <h3 class="font-mono text-xs font-bold uppercase tracking-widest text-amber-400 mb-6 flex justify-between border-b border-zinc-800 pb-2">
          <span>[SEC.01] LES BURGERS</span>
          <span>PRICE</span>
        </h3>
        <div class="space-y-4">
          {MENU_ITEMS.burgers.map((item) => (
            <div class={`p-4 border transition-all ${item.highlight ? 'bg-red-950/40 border-red-700 font-black' : 'bg-zinc-950/60 border-zinc-800 hover:border-zinc-700'}`}>
              <div class="flex justify-between items-center">
                <span class="text-sm md:text-base tracking-wide font-bold text-white">{item.name}</span>
                <span class="font-mono bg-amber-500 text-black text-xs px-2 py-1 font-bold rounded-sm">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div class="space-y-8">
        <div class="border border-zinc-800 bg-zinc-900/50 p-6 md:p-8 backdrop-blur-sm">
          <h3 class="font-mono text-xs font-bold uppercase tracking-widest text-amber-400 mb-6 border-b border-zinc-800 pb-2">
            <span>+ EXTRA ACCESSORIES // SUPPLÉMENTS</span>
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {MENU_ITEMS.supplements.map((item) => (
              <div class="bg-zinc-950 p-3 flex justify-between items-center border border-zinc-800/80">
                <span class="text-xs font-mono text-zinc-300 font-semibold">{item.name}</span>
                <span class="text-xs font-mono font-bold text-amber-400 bg-zinc-900 px-2 py-0.5 border border-zinc-800">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div class="grid sm:grid-cols-2 gap-6">
          <div class="border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-sm">
            <h4 class="font-mono text-xs font-bold uppercase tracking-widest text-blue-400 mb-4 border-b border-zinc-800 pb-2">
              SIDES
            </h4>
            {MENU_ITEMS.sides.map((item) => (
              <div class="bg-zinc-950 p-3 border border-zinc-800 rounded-sm">
                <p class="text-xs font-bold text-zinc-200">{item.name}</p>
                <p class="text-sm font-mono text-amber-400 font-bold mt-2 text-right">{item.price}</p>
              </div>
            ))}
          </div>

          <div class="border border-zinc-800 bg-zinc-900/50 p-5 backdrop-blur-sm">
            <h4 class="font-mono text-xs font-bold uppercase tracking-widest text-blue-400 mb-4 border-b border-zinc-800 pb-2">
              FLUIDS
            </h4>
            <div class="space-y-2">
              {MENU_ITEMS.fluids.map((item) => (
                <div class="flex justify-between items-center text-xs py-1.5 border-b border-zinc-800/40 last:border-0">
                  <span class="text-zinc-300 font-medium">{item.name}</span>
                  <span class="font-mono text-amber-400 font-bold bg-zinc-950 px-1.5 py-0.5">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-12 text-center">
      <p class="text-[10px] md:text-xs font-mono tracking-widest text-zinc-500 uppercase">
        ⚠️ DO NOT STACK // SERVED FRESH & HOT DIRECT FROM THE CONTAINER
      </p>
    </div>

    <div class="mt-12 bg-gradient-to-r from-red-900 to-zinc-900 border border-red-700/40 p-8 text-center max-w-xl mx-auto">
      <p class="font-mono text-xs uppercase tracking-widest text-red-400 mb-2">⚡ COMMANDE EN LIGNE</p>
      <h4 class="text-xl font-bold mb-4 text-white">Commandez directement via notre outil</h4>
      <a 
        href="https://take.app/fr/THECONTAINER" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="inline-block bg-white text-black px-8 py-3 text-xs font-mono font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors"
      >
        Ouvrir la commande digitale ↗
      </a>
    </div>
  </section>

  <section id="localisation" class="py-24 bg-zinc-900/40 border-t border-zinc-900 scroll-mt-12">
    <div class="max-w-5xl mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
          LOC // <span class="text-amber-500">NOUS TROUVER</span>
        </h2>
        <p class="text-xs font-mono text-zinc-400 mt-2 uppercase tracking-widest">Plage de Mahares, Route de la Mer, Tunisie</p>
      </div>

      <InteractiveMap client:load />
    </div>
  </section>

</Layout>