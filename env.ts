const devEnv = {
  wsURL: "ws://localhost:8000/ws",
  apiURL: "http://localhost:8000/",
}

const prodEnv = {
  wsURL: "wss://tracking-stuff.deno.dev/ws",
  apiURL: "https://tracking-stuff.deno.dev/",
}

// TODO replace with real envs
export default devEnv
