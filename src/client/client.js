import { events } from "./events.js"

const userID = +Math.random().toFixed(2) * 100
console.log(userID)

export const wsURL = `ws://localhost:5000?userID=${userID}`
export const beaconURL = `http://localhost:5001?userID=${userID}`

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
// VS Page visibility API
// Tabs which are playing audio are considered foreground and aren't throttled.
// Tabs running code that's using real-time network connections (WebSockets and WebRTC) go unthrottled in order to avoid closing these connections timing out and getting unexpectedly closed.
document.addEventListener("visibilitychange", function () {
  // ! does not trigger initially
  if (document.visibilityState === "visible") {
    navigator.sendBeacon(beaconURL, events.pageVisible)
  } else {
    navigator.sendBeacon(beaconURL, events.pageHide)
  }
})

// ? For when app is not focused
window.addEventListener("blur", _e => {
  navigator.sendBeacon(beaconURL, events.windowBlur)
})

window.addEventListener("focus", _e => {
  navigator.sendBeacon(beaconURL, events.windowFocus)
})

window.addEventListener("unload", _e => {
  navigator.sendBeacon(beaconURL, events.windowUnload)
})
