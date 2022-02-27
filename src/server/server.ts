// deno-lint-ignore-file ban-ts-comment
// @ts-ignore
import { serve } from "https://deno.land/std/http/mod.ts"

let logs: {
  [userID: string]: Array<{
    time: number
    message: string
  }>
} = {}

let logSize = 0
const log = (userID: string, message: string) => {
  // TODO remove
  if (logSize > 10000) {
    console.log("CLEARING LOGS!!!!!!!!!!!!!!!")
    logs = {}
  }


  const entry = { time: Date.now(), message }
  console.log(entry)
  if (!(userID in logs)) {
    logs[userID] = []
  }
  logs[userID].push(entry)
  logSize++
}

function WSHandler(req: Request) {
  console.log("handler called")
  if (req.headers.get("upgrade") != "websocket") {
    return new Response(null, { status: 501 })
  }
  // @ts-ignore
  const { socket, response } = Deno.upgradeWebSocket(req)

  const userID = req.url.split("?userID=")[1]

  socket.onclose = _e => {
    log(userID, `SOCKET CLOSED!`)
    clearInterval(timeoutInterval)
  }

  socket.onerror = _e => {
    log(userID, `SOCKET ERRORED`)
  }

  const maxDuration = 5000
  let expirationTimestamp = Date.now() + maxDuration

  const timeoutInterval = setInterval(() => {
    if (Date.now() > expirationTimestamp) {
      log(userID, `USER TIMED OUT`)
      socket.close()
    }
  }, 5000)

  socket.onmessage = e => {
    if (e.data === "ping") {
      log(userID, `USER PINGED`)
      expirationTimestamp = Date.now() + maxDuration
    }
  }

  socket.onopen = _e => {
    log(userID, `SOCKET OPENED`)
  }

  return response
}

serve(WSHandler, { port: 5000 })

// beacon handler
async function BeaconHandler(req: Request) {
  const text = await req.text()
  const userID = req.url.split("?userID=")[1]

  log(userID, `TEXTED: ${text}`)

  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  })
}

serve(BeaconHandler, { port: 5001 })

// log store and clear
function StoreHandler(req: Request) {
  if (req.method === "GET") {
    return new Response(JSON.stringify(logs), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } else {
    logs = {}
    return new Response("logs cleared!", {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    })
  }
}

serve(StoreHandler, { port: 5002 })
