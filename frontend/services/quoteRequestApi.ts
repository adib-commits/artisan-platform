import type {
  QuoteRequest,
  QuoteRequestCreate,
} from "@/types/quoteRequest";

const API_URL = "http://127.0.0.1:8000";

export async function createQuoteRequest(
  data: QuoteRequestCreate,
): Promise<QuoteRequest> {
  const response = await fetch(`${API_URL}/quote-requests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Impossible d'envoyer la demande de devis.");
  }

  return response.json();
}
