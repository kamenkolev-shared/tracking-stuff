export const debouncePerArg =
  (time: number) =>
  <T, R>(fn: (arg: T) => R) => {
    const cache = new Map()

    return (arg: T) => {
      if (!cache.has(arg)) {
        cache.set(arg, { time, response: fn(arg) })
        setTimeout(() => {
          cache.delete(arg)
        }, time)
      }

      return cache.get(arg).response
    }
  }
