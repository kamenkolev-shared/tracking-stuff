import { serve } from "https://deno.land/std/http/mod.ts"



function WSHandler(req: Request) {
  if (req.headers.get("upgrade") != "websocket") {
    return new Response(null, { status: 501 })
  }
  const { socket, response } = Deno.upgradeWebSocket(req)

  // socket.addEventListener()
  socket.onclose = _e => {
    console.log("socket closed")
  }

  socket.onerror = err => {
    console.log("error", err)
  }

  socket.onmessage = e => {
    console.log("socket message", e.data)
  }

  socket.onopen = (_e) => {
    console.log("socket open")
  }

  socket.send('')
  socket.onclose = console.log
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
