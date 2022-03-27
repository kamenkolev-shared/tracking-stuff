import { endpoints } from "../shared/index.js"
import { apiURL, userID } from "./shared.js"

const el = document.getElementsByTagName("pre")[0] as HTMLPreElement

document.getElementById("userID")!.textContent = String(userID)
const updateButton = document.querySelector("button#update")
const clearButton = document.querySelector("button#clear")

function updateLogList() {
  console.log(`${apiURL}${endpoints[2]}`)
  fetch(`${apiURL}${endpoints[2]}`)
    .then(req => req.json())
    .then(json => (el.textContent = JSON.stringify(json, undefined, 2)))
}

updateButton?.addEventListener("click", updateLogList)

clearButton?.addEventListener("click", () => {
  fetch(`${apiURL}${endpoints[3]}`, { method: "HEAD" })
})

updateLogList()
