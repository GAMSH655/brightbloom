import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "zq20xpjg",
  dataset: "production",
  apiVersion: "2026-07-25",
  useCdn: true,
});