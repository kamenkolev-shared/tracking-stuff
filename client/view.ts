import { endpoints } from '../shared/index.js'
import { baseURL, userID } from "./shared.js"

const el = document.getElementsByTagName("pre")[0] as HTMLPreElement

document.getElementById('userID')!.textContent = String(userID)
const updateButton = document.querySelector("button#update")
const clearButton = document.querySelector("button#clear")

function updateLogList() {
  fetch(`https://${baseURL}/${endpoints[2]}`)
    .then(req => req.json())
    .then(json => (el.textContent = JSON.stringify(json, undefined, 2)))
}

updateButton?.addEventListener("click", updateLogList)

clearButton?.addEventListener("click", () => {
  fetch(`https://${baseURL}/${endpoints[3]}`, { method: "HEAD" })
})

updateLogList()
