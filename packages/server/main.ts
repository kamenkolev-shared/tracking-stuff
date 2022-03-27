// deno-lint-ignore-file ban-ts-comment
// @ts-ignore
import { serve } from "https://deno.land/std/http/mod.ts"
// @ts-ignore
import { pingInterval, Endpoint, endpoints } from "../shared/index.ts"

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
  logs[userID]!.push(entry)
  logSize++
}

async function Handler(req: Request) {
  const path: Endpoint = new URL(req.url).pathname.slice(1) as Endpoint

  if (!endpoints.includes(path as any)) {
    return new Response(path, { status: 404 })
  }

  switch (path) {
    case "ws":
      return WSHandler(req)

    case "log":
      return EventLogHandler(req)

    case "clearList":
      return ClearLogsHandler(req)

    case "list":
      return ListLogsHandler(req)
  }
}

/**
 * @throws if no userID queryParam
 */
function WSHandler(req: Request) {
  console.log("handler called")
  if (req.headers.get("upgrade") != "websocket") {
    return new Response(null, { status: 501 })
  }
  const { socket, response } = Deno.upgradeWebSocket(req)

  const userID = req.url.split("?userID=")[1]

  if(!userID){
    throw new Error(`NO USER ID in ${req.url}`)
  }

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
  }, pingInterval * 5)

  socket.onmessage = e => {
    if (e.data === "ping") {
      // log(userID, `USER PINGED`)
      expirationTimestamp = Date.now() + maxDuration
    }
  }

  socket.onopen = _e => {
    log(userID, `SOCKET OPENED`)
  }

  return response
}

/**
 * beacon handler
 * @throws if no userID queryparam
 */
async function EventLogHandler(req: Request) {
  try {
    const text = await req.text()
    const userID = req.url.split("?userID=")[1]

    if(!userID){
      throw new Error(`NO USER ID in ${req.url}`)
    }

    log(userID, text)

    return new Response(JSON.stringify({ text, userID }), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    })
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 400 })
  }
}

function ListLogsHandler(req: Request) {
  return new Response(JSON.stringify(logs), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
}

function ClearLogsHandler(req: Request) {
  logs = {}
  return new Response("logs cleared!", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*",
    },
  })
}

serve(Handler)
console.log("server running")