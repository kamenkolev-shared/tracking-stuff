import Bowser from "bowser";
import lifecycle from "page-lifecycle";
if (Bowser.getParser(window.navigator?.userAgent).getEngine().name !==
    "Blink") {
    console.warn("Non chromium browsers are not fully supported!");
}
export default {
    addEventListener: (listener) => lifecycle.addEventListener("statechange", listener),
    removeEventListener: (listener) => lifecycle.removeEventListener("statechange", listener),
    get state() {
        return lifecycle.state;
    },
    get pageWasDiscarded() {
        return lifecycle.pageWasDiscarded;
    },
};
//# sourceMappingURL=main.js.map