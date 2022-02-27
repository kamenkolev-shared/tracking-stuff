export const wsURL = "ws://localhost:5000"
export const beaconURL = "http://localhost:5001"

const ws = new WebSocket(wsURL)
ws.onopen = () => {
  setInterval(() => {
    ws.send(new Date().getTime().toString())
  }, 200)
}
// VS Page visibility API
// Tabs which are playing audio are considered foreground and aren't throttled.
// Tabs running code that's using real-time network connections (WebSockets and WebRTC) go unthrottled in order to avoid closing these connections timing out and getting unexpectedly closed.
document.addEventListener("visibilitychange", function () {
  // ! does not trigger initially
  if (document.visibilityState === "visible") {
    fetch(beaconURL, {
      body: "FROM FETCH VISIBLE",
      method: "POST",
    })

    navigator.sendBeacon(beaconURL, "FROM BEACON VISIBLE")
  } else {
    navigator.sendBeacon(beaconURL, "FROM BEACON HIDDEN")

    fetch(beaconURL, {
      body: "FROM FETCH HIDDEN",
      method: "POST",
    })
  }
})
