import assert from "assert"
import env from "../../env"
import { endpoints } from "../shared"
import isEmpty from "lodash.isempty"
import fetch from "puppeteer-fetch"

export const clearLogs = async () => {
  const clearURL = `${env.apiURL}${endpoints[3]}`
  const listURL = `${env.apiURL}${endpoints[2]}`

  const json = await fetch(clearURL)
    .then(() => fetch(listURL))
    .then(({ json }) => json())

  assert(isEmpty(json))
}
