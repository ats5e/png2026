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
            {!logoError ? (
              <img
                src="/logo.png"
                alt="ATS5E Logo"
                className="h-20 w-auto object-contain"
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
            <NavLink to="reality" label="2026 Reality" />
            <NavLink to="solution" label="Compliance by Design" />
            <NavLink to="execution" label="Dubai Speed" />
            <NavLink to="recommendations" label="CEO Actions" />
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
          <NavLink to="reality" label="2026 Reality" />
          <NavLink to="solution" label="Compliance by Design" />
          <NavLink to="execution" label="Dubai Speed" />
          <NavLink to="recommendations" label="CEO Actions" />
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
          <div className="absolute bottom-1/4 right-1/4 w-[520px] h-[520px] bg-indigo-900/10 rounded-full blur-[150px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-8 px-4 py-1 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
            <span className="text-xs font-bold tracking-[0.2em] text-gray-300 uppercase">
              PNG Executive Briefing • January 2026
            </span>
            <span className="h-4 w-[1px] bg-white/15" />
            <span className="text-xs font-bold tracking-[0.2em] text-blue-300 uppercase">
              Navigating the Grey List
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-heavy tracking-tighter mb-8 leading-[0.9]">
            COMPLIANCE.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-400">
              AT SPEED.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
            As scrutiny rises, the winners will not be those who hire more
            reviewers.
            <br />
            They’ll be the institutions that automate decisioning—securely, in
            real time.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button
              onClick={() => scrollTo("contact")}
              className="group relative bg-white text-black px-8 py-4 rounded-full font-bold tracking-wide overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Request the Executive Walkthrough{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => scrollTo("reality")}
              className="px-8 py-4 rounded-full font-bold tracking-wide border border-white/20 hover:bg-white/10 transition-all"
            >
              See the 2026 Operating Model
            </button>
          </div>

          {/* Mini signal strip */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <MiniSignal
              icon={<Calendar className="w-4 h-4" />}
              title="FATF Plenary"
              value="February 2026"
              note="Decision expected"
            />
            <MiniSignal
              icon={<Globe className="w-4 h-4" />}
              title="Correspondent Pressure"
              value="EDD expands"
              note="Higher scrutiny volume"
            />
            <MiniSignal
              icon={<Database className="w-4 h-4" />}
              title="ISO 20022"
              value="KATS migration"
              note="Richer data = precision"
            />
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

      {/* 2026 Reality */}
      <section
        id="reality"
        className="py-24 bg-zinc-900/30 border-y border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-heavy mb-6 leading-tight">
              The Grey List is not a headline.
              <br />
              It’s an <span className="text-gray-500">operating tax.</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-medium">
              <p>
                In 2026, PNG’s financial institutions face a convergence of
                pressures: increased monitoring, deeper correspondent bank
                scrutiny, and heightened expectations around auditability.
              </p>
              <p>
                The default response—adding manual compliance capacity—creates a
                productivity tax: slower customer service, growing backlogs, and
                higher risk of missing true positives as volumes rise.
              </p>
              <p className="text-gray-300">
                The opportunity: ISO 20022’s richer structures can materially
                improve screening accuracy—if you can ingest and act on the data
                in real time.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-3 text-sm text-gray-400 font-medium">
              <Timer className="w-4 h-4 text-blue-400" />
              <span>
                2024 approvals in seconds can become 2026 delays measured in
                days—without automation.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <StatCard
              value="Feb 2026"
              label="FATF Plenary Decision Window"
              icon={<Calendar className="w-5 h-5" />}
            />
            <StatCard
              value="EDD"
              label="Enhanced Due Diligence Expands"
              icon={<Globe className="w-5 h-5" />}
            />
            <StatCard
              value="ISO 20022"
              label="KATS Data Precision Opportunity"
              icon={<Database className="w-5 h-5" />}
            />
            <StatCard
              value="Real-time"
              label="Screen, Decide, and Evidence"
              highlight
              icon={<Zap className="w-5 h-5" />}
            />
          </div>
        </div>
      </section>

      {/* Compliance by Design */}
      <section id="solution" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <h2 className="text-sm font-bold tracking-[0.2em] text-blue-400 mb-4 uppercase">
                The Solution
              </h2>
              <h3 className="text-5xl font-heavy mb-6">Compliance by Design</h3>
              <p className="text-xl text-gray-400 max-w-2xl font-medium">
                Shift from reactive checking to embedded controls—so compliance
                happens inside the transaction flow, not after it.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="bg-zinc-900/60 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-3">
                  Design principle
                </div>
                <div className="text-lg font-medium text-gray-300 leading-relaxed">
                  Automate the noise. Elevate the analysts. Evidence everything.
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <SolutionCard
              icon={<Shield className="w-7 h-7" />}
              eyebrow="The Shield"
              title="Automated Transaction Monitoring"
              desc="Deploy an overlay decision engine that screens against sanctions and AML typologies before transactions hit core systems."
              bullets={[
                "Reduce manual alerts by up to 40% (fewer false positives).",
                "Keep throughput high under expanded EDD scrutiny.",
                "Free analysts to focus on genuine risk.",
              ]}
            />
            <SolutionCard
              icon={<IdCard className="w-7 h-7" />}
              eyebrow="The Gateway"
              title="Digital Identity & e-KYC"
              desc="Integrate onboarding workflows with government digital identity infrastructure to strengthen verification without adding friction."
              bullets={[
                "Move onboarding from days to minutes.",
                "Improve consistency of customer identification.",
                "Create a cleaner foundation for ongoing monitoring.",
              ]}
            />
            <SolutionCard
              icon={<Database className="w-7 h-7" />}
              eyebrow="The Audit Trail"
              title="Data Lineage & Audit-Ready Reporting"
              desc="Connect fragmented silos into traceable lineage, so regulators can see the source-of-funds narrative end-to-end."
              bullets={[
                "On-demand, audit-ready reporting.",
                "Lower examination burden during increased monitoring.",
                "Higher confidence in source-of-funds evidence.",
              ]}
            />
          </div>

          {/* Impact visual band (kept in your existing chart language) */}
          <div className="mt-16 grid md:grid-cols-2 gap-10 items-stretch">
            <div className="bg-zinc-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-900/20 rounded-full blur-[70px]" />
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-lg flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-blue-400" /> Alert Noise
                  Reduction
                </h4>
                <span className="text-xs font-bold font-mono text-gray-500">
                  SCREENING QUALITY
                </span>
              </div>

              <div className="flex items-center gap-8">
                <div className="w-40 h-40 rounded-full border-[12px] border-zinc-700 relative flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-[12px] border-blue-500 border-l-transparent border-b-transparent rotate-45"></div>
                  <span className="text-3xl font-heavy">40%</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-300">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    Manual alert reduction potential
                  </div>
                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                    <div className="w-3 h-3 bg-zinc-700 rounded-full"></div>
                    Remaining high-signal review
                  </div>
                </div>
              </div>

              <p className="mt-6 text-sm text-gray-400 font-medium">
                Less noise means faster decisioning, better service, and fewer
                “needle-in-a-haystack” failures.
              </p>
            </div>

            <div className="bg-zinc-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-900/20 rounded-full blur-[70px]" />
              <div className="flex justify-between items-center mb-6">
                <h4 className="font-bold text-lg flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-400" /> Operating
                  Resilience
                </h4>
                <span className="text-xs font-bold font-mono text-gray-500">
                  GREY LIST READINESS
                </span>
              </div>

              <div className="space-y-4">
                <BarItem
                  label="Customer Service Speed"
                  width="82%"
                  color="bg-blue-500"
                  value="Protected"
                />
                <BarItem
                  label="Audit Evidence Availability"
                  width="88%"
                  color="bg-blue-400"
                  value="On-demand"
                />
                <BarItem
                  label="Backlog Risk"
                  width="35%"
                  color="bg-zinc-600"
                  value="Reduced"
                />
              </div>

              <p className="mt-6 text-sm text-gray-400 font-medium">
                The goal is not “more compliance.” It’s compliance that doesn’t
                slow the economy’s financial bloodstream.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5E Framework (kept, but tuned to this narrative) */}
      <section id="framework" className="py-32 bg-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-sm font-bold tracking-[0.2em] text-blue-400 mb-4 uppercase">
              How We Deliver
            </h2>
            <h3 className="text-5xl font-heavy mb-6">The 5E Framework</h3>
            <p className="text-xl text-gray-400 max-w-3xl font-medium">
              The Grey List is a forcing function. The 5Es ensure your controls,
              data, and execution speed evolve together—without breaking core
              operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <FrameworkCard
              icon={<Shield className="w-8 h-8" />}
              title="Empowerment"
              subtitle="Turn ISO 20022 into control"
              desc="Put richer payment data to work in decisioning, monitoring, and reporting—so leadership gets actionable clarity."
              glow="group-hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)]"
            />
            <FrameworkCard
              icon={<Layers className="w-8 h-8" />}
              title="Evolution"
              subtitle="Modernise without rip & replace"
              desc="Wrap legacy cores with a modern compliance layer. Reduce risk, avoid downtime, and move faster without disruption."
              glow="group-hover:shadow-[0_0_50px_-12px_rgba(168,85,247,0.5)]"
            />
            <FrameworkCard
              icon={<Zap className="w-8 h-8" />}
              title="Efficiency"
              subtitle="Automate the workflow"
              desc="Reduce alert noise, streamline EDD, and digitize evidence gathering—so teams scale without linear headcount."
              glow="group-hover:shadow-[0_0_50px_-12px_rgba(34,197,94,0.5)]"
            />
            <FrameworkCard
              icon={<Users className="w-8 h-8" />}
              title="Experience"
              subtitle="Keep customers moving"
              desc="Protect onboarding and service speed while scrutiny rises—building confidence without adding friction."
              glow="group-hover:shadow-[0_0_50px_-12px_rgba(236,72,153,0.5)]"
            />
            <FrameworkCard
              icon={<Target className="w-8 h-8" />}
              title="Execution"
              subtitle="Deliver the outcome"
              desc="Embed with teams to land working capability quickly—then stay until controls, reporting, and performance hold."
              glow="group-hover:shadow-[0_0_50px_-12px_rgba(245,158,11,0.5)]"
            />
          </div>
        </div>
      </section>

      {/* Dubai Speed Advantage */}
      <section id="execution" className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-start mb-16">
            <div className="md:col-span-7">
              <h2 className="text-sm font-bold tracking-[0.2em] text-blue-400 mb-4 uppercase">
                Execution Model
              </h2>
              <h3 className="text-5xl font-heavy mb-6">
                The “Dubai Speed” Advantage
              </h3>
              <p className="text-xl text-gray-400 font-medium max-w-3xl">
                Grey List conditions reward institutions that can implement
                controls fast, prove them, and keep customer throughput high.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="bg-zinc-900/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-3">
                  <Rocket className="w-5 h-5 text-blue-400" />
                  <div className="font-heavy text-lg">Rapid Compliance Automation</div>
                </div>
                <p className="text-gray-400 font-medium leading-relaxed">
                  Deploy pre-configured modules in weeks (not multi-year studies),
                  integrate with existing infrastructure, and evidence outcomes
                  from day one.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Rocket />}
              title="Rapid Deployment"
              desc="Operational modules delivered in weeks so you can respond to increased monitoring without freezing service speed."
            />
            <ServiceCard
              icon={<Globe />}
              title="Proven Resilience"
              desc="Battle-tested delivery patterns from high-volume, high-scrutiny cross-border environments."
            />
            <ServiceCard
              icon={<Layers />}
              title="Legacy Integration"
              desc="Modernize without downtime: wrap the core with a compliance layer instead of risky rip-and-replace programs."
            />
          </div>
        </div>
      </section>

      {/* CEO Recommendations */}
      <section
        id="recommendations"
        className="py-24 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-heavy mb-6">
                CEO Actions for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
                  2026.
                </span>
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed font-medium">
                The institutions that emerge strongest will treat Grey List
                pressure as a modernization catalyst—building capability that
                remains valuable well beyond 2027.
              </p>

              <ul className="space-y-4 mb-8">
                <CheckItem text="Don’t hire to absorb workload. Automate to multiply senior analyst effectiveness." />
                <CheckItem text="Treat ISO 20022 migration as a data quality initiative, not a formatting change." />
                <CheckItem text="Engage regulators with automated, high-fidelity reporting—proactively." />
              </ul>

              <button
                onClick={() => scrollTo("contact")}
                className="text-white border-b border-white pb-1 hover:text-blue-400 hover:border-blue-400 transition-all font-bold"
              >
                Build your 2026 automation roadmap{" "}
                <ChevronRight className="inline w-4 h-4" />
              </button>
            </div>

            <div className="bg-zinc-900/70 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
              <div className="flex items-start justify-between gap-6 mb-8">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-2">
                    Board-level framing
                  </div>
                  <h3 className="text-2xl font-heavy leading-tight">
                    From reputational risk to operational resilience.
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-blue-400" />
                </div>
              </div>

              <div className="space-y-5 text-gray-300 font-medium leading-relaxed">
                <p>
                  Grey List scrutiny increases friction in cross-border flows.
                  Manual EDD does not scale with volume—and slows trade finance
                  lifelines.
                </p>
                <p>
                  The strategic response is a real-time compliance layer:
                  decisioning, identity, and lineage integrated into transaction
                  flow—so you can move fast and prove control.
                </p>
                <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <MicroKPI
                    label="Primary objective"
                    value="Throughput + Proof"
                    icon={<Zap className="w-4 h-4" />}
                  />
                  <MicroKPI
                    label="Operating posture"
                    value="Compliance by design"
                    icon={<Shield className="w-4 h-4" />}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px]"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-heavy tracking-tight mb-8">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
              modernize
            </span>{" "}
            under pressure?
          </h2>
          <p className="text-2xl text-gray-400 mb-12 font-medium">
            Let’s align on your Grey List operating model—then deliver rapid
            automation that protects customer speed and regulator confidence.
          </p>

          <div className="bg-zinc-900/80 backdrop-blur-md p-8 rounded-2xl border border-white/10 max-w-lg mx-auto shadow-2xl">
            <div className="space-y-4 text-left">
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-gray-500 mb-1">
                  Email
                </label>
                <div className="text-xl font-mono text-white">
                  info@ATS5E.com
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-gray-500 mb-1">
                  Locations
                </label>
                <div className="text-xl text-white font-bold">
                  Dubai • Port Moresby
                </div>
              </div>
              <div className="pt-6">
                <button className="w-full bg-white text-black font-heavy py-4 rounded-lg hover:bg-gray-200 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          <div className="mt-10 text-sm text-gray-500 font-medium">
            Confidential executive briefing available on request.
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

const StatCard = ({ value, label, highlight = false, icon }) => (
  <div
    className={`p-6 rounded-xl border ${
      highlight
        ? "bg-white text-black border-white"
        : "bg-zinc-900/50 border-white/10 text-white"
    } backdrop-blur-sm`}
  >
    <div className="flex items-center justify-between gap-4 mb-3">
      <div className="text-3xl font-heavy tracking-tighter">{value}</div>
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
          highlight ? "border-black/10 bg-black/5" : "border-white/10 bg-white/5"
        }`}
      >
        <span className={highlight ? "text-black" : "text-white"}>{icon}</span>
      </div>
    </div>
    <div
      className={`text-xs font-bold uppercase tracking-wider ${
        highlight ? "text-gray-600" : "text-gray-500"
      }`}
    >
      {label}
    </div>
  </div>
);

const FrameworkCard = ({ icon, title, subtitle, desc, glow }) => (
  <div className="group relative h-full bg-zinc-900/40 border border-white/5 p-6 rounded-2xl hover:bg-zinc-900/80 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
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

    <div
      className={`absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl transition-all duration-500 ${glow}`}
    ></div>
  </div>
);

const BarItem = ({ label, width, color, value }) => (
  <div>
    <div className="flex justify-between text-sm mb-1 font-bold">
      <span className="text-gray-300">{label}</span>
      <span className="text-gray-400">{value}</span>
    </div>
    <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
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

const SolutionCard = ({ icon, eyebrow, title, desc, bullets }) => (
  <div className="group p-8 border border-zinc-800 rounded-2xl hover:border-zinc-600 transition-colors bg-zinc-900/20 relative overflow-hidden">
    <div className="absolute -top-16 -right-16 w-56 h-56 bg-blue-900/15 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity"></div>

    <div className="flex items-center justify-between gap-6 mb-6">
      <div className="w-12 h-12 rounded-xl bg-zinc-800/80 border border-white/10 flex items-center justify-center text-gray-300 group-hover:bg-white group-hover:text-black transition-colors">
        {icon}
      </div>
      <div className="text-xs font-bold tracking-[0.2em] text-blue-400 uppercase">
        {eyebrow}
      </div>
    </div>

    <h3 className="text-2xl font-heavy mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed font-medium mb-6">{desc}</p>

    <ul className="space-y-3">
      {bullets.map((b, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
          <span className="text-gray-300 font-medium">{b}</span>
        </li>
      ))}
    </ul>
  </div>
);

const MiniSignal = ({ icon, title, value, note }) => (
  <div className="px-5 py-4 rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-sm text-left">
    <div className="flex items-center gap-2 text-gray-400 mb-2">
      <span className="text-blue-400">{icon}</span>
      <span className="text-xs font-bold tracking-[0.2em] uppercase">
        {title}
      </span>
    </div>
    <div className="text-lg font-heavy">{value}</div>
    <div className="text-xs text-gray-500 font-medium mt-1">{note}</div>
  </div>
);

const MicroKPI = ({ label, value, icon }) => (
  <div className="p-4 rounded-xl border border-white/10 bg-black/20">
    <div className="flex items-center justify-between gap-3 mb-2">
      <div className="text-xs uppercase font-bold tracking-wider text-gray-500">
        {label}
      </div>
      <div className="text-blue-400">{icon}</div>
    </div>
    <div className="text-lg font-heavy text-gray-200">{value}</div>
  </div>
);

export default App;