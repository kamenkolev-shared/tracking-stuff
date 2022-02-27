export const wsURL = "ws://localhost:5000"
export const beaconURL = "http://localhost:5001"

const ws = new WebSocket(wsURL)
ws.onopen = () => {
  setInterval(() => {
    ws.send("HELLO FROM CLIENT")
  }, 5000)
}

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
