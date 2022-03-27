import puppeteer from "puppeteer"
import env from "../../env"
import { endpoints } from "../shared"
import { clearLogs } from "./utils"

const main = async () => {
  const browser = await puppeteer.launch({
    // headless: false,
    // devtools: true,
    // slowMo: 250,
  })

  await clearLogs()

  const clientPage = await browser.newPage()
  const userID = "1"

  clientPage.once("dialog", async (dialog: puppeteer.Dialog) => {
    await dialog.accept(userID)
  })

  await clientPage.goto(env.clientURL)
  const devTools = await clientPage.target().createCDPSession()

  const serverPage = await browser.newPage()
  await serverPage
    .goto(`${env.apiURL}${endpoints[2]}`)
    .then(res => res.json())
    .then(data => console.log({ data: data[userID] }))

  await devTools.send("Memory.simulatePressureNotification", {
    level: "critical",
  })
  await devTools.send("Emulation.setCPUThrottlingRate", {
    rate: 10,
  })
  await devTools.send("Emulation.setVirtualTimePolicy", {
    // budget: 0,
    policy: "pause",
  })
  await clientPage.close()

  await serverPage
    .goto(`${env.apiURL}${endpoints[2]}`)
    .then(res => res.json())
    .then(data => console.log({ data: data[userID] }))

  browser.disconnect()
}

main()
