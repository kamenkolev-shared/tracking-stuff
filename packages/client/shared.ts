import 'dotenv/config'
import { env } from "process"
export const {
  wsURL,
  apiURL
} = env

export const userID = Number(prompt("Please enter a numeric ID"))
export const baseURL = "tracking-stuff.deno.dev"