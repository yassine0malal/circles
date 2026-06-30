import { createClient } from "@connectrpc/connect";
import { transport } from "./client";
import { CircleService } from "../gen/circle/v1/circle_connect"; 
import { Circle, CircleType, Modality, AgeGroup, GenderFocus } from "../gen/circle/v1/circle_pb"; // <-- Imported enums here

// Define your strict frontend interface
export interface CircleCompanion {
  id: string;
  title: string;
  email:string;
  name: string;
  credentials: string;
  verified: boolean;
  verifiedBy: string;
  location: string;
  bio: string;
  phone: string;
  image: string;
  lat: number;
  lng: number;
  gender: string;
  modality: string;
  orientation: string;
  category: string;
  price: string;
  sessionCost: string;
  groupMeets: string;
  age: string;
  maxMembers: number;
  otherGroups: string[];
}

// Initialize the raw RPC client
export const circleClient = createClient(CircleService, transport);

// The Translator Function matching exact protobuf numeric enums
function mapCircleToCompanionFormat(apiCircle: Circle): CircleCompanion {
  const priceString = apiCircle.pricingCents 
    ? `$${(apiCircle.pricingCents / 100).toFixed(0)}` 
    : 'Free';

  // 1. Map Numeric Modality Enums
  const modalityMap: Record<number, string> = {
    [Modality.IN_PERSON]: 'In Person',
    [Modality.ONLINE]: 'Online',
    [Modality.UNSPECIFIED]: 'Online',
  };

  // 2. Map Numeric CircleType Enums
  const categoryMap: Record<number, string> = {
    [CircleType.RELATIONAL]: 'Relational/Process',
    [CircleType.MINDFULNESS]: 'Mindfulness/Somatic',
    [CircleType.PSYCHOEDUCATIONAL]: 'Psychoeducational/Skills',
    [CircleType.SUPPORT]: 'Support/Mutual-Aid',
    [CircleType.UNSPECIFIED]: 'Support Group',
  };

  // 3. Map Numeric Gender Focus Enums
  const genderMap: Record<number, string> = {
    [GenderFocus.ALL]: 'All',
    [GenderFocus.WOMEN]: 'Female',
    [GenderFocus.MEN]: 'Male',
    [GenderFocus.UNSPECIFIED]: 'All',
  };

  // 4. Map Numeric Age Group Enums
  const ageMap: Record<number, string> = {
    [AgeGroup.ALL]: 'All ages',
    [AgeGroup.TEENS]: 'Teens',
    [AgeGroup.ADULTS]: 'Adults',
    [AgeGroup.YOUNG_ADULTS]: 'Young Adults',
    [AgeGroup.UNSPECIFIED]: 'Adults',
  };

  const companion = apiCircle.companion || {};

  return {
    id: apiCircle.id,
    title: apiCircle.title || "Untitled Circle",
    name: companion.fullName || "Verified Facilitator",
    email:companion.email,
    credentials: companion.credentials || "Credentials Verified",
    verified: true,
    verifiedBy: "Circles",
    location: apiCircle.location || apiCircle.stateEligibility || "Location TBD",
    bio: apiCircle.description,
    phone: companion.telephone || "(555) 000-0000",
    image: companion.avatarUrl || "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    lat: apiCircle.latitude || 0,
    lng: apiCircle.longitude || 0,
    
    // Using our safe numeric dictionaries instead of .replace() string methods
    gender: genderMap[apiCircle.genderFocus] || "All",
    modality: modalityMap[apiCircle.modality] || 'Online',
    category: categoryMap[apiCircle.circleType] || 'Support Group',
    age: ageMap[apiCircle.ageGroup] || "Adults",
    
    orientation: apiCircle.circleType === CircleType.PSYCHOEDUCATIONAL ? 'relief-oriented' : 'values-driven',
    price: priceString,
    sessionCost: priceString,
    groupMeets: apiCircle.scheduleInfo || "Schedule TBD",
    maxMembers: apiCircle.capacityMax || 8,
    otherGroups: apiCircle.therapyTypes || []
  };
}

// The Clean Helper Function returning a Promise of your interface
export async function getActiveCircles(state: string = ''): Promise<CircleCompanion[]> {
  try {
    const response = await circleClient.listCircles({ state });
    
    if (!response.circles || response.circles.length === 0) {
      console.log("⚠️ BACKEND RETURNED EMPTY ARRAY");
      return [];
    }
    
    return response.circles.map(mapCircleToCompanionFormat);
    
  } catch (error) {
    console.error("❌ FAILED TO FETCH CIRCLES:", error);
    return []; 
  }
}