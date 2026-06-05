// src/lib/api.ts

const BASE_URL = "http://127.0.0.1:4000"; // Use IP to avoid IPv6 resolution issues in Node

export async function getSiteSchema() {
  try {
    const [configRes, navRes, pagesRes, settingsRes] = await Promise.all([
      fetch(`${BASE_URL}/config`, { cache: "no-store" }),
      fetch(`${BASE_URL}/navigation`, { cache: "no-store" }),
      fetch(`${BASE_URL}/pages`, { cache: "no-store" }),
      fetch(`${BASE_URL}/settings`, { cache: "no-store" }), // <--- FETCH SETTINGS
    ]);

    if (!configRes.ok || !navRes.ok || !pagesRes.ok || !settingsRes.ok) {
      throw new Error("Failed to fetch one or more schema endpoints");
    }

    return {
      config: await configRes.json(),
      navigation: await navRes.json(),
      pages: await pagesRes.json(),
      settings: await settingsRes.json(), // <--- RETURN SETTINGS
    };
  } catch (error) {
    console.error("Schema Fetch Error:", error);
    throw error;
  }
}

export async function getPageData(slug: string) {
  const schema = await getSiteSchema();
  const normalizedSlug = slug === "" ? "/" : slug;
  const page = schema.pages?.find(
    (p: any) => p.path === normalizedSlug || p.id === slug,
  );

  return {
    page,
    config: schema.config,
    navigation: schema.navigation,
    settings: schema.settings, // <--- PASS SETTINGS DOWN
  };
}

export async function getDishData(id: string) {
  const schema = await getSiteSchema();

  // 1. Find the Home Page
  const homePage = schema.pages?.find((p: any) => p.id === "home");

  // 2. Find the Signature Dishes Section
  const dishesSection = homePage?.sections?.find(
    (s: any) => s.id === "signature_dishes",
  );

  // 3. Find the specific dish in the items array
  const dish = dishesSection?.items?.find((item: any) => item.id === id);

  return {
    dish,
    config: schema.config,
  };
}
