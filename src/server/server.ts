import { serve } from "https://deno.land/std/http/mod.ts"

function WSHandler(req: Request) {
  console.log("handler called")
  if (req.headers.get("upgrade") != "websocket") {
    return new Response(null, { status: 501 })
  }
  const { socket, response } = Deno.upgradeWebSocket(req)

  socket.onclose = _e => {
    console.log("SOCKET CLOSED!")
    clearInterval(timeoutInterval)
  }

  socket.onerror = _e => {
    console.log("SOCKET ERRORED")
  }

  const maxDuration = 5000
  let expirationTimestamp = Date.now() + maxDuration

  const timeoutInterval = setInterval(() => {
    if (Date.now() > expirationTimestamp) {
      console.log("USER TIMED OUT")
      socket.close()
    }
  }, 5000)

  socket.onmessage = e => {
    if (e.data === "ping") {
      console.log("user pinged")
      expirationTimestamp = Date.now() + maxDuration
    }
  }

  socket.onopen = _e => {
    console.log("SOCKET OPEN")
  }

  return response
}

serve(WSHandler, { port: 5000 })

// beacon handler
async function BeaconHandler(req: Request) {
  const text = await req.text()
  console.log({ text })

  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  })
}

serve(BeaconHandler, { port: 5001 })
