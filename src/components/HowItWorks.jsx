import React from 'react';
import { ShieldCheck, Search, Phone } from 'lucide-react';

const steps = [
  {
    icon: <Search className="h-6 w-6 text-rose-400" />,
    title: 'Search smart',
    desc: 'Filter by blood type and location (Division → District → Police Station) to find matches quickly.'
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
    title: 'Verified donors',
    desc: 'Only admin-approved donors appear in results to prevent fake entries.'
  },
  {
    icon: <Phone className="h-6 w-6 text-sky-400" />,
    title: 'Contact directly',
    desc: 'Open a donor card to view full details and call the donor instantly.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">How Econith works</h2>
        <p className="mt-3 max-w-2xl text-neutral-300">
          A secure, approval-based donor network. Availability is calculated automatically — donors are shown only if their last donation was 110+ days ago.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((s, idx) => (
          <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
            <div className="mb-3 inline-flex items-center justify-center rounded-full bg-neutral-900/70 p-3">
              {s.icon}
            </div>
            <h3 className="text-lg font-medium text-white">{s.title}</h3>
            <p className="mt-1 text-neutral-300">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl bg-gradient-to-r from-rose-600/20 via-sky-600/20 to-emerald-600/20 p-1">
        <div className="rounded-lg border border-white/10 bg-neutral-950 p-6">
          <p className="text-neutral-300">
            Coming next in this demo: full donor search, registration, profiles, admin approvals, and a knowledge center. Use the buttons above to explore the concept.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
