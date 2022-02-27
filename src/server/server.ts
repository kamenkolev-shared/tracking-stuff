import { serve } from "https://deno.land/std/http/mod.ts"
// should userID really be sent from the client? can it be trusted?

function WSHandler(req: Request) {
  if (req.headers.get("upgrade") != "websocket") {
    return new Response(null, { status: 501 })
  }
  const { socket, response } = Deno.upgradeWebSocket(req)

  socket.onclose = _e => {
    console.log("SOCKET CLOSED!")
  }

  socket.onerror = _e => {
    console.log("SOCKET ERRORED")
  }

  let timerHandle = setTimeout(() => {
    socket.close()
  }, 3000)

  socket.onmessage = e => {
    console.log("SOCKET MESSAGE")
    if (e.data === "ping") {
      clearTimeout(timerHandle)
      // close socket after assumed 30s network issue
      timerHandle = setTimeout(() => {
        socket.close()
      }, 30000)
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

function AuthHandler(_req: Request) {
  const res = new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Set-Cookie": `id=a3fWa; Max-Age=2592000; HttpOnly`,
    },
  })

  return res
}

serve(AuthHandler, { port: 5002 })

// TODO websocket user session
