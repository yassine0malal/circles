import { createConnectTransport } from "@connectrpc/connect-web";

// Set up the shared transport to point to your Docker backend
export const transport = createConnectTransport({
  baseUrl: "http://localhost:9999",
});