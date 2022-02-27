import { baseURL, userID } from "./shared.js"

const el = document.getElementsByTagName("pre")[0]

// @ts-ignore
document.getElementById('userID').textContent = userID
const updateButton = document.querySelector("button#update")
const clearButton = document.querySelector("button#clear")

function updateLogList() {
  fetch(`https://${baseURL}/list`)
    .then(req => req.json())
    .then(json => (el.textContent = JSON.stringify(json, undefined, 2)))
}

updateButton?.addEventListener("click", updateLogList)

clearButton?.addEventListener("click", () => {
  fetch(`https://${baseURL}/clearList`, { method: "HEAD" })
})

updateLogList()
