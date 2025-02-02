import { GoogleAuth } from "google-auth-library";

let authClient: GoogleAuth | null = null;

export async function getGoogleAuthToken(): Promise<string> {
  try {
    if (!authClient) {
      authClient = new GoogleAuth({
        scopes: ["https://www.googleapis.com/auth/cloud-platform"],
        // If using JSON key file (development)
        // biome-ignore lint/complexity/useLiteralKeys: <explanation>
        keyFile: Bun.env["GCLOUD_FILE"] || "",
        // biome-ignore lint/complexity/useLiteralKeys: <explanation>
        credentials: Bun.env["GOOGLE_CREDENTIALS"]
          ? // biome-ignore lint/complexity/useLiteralKeys: <explanation>
            JSON.parse(Bun.env["GOOGLE_CREDENTIALS"])
          : undefined,
      });
    }

    const client = await authClient.getClient();
    const accessToken = await client.getAccessToken();

    if (!accessToken.token) {
      throw new Error("Failed to get access token");
    }

    return accessToken.token;
  } catch (error) {
    console.error("Error getting Google auth token:", error);
    throw new Error("Authentication failed");
  }
}
