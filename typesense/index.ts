import Typesense from "../node_modules/typesense/lib/Typesense"

export const client = new Typesense.Client({
  nodes: [
    {
      host: "e9dqpntv0g2iukz3p-1.a1.typesense.net",
      port: 443,
      protocol: "https",
    },
  ],
  apiKey: process.env.NEXT_PUBLIC_TYPESENSE_API_KEY,
  connectionTimeoutSeconds: 2,
})
