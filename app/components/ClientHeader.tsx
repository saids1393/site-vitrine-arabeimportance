'use client';

import Header from './Header';

export default function ClientHeaderWrapper() {
  // Scroll côté client
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return <Header scrollToSection={scrollToSection} />;
}
