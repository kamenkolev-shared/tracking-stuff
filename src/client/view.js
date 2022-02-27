const el = document.getElementsByTagName("pre")[0]

const updateButton = document.querySelector("button#update")
const clearButton = document.querySelector("button#clear")

function updateLogList() {
  fetch("https://tracking-stuff.deno.dev/list")
    .then(req => req.json())
    .then(json => (el.textContent = json))
}

updateButton?.addEventListener("click", updateLogList)

clearButton?.addEventListener("click", () => {
  fetch("https://tracking-stuff.deno.dev/clearList", { method: "HEAD" })
})

updateLogList()
