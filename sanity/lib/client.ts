import { createClient } from "next-sanity";



import { apiVersion, dataset, projectId, useCdn } from "../env";


export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skq3PhrS9O1TORoJSfBQhtAYqdBABkfUG4lucaxLbZYS8E4ePWuBV4Xqit9sEyGg2c97ULmSweLYQJOun0msZlp2fZKCM3xvaC7Ps9vSP19zwYRMuggCPIVSy9PApzoJztgeeBG8Oqfm3TewXaDSnhTSKaZeeLMdeI0eB0sAnxkIT1VxXvQE",
})
