import {matchMime} from "./mime";

export const fetchMime = async (url: string, options?: RequestInit) => {
  const abortController = new AbortController()
  const res = await fetch(url, {
    ...(options || {}),
    signal: abortController.signal,
  })
  if (res.headers.has('Content-Type')) {
    abortController.abort()
    return res.headers.get('Content-Type')
  }

  const reader = res.body.getReader()
  const { value: blockData } = await reader.read()
  reader.releaseLock()
  abortController.abort()

  let hexString = ''
  for (const data of blockData) {
    hexString += (' ' + data.toString(16).padStart(2, "0"))
  }

  return matchMime(hexString)
}
