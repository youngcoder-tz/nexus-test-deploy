export type SiteStatus = "BUILDING" | "LIVE" | "ERROR";

export interface Site {
  id: string;
  name: string;
  domain: string;
  subdomain: string;
  status: SiteStatus;
  plan: string;
  thumbnailUrl: string | null;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  ownerId: string;
  contentSchema: Record<string, any>;
  // This will be added later
  // visitorsToday: number;
}
