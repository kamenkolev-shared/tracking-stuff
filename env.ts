const devEnv = {
  wsURL: "ws://localhost:8000/ws",
  apiURL: "http://localhost:8000/",
}

const prodEnv = {
  wsURL: "wss://tracking-stuff.deno.de/ws",
  apiURL: "https://tracking-stuff.deno.de/",
}

// TODO replace with real envs
export default devEnv
