"use client";

import { FormEvent, useEffect, useState } from "react";

import { createQuoteRequest } from "@/services/quoteRequestApi";
import { getServices } from "@/services/serviceApi";
import type { Service } from "@/types/service";

export default function QuotePage() {
  const [services, setServices] = useState<Service[]>([]);

  const [serviceId, setServiceId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [workType, setWorkType] = useState("");
  const [surface, setSurface] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadServices() {
      try {
        const data = await getServices();
        setServices(data.filter((service) => service.active));
      } catch {
        setError("Impossible de charger les services.");
      }
    }

    loadServices();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    try {
      await createQuoteRequest({
        service_id: Number(serviceId),
        customer_name: customerName,
        email,
        phone,
        work_type: workType,
        surface: surface ? Number(surface) : null,
        description,
      });

      setMessage("Votre demande de devis a bien été envoyée.");

      setServiceId("");
      setCustomerName("");
      setEmail("");
      setPhone("");
      setWorkType("");
      setSurface("");
      setDescription("");
    } catch {
      setError(
        "Une erreur est survenue lors de l'envoi de votre demande.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
          Votre projet
        </p>

        <h1 className="mt-3 text-4xl font-bold text-gray-900">
          Demander un devis
        </h1>

        <p className="mt-4 text-gray-600">
          Décrivez votre projet afin que nous puissions étudier votre demande.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
        >
          <div>
            <label
              htmlFor="service"
              className="mb-2 block font-medium text-gray-900"
            >
              Service
            </label>

            <select
              id="service"
              value={serviceId}
              onChange={(event) => setServiceId(event.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900"
            >
              <option value="">Sélectionnez un service</option>

              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="customerName"
              className="mb-2 block font-medium text-gray-900"
            >
              Nom
            </label>

            <input
              id="customerName"
              type="text"
              value={customerName}
              onChange={(event) => setCustomerName(event.target.value)}
              minLength={2}
              maxLength={100}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-medium text-gray-900"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block font-medium text-gray-900"
            >
              Téléphone
            </label>

            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              minLength={5}
              maxLength={30}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900"
            />
          </div>

          <div>
            <label
              htmlFor="workType"
              className="mb-2 block font-medium text-gray-900"
            >
              Type de travaux
            </label>

            <input
              id="workType"
              type="text"
              value={workType}
              onChange={(event) => setWorkType(event.target.value)}
              minLength={2}
              maxLength={100}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900"
            />
          </div>

          <div>
            <label
              htmlFor="surface"
              className="mb-2 block font-medium text-gray-900"
            >
              Surface en m² (optionnel)
            </label>

            <input
              id="surface"
              type="number"
              min="0.1"
              step="0.1"
              value={surface}
              onChange={(event) => setSurface(event.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="mb-2 block font-medium text-gray-900"
            >
              Description du projet
            </label>

            <textarea
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              minLength={5}
              required
              rows={5}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900"
            />
          </div>

          {message && (
            <p className="rounded-lg bg-green-50 p-4 text-green-700">
              {message}
            </p>
          )}

          {error && (
            <p className="rounded-lg bg-red-50 p-4 text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-amber-400 px-6 py-3 font-semibold text-gray-900 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Envoi..." : "Envoyer ma demande"}
          </button>
        </form>
      </div>
    </section>
  );
}
