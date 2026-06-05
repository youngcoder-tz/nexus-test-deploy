// src/providers/NexusProviderWrapper.tsx
"use client";

import { NexusProvider } from "@nexushub/client";

export function NexusProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NexusProvider>{children}</NexusProvider>;
}
