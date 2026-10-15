export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} Artisan Platform. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
