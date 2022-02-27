import { serve } from "https://deno.land/std/http/mod.ts"

function reqHandler(req: Request) {
  if (req.headers.get("upgrade") != "websocket") {
    return new Response(null, { status: 501 })
  }
  const { socket, response } = Deno.upgradeWebSocket(req)
  socket.addEventListener('message', e => {
    console.log(e.data)
  })
  return response
}
serve(reqHandler, { port: 5000 })
