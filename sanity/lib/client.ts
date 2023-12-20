import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skPNQuLWSIwwaOl6qllCmldH7B1yQQmvtCTcdxqb6sqIN0cxjwUDcUzoBLh5coQrLQmU8PXncXLBMJooS3XLK43tNGoVaxgQrpPLAjsGeuQz5E39lc0hBvEa9sLOgp1lHW63J8xLQ2Zt2XStVw8HGfUgQXB0UNJSehWgyLL6JLatPKlBHH8o",
})
