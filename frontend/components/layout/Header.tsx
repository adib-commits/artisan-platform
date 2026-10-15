"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-4">
          <Link
            href="/"
            onClick={closeMenu}
            className="text-xl font-bold tracking-tight text-gray-900"
          >
            Artisan Platform
          </Link>

          {/* Navigation ordinateur */}
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 transition hover:text-amber-600"
            >
              Accueil
            </Link>

            <Link
              href="/services"
              className="text-sm font-medium text-gray-700 transition hover:text-amber-600"
            >
              Services
            </Link>

            <Link
              href="/quote"
              className="text-sm font-medium text-gray-700 transition hover:text-amber-600"
            >
              Demander un devis
            </Link>

            <Link
              href="/appointment"
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700"
            >
              Rendez-vous
            </Link>
          </nav>

          {/* Bouton mobile */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 text-xl text-gray-900 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {/* Navigation mobile */}
        {menuOpen && (
          <nav className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 font-medium text-gray-700 hover:bg-gray-100"
              >
                Accueil
              </Link>

              <Link
                href="/services"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 font-medium text-gray-700 hover:bg-gray-100"
              >
                Services
              </Link>

              <Link
                href="/quote"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 font-medium text-gray-700 hover:bg-gray-100"
              >
                Demander un devis
              </Link>

              <Link
                href="/appointment"
                onClick={closeMenu}
                className="mt-2 rounded-lg bg-gray-900 px-3 py-3 text-center font-semibold text-white"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
