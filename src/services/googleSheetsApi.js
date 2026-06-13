export async function submitRSVP(data) {
  const endpoint = process.env.REACT_APP_RSVP_API_URL;

  if (!endpoint) {
    throw new Error("RSVP endpoint not configured. Set REACT_APP_RSVP_API_URL in your .env file.");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(body || "Unable to submit RSVP at this time.");
  }

  return response.text();
}

