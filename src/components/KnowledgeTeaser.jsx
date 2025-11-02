import React from 'react';

const topics = [
  'How blood works and is made',
  'Donation validation process',
  'Who can donate blood',
  'Who cannot donate blood',
  'Benefits and potential risks',
  'Pre-donation preparation',
  'Post-donation care',
  'General requirements'
];

const KnowledgeTeaser = () => {
  return (
    <section id="knowledge" className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Knowledge Center</h2>
        <p className="mt-3 max-w-2xl text-neutral-300">
          Learn the essentials of safe blood donation — from preparation to recovery. Our knowledge center guides donors and receivers alike.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((t, i) => (
          <article key={i} className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
            <h3 className="text-base font-medium text-white">{t}</h3>
            <p className="mt-1 text-sm text-neutral-300">Explore best practices, eligibility, and care guidelines.</p>
          </article>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <button className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20">
          Explore all topics
        </button>
        <a href="#" className="text-sm text-neutral-300 underline-offset-4 hover:underline">Read safety guidelines</a>
      </div>
    </section>
  );
};

export default KnowledgeTeaser;
