import {matchMime} from "./mime";

export const arraybufferMime = (arraybuffer: ArrayBuffer) => {
  let hexString = ""
  for (const data of new Uint8Array(arraybuffer)) {
    hexString += (' ' + data.toString(16).padStart(2, "0"))
    // Skip after (300 / 3) 100 bytes
    if (hexString.length > 256) {
      break
    }
  }
  return matchMime(hexString)
}
