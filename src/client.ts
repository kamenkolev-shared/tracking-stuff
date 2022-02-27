import { serverURL } from "./shared.js"

const ws = new WebSocket(serverURL)
ws.onopen = () => {
  ws.send("HELLO FROM CLIENT")
}
