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

const paths = ["ws", "log", "list", "clearList"] as const
type path = typeof paths[number]

async function Handler(req: Request) {
  const path: path = new URL(req.url).pathname.slice(1) as path

  if (!paths.includes(path as any)) {
    return new Response(path, { status: 400 })
  }

  switch (path) {
    case "ws":
      return await WSHandler(req)

    case "log":
      return await EventLogHandler(req)

    case "clearList":
      return await ClearLogsHandler(req)

    case "list":
      return await ListLogsHandler(req)
  }
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
      // log(userID, `USER PINGED`)
      expirationTimestamp = Date.now() + maxDuration
    }
  }

  socket.onopen = _e => {
    log(userID, `SOCKET OPENED`)
  }

  return response
}

// beacon handler
async function EventLogHandler(req: Request) {
  try {
    const text = await req.text()
    const userID = req.url.split("?userID=")[1]

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
    },
  })
}

function ClearLogsHandler(req: Request) {
  logs = {}
  return new Response("logs cleared!", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  })
}

serve(Handler)
