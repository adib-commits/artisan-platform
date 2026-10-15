"use client";

import { FormEvent, useState } from "react";

import { createAppointment } from "@/services/appointmentApi";

export default function AppointmentPage() {
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setMessage("");
    setError("");

    try {
      await createAppointment({
        customer_name: customerName,
        email,
        phone,
        appointment_date: appointmentDate,
        appointment_time: appointmentTime,
      });

      setMessage("Votre rendez-vous a bien été enregistré.");

      setCustomerName("");
      setEmail("");
      setPhone("");
      setAppointmentDate("");
      setAppointmentTime("");
    } catch {
      setError(
        "Une erreur est survenue lors de la prise de rendez-vous.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
          Planifier une intervention
        </p>

        <h1 className="mt-3 text-4xl font-bold text-gray-900">
          Prendre rendez-vous
        </h1>

        <p className="mt-4 text-gray-600">
          Choisissez une date et une heure pour votre rendez-vous.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
        >
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
              htmlFor="appointmentDate"
              className="mb-2 block font-medium text-gray-900"
            >
              Date
            </label>

            <input
              id="appointmentDate"
              type="date"
              value={appointmentDate}
              onChange={(event) => setAppointmentDate(event.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900"
            />
          </div>

          <div>
            <label
              htmlFor="appointmentTime"
              className="mb-2 block font-medium text-gray-900"
            >
              Heure
            </label>

            <input
              id="appointmentTime"
              type="time"
              value={appointmentTime}
              onChange={(event) => setAppointmentTime(event.target.value)}
              required
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
            {loading ? "Enregistrement..." : "Prendre rendez-vous"}
          </button>
        </form>
      </div>
    </section>
  );
}
