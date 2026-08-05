import api from "../api/client";

/**
 * Submits the contact form via the configured API endpoint.
 * If the environment variable is not configured, the form fails
 * explicitly instead of reporting a fake success.
 */
export async function submitContactForm(payload) {
  if (!import.meta.env.VITE_CONTACT_API_URL) {
    throw new Error(
      "Contact API is not configured yet. Set VITE_CONTACT_API_URL in your .env file and wire a POST /contact endpoint."
    );
  }

  return api.post("/contact", payload);
}
