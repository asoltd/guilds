import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter"

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: process.env.NEXT_PUBLIC_TYPESENSE_API_KEY,
    nodes: [
      {
        host: "diqlbuj6yapn8mehp-1.a1.typesense.net",
        port: 443,
        protocol: "https",
      },
    ],
  },
  additionalSearchParameters: {
    query_by: "title,description,tags",
  },
})

export const searchClient = typesenseInstantsearchAdapter.searchClient
