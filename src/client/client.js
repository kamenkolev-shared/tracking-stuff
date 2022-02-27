export const wsURL = "ws://localhost:5000"
export const beaconURL = "http://localhost:5001"

// TODO pingpong
const ws = new WebSocket(wsURL)
ws.onopen = () => {
  setInterval(() => {
    ws.send(new Date().getTime().toString())
  }, 200)
}

// ? for when tab is minimized / maximized / opened / gracefully closed
// VS Page visibility API
// Tabs which are playing audio are considered foreground and aren't throttled.
// Tabs running code that's using real-time network connections (WebSockets and WebRTC) go unthrottled in order to avoid closing these connections timing out and getting unexpectedly closed.
document.addEventListener("visibilitychange", function () {
  // ! does not trigger initially
  if (document.visibilityState === "visible") {
    navigator.sendBeacon(beaconURL, "FROM visibilityState VISIBLE")
  } else {
    navigator.sendBeacon(beaconURL, "FROM visibilityState HIDDEN")
  }
})

// ? For when app is not focused
window.addEventListener('blur', e => {
  navigator.sendBeacon(beaconURL, "Window blurred")
})