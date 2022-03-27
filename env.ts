const devEnv = {
  wsURL: "ws://localhost:8000/ws",
  apiURL: "http://localhost:8000/",
  clientURL: "http://localhost:3000/",
}

const prodEnv = {
  wsURL: "wss://tracking-stuff.deno.dev/ws",
  apiURL: "https://tracking-stuff.deno.dev/",
  clientURL: "https://tracking-stuff-client.netlify.app/",
}

// TODO replace with real envs
export default devEnv
