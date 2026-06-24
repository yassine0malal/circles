import { createClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect";
// Import your generated Connect-Go stubs from your workspace gen folder
        // import { IdentityService } from "../gen/go/identity/v1/identityv1connect/service.connect";
        // import { RelationshipService } from "../gen/go/relationship/v1/relationshipv1connect/service.connect";

// Define your backend service endpoints mapping
const transport = createConnectTransport({
  // Use Astro's environment variables to swap targets between local dev and prod
  baseUrl: import.meta.env.PUBLIC_API_URL || "http://localhost:8082",
});

// Export type-safe clients ready for action anywhere
        // export const identityClient = createClient(IdentityService, transport);
        // export const relationshipClient = createClient(RelationshipService, transport);