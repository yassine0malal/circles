import { createClient } from "@connectrpc/connect";
import { transport } from "./client";
// Make sure this path matches what buf generated for your companions!
import { CompanionService } from "../gen/companion/v1/companion_connect"; 

export const companionClient = createClient(CompanionService, transport);

export async function getAllCompanions(limit: number = 20) {
  try {
    // Assuming your proto has a listCompanions method
    const response = await companionClient.listCompanions({ pageSize: limit });
    return response.companions || [];
  } catch (error) {
    console.error("Failed to fetch companions:", error);
    return [];
  }
}