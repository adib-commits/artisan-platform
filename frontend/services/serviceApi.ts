import type { Service } from "@/types/service";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";

export async function getServices(): Promise<Service[]> {
  const response = await fetch(`${API_URL}/services`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Impossible de récupérer les services.");
  }

  return response.json();
}
