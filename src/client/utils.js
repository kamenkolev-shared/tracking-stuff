// TODO utilize the typescript version
// /**
//  * TODO test, rename, ...
//  * @param time in milliseconds
//  * @returns
//  */
// export const debouncePerArg =
//   (time: number) =>
//   <T, R>(fn: (arg: T) => R) => {
//     const cache = new Map<T, { time: number; response: R }>()

//     return (arg: T) => {
//       if (!cache.has(arg)) {
//         cache.set(arg, { time, response: fn(arg) })
//         setTimeout(() => {
//           cache.delete(arg)
//         }, time)
//       }

//       return cache.get(arg)!.response
//     }
//   }


export const debouncePerArg = time => fn => {
  const cache = new Map()

  return arg => {
    if (!cache.has(arg)) {
      cache.set(arg, { time, response: fn(arg) })
      setTimeout(() => {
        cache.delete(arg)
      }, time)
    }

    return cache.get(arg).response
  }
}
