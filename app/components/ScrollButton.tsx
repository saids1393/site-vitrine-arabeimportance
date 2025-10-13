'use client';
import React from 'react';

export default function ScrollButton() {
  return (
    <button
      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      className="mt-6 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all"
    >
      S'inscrire pour être notifié
    </button>
  );
}
