(() => {
  // shared/index.ts
  var pingInterval = 1e3;
  var events = {
    initVisible: "APP_INIT & APP_VISIBLE",
    initHidden: "APP_INIT",
    pageHide: "APP_OBSCURED",
    pageVisible: "APP_VISIBLE",
    windowBlur: "APP_OBSCURED",
    windowFocus: "APP_VISIBLE",
    windowUnload: "APP_CLOSED"
  };

  // client/shared.ts
  var userID = Number(prompt("Please enter a numeric ID"));
  var baseURL = "tracking-stuff.deno.dev";

  // client/utils.ts
  var debouncePerArg = (time) => (fn) => {
    const cache = /* @__PURE__ */ new Map();
    return (arg) => {
      if (!cache.has(arg)) {
        cache.set(arg, { time, response: fn(arg) });
        setTimeout(() => {
          cache.delete(arg);
        }, time);
      }
      return cache.get(arg).response;
    };
  };

  // client/client.ts
  var sendEvent = debouncePerArg(10)((data) => {
    const queued = navigator.sendBeacon(eventLogUrl, data);
    if (!queued) {
      const failedBeacons = JSON.parse(localStorage.getItem("failed-beacons") ?? "[]");
      localStorage.setItem("failed-beacons", JSON.stringify(failedBeacons.concat({
        type: "Beacon failure",
        time: Date.now(),
        url: eventLogUrl,
        data
      })));
    }
  });
  var sendFailedBeacons = async () => {
    await Promise.all(JSON.parse(localStorage.getItem("failed-beacons") ?? "[]").map((beaconFailure) => fetch(eventLogUrl, {
      method: "POST",
      body: beaconFailure
    })));
    localStorage.setItem("failed-beacons", "[]");
  };
  var wsURL = `wss://${baseURL}/ws?userID=${userID}`;
  var eventLogUrl = `https://${baseURL}/log?userID=${userID}`;
  var openWS = () => {
    const ws = new WebSocket(wsURL);
    let interval = null;
    ws.onopen = () => {
      interval = setInterval(() => {
        ws.send("");
      }, pingInterval);
    };
    const handleClose = () => {
      if (interval !== null) {
        clearInterval(interval);
      }
      openWS();
    };
    ws.onclose = handleClose;
    ws.onerror = console.warn;
  };
  openWS();
  document.addEventListener("visibilitychange", () => {
    sendEvent(document.visibilityState === "visible" ? events.pageVisible : events.pageHide);
  });
  window.addEventListener("blur", () => {
    sendEvent(events.windowBlur);
  });
  window.addEventListener("focus", () => {
    sendEvent(events.windowFocus);
  });
  window.addEventListener("unload", () => {
    sendEvent(events.windowUnload);
  });
  sendEvent(document.visibilityState === "visible" ? events.initVisible : events.initHidden);
  sendFailedBeacons();

  // client/view.ts
  var el = document.getElementsByTagName("pre")[0];
  document.getElementById("userID").textContent = userID;
  var updateButton = document.querySelector("button#update");
  var clearButton = document.querySelector("button#clear");
  function updateLogList() {
    fetch(`https://${baseURL}/list`).then((req) => req.json()).then((json) => el.textContent = JSON.stringify(json, void 0, 2));
  }
  updateButton?.addEventListener("click", updateLogList);
  clearButton?.addEventListener("click", () => {
    fetch(`https://${baseURL}/clearList`, { method: "HEAD" });
  });
  updateLogList();
})();
