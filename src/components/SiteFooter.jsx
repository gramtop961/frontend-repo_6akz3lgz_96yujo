import React from 'react';

const SiteFooter = () => {
  return (
    <footer className="mt-8 border-t border-white/10 bg-neutral-950/80">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-lg font-medium text-white">Econith</p>
            <p className="text-sm text-neutral-400">Connecting donors and receivers with trust and care.</p>
          </div>
          <nav className="flex items-center gap-6 text-sm text-neutral-300">
            <a href="#how-it-works" className="hover:text-white">How it works</a>
            <a href="#knowledge" className="hover:text-white">Knowledge Center</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </nav>
        </div>
        <p className="mt-6 text-xs text-neutral-500">© {new Date().getFullYear()} Econith. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
