'use client';

import Header from './Header';

interface ClientHeaderWrapperProps {
  onSignupClick: () => void;
}

export default function ClientHeaderWrapper({ onSignupClick }: ClientHeaderWrapperProps) {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return <Header scrollToSection={scrollToSection} onSignupClick={onSignupClick} />;
}
