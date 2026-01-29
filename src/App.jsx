import React, { useState, useEffect } from "react";
import {
  Shield,
  Zap,
  Layers,
  Users,
  Target,
  ArrowRight,
  CheckCircle,
  Activity,
  Lock,
  Menu,
  X,
  ChevronRight,
  BarChart3,
  PieChart,
  TrendingUp,
  Calendar,
  Timer,
  Database,
  IdCard,
  Globe,
  Rocket,
  MapPin,
  Plane,
  Anchor,
  Server,
  Briefcase
} from "lucide-react";

const App = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  const NavLink = ({ to, label, primary = false }) => (
    <button
      onClick={() => scrollTo(to)}
      className={`text-sm font-bold tracking-wide transition-all duration-300 ${
        primary
          ? "bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 hover:scale-105"
          : "text-gray-400 hover:text-white hover:tracking-wider"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div
      className="bg-black min-h-screen text-white selection:bg-white selection:text-black overflow-x-hidden"
      style={{
        fontFamily:
          '"September", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
      }}
    >
      {/* Local OTF fonts (served from /public/fonts) */}
      <style>
        {`
          @font-face {
            font-family: "September";
            src: url("/fonts/September-Medium.otf") format("opentype");
            font-weight: 500;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: "September";
            src: url("/fonts/September-Heavy.otf") format("opentype");
            font-weight: 800;
            font-style: normal;
            font-display: swap;
          }

          h1, h2, h3, h4, .font-heavy { font-weight: 800; }
          .font-medium { font-weight: 500; }
          
          .glass-panel {
            background: rgba(24, 24, 27, 0.6);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
          }
          
          .text-glow {
            text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
        `}
      </style>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="cursor-pointer" onClick={() => window.location.href = "https://ats5e.com/"}>
            {!logoError ? (
              <img
                src="/logo.png"
                alt="ATS5E Logo"
                className="h-16 w-auto object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <svg
                width="140"
                height="40"
                viewBox="0 0 140 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0" y="5" width="30" height="30" rx="4" fill="white" />
                <path
                  d="M15 12V28M15 12L22 18M15 12L8 18"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <text
                  x="40"
                  y="29"
                  fill="white"
                  fontSize="24"
                  fontFamily="'September', sans-serif"
                  fontWeight="800"
                  letterSpacing="-1"
                >
                  ATS
                </text>
                <text
                  x="92"
                  y="29"
                  fill="#60A5FA"
                  fontSize="24"
                  fontFamily="'September', sans-serif"
                  fontWeight="800"
                  letterSpacing="-1"
                >
                  5E
                </text>
              </svg>
            )}
          </div>

          <div className="hidden md:flex items-center gap-8">
            <NavLink to="context" label="The 2026 Crisis" />
            <NavLink to="trust" label="Proven at Scale" />
            <NavLink to="solutions" label="Solutions" />
            <NavLink to="global" label="GCC Proven" />
            <button
               onClick={() => window.location.href = 'https://ats5e.com/contact'}
               className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 hover:scale-105 text-sm font-bold tracking-wide transition-all duration-300"
            >
               Contact Us
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          <NavLink to="context" label="The 2026 Crisis" />
          <NavLink to="trust" label="Proven at Scale" />
          <NavLink to="solutions" label="Solutions" />
          <NavLink to="global" label="GCC Proven" />
          <button
               onClick={() => window.location.href = 'https://ats5e.com/contact'}
               className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold tracking-wide"
            >
               Contact Us
            </button>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        {/* Immersive Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10"></div>
           {/* Placeholder for high-end abstract architectural/network image */}
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Data Network Abstract" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8 text-left">
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 border border-white/20 rounded-full bg-black/40 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-xs font-bold tracking-[0.2em] text-blue-300 uppercase">
                Mission: Port Moresby • Feb 2026
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-heavy tracking-tighter mb-8 leading-[0.9]">
              GCC STANDARDS.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-gray-400">
                PACIFIC PROVEN.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 font-medium leading-relaxed border-l-4 border-blue-500 pl-6">
              The "Burning Platform" is no longer theoretical. 
              <br/>
              <span className="text-white font-bold">Grey List pressure. De-risking threats. Core legacy constraints.</span> 
              <br/>
              We bring the operational rigor of the Gulf, validated by the region's largest financial institution.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button
                onClick={() => scrollTo("contact")}
                className="group relative bg-white text-black px-8 py-4 rounded-full font-bold tracking-wide overflow-hidden transition-all hover:bg-gray-200"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Request Executive Briefing <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button
                onClick={() => scrollTo("context")}
                className="px-8 py-4 rounded-full font-bold tracking-wide border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                View The 2026 Strategy
              </button>
            </div>
          </div>

          {/* Hero Stats/Context */}
          <div className="md:col-span-4 space-y-4">
             <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-blue-500">
                <div className="flex justify-between items-start mb-2">
                   <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Financial Shock</h3>
                   <Calendar className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-2xl font-heavy mb-1">Feb 2026</div>
                <p className="text-sm text-gray-400">FATF Grey List Plenary Decision imminent.</p>
             </div>

             <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-yellow-500">
                <div className="flex justify-between items-start mb-2">
                   <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Risk Environment</h3>
                   <Globe className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="text-2xl font-heavy mb-1">Correspondent Risk</div>
                <p className="text-sm text-gray-400">De-risking pressure on cross-border flows.</p>
             </div>

             <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-red-500">
                <div className="flex justify-between items-start mb-2">
                   <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">Operational Gap</h3>
                   <Zap className="w-4 h-4 text-red-400" />
                </div>
                <div className="text-2xl font-heavy mb-1">Manual Lag</div>
                <p className="text-sm text-gray-400">EDD workload exceeding manual capacity.</p>
             </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-xs uppercase font-bold tracking-widest">
            The Reality
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* The 2026 Context (Detailed) */}
      <section
        id="context"
        className="py-24 bg-zinc-950 relative border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:w-2/3">
             <h2 className="text-sm font-bold tracking-[0.2em] text-red-500 mb-4 uppercase">
                The Burning Platform
              </h2>
            <h2 className="text-4xl md:text-5xl font-heavy mb-6 leading-tight">
              A Convergence of <span className="text-white border-b-4 border-red-600">Crises.</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              2026 is not "business as usual" for PNG. It is a collision of regulatory enforcement, infrastructure fragility, and governance transitions. The market doesn't need more strategy slides—it needs execution mechanisms that stabilize operations immediately.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ContextCard 
               icon={<Globe className="w-8 h-8 text-blue-400" />}
               title="Regulatory Shock"
               subtitle="The Grey List Reality"
               desc="With the FATF decision looming in February, correspondent banking relationships are at risk. Manual compliance is too slow. The mandate is automated EDD (Enhanced Due Diligence) and real-time transaction scanning."
               metric="100% Certainty"
               metricLabel="BPNG Risk Assessment"
            />
             <ContextCard 
               icon={<Server className="w-8 h-8 text-yellow-400" />}
               title="Operational Shock"
               subtitle="Core Banking Drag"
               desc="Legacy systems are failing to keep pace with digital demands. Banks and Super Funds face a critical choice: risk a 'Big Bang' replacement or layer intelligent automation to evolve safely."
               metric="Critical"
               metricLabel="Tech Debt Status"
            />
             <ContextCard 
               icon={<Briefcase className="w-8 h-8 text-red-400" />}
               title="Governance Shock"
               subtitle="Superannuation & Risk"
               desc="As fund volumes grow, so does the complexity of member administration and fraud risk. Manual reconciliation is leading to member dissatisfaction and operational leakage."
               metric="Rising"
               metricLabel="Admin Cost Ratio"
            />
          </div>
        </div>
      </section>

      {/* Trust Anchor / BSP Reference (UNNAMED) */}
      <section id="trust" className="py-32 relative overflow-hidden bg-zinc-900">
         <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed mix-blend-overlay"></div>
         
         <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
               <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-white/10 rounded text-xs font-bold uppercase tracking-wider text-blue-300">
                  <Anchor className="w-4 h-4" /> The Trust Anchor
               </div>
               <h2 className="text-4xl md:text-6xl font-heavy mb-8 leading-none">
                  Deep Local Insight.<br/>
                  <span className="text-gray-500">Proven at Scale.</span>
               </h2>
               <div className="space-y-6 text-lg font-medium text-gray-300">
                  <p>
                     You cannot afford to test unproven vendors in a crisis year. ATS5E brings the <strong>"Operator DNA"</strong> validated by the region’s largest financial institution.
                  </p>
                  <p>
                     We are not new entrants. We are the silent architects behind the modernization of the region's financial lifeline. When the market leader needed to upgrade core operations without downtime, they called us.
                  </p>
                  <p className="text-gray-400 border-l-2 border-blue-500 pl-4">
                     <em>"We navigated BPNG regulatory nuances, handled Pacific connectivity constraints, and delivered modernization at scale."</em>
                  </p>
                  <ul className="space-y-4 pt-4">
                     <CheckItem text="Risk-Free Evolution: Zero downtime during core upgrades." />
                     <CheckItem text="Regulatory Shield: Systems built for BPNG & Grey List scrutiny." />
                     <CheckItem text="Pacific Proof: Architecture that handles local connectivity gaps." />
                  </ul>
               </div>
            </div>

            <div className="relative">
               {/* Abstract representation of a secure vault/system */}
               <div className="glass-panel p-1 rounded-3xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-black/80 rounded-[20px] p-8 border border-white/5">
                     <div className="flex justify-between items-center mb-10">
                        <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-red-500"></div>
                           <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                           <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="font-mono text-xs text-green-500">SYSTEM: ONLINE</div>
                     </div>
                     <div className="space-y-8">
                        <div>
                           <div className="flex justify-between text-sm mb-2 font-bold text-gray-400">
                              <span>Transaction Uptime</span>
                              <span className="text-white">100.0%</span>
                           </div>
                           <div className="h-1 w-full bg-zinc-800 rounded-full">
                              <div className="h-full bg-green-500 w-full rounded-full shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
                           </div>
                        </div>
                        <div>
                           <div className="flex justify-between text-sm mb-2 font-bold text-gray-400">
                              <span>BPNG Compliance Check</span>
                              <span className="text-white">Real-time</span>
                           </div>
                           <div className="h-1 w-full bg-zinc-800 rounded-full">
                              <div className="h-full bg-blue-500 w-[92%] rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                           </div>
                        </div>
                        <div className="pt-6 border-t border-white/10">
                           <div className="flex items-center gap-4">
                              <div className="h-10 w-10 rounded bg-zinc-800 flex items-center justify-center">
                                 <Server className="w-5 h-5 text-gray-400" />
                              </div>
                              <div>
                                 <div className="text-xs text-gray-500 uppercase font-bold">Legacy Integration</div>
                                 <div className="font-heavy text-white">Seamless</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Meet the CEO Section */}
      <section id="ceo" className="py-24 bg-gradient-to-b from-black to-zinc-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-white/10 rounded text-xs font-bold uppercase tracking-wider text-blue-300">
                <Users className="w-4 h-4" /> Leadership
              </div>
              <h2 className="text-4xl md:text-5xl font-heavy mb-6">
                William Higgins<br />
                <span className="text-gray-500">CEO & Founder</span>
              </h2>
              <div className="space-y-6 text-lg font-medium text-gray-400 leading-relaxed">
                <p>
                  "We don't just write reports. We build the systems that run the bank."
                </p>
                <p>
                  As the former Global Head of Operations for ABN AMRO and RBS, managing infrastructure across 50 countries, William brings a rare "Operator DNA" to technology consulting. He understands that in banking, downtime is not an option and compliance is not a checkbox—it's a license to operate.
                </p>
                <p>
                  Under his leadership, ATS5E has become the silent partner to the region's most ambitious financial institutions, delivering complex transformations with a focus on speed, security, and absolute discretion.
                </p>
                <div className="pt-4 flex items-center gap-4">
                  <div className="text-sm font-bold text-white bg-zinc-800 px-4 py-2 rounded-full border border-white/10">
                    In PNG: Feb 3 - Feb 14
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 bg-zinc-800">
                <img 
                  src="/WilliamH.png" 
                  alt="William Higgins, CEO" 
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                  <div className="text-white font-heavy text-xl">The Operator's Mindset</div>
                  <div className="text-gray-400 text-sm">Decades of Tier-1 Global Banking Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Targeted Solutions */}
      <section id="solutions" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] text-blue-400 mb-4 uppercase">
              Financial Solutions
            </h2>
            <h3 className="text-5xl font-heavy mb-6">Execution Architectures</h3>
            <p className="text-xl text-gray-400 max-w-3xl font-medium">
              We don't offer generic software. We deploy targeted "Execution Engines" designed for the specific crises facing PNG's financial sector in 2026.
            </p>
          </div>

          <div className="space-y-20">
             {/* Solution 1: Compliance */}
             <div className="grid md:grid-cols-12 gap-10 items-center group">
               <div className="md:col-span-5 order-2 md:order-1 relative">
                  <div className="absolute inset-0 bg-blue-600/20 blur-[80px] rounded-full group-hover:bg-blue-600/30 transition-all"></div>
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Finance Dashboard" className="relative z-10 rounded-xl border border-white/10 opacity-80 group-hover:opacity-100 transition-opacity" />
               </div>
               <div className="md:col-span-7 order-1 md:order-2">
                  <div className="flex items-center gap-3 mb-4">
                     <Shield className="w-6 h-6 text-blue-500" />
                     <h4 className="text-xl font-heavy text-white">For Banking & Superannuation</h4>
                  </div>
                  <h3 className="text-3xl font-heavy mb-4">Compliance by Design</h3>
                  <p className="text-gray-400 font-medium mb-6 leading-relaxed">
                     Navigate the Grey List with an automated defense shield. We implement decision engines that screen transactions against sanctions and AML typologies in real-time, reducing false positives and ensuring audit-readiness for BPNG.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                     <FeatureTag text="Automated AML/KYC" />
                     <FeatureTag text="ISO 20022 Native" />
                     <FeatureTag text="Source-of-Funds Lineage" />
                     <FeatureTag text="Grey List Shielding" />
                  </div>
               </div>
             </div>

             {/* Solution 2: Core Modernization */}
             <div className="grid md:grid-cols-12 gap-10 items-center group">
               <div className="md:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                     <Layers className="w-6 h-6 text-yellow-500" />
                     <h4 className="text-xl font-heavy text-white">Core Banking Evolution</h4>
                  </div>
                  <h3 className="text-3xl font-heavy mb-4">Modernize Without Breaking</h3>
                  <p className="text-gray-400 font-medium mb-6 leading-relaxed">
                     Evolve your legacy core without the risk of a "Big Bang" replacement. We wrap legacy systems with modern digital layers, enabling you to launch new products and improve uptime while maintaining your existing system of record.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                     <FeatureTag text="Zero-Downtime Migration" />
                     <FeatureTag text="Legacy-to-Cloud Bridge" />
                     <FeatureTag text="Real-Time Balances" />
                     <FeatureTag text="API Enablement" />
                  </div>
               </div>
               <div className="md:col-span-5 relative">
                  <div className="absolute inset-0 bg-yellow-600/20 blur-[80px] rounded-full group-hover:bg-yellow-600/30 transition-all"></div>
                  <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" alt="Core Banking" className="relative z-10 rounded-xl border border-white/10 opacity-80 group-hover:opacity-100 transition-opacity grayscale hover:grayscale-0 transition-all duration-500" />
               </div>
             </div>

             {/* Solution 3: Digital Experience */}
             <div className="grid md:grid-cols-12 gap-10 items-center group">
               <div className="md:col-span-5 order-2 md:order-1 relative">
                  <div className="absolute inset-0 bg-red-600/20 blur-[80px] rounded-full group-hover:bg-red-600/30 transition-all"></div>
                  <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop" alt="Digital Experience" className="relative z-10 rounded-xl border border-white/10 opacity-80 group-hover:opacity-100 transition-opacity grayscale hover:grayscale-0 transition-all duration-500" />
               </div>
               <div className="md:col-span-7 order-1 md:order-2">
                  <div className="flex items-center gap-3 mb-4">
                     <Users className="w-6 h-6 text-red-500" />
                     <h4 className="text-xl font-heavy text-white">Member & Customer Experience</h4>
                  </div>
                  <h3 className="text-3xl font-heavy mb-4">Frictionless Engagement</h3>
                  <p className="text-gray-400 font-medium mb-6 leading-relaxed">
                     Reduce branch queues and call center volumes. We deploy intelligent digital onboarding and self-service portals that allow members and customers to interact seamlessly, even in low-bandwidth environments.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                     <FeatureTag text="Digital Onboarding" />
                     <FeatureTag text="Low-Bandwidth UX" />
                     <FeatureTag text="Self-Service Portals" />
                     <FeatureTag text="Automated Claims" />
                  </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5E Framework */}
      <section id="framework" className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-heavy">The 5E Framework</h2>
              <p className="text-gray-400 mt-4">Holistic transformation for the PNG market.</p>
           </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <FrameworkCard
              icon={<Shield className="w-8 h-8" />}
              title="Empowerment"
              desc="Turn data into control. Dashboards that give leadership visibility."
            />
            <FrameworkCard
              icon={<Layers className="w-8 h-8" />}
              title="Evolution"
              desc="Modernize legacy systems without the downtime risk."
            />
            <FrameworkCard
              icon={<Zap className="w-8 h-8" />}
              title="Efficiency"
              desc="Automate the workflow to recover revenue and time."
            />
            <FrameworkCard
              icon={<Users className="w-8 h-8" />}
              title="Experience"
              desc="Systems people actually want to use. Driving adoption."
            />
            <FrameworkCard
              icon={<Target className="w-8 h-8" />}
              title="Execution"
              desc="We don't just advise. We embed, build, and deliver."
            />
          </div>
        </div>
      </section>

      {/* GCC/Global Advantage */}
      <section id="global" className="py-32 bg-black relative overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop" alt="Abstract Architecture" className="w-full h-full object-cover opacity-20 grayscale" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
         </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <h2 className="text-sm font-bold tracking-[0.2em] text-blue-400 mb-4 uppercase">
                The Foundation
              </h2>
              <h3 className="text-5xl font-heavy mb-6">
                Gulf Rigor.<br/>Local Roots.
              </h3>
              <p className="text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
                 The Gulf Cooperation Council (GCC) sets the global benchmark for rapid infrastructure and digital transformation. We bring that battle-tested operational DNA to Papua New Guinea—applying the same rigor, speed, and governance that built the financial hubs of the Middle East, combined with deep local insight.
              </p>
              <div className="mt-8 flex gap-8">
                 <div>
                    <div className="text-3xl font-heavy text-white">Neutral</div>
                    <div className="text-sm text-gray-500 font-bold uppercase">Partner</div>
                 </div>
                 <div>
                    <div className="text-3xl font-heavy text-white">Operator</div>
                    <div className="text-sm text-gray-500 font-bold uppercase">DNA</div>
                 </div>
                 <div>
                    <div className="text-3xl font-heavy text-white">Rapid</div>
                    <div className="text-sm text-gray-500 font-bold uppercase">Deploy</div>
                 </div>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
                 <h4 className="text-xl font-heavy mb-6 border-b border-white/10 pb-4">The Visit Agenda</h4>
                 <div className="space-y-6">
                    <AgendaItem 
                        date="Feb 3-14" 
                        title="Executive Strategy Sessions" 
                        desc="Private Briefings for Banking & Superannuation Leaders"
                        active
                    />
                    <AgendaItem 
                        date="Feb 3-14" 
                        title="Technical Workshops" 
                        desc="Grey List Compliance & ISO 20022 Readiness"
                    />
                    <AgendaItem 
                        date="Feb 3-14" 
                        title="Operational Reviews" 
                        desc="Site Assessments & Roadmap Planning"
                    />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Recommendations */}
      <section
        id="recommendations"
        className="py-24 bg-gradient-to-b from-zinc-900 to-black border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-heavy mb-6">
                CEO Briefing: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Immediate Actions.</span>
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed font-medium">
                The organizations that thrive in 2026 will be those that treat the "Grey List" crisis as a modernization catalyst. The window to execute is narrow.
              </p>

              <ul className="space-y-4 mb-8">
                <CheckItem text="Shift from manual EDD to automated, real-time transaction screening." />
                <CheckItem text="Automate member administration to reduce operational leakage." />
                <CheckItem text="Modernize core banking layers without risk of downtime." />
              </ul>

              <button
                onClick={() => scrollTo("contact")}
                className="text-white border-b border-white pb-1 hover:text-blue-400 hover:border-blue-400 transition-all font-bold"
              >
                Secure your Feb 3-14 Strategy Slot <ChevronRight className="inline w-4 h-4" />
              </button>
            </div>

            <div className="bg-zinc-900/70 border border-white/10 rounded-2xl p-8 backdrop-blur-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px]"></div>
              <div className="flex items-start justify-between gap-6 mb-8 relative z-10">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-2">
                    The Mandate
                  </div>
                  <h3 className="text-2xl font-heavy leading-tight">
                    From "Crisis" to "Control".
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-blue-400" />
                </div>
              </div>

              <div className="space-y-5 text-gray-300 font-medium leading-relaxed relative z-10">
                <p>
                  In a year of leadership transitions and regulatory shocks, the most valuable currency is <strong>operational stability</strong>.
                </p>
                <p>
                  We don't sell software. We sell the certainty that your payments will clear, your members will be served, and your compliance will hold.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-heavy tracking-tight mb-8">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">execute?</span>
          </h2>
          <p className="text-2xl text-gray-400 mb-12 font-medium">
            We are in Port Moresby for two weeks. Let's align on your 2026 execution roadmap.
          </p>

          <div className="bg-zinc-900/80 backdrop-blur-md p-8 rounded-2xl border border-white/10 max-w-lg mx-auto shadow-2xl">
            <div className="space-y-4 text-left">
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-gray-500 mb-1">
                  Email
                </label>
                <div className="text-xl font-bold text-white">
                  info@ATS5E.com
                </div>
              </div>
              <div className="pt-6">
                <button 
                  onClick={() => window.location.href = 'https://ats5e.com/contact'}
                  className="w-full bg-white text-black font-heavy py-4 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-800 text-center text-gray-600 text-sm font-medium">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>&copy; 2026 ATS5E. Intelligence. Applied.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* ----------------------------- Components ----------------------------- */

const ContextCard = ({ icon, title, subtitle, desc, metric, metricLabel }) => (
    <div className="group p-8 rounded-2xl bg-zinc-900/40 border border-white/10 hover:bg-zinc-900/60 transition-all duration-300">
       <div className="flex items-start justify-between mb-6">
          <div className="p-3 rounded-xl bg-white/5 border border-white/5 group-hover:bg-white group-hover:text-black transition-colors duration-300">
             {icon}
          </div>
          <div className="text-right">
             <div className="text-2xl font-heavy text-white mb-1">{metric}</div>
             <div className="text-xs font-bold text-gray-500 uppercase">{metricLabel}</div>
          </div>
       </div>
       <h3 className="text-xl font-heavy mb-1 text-gray-200">{title}</h3>
       <h4 className="text-sm font-bold text-blue-400 uppercase tracking-wider mb-4">{subtitle}</h4>
       <p className="text-sm text-gray-400 leading-relaxed font-medium">
          {desc}
       </p>
    </div>
 );

const FeatureTag = ({ text }) => (
   <div className="flex items-center gap-2 text-xs font-bold text-gray-400 bg-white/5 px-3 py-2 rounded border border-white/5">
      <CheckCircle className="w-3 h-3 text-blue-500" />
      {text}
   </div>
);

const AgendaItem = ({ date, title, desc, active = false }) => (
   <div className={`relative pl-6 border-l-2 ${active ? 'border-blue-500' : 'border-zinc-700'}`}>
      <div className={`absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full ${active ? 'bg-blue-500' : 'bg-zinc-700'}`}></div>
      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{date}</div>
      <div className={`text-lg font-heavy mb-1 ${active ? 'text-white' : 'text-gray-400'}`}>{title}</div>
      <div className="text-sm text-gray-500 font-medium">{desc}</div>
   </div>
);

const FrameworkCard = ({ icon, title, desc, highlight = false }) => (
  <div className={`group relative h-full p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 border ${highlight ? 'bg-white/5 border-blue-500/30' : 'bg-zinc-900/40 border-white/5 hover:bg-zinc-900/80'}`}>
    <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-300">
      {icon}
    </div>
    <h3 className={`text-xl font-heavy mb-3 ${highlight ? 'text-blue-400' : 'text-white'}`}>{title}</h3>
    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 font-medium">
      {desc}
    </p>
  </div>
);

const CheckItem = ({ text }) => (
  <li className="flex items-start gap-3">
    <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
    <span className="text-gray-300 font-medium">{text}</span>
  </li>
);

export default App;