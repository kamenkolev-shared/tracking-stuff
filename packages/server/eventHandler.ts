/**
 * active - app is in use
 * inactive - app is minimized/not in-use
 * offline - network issues
 */
type AppUsageState = "active" | "offline" | "inactive"

type AppUsageData = {
  userId: string
  from: number
  to: number
  use: AppUsageState
}

// Tab not visible -> minimization is detectable.
// switching to another tab is detectable

// what about multiwindow situations (program is on one monitor, I use another?) (lack of focus)
// what about app not being dragged off to a corner of the screen?

// NOTE! socket is not closed when client goes offline.
// OnSocketClose, client is considered offline
// SocketClose can be triggered by the client or by the server
// Socket openness interval is a measure of user activity

// TODO client has no network connection, but is apparently using the app

class UserUsageTracker {
  private lastEntry?: AppUsageData

  userBecameActive(at: Date) {
    if (this.lastEntry?.use === "active") {
      this.extendLastEntry(at)
    } else if (this.lastEntry) {
      this.store.log(this.lastEntry)
      const now = Date.now()
      const newEntry: AppUsageData = {
        // ? should it not use the user-provided time?
        from: now,
        to: now,
        use: "active",
        userId: this.userId,
      }

      this.lastEntry = newEntry
    }
  }

  userBecameInactive(at: Date) {}

  userWentOffline(at: Date) {}

  private extendLastEntry(to: Date) {
  }

  constructor(
    private userId: string,
    private store: IUserActivityStore = console,
  ) {}
}

interface IUserActivityStore {
  log(entry: AppUsageData): void
}
