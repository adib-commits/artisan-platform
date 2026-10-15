import Link from "next/link";

const services = [
  {
    title: "Peinture",
    description:
      "Travaux de peinture intérieure et extérieure pour rénover vos espaces.",
  },
  {
    title: "Rénovation",
    description:
      "Amélioration et rénovation de votre logement selon vos besoins.",
  },
  {
    title: "Aménagement",
    description:
      "Des solutions adaptées pour améliorer votre habitat.",
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-gray-900 px-6 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-amber-400">
            Votre artisan, votre projet
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Donnez vie à vos projets de rénovation.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Découvrez nos services, demandez un devis et planifiez
            votre rendez-vous simplement depuis notre plateforme.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/quote"
              className="rounded-lg bg-amber-400 px-6 py-3 font-semibold text-gray-900 transition hover:bg-amber-300"
            >
              Demander un devis
            </Link>

            <Link
              href="/appointment"
              className="rounded-lg border border-white/30 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
              Nos prestations
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Des services adaptés à vos projets
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Consultez les prestations proposées et contactez-nous
              pour discuter de votre projet.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className="mt-6 inline-block font-semibold text-amber-700 hover:text-amber-800"
                >
                  Découvrir les services →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-amber-50 px-6 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Un projet en tête ?
            </h2>

            <p className="mt-2 text-gray-600">
              Présentez votre projet pour obtenir un devis personnalisé.
            </p>
          </div>

          <Link
            href="/quote"
            className="rounded-lg bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-gray-700"
          >
            Commencer ma demande
          </Link>
        </div>
      </section>
    </>
  );
}
