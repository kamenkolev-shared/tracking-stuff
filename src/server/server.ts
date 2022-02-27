import { serve } from "https://deno.land/std/http/mod.ts"

function WSHandler(req: Request) {
  console.log("handler called")
  if (req.headers.get("upgrade") != "websocket") {
    return new Response(null, { status: 501 })
  }
  const { socket, response } = Deno.upgradeWebSocket(req)

  const userID = req.url.split("?userID=")[1]

  socket.onclose = _e => {
    console.log(`SOCKET for user ${userID} CLOSED!`)
    clearInterval(timeoutInterval)
  }

  socket.onerror = _e => {
    console.log(`SOCKET for user ${userID} ERRORED`)
  }

  const maxDuration = 5000
  let expirationTimestamp = Date.now() + maxDuration

  const timeoutInterval = setInterval(() => {
    if (Date.now() > expirationTimestamp) {
      console.log(`USER ${userID} TIMED OUT`)
      socket.close()
    }
  }, 5000)

  socket.onmessage = e => {
    if (e.data === "ping") {
      console.log(`USER ${userID} PINGED`)
      expirationTimestamp = Date.now() + maxDuration
    }
  }

  socket.onopen = _e => {
    console.log(`SOCKET for user ${userID} OPEN`)
  }

  return response
}

serve(WSHandler, { port: 5000 })

// beacon handler
async function BeaconHandler(req: Request) {
  const text = await req.text()
  const userID = req.url.split("?userID=")[1]

  console.log(`user: ${userID}`, text)

  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  })
}

serve(BeaconHandler, { port: 5001 })
