import { serve } from "https://deno.land/std/http/mod.ts"

function WSHandler(req: Request) {
  if (req.headers.get("upgrade") != "websocket") {
    return new Response(null, { status: 501 })
  }
  const { socket, response } = Deno.upgradeWebSocket(req)
  socket.addEventListener("message", e => {
    console.log(e.data)
  })

  socket.onclose = (_e) => {
    console.log("socket closed")
  }
  return response
}

serve(WSHandler, { port: 5000 })

// beacon handler

async function BeaconHandler(req: Request) {
  const text = await req.text()
  console.log({ text })

  return new Response(null, { status: 200, headers:{
    'Access-Control-Allow-Origin': '*'
  } })
}

serve(BeaconHandler, { port: 5001 })
