import puppeteer from "puppeteer"
import env from "../../env"
import { endpoints } from "../shared"
import assert from "assert/strict"

const main = async () => {
  const browser = await puppeteer.launch({ headless: false, devtools: true })

  const clientPage = await browser.newPage()
  const serverPage = await browser.newPage()

  // clear current logs
  await serverPage.goto(`${env.apiURL}${endpoints[3]}`)
  // goto list
  const listPagePromise = serverPage.goto(`${env.apiURL}${endpoints[2]}`)

  listPagePromise.then(({ json }) => json()).then(res => console.log(res))
  // assert(await (await ((await listPagePromise).json())))

  // await clientPage.goto(env.clientURL)

  // const devTools = await clientPage.target().createCDPSession()

  // await devTools.send("Memory.simulatePressureNotification", {
  //   level: "critical",
  // })
  // await devTools.send("Emulation.setCPUThrottlingRate", {
  //   rate: 10,
  // })
  // await devTools.send("Emulation.setVirtualTimePolicy", {
  //   budget: 0,
  //   policy: "pause",
  // })

  browser.disconnect()
}

main()
