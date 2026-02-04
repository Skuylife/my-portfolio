'use client';

import { useEffect } from 'react';

export default function HashCleaner() {
  useEffect(() => {
    if (!window.location.hash) return;

    const targetId = window.location.hash.replace('#', '');
    const element = document.getElementById(targetId);

    // hapus hash dari URL
    window.history.replaceState(null, '', window.location.pathname);

    // scroll manual ke section
    if (element) {
      const offset = 80; // tinggi navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const position = elementRect - bodyRect - offset;

      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    }
  }, []);

  return null;
}
