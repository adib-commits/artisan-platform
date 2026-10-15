import type {
  Appointment,
  AppointmentCreate,
} from "@/types/appointment";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";

export async function createAppointment(
  data: AppointmentCreate,
): Promise<Appointment> {
  const response = await fetch(`${API_URL}/appointments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Impossible de créer le rendez-vous.");
  }

  return response.json();
}
