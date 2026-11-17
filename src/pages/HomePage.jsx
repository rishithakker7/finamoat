import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { Reveal, CountUp, More, wrap, btnPrimary, btnGhost, btnGold, waLink } from '../components/ui';
import { SITE_CONFIG, HERO_SLIDES, IMPACT_STATS, ABOUT_BULLETS, SERVICES, CASE_STUDIES, FAQS } from '../data/finamoatData';

const CHECKUP_POINTS = [
  'Cashflow & Working Capital Blockage Audit',
  'Cost of Capital & Loan Interest Reduction Check',
  '10-Point Executive MIS & Compliance Readiness Score',
  'Promoter Networth & Tax Optimization Roadmap',
];

const CATEGORIES = ['Core CFO Advisory', 'Capital & M&A', 'Treasury & Cashflow', 'Governance & Tax'];

const ORBIT_NODES = [
  {
    id: 'fundraising',
    ring: 'outer',
    baseAngle: 25,
    color: 'bg-accent-500',
    ringColor: 'ring-accent-500/30',
    metric: 'Startup Fund Raising',
    title: 'Valuation & Equity Dilution',
    detail:
      'Drafting convincing Funding Proposals, Financial Models & Investor Pitches to Angel, PE & VC firms.',
  },
  {
    id: 'scoreboard',
    ring: 'outer',
    baseAngle: 205,
    color: 'bg-navy-900',
    ringColor: 'ring-navy-900/25',
    metric: 'Business Scoreboard',
    title: 'Daily MIS & KPI Analysis',
    detail:
      'Measuring IRR, ROCE, P/E multiple, Debt/Equity & Liquidity ratios with a Daily Dashboard.',
  },
  {
    id: 'cashflow',
    ring: 'inner',
    baseAngle: 115,
    color: 'bg-navy-900',
    ringColor: 'ring-navy-900/25',
    metric: 'Cash-Flow Planning',
    title: 'Budgeting & Capital Allocation',
    detail:
      'Arranging funds at the right time & pricing to manage cost of capital and improve credit ratings.',
  },
  {
    id: 'restructuring',
    ring: 'inner',
    baseAngle: 295,
    color: 'bg-accent-500',
    ringColor: 'ring-accent-500/30',
    metric: 'Financial Restructuring',
    title: 'Lender Terms & Internal Controls',
    detail:
      'Negotiating lower interest rates, higher moratorium & lower security with forensic internal controls.',
  },
];

function Knight() {
  const stageRef = useRef(null);
  const knightWrapRef = useRef(null);
  const glowRef = useRef(null);
  const nodeWrapRefs = useRef([]);
  const pillRefs = useRef([]);
  const pillSideRef = useRef([]);
  const lineRef = useRef(null);
  const activeIdxRef = useRef(null);
  const renderFrameRef = useRef(null);

  const stageRectRef = useRef({ left: 0, top: 0, width: 320, height: 320 });

  const [activeIdx, setActiveIdx] = useState(null);
  const [ripples, setRipples] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const phys = useRef({
    outerAngle: 0,
    innerAngle: 0,
    angularVel: 0.16,
    targetX: 0,
    targetY: 0,
    curX: 0,
    curY: 0,
    pointerActive: false,
    dragging: false,
    lastPointerAngle: null,
    bounce: 0,
    reducedMotion: false,
  });

  // Sync activeIdx to ref and close on outside click / Escape
  useEffect(() => {
    activeIdxRef.current = activeIdx;
    if (renderFrameRef.current) renderFrameRef.current(performance.now(), true);

    if (activeIdx === null) return;

    const onOutsideClick = (e) => {
      if (!e.target.closest('[data-orbit-interactive]')) {
        setActiveIdx(null);
      }
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setActiveIdx(null);
    };

    document.addEventListener('pointerdown', onOutsideClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onOutsideClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [activeIdx]);

  // Single lifecycle effect: ResizeObserver + IntersectionObserver + visibilitychange + frame-rate-independent rAF
  useEffect(() => {
    const stageEl = stageRef.current;
    if (!stageEl) return;

    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    phys.current.reducedMotion = mql.matches;

    let rafId = null;
    let inView = true;
    let docVisible = document.visibilityState === 'visible';
    let lastTime = performance.now();

    const updateStageRect = () => {
      if (!stageRef.current) return;
      const r = stageRef.current.getBoundingClientRect();
      if (r.width > 0 && r.height > 0) {
        stageRectRef.current = {
          left: r.left,
          top: r.top,
          width: r.width,
          height: r.height,
        };
      }
    };

    const drawPositions = (now, staticOnly = false) => {
      const p = phys.current;
      const { width: w, height: h } = stageRectRef.current;

      if (!staticOnly && !p.reducedMotion) {
        const dt = Math.min(50, Math.max(0, now - lastTime));
        const k = dt / 16.667;

        const tiltLerp = 1 - Math.pow(1 - 0.12, k);
        p.curX += (p.targetX - p.curX) * tiltLerp;
        p.curY += (p.targetY - p.curY) * tiltLerp;
        p.bounce *= Math.pow(0.88, k);

        const paused = activeIdxRef.current !== null;
        const baseSpeed = paused ? 0.03 : p.pointerActive ? 0.32 : 0.16;
        if (!p.dragging) {
          const velLerp = 1 - Math.pow(1 - 0.04, k);
          p.angularVel += (baseSpeed - p.angularVel) * velLerp;
        }

        p.outerAngle = (p.outerAngle + p.angularVel * k) % 360;
        p.innerAngle = (p.innerAngle - p.angularVel * 1.35 * k) % 360;
      } else if (p.reducedMotion) {
        p.curX = 0;
        p.curY = 0;
        p.bounce = 0;
      }

      lastTime = now;

      if (knightWrapRef.current) {
        if (p.reducedMotion) {
          knightWrapRef.current.style.transform = 'none';
        } else {
          const scale = 1 + p.bounce * 0.12;
          knightWrapRef.current.style.transform = `perspective(900px) translate3d(${p.curX * 20}px, ${p.curY * 20}px, 0) rotateY(${p.curX * 22}deg) rotateX(${-p.curY * 22}deg) scale(${scale})`;
        }
      }

      if (glowRef.current) {
        glowRef.current.style.transform = p.reducedMotion
          ? 'none'
          : `translate3d(${p.curX * 36}px, ${p.curY * 36}px, 0)`;
      }

      const sel = activeIdxRef.current;

      ORBIT_NODES.forEach((node, i) => {
        const wrapEl = nodeWrapRefs.current[i];
        if (!wrapEl) return;

        const deg =
          node.baseAngle +
          (p.reducedMotion ? 0 : node.ring === 'outer' ? p.outerAngle : p.innerAngle);
        const rad = (deg * Math.PI) / 180;
        const radiusRatio = node.ring === 'outer' ? 0.42 : 0.29;
        const parallaxX = p.reducedMotion ? 0 : node.ring === 'outer' ? p.curX * -10 : p.curX * -16;
        const parallaxY = p.reducedMotion ? 0 : node.ring === 'outer' ? p.curY * -10 : p.curY * -16;

        const xPx = w * (0.5 + Math.cos(rad) * radiusRatio) + parallaxX;
        const yPx = h * (0.5 + Math.sin(rad) * radiusRatio) + parallaxY;

        wrapEl.style.transform = `translate3d(${xPx}px, ${yPx}px, 0)`;

        const pill = pillRefs.current[i];
        if (pill) {
          const nextSide = yPx < h * 0.24 ? 'below' : 'above';
          if (pillSideRef.current[i] !== nextSide) {
            pillSideRef.current[i] = nextSide;
            pill.style.top = nextSide === 'below' ? '1.75rem' : '-1.85rem';
          }
        }

        if (sel === i && lineRef.current) {
          const cx = w * 0.5 + (p.reducedMotion ? 0 : p.curX * 16);
          const cy = h * 0.5 + (p.reducedMotion ? 0 : p.curY * 16);
          lineRef.current.setAttribute('x1', `${cx}`);
          lineRef.current.setAttribute('y1', `${cy}`);
          lineRef.current.setAttribute('x2', `${xPx}`);
          lineRef.current.setAttribute('y2', `${yPx}`);
        }
      });
    };

    renderFrameRef.current = drawPositions;

    const loop = (now) => {
      drawPositions(now, false);
      if (inView && docVisible && !phys.current.reducedMotion) {
        rafId = requestAnimationFrame(loop);
      } else {
        rafId = null;
      }
    };

    const syncLoop = () => {
      if (inView && docVisible && !phys.current.reducedMotion) {
        if (rafId === null) {
          lastTime = performance.now();
          rafId = requestAnimationFrame(loop);
        }
      } else {
        if (rafId !== null) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
        drawPositions(performance.now(), true);
      }
    };

    updateStageRect();
    drawPositions(performance.now(), true);
    syncLoop();

    const ro = new ResizeObserver(() => {
      updateStageRect();
      drawPositions(performance.now(), true);
    });
    ro.observe(stageEl);

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        syncLoop();
      },
      { threshold: 0 }
    );
    io.observe(stageEl);

    const onVisChange = () => {
      docVisible = document.visibilityState === 'visible';
      syncLoop();
    };

    const onMqlChange = (e) => {
      phys.current.reducedMotion = e.matches;
      syncLoop();
    };

    // Prevent iOS Safari / Android Chrome from scrolling the page while dragging inside the orbital circle
    const preventTouchScroll = (e) => {
      if (!phys.current.reducedMotion) {
        e.preventDefault();
      }
    };

    stageEl.addEventListener('touchmove', preventTouchScroll, { passive: false });
    document.addEventListener('visibilitychange', onVisChange);
    mql.addEventListener('change', onMqlChange);

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      ro.disconnect();
      io.disconnect();
      stageEl.removeEventListener('touchmove', preventTouchScroll);
      document.removeEventListener('visibilitychange', onVisChange);
      mql.removeEventListener('change', onMqlChange);
    };
  }, []);

  const getPointerAngleAndCoords = (clientX, clientY) => {
    const r = stageRectRef.current;
    const nx = (clientX - r.left) / r.width - 0.5;
    const ny = (clientY - r.top) / r.height - 0.5;
    const angle = (Math.atan2(ny, nx) * 180) / Math.PI;
    return { nx, ny, angle };
  };

  const handlePointerDown = (e) => {
    if (!stageRef.current) return;
    const r = stageRef.current.getBoundingClientRect();
    stageRectRef.current = { left: r.left, top: r.top, width: r.width, height: r.height };

    if (!e.target.closest('button') && !e.target.closest('[data-knight-core]')) {
      e.currentTarget.setPointerCapture?.(e.pointerId);
    }

    const { nx, ny, angle } = getPointerAngleAndCoords(e.clientX, e.clientY);
    phys.current.dragging = true;
    phys.current.pointerActive = true;
    phys.current.targetX = nx;
    phys.current.targetY = ny;
    phys.current.lastPointerAngle = angle;
    setIsDragging(true);
  };

  const handlePointerMove = (e) => {
    if (!stageRef.current || phys.current.reducedMotion) return;
    const { nx, ny, angle } = getPointerAngleAndCoords(e.clientX, e.clientY);
    phys.current.pointerActive = true;
    phys.current.targetX = Math.max(-0.6, Math.min(0.6, nx));
    phys.current.targetY = Math.max(-0.6, Math.min(0.6, ny));

    if (phys.current.dragging && phys.current.lastPointerAngle !== null) {
      let delta = angle - phys.current.lastPointerAngle;
      if (delta > 180) delta -= 360;
      if (delta < -180) delta += 360;
      phys.current.angularVel = Math.max(-4.5, Math.min(4.5, delta * 0.45));
      phys.current.lastPointerAngle = angle;
    }
  };

  const handlePointerUpOrCancel = (e) => {
    if (e?.currentTarget?.hasPointerCapture?.(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    phys.current.dragging = false;
    phys.current.pointerActive = false;
    phys.current.targetX = 0;
    phys.current.targetY = 0;
    phys.current.lastPointerAngle = null;
    setIsDragging(false);
  };

  const triggerPulse = () => {
    if (!phys.current.reducedMotion) {
      phys.current.bounce = 1;
      phys.current.angularVel = phys.current.angularVel >= 0 ? 2.2 : -2.2;
      const id = Date.now() + Math.random();
      setRipples((prev) => [...prev.slice(-2), id]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r !== id));
      }, 900);
    }
    setActiveIdx((prev) => (prev === null ? 0 : (prev + 1) % ORBIT_NODES.length));
  };

  const activeNode = activeIdx !== null ? ORBIT_NODES[activeIdx] : null;

  return (
    <div
      ref={stageRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUpOrCancel}
      onPointerCancel={handlePointerUpOrCancel}
      onPointerLeave={handlePointerUpOrCancel}
      className={`relative aspect-square w-[min(74vw,270px)] sm:w-[320px] md:w-[360px] lg:w-[min(38vw,440px)] xl:w-[500px] flex-shrink-0 rounded-full select-none touch-none ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      }`}
      aria-label="Interactive Orbital Growth Graphic — Drag to spin, tap knight or nodes to inspect metrics"
    >
      {/* Pure Radial-Gradient Magnetic Glow (No filter blur) */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-[12%] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(216,51,42,0.11) 0%, rgba(251,191,36,0.06) 42%, rgba(11,31,59,0) 70%)',
        }}
      />

      {/* Outer Ring */}
      <div className="pointer-events-none absolute inset-[8%] rounded-full border border-navy-900/15" />

      {/* Inner Ring */}
      <div className="pointer-events-none absolute inset-[21%] rounded-full border border-navy-900/15 border-dashed" />

      {/* Click / Tap Shockwave Ripples (Skipped in reduced-motion) */}
      {ripples.map((id) => (
        <span
          key={id}
          className="pointer-events-none absolute inset-[32%] rounded-full border-2 border-accent-500/50 animate-ping"
          style={{ animationDuration: '900ms' }}
        />
      ))}

      {/* SVG Tether Line connecting Active Node to the Knight */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {activeNode && (
          <line
            ref={lineRef}
            x1="50%"
            y1="50%"
            x2="50%"
            y2="50%"
            stroke="#D8332A"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            strokeOpacity="0.55"
          />
        )}
      </svg>

      {/* 4 Interactive Orbiting Pillar Nodes (Moved via translate3d on wrapper div) */}
      {ORBIT_NODES.map((node, i) => {
        const isSelected = activeIdx === i;
        return (
          <div
            key={node.id}
            ref={(el) => (nodeWrapRefs.current[i] = el)}
            className={`absolute left-0 top-0 will-change-transform ${
              isSelected ? 'z-30' : 'z-20'
            }`}
          >
            <button
              data-orbit-interactive="true"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (!phys.current.reducedMotion) phys.current.bounce = 0.65;
                setActiveIdx(isSelected ? null : i);
              }}
              onPointerEnter={(e) => {
                if (e.pointerType === 'mouse') setActiveIdx(i);
              }}
              aria-label={`${node.metric}: ${node.title}`}
              className={`group relative -translate-x-1/2 -translate-y-1/2 rounded-full touch-none transition-transform duration-200 ease-out-strong focus:outline-none active:scale-95 ${
                isSelected ? 'scale-125' : 'hover:scale-125'
              }`}
            >
              <span
                className={`flex items-center justify-center rounded-full shadow-md ring-4 transition-transform duration-200 ease-out-strong ${
                  node.color
                } ${node.ringColor} ${
                  isSelected
                    ? 'h-5 w-5 lg:h-6 lg:w-6 ring-8'
                    : 'h-3.5 w-3.5 lg:h-4 lg:w-4'
                }`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
              </span>
              {/* Subtle Floating Pill Label next to Node */}
              <span
                ref={(el) => (pillRefs.current[i] = el)}
                style={{ top: '-1.85rem' }}
                className={`pointer-events-none absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-wide shadow-sm transition-opacity duration-150 ${
                  isSelected
                    ? 'bg-navy-950 text-white opacity-100'
                    : 'bg-white/95 text-navy-950 opacity-0 group-hover:opacity-100'
                }`}
              >
                {node.metric}
              </span>
            </button>
          </div>
        );
      })}

      {/* Center 3D Interactive Chess-Knight */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-10">
        <div
          ref={knightWrapRef}
          data-orbit-interactive="true"
          data-knight-core="true"
          className="pointer-events-auto cursor-pointer select-none will-change-transform"
          onClick={(e) => {
            e.stopPropagation();
            triggerPulse();
          }}
          title="Tap or drag to interact"
        >
          <div className="float">
            <img
              src="/icon.png"
              alt="Finamoat Strategic Knight"
              width="640"
              height="616"
              fetchPriority="high"
              decoding="async"
              draggable={false}
              className="h-24 sm:h-32 md:h-36 lg:h-44 xl:h-52 w-auto drop-shadow-sm select-none"
            />
          </div>
        </div>
      </div>

      {/* Interactive HUD Card Container (Fixed min-height so swapping never jumps) */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-2 sm:bottom-0 flex min-h-[78px] flex-col items-center justify-end z-30">
        {activeNode ? (
          <div
            key={activeNode.id}
            data-orbit-interactive="true"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIdx(null);
            }}
            className="hud-enter pointer-events-auto cursor-pointer rounded-2xl border border-navy-900/15 bg-white/95 px-4 py-2.5 shadow-lg text-center max-w-[260px] sm:max-w-[295px]"
          >
            <div className="text-xs sm:text-sm font-serif font-bold text-accent-600">
              {activeNode.metric}
            </div>
            <div className="text-[11px] font-semibold text-navy-950">
              {activeNode.title}
            </div>
            <p className="mt-1 text-[11px] leading-snug text-slate-600">
              {activeNode.detail}
            </p>
          </div>
        ) : (
          <span className="rounded-full bg-sand-100/95 border border-navy-900/10 px-3 py-1 text-[11px] font-medium text-slate-500">
            Drag orb or tap knight to explore
          </span>
        )}
      </div>
    </div>
  );
}

export default function HomePage() {
  const hero = HERO_SLIDES[0];

  return (
    <>
      <SEOHead
        title="Shared CFO Services in Mumbai | Trusted Finance Partner for Startups & SMEs"
        description="At FINAMOAT, we work like a Trusted Finance Partner for startups and business owners. Increase ROI by 100%, reduce finance cost by 50%, and get Daily MIS Dashboards. Book a Free Business Finance Check-up."
        canonicalPath="/"
        faqData={FAQS.slice(0, 4)}
      />

      {/* 1. Hero: one message, one action */}
      <section className="relative overflow-hidden">
        <div className={`${wrap} pt-6 pb-14 sm:pt-10 sm:pb-20 lg:pt-20 lg:pb-28`}>
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="order-2 lg:order-1 lg:col-span-7">
              <h1 className="rise font-serif text-[clamp(2.25rem,5.2vw,5.1rem)] leading-[1.05] tracking-tight text-navy-950">
                {hero.title}
              </h1>
              <p
                className="rise mt-5 sm:mt-7 max-w-xl text-base sm:text-xl leading-relaxed text-slate-600"
                style={{ animationDelay: '70ms' }}
              >
                {hero.subtitle}
              </p>
              <div
                className="rise mt-8 sm:mt-10 flex flex-col items-stretch gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
                style={{ animationDelay: '140ms' }}
              >
                <Link to="/check-up" className={btnPrimary}>
                  Book a free finance check-up
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-out-strong group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <span className="text-center text-xs sm:text-sm font-medium text-slate-400">
                  or
                </span>
                <a
                  href={waLink(
                    SITE_CONFIG.whatsappNumber,
                    'Hi Finamoat, I would like to book a Free Business Finance Check-up for my business.'
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className={btnGhost}
                >
                  <img src="/icons/whatsapp.svg" alt="" className="h-4 w-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end">
              <Knight />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Proof: the four results */}
      <section className="border-y border-navy-900/10">
        <div className={`${wrap} grid grid-cols-2 lg:grid-cols-4`}>
          {IMPACT_STATS.map((s, i) => (
            <Reveal
              key={i}
              delay={i * 60}
              className={`py-7 sm:py-10 lg:py-14 ${
                i >= 2 ? 'border-t border-navy-900/10 lg:border-t-0' : ''
              } ${
                i % 2 === 1
                  ? 'border-l border-navy-900/10 pl-5 sm:pl-8'
                  : 'pr-4 sm:pr-6'
              } ${i > 0 ? 'lg:border-l lg:border-navy-900/10 lg:pl-8' : ''}`}
            >
              <div className="font-serif text-4xl text-navy-950 sm:text-5xl lg:text-6xl">
                <CountUp value={s.value} />
              </div>
              <div className="mt-2 sm:mt-3 text-xs sm:text-sm font-semibold text-navy-900">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. What we do */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className={`${wrap} grid gap-10 sm:gap-14 lg:grid-cols-12`}>
          <Reveal className="lg:col-span-6">
            <h2 className="font-serif text-3xl leading-tight text-navy-950 sm:text-5xl">
              We take charge of your finance function, so you can focus on growth.
            </h2>
            <p className="mt-4 sm:mt-6 max-w-lg text-sm sm:text-base leading-relaxed text-slate-600">
              {SITE_CONFIG.positioning}
            </p>
            <div className="mt-6 sm:mt-8">
              <More to="/about">Meet CA Vikram Menda & the team</More>
            </div>
          </Reveal>
          <Reveal delay={60} className="lg:col-span-6">
            <ul className="divide-y divide-navy-900/10 border-y border-navy-900/10">
              {ABOUT_BULLETS.map((b, i) => (
                <li key={i} className="flex gap-3.5 py-4 sm:gap-4 sm:py-5">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-accent-600" />
                  <span className="text-sm sm:text-base leading-relaxed text-navy-900">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 4. Services, grouped into four lines instead of ten cards */}
      <section className="bg-sand-100 py-16 sm:py-24 lg:py-32">
        <div className={wrap}>
          <Reveal className="mb-8 sm:mb-12 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-serif text-3xl text-navy-950 sm:text-5xl">How we help</h2>
            <More to="/services">All 10 services</More>
          </Reveal>
          <ul className="border-t border-navy-900/15">
            {CATEGORIES.map((c, i) => (
              <Reveal as="li" key={c} delay={i * 60} className="border-b border-navy-900/15">
                <Link
                  to="/services"
                  className="group grid gap-2 py-5 sm:py-7 hover-row md:grid-cols-12 md:gap-8"
                >
                  <h3 className="font-serif text-xl sm:text-2xl text-navy-950 md:col-span-4">
                    {c}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-600 md:col-span-8">
                    {SERVICES.filter((s) => s.category === c)
                      .map((s) => s.title)
                      .join(' · ')}
                  </p>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Case studies: two, big numbers */}
      <section className="py-16 sm:py-24 lg:py-32">
        <div className={wrap}>
          <Reveal className="mb-8 sm:mb-12 flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-serif text-3xl text-navy-950 sm:text-5xl">
              Results we’ve delivered
            </h2>
            <More to="/case-studies">All case studies</More>
          </Reveal>
          <div className="grid gap-10 sm:gap-12 lg:grid-cols-2">
            {CASE_STUDIES.slice(0, 2).map((cs, i) => (
              <Reveal key={cs.id} delay={i * 60}>
                <Link
                  to={`/case-studies/${cs.slug}`}
                  className="group block border-t border-navy-900 pt-5 sm:pt-6"
                >
                  <div className="font-serif text-5xl sm:text-6xl text-accent-600">
                    {cs.headlineMetric}
                  </div>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500">
                    {cs.headlineMetricLabel}
                  </p>
                  <h3 className="mt-4 sm:mt-6 font-serif text-xl sm:text-2xl leading-snug text-navy-950">
                    <span className="u-link">{cs.client}</span>
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. One closing action */}
      <section className="bg-navy-900 py-16 sm:py-24 text-white">
        <div className={`${wrap} grid items-center gap-10 sm:gap-12 lg:grid-cols-2`}>
          <Reveal>
            <h2 className="font-serif text-3xl leading-tight sm:text-5xl">
              Start with a free business finance check-up
            </h2>
            <p className="mt-4 sm:mt-5 max-w-md text-sm sm:text-base leading-relaxed text-slate-300">
              Our experts review the financial systems in your business and give you an exhaustive “Report Card” of the tools & techniques you need.
            </p>
            <div className="mt-6 sm:mt-8">
              <Link to="/check-up" className={btnGold + ' w-full sm:w-auto'}>
                Apply now <ArrowUpRight className="h-4 w-4 transition-transform duration-200 ease-out-strong group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <ul className="divide-y divide-white/15 border-y border-white/15">
              {CHECKUP_POINTS.map((p) => (
                <li key={p} className="flex gap-3.5 py-4 sm:gap-4 sm:py-5 text-sm sm:text-base">
                  <Check className="mt-1 h-4 w-4 flex-shrink-0 text-accent-400" />
                  <span className="text-slate-100">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
