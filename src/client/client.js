import { events } from "./events.js"

const userID = +Math.random().toFixed(2) * 100
console.log(userID)

const baseURL = "tracking-stuff.deno.dev"
const wsURL = `wss://${baseURL}/ws?userID=${userID}`
const eventLogUrl = `https://${baseURL}/log?userID=${userID}`

const openWS = () => {
  console.log("openWS called")
  const ws = new WebSocket(wsURL)
  let interval = null
  ws.onopen = () => {
    interval = setInterval(() => {
      ws.send("ping")
    }, 1000)
  }

  const handleClose = () => {
    console.log("handleClose")
    if (interval) {
      clearInterval(interval)
    }
    openWS()
  }

  ws.onclose = handleClose
  ws.onerror = console.warn
}

openWS()

// ? for when tab is minimized / maximized / opened / gracefully closed
document.addEventListener("visibilitychange", function () {
  // ! does not trigger initially
  if (document.visibilityState === "visible") {
    navigator.sendBeacon(eventLogUrl, events.pageVisible)
  } else {
    navigator.sendBeacon(eventLogUrl, events.pageHide)
  }
})

// ? For when app is not focused
window.addEventListener("blur", _e => {
  navigator.sendBeacon(eventLogUrl, events.windowBlur)
})

window.addEventListener("focus", _e => {
  navigator.sendBeacon(eventLogUrl, events.windowFocus)
})

window.addEventListener("unload", _e => {
  navigator.sendBeacon(eventLogUrl, events.windowUnload)
})
