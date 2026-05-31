import React, { useEffect, useState } from 'react';
import {
  Sparkles, Flame, ShieldCheck, Dna, Eye, Brain,
  Check, BookOpen, Lock, Clock
} from 'lucide-react';

const CosmicStars = () => {
  const [stars, setStars] = useState<{top:string, left:string, delay:string, size:string, opacity:number}[]>([]);
  useEffect(() => {
    const newStars = Array.from({ length: 40 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      size: `${Math.floor(Math.random() * 3) + 1}px`,
      opacity: Math.random() * 0.5 + 0.2
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            opacity: star.opacity,
            backgroundColor: '#f5a623'
          }}
        />
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div className="relative min-h-screen font-sans bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center px-4 py-20 min-h-screen pt-28">
        <CosmicStars />
        {/* Glow Radial Cosmic sutil para dar textura ao fundo base */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(50,20,80,0.1)_0%,transparent_60%)] pointer-events-none"></div>
        
        <div className="relative z-10 mx-auto w-full max-w-7xl grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up order-2 lg:order-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/50 bg-transparent mb-8">
              <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Para Pessoas Despertas</span>
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-black leading-[1] mb-8">
              <span className="block text-foreground drop-shadow-md">MANUAL DO</span>
              <span className="block text-gradient-gold text-[5.5rem] sm:text-[7rem] md:text-[9.5rem] leading-[0.9] my-2 drop-shadow-2xl">SER</span>
              <span className="block text-foreground text-4xl sm:text-5xl md:text-6xl drop-shadow-md">QUE ACORDOU</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-light">
              Um guia para entender a{' '}
              <span className="text-primary font-semibold">malha que sustenta a realidade</span>{' '}
              e se reconhecer{' '}
              <span className="text-primary font-semibold">além dela</span>.
            </p>
            
            <div className="border border-primary/30 rounded-lg p-6 sm:p-8 mb-10 bg-card backdrop-blur-sm max-w-2xl mx-auto lg:mx-0">
              <p className="text-base sm:text-lg md:text-xl uppercase tracking-wider text-white">
                DESCUBRA O QUE <span className="text-primary font-semibold">NÃO TE CONTARAM</span> SOBRE O MUNDO EM QUE VIVEMOS.
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <a href="#comprar" className="group relative inline-flex items-center justify-center gap-3 bg-gradient-gold text-primary-foreground font-bold text-lg sm:text-xl md:text-2xl rounded-lg shadow-[0_0_50px_rgba(245,166,35,0.4)] hover:shadow-[0_0_80px_rgba(245,166,35,0.6)] hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto text-center px-10 py-6 uppercase tracking-wider">
                <Flame className="w-5 h-5 flex-shrink-0" />
                <span>Quero Despertar Agora</span>
              </a>
            </div>
            
            <p className="mt-8 text-sm md:text-base text-muted-foreground flex items-center justify-center lg:justify-start gap-2 opacity-80">
              <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
              Acesso imediato · Compra 100% segura
            </p>
          </div>
          
          <div className="relative order-1 lg:order-2 flex justify-center py-10 lg:py-0">
            {/* Book Graphic Image */}
            <div className="relative w-full max-w-md xl:max-w-[34rem] flex flex-col items-center justify-center animate-float">
               <img src="https://i.imgur.com/GtXxZTJ.png" alt="Manual do Ser Que Acordou" className="w-full h-auto object-contain drop-shadow-2xl" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section: VOCÊ SENTE QUE ALGO NÃO ESTÁ CERTO? */}
      <section className="relative px-4 py-32 border-t border-primary/5">
        <div className="relative z-10 mx-auto max-w-4xl pt-8">
          
          {/* Headline Formatada */}
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-12 sm:mb-16 leading-tight">
            <span className="block text-white mb-2 md:mb-4">
              VOCÊ SENTE QUE <span className="text-gradient-gold">ALGO NÃO ESTÁ</span>
            </span>
            <span className="block text-gradient-gold">
              CERTO<span className="text-white">?</span>
            </span>
          </h2>
          
          <div className="space-y-10 text-lg sm:text-xl lg:text-xl text-muted-foreground leading-relaxed font-light text-center max-w-4xl mx-auto">
            <p>Uma inquietação silenciosa. Uma memória sem nome. A sensação de que a realidade apresentada é apenas a camada mais superficial de algo muito maior.</p>
            <p className="font-medium text-white">
              Você não está louco. Você está <span className="text-primary font-bold">acordando</span>.
            </p>
            <p>E o que você vai descobrir nas próximas páginas vai mudar para sempre a forma como você enxerga este mundo — e a si mesmo dentro dele.</p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="relative px-4 py-32 border-t border-primary/5">
        <CosmicStars />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gradient-gold mb-6 font-bold">O QUE VOCÊ VAI DESCOBRIR</p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              OS <span className="text-gradient-gold">4 PILARES</span> DO DESPERTAR
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: "A MALHA QUE SUSTENTA A REALIDADE" },
              { icon: Dna, title: "DNA GALÁCTICO E ORIGENS ESTELARES" },
              { icon: Eye, title: "SISTEMA DE CONTROLE E ENGENHARIA SOCIAL" },
              { icon: Brain, title: "CONSCIÊNCIA, DESPERTAR E SOBERANIA DO SER" }
            ].map((pillar, i) => (
              <div key={i} className="group relative px-6 py-10 rounded-xl border border-primary/30 bg-card hover:border-primary transition-all duration-300 flex flex-col items-center text-center">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full border border-primary/40 bg-transparent">
                  <pillar.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-[13px] md:text-sm font-bold uppercase tracking-widest leading-relaxed text-white/90">{pillar.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "Dentro do Manual" - A seção faltante baseada na Imagem 2 */}
      <section className="relative px-4 py-32 border-t border-primary/5">
        <div className="relative z-10 mx-auto max-w-7xl grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 md:order-1">
            <p className="text-sm uppercase tracking-[0.2em] text-gradient-gold mb-4 font-bold">DENTRO DO MANUAL</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 leading-[1.1] text-white">
              CONHECIMENTO<br/>
              QUE <span className="text-gradient-gold">DESPERTA</span> E<br/>
              TRANSFORMA VIDAS
            </h2>
            <ul className="space-y-6">
              {[
                "A estrutura oculta da realidade e como ela é mantida",
                "Sua verdadeira origem estelar e o DNA galáctico adormecido",
                "Os sistemas invisíveis de controle e engenharia social",
                "Técnicas práticas para reativar sua memória ancestral",
                "Como assumir a soberania total do seu Ser",
                "A frequência da libertação e como sustentá-la"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#080410] font-black" strokeWidth={4} />
                  </div>
                  <span className="text-base sm:text-lg lg:text-xl font-medium text-white/90 leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex justify-center order-1 md:order-2 py-8 md:py-0">
            <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full"></div>
            {/* Secao 4 Image */}
            <div className="relative w-full max-w-md xl:max-w-lg flex flex-col z-10 animate-float">
               <img src="https://i.imgur.com/fTnpJXP.png" alt="Dentro do Manual do Ser Que Acordou" className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(245,166,35,0.15)]" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Final Portal Section */}
      <section id="comprar" className="relative px-4 py-32 border-t border-primary/5">
        <CosmicStars />
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="relative animate-fade-up rounded-3xl border border-primary/30 bg-card backdrop-blur-xl p-8 sm:p-12 md:p-16 text-center shadow-[0_0_50px_rgba(245,166,35,0.05)]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-gold rounded-full shadow-[0_0_20px_rgba(245,166,35,0.4)] whitespace-nowrap">
              <span className="text-xs md:text-sm font-black uppercase tracking-widest text-[#080410]">Oferta Especial de Lançamento</span>
            </div>
            
            <Lock className="w-12 h-12 text-primary mx-auto mt-4 mb-8" />
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              CONHECIMENTO É <span className="text-gradient-gold">LIBERTAÇÃO</span>
            </h2>
            <p className="text-lg sm:text-xl uppercase tracking-[0.2em] text-muted-foreground mb-12">Desperte. Lembre. Assuma.</p>
            
            <div className="my-12 py-10 px-8 rounded-2xl bg-[#0b091a]/80 border border-primary/20 inline-block w-full max-w-sm">
              <p className="text-lg text-muted-foreground line-through mb-4 font-medium">De R$ 97,00</p>
              <div className="flex items-start justify-center pb-2">
                <span className="text-4xl font-bold mt-2 mr-2 text-gradient-gold">R$</span>
                <span className="text-7xl sm:text-8xl font-black leading-none tracking-tighter text-gradient-gold pb-1">77</span>
              </div>
              <p className="text-xs sm:text-sm text-primary/80 mt-6 uppercase tracking-[0.2em] font-bold">pagamento único · acesso vitalício</p>
            </div>

            <div>
              <a href="#" className="group relative inline-flex items-center justify-center gap-3 bg-gradient-gold text-[#0b091a] font-black uppercase tracking-widest rounded-lg shadow-[0_0_50px_rgba(245,166,35,0.4)] hover:shadow-[0_0_80px_rgba(245,166,35,0.6)] hover:scale-[1.02] transition-transform duration-300 w-full sm:w-auto text-center px-10 sm:px-14 py-6 text-xl sm:text-2xl">
                <Flame className="w-6 h-6 flex-shrink-0" />
                <span>Quero Meu Manual Agora</span>
              </a>
            </div>

            <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-8 text-sm uppercase tracking-wider text-muted-foreground font-semibold">
              <span className="flex items-center gap-2 text-white/80">
                <ShieldCheck className="w-5 h-5 text-primary" /> Pagamento seguro
              </span>
              <span className="flex items-center gap-2 text-white/80">
                <Clock className="w-5 h-5 text-primary" /> Acesso imediato
              </span>
              <span className="flex items-center gap-2 text-white/80">
                <BookOpen className="w-5 h-5 text-primary" /> E-book digital
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Final Portal Section (Imagem Faltante) */}
      <section className="relative px-4 py-32 border-t border-primary/5 bg-background">
        <CosmicStars />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-10 leading-tight text-white">
            <span className="block mb-2 md:mb-4">O PORTAL ESTÁ <span className="text-gradient-gold">ABERTO</span>.</span>
            <span className="block">A ESCOLHA É SUA.</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed font-light max-w-3xl mx-auto">
            Você pode fechar esta página e voltar para o sono coletivo. Ou pode dar o próximo passo e descobrir tudo aquilo que sempre soube — mas esqueceu.
          </p>

          <div>
            <a href="#comprar" className="group relative inline-flex items-center justify-center gap-3 bg-gradient-gold text-[#0b091a] font-bold uppercase tracking-wider rounded-lg shadow-[0_0_40px_rgba(245,166,35,0.3)] hover:shadow-[0_0_60px_rgba(245,166,35,0.5)] hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto text-center px-10 py-5 text-lg sm:text-xl">
              <Flame className="w-5 h-5 flex-shrink-0" />
              <span>DESPERTAR AGORA</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 py-16 border-t border-primary/10 text-center text-sm text-muted-foreground bg-[#0b091a]">
        <p className="font-display text-2xl tracking-[0.3em] text-primary mb-4 font-bold opacity-80">SHIRAM</p>
        <p className="uppercase tracking-[0.2em] text-[10px] sm:text-xs opacity-60">Templo-Escola Solar · &copy; 2026 Kay'lani Fernandes</p>
      </footer>
    </div>
  );
}
