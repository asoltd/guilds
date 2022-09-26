import Typesense from "../node_modules/typesense/lib/Typesense"

export const client = new Typesense.Client({
  nodes: [
    {
      host: "diqlbuj6yapn8mehp-1.a1.typesense.net",
      port: 443,
      protocol: "https",
    },
  ],
  apiKey: process.env.NEXT_PUBLIC_TYPESENSE_API_KEY,
  connectionTimeoutSeconds: 2,
})
