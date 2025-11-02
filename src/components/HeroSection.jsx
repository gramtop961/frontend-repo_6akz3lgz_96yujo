import React from 'react';
import Spline from '@splinetool/react-spline';
import { Search, UserPlus } from 'lucide-react';

const HeroSection = () => {
  const handleSearch = () => {
    const el = document.getElementById('how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBecomeDonor = () => {
    const el = document.getElementById('knowledge');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden" aria-label="Econith Blood Donation Platform">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/70 to-neutral-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-36">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1 text-sm text-rose-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-rose-400 animate-pulse" /> Live to Give
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-6xl">
            Econith — Find blood donors, fast.
          </h1>
          <p className="mt-4 text-lg text-neutral-200 md:text-xl">
            A community-powered platform connecting donors and receivers directly. Search by blood type and location, with real-time availability based on last donation date.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button onClick={handleSearch} className="inline-flex items-center gap-2 rounded-lg bg-rose-600 px-5 py-3 text-white shadow-lg shadow-rose-600/30 transition hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-400">
              <Search className="h-5 w-5" /> Search for Donor
            </button>
            <button onClick={handleBecomeDonor} className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30">
              <UserPlus className="h-5 w-5" /> Become a Donor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
