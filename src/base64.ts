import {matchMime} from "./mime";

const base64Table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split('')

const readBytes = (base64: string, uint8Offset: number, uint8Amount: number) => {
  const getBlockResult = (blockData: string) => {
    let binaryString = ""
    for (let i = 0; i < blockData.length; i++) {
      const val = (base64Table.indexOf(blockData[i])).toString(2).padStart(8, "0")
      binaryString += val.slice(2)
    }
    return [
      parseInt(binaryString.slice(0, 8), 2),
      parseInt(binaryString.slice(8, 16), 2),
      parseInt(binaryString.slice(16, 24), 2),
    ]
  }

  const uint8Array: number[] = []
  let currentBlockDataIndex = Math.floor(uint8Offset / 3)
  let currentBlockData: string = ""
  do {
    currentBlockData = base64.slice(currentBlockDataIndex, currentBlockDataIndex + 4)
    uint8Array.push(...getBlockResult(currentBlockData))
    currentBlockDataIndex += 4
  } while (uint8Array.length < uint8Amount && currentBlockData.length)

  return uint8Array.slice(0, uint8Amount)
}

export const base64Mime = (base64: string) => {
  const hex = readBytes(base64, 0, 32)
    .map(val => val.toString(16).padStart(2, "0"))
    .join(' ')
  const data = matchMime(hex)
  return data
}
