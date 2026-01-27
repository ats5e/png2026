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
} from "lucide-react";

const App = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  // Handle scroll effects
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

          /* Make your helper classes actually do something */
          h1, h2, h3, h4, .font-heavy { font-weight: 800; }
          .font-medium { font-weight: 500; }
        `}
      </style>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="cursor-pointer" onClick={() => scrollTo("hero")}>
            {/* Logo Implementation with State-based Fallback */}
            {!logoError ? (
              <img
                src="/logo.png"
                alt="ATS5E Logo"
                className="h-20 w-auto object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              /* Embedded SVG Logo */
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
            <NavLink to="framework" label="The Framework" />
            <NavLink to="data" label="The Legacy Tax" />
            <NavLink to="services" label="Capabilities" />
            <NavLink to="contact" label="Let's Build" primary />
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
          <NavLink to="framework" label="The Framework" />
          <NavLink to="data" label="The Legacy Tax" />
          <NavLink to="services" label="Capabilities" />
          <NavLink to="contact" label="Let's Build" primary />
        </div>
      )}

      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Abstract Background Graphic */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[150px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-1 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
            <span className="text-xs font-bold tracking-[0.2em] text-gray-300 uppercase">
              Unified Intelligence Infrastructure
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-heavy tracking-tighter mb-8 leading-[0.9]">
            INTELLIGENCE.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-400">
              APPLIED.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            We de-risk complexity. We elevate the customer experience. <br />
            We deliver with quiet confidence.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button
              onClick={() => scrollTo("contact")}
              className="group relative bg-white text-black px-8 py-4 rounded-full font-bold tracking-wide overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start The Evolution{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => scrollTo("framework")}
              className="px-8 py-4 rounded-full font-bold tracking-wide border border-white/20 hover:bg-white/10 transition-all"
            >
              Explore The 5E Framework
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-xs uppercase font-bold tracking-widest">
            Scroll
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* The Problem / Context Section */}
      <section className="py-24 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-heavy mb-6">
              Execution is <span className="text-gray-500">Everything.</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-medium">
              <p>
                In a region investing billions in digital leadership, the
                greatest risks are disruption, delay, and transformation
                initiatives that fail to deliver.
              </p>
              <p>
                ATS5E doesn’t just advise; we embed, execute, and guarantee the
                outcome. We ensure your strategic investment translates into a
                strategic advantage and better experiences for your customers—
                delivered seamlessly, securely, and at scale.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <StatCard value="64%" label="IT Budget lost to Legacy Maintenance" />
            <StatCard
              value="$10.4B"
              label="Annual Non-Compliance Fines Globally"
            />
            <StatCard value="42%" label="Revenue Gap vs Agile Competitors" />
            <StatCard value="100%" label="Guaranteed Outcome Delivery" highlight />
          </div>
        </div>
      </section>

      {/* 5E Framework Section */}
      <section id="framework" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-sm font-bold tracking-[0.2em] text-blue-400 mb-4 uppercase">
              Our Methodology
            </h2>
            <h3 className="text-5xl font-heavy mb-6">The 5E Framework</h3>
            <p className="text-xl text-gray-400 max-w-2xl font-medium">
              A holistic system ensuring technology, process, and people evolve
              together. We don't fix symptoms; we engineer cures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <FrameworkCard
              icon={<Shield className="w-8 h-8" />}
              title="Empowerment"
              subtitle="Turn Data into Control"
              desc="AI-driven insights that put data at your fingertips, giving you actionable intelligence for smarter decisions."
              color="border-blue-500/50"
              glow="group-hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)]"
            />
            <FrameworkCard
              icon={<Layers className="w-8 h-8" />}
              title="Evolution"
              subtitle="Modernise Without Breaking"
              desc="Legacy modernization without downtime. Scale up without disruption to your business or customers."
              color="border-purple-500/50"
              glow="group-hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.5)]"
            />
            <FrameworkCard
              icon={<Zap className="w-8 h-8" />}
              title="Efficiency"
              subtitle="Automate What Matters"
              desc="Intelligent automation to do more, faster. Eliminate routine drudgery so you can focus on the customer."
              color="border-green-500/50"
              glow="group-hover:shadow-[0_0_50px_-12px_rgba(34,197,94,0.5)]"
            />
            <FrameworkCard
              icon={<Users className="w-8 h-8" />}
              title="Experience"
              subtitle="Systems People Want to Use"
              desc="Human-centered digital experiences that are intuitive, driving adoption and maximizing ROI."
              color="border-pink-500/50"
              glow="group-hover:shadow-[0_0_50px_-12px_rgba(236,72,153,0.5)]"
            />
            <FrameworkCard
              icon={<Target className="w-8 h-8" />}
              title="Execution"
              subtitle="Make the Outcome Real"
              desc="We embed with your teams and execute flawlessly. We stay until the outcome is fully realized."
              color="border-amber-500/50"
              glow="group-hover:shadow-[0_0_50px_-12px_rgba(245,158,11,0.5)]"
            />
          </div>
        </div>
      </section>

      {/* Data Visualization / The Legacy Tax */}
      <section
        id="data"
        className="py-24 bg-gradient-to-b from-zinc-900 to-black overflow-hidden relative"
      >
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Chart Graphic Area */}
            <div className="relative">
              {/* Pie Chart Representation */}
              <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8 relative group hover:border-red-500/30 transition-colors duration-500">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    <PieChart className="w-5 h-5 text-red-500" /> The Legacy Tax
                  </h4>
                  <span className="text-xs font-bold font-mono text-gray-500">
                    IT BUDGET ALLOCATION
                  </span>
                </div>
                <div className="flex items-center gap-8">
                  <div className="w-40 h-40 rounded-full border-[12px] border-zinc-700 relative flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-[12px] border-red-500 border-l-transparent border-b-transparent rotate-45"></div>
                    <span className="text-3xl font-heavy">64%</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-300">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      Legacy Maintenance
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                      <div className="w-3 h-3 bg-zinc-700 rounded-full"></div>
                      Innovation & Growth
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-sm text-gray-400 font-medium">
                  Global banks spend the majority of budgets simply keeping the
                  lights on.
                </p>
              </div>

              {/* Bar Chart Representation */}
              <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 relative group hover:border-green-500/30 transition-colors duration-500 transform translate-x-8 -translate-y-4">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-green-500" /> The
                    Modernization Dividend
                  </h4>
                  <span className="text-xs font-bold font-mono text-gray-500">
                    PROJECTED SAVINGS
                  </span>
                </div>
                <div className="space-y-4">
                  <BarItem
                    label="Infrastructure Costs"
                    width="66%"
                    color="bg-green-500"
                    value="-66%"
                  />
                  <BarItem
                    label="Maintenance Costs"
                    width="50%"
                    color="bg-green-400"
                    value="-50%"
                  />
                  <BarItem
                    label="Threat Identification"
                    width="92%"
                    color="bg-emerald-300"
                    value="+92% Faster"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-4xl font-heavy mb-6">
                Stop paying the <br />
                <span className="text-red-500">Legacy Tax.</span>
              </h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed font-medium">
                Outdated systems are a hidden anchor on your competitiveness.
                They slow down customer service, create compliance risks, and
                consume capital that should fund growth.
              </p>
              <ul className="space-y-4 mb-8">
                <CheckItem text="Migrate from on-premise to cloud with zero downtime." />
                <CheckItem text="Reduce product launch cycles from 12 months to 3 months." />
                <CheckItem text="Automate compliance to reduce fines and risk." />
              </ul>
              <button
                onClick={() => scrollTo("contact")}
                className="text-white border-b border-white pb-1 hover:text-blue-400 hover:border-blue-400 transition-all font-bold"
              >
                See our Modernization Strategy{" "}
                <ChevronRight className="inline w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities/Services Section */}
      <section id="services" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heavy mb-6">
              Capabilities
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-medium">
              We apply technology not for its own sake, but to deliver specific,
              measurable business outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Activity />}
              title="AI & Automation"
              desc="Deploy Agentic AI and RPA to handle repetitive tasks, reduce human error by 50%, and enable 24/7 autonomous operations."
            />
            <ServiceCard
              icon={<TrendingUp />}
              title="Data & Analytics"
              desc="Unify disparate data silos into a single source of truth. Real-time BI dashboards that predict trends and customer churn."
            />
            <ServiceCard
              icon={<Lock />}
              title="Cyber & Compliance"
              desc="Automated regulatory reporting and identity verification. Reduce onboarding time from days to minutes."
            />
          </div>
        </div>
      </section>

      {/* Case Studies / Proof */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-black/10 pb-8">
            <div>
              <h2 className="text-4xl font-heavy mb-2">Real Outcomes.</h2>
              <p className="text-gray-600 font-medium">
                We don't just ship. We stay to land the outcome.
              </p>
            </div>
            <div className="hidden md:block">
              <span className="font-bold text-xl">ATS5E</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <CaseStudy
              title="Saudi Bank Transformation"
              result="Rescued at-risk program"
              desc="Established an Enterprise PMO for a major Riyadh bank, giving leadership 360° visibility and restoring stakeholder confidence in weeks."
            />
            <CaseStudy
              title="Abu Dhabi Gov Shared Services"
              result="12 Weeks to Automation"
              desc="Consolidated HR, IT, and Finance for a government entity. Automated 25 core processes, drastically improving the citizen experience."
            />
            <CaseStudy
              title="Commercial Bank Launch"
              result="Day 1 Readiness"
              desc="Led end-to-end execution for a global bank's new Riyadh branch. From licensing to core banking setup, launched fully compliant on schedule."
            />
            <CaseStudy
              title="Top Tier Offshoring"
              result="60-Day Regulatory Approval"
              desc="Managed vendor RFP and transition for a UAE bank. Secured Central Bank approval in record time with zero service disruption."
            />
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-32 bg-black relative overflow-hidden">
        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-heavy tracking-tight mb-8">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
              Evolve?
            </span>
          </h2>
          <p className="text-2xl text-gray-400 mb-12 font-medium">
            Let's have a conversation about your goals and how we can turn them
            into outcomes that benefit your customers.
          </p>

          <div className="bg-zinc-900/80 backdrop-blur-md p-8 rounded-2xl border border-white/10 max-w-lg mx-auto shadow-2xl">
            <div className="space-y-4 text-left">
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-gray-500 mb-1">
                  Email
                </label>
                <div className="text-xl font-mono text-white">info@ATS5E.com</div>
              </div>
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-gray-500 mb-1">
                  Location
                </label>
                <div className="text-xl text-white font-bold">Dubai, UAE</div>
              </div>
              <div className="pt-6">
                <button className="w-full bg-white text-black font-heavy py-4 rounded-lg hover:bg-gray-200 transition-colors">
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

// Components

const StatCard = ({ value, label, highlight = false }) => (
  <div
    className={`p-6 rounded-xl border ${
      highlight
        ? "bg-white text-black border-white"
        : "bg-zinc-900/50 border-white/10 text-white"
    } backdrop-blur-sm`}
  >
    <div className="text-3xl font-heavy mb-2 tracking-tighter">{value}</div>
    <div
      className={`text-xs font-bold uppercase tracking-wider ${
        highlight ? "text-gray-600" : "text-gray-500"
      }`}
    >
      {label}
    </div>
  </div>
);

const FrameworkCard = ({ icon, title, subtitle, desc, color, glow }) => (
  <div className="group relative h-full bg-zinc-900/40 border border-white/5 p-6 rounded-2xl hover:bg-zinc-900/80 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
    {/* Top colored border line */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

    <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-heavy mb-1">{title}</h3>
    <h4 className="text-sm text-blue-400 font-bold mb-4 uppercase tracking-wider">
      {subtitle}
    </h4>
    <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 font-medium">
      {desc}
    </p>

    {/* Glow effect on hover */}
    <div
      className={`absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl transition-all duration-500 ${glow}`}
    ></div>
  </div>
);

const BarItem = ({ label, width, color, value }) => (
  <div>
    <div className="flex justify-between text-sm mb-1 font-bold">
      <span className="text-gray-300">{label}</span>
      <span>{value}</span>
    </div>
    <div className="h-2 w-full bg-zinc-700 rounded-full overflow-hidden">
      <div className={`h-full ${color} rounded-full`} style={{ width }}></div>
    </div>
  </div>
);

const CheckItem = ({ text }) => (
  <li className="flex items-start gap-3">
    <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
    <span className="text-gray-300 font-medium">{text}</span>
  </li>
);

const ServiceCard = ({ icon, title, desc }) => (
  <div className="p-8 border border-zinc-800 rounded-2xl hover:border-zinc-600 transition-colors bg-zinc-900/20">
    <div className="mb-6 text-gray-400">{icon}</div>
    <h3 className="text-xl font-heavy mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed font-medium">{desc}</p>
  </div>
);

const CaseStudy = ({ title, result, desc }) => (
  <div className="group cursor-pointer">
    <div className="h-0.5 w-12 bg-black mb-6 group-hover:w-full transition-all duration-500 ease-out"></div>
    <h3 className="text-2xl font-heavy mb-2">{title}</h3>
    <div className="text-blue-600 font-bold text-sm uppercase tracking-wider mb-4">
      {result}
    </div>
    <p className="text-gray-600 leading-relaxed font-medium">{desc}</p>
  </div>
);

export default App;