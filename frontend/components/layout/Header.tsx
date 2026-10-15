import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          Artisan Platform
        </Link>

        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link href="/">Accueil</Link>
            </li>

            <li>
              <Link href="/services">Services</Link>
            </li>

            <li>
              <Link href="/quote">Demander un devis</Link>
            </li>

            <li>
              <Link href="/appointment">Rendez-vous</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
