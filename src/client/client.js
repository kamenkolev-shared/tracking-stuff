export const wsURL = "ws://localhost:5000"
export const beaconURL = "http://localhost:5001"

const messages = {
  hidden: "page hidden",
  visible: "page visible",
  blurred: "window blurred",
  focused: "window focused",

  unload: "page unloading", // ? useless?
}

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
    navigator.sendBeacon(beaconURL, messages.visible)
  } else {
    navigator.sendBeacon(beaconURL, messages.hidden)
  }
})

// ? For when app is not focused
window.addEventListener("blur", _e => {
  navigator.sendBeacon(beaconURL, messages.blurred)
})

window.addEventListener("focus", _e => {
  navigator.sendBeacon(beaconURL, messages.focused)
})

window.addEventListener("unload", _e => {
  navigator.sendBeacon(beaconURL, messages.unload)
})
