import Link from "next/link";

import { getServices } from "@/services/serviceApi";

export default async function ServicesPage() {
  const services = await getServices();

  const activeServices = services.filter((service) => service.active);

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Nos prestations
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
            Nos services
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Découvrez les prestations proposées pour vos projets de rénovation.
          </p>
        </div>

        {activeServices.length === 0 ? (
          <p className="mt-12 text-gray-600">
            Aucun service n&apos;est disponible pour le moment.
          </p>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activeServices.map((service) => (
              <article
                key={service.id}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <h2 className="text-xl font-semibold text-gray-900">
                  {service.name}
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description ?? "Description à venir."}
                </p>

                <Link
                  href="/quote"
                  className="mt-6 inline-block font-semibold text-amber-700 hover:text-amber-800"
                >
                  Demander un devis →
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
