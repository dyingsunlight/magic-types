export const matchMime = (hex: string) => {
  const upperCaseHexString = hex.toUpperCase().trim()
  const upperCaseHexArray = upperCaseHexString.split(' ')
  switch (true) {
    // Libpcap File Format[2]
    case upperCaseHexString.startsWith("D4 C3 B2 A1"):
    case upperCaseHexString.startsWith("A1 B2 C3 D4"):
    // Libpcap File Format (nanosecond-resolution)[2]
    case upperCaseHexString.startsWith("4D 3C B2 A1"):
    case upperCaseHexString.startsWith("A1 B2 3C 4D"):
      return "application/vnd.tcpdump.pcap"
    case upperCaseHexString.startsWith("0A 0D 0D 0A"):
      return "application/x-pcapng"
    case upperCaseHexString.startsWith("ED AB EE DB"):
      return "application/x-redhat-package-manager"
    case upperCaseHexString.startsWith("53 51 4C 69 74 65 20 66 6F 72 6D 61 74 20 33 00"):
      return "application/vnd.sqlite3"
    case upperCaseHexString.startsWith("00 00 01 00"):
      return "image/vnd.microsoft.icon"
    case upperCaseHexString.startsWith("69 63 6e 73"):
      return "image/x-icns"
    case upperCaseHexString.startsWith("66 74 79 70 33 67"):
      return "video/3gp"
    case upperCaseHexString.startsWith("1F 9D"):
    case upperCaseHexString.startsWith("1F A0"):
      return "application/tar"
    case upperCaseHexString.startsWith("49 49 2A 00 10 00 00 00 43 52"):
      return "image/x-canon-cr2"
    case upperCaseHexString.startsWith("30 26 B2 75 8E 66 CF 11 A6 D9 00 AA 00 62 CE 6C"):
      return "video/x-ms-wmv"
    case upperCaseHexString.startsWith("4F 67 67 53"):
      return "audio/ogg"
    case upperCaseHexString.startsWith("25 50 44 46 2D"):
      return "application/pdf"
    case upperCaseHexString.startsWith("25 50 44 46 2D"):
      return "application/pdf"
    case upperCaseHexString.startsWith("50 4B 03 04"):
    case upperCaseHexString.startsWith("50 4B 05 06"):
    case upperCaseHexString.startsWith("50 4B 07 08"):
      return "application/zip"
    case upperCaseHexString.startsWith("52 61 72 21 1A 07 00"):
    case upperCaseHexString.startsWith("52 61 72 21 1A 07 01 00"):
      return "application/vnd.rar"
    case upperCaseHexString.startsWith("52 49 46 46") && upperCaseHexArray.slice(8, 12).join(" ") === "57 41 56 45":
      return "audio/wave"
    case upperCaseHexString.startsWith("52 49 46 46") && upperCaseHexArray.slice(8, 12).join(" ") === "41 56 49 20":
      return "video/x-msvideo"
    case upperCaseHexString.startsWith("FF D8 FF E0 00 10 4A 46 49 46 00 01"):
    case upperCaseHexString.startsWith("FF D8 FF EE"):
    case upperCaseHexString.startsWith("FF D8 FF E1") && upperCaseHexArray.slice(6, 12).join(" ") === "45 78 69 66 00 00":
    case upperCaseHexString.startsWith("FF D8 FF E0"):
      return "image/jpeg"
    case upperCaseHexString.startsWith("00 00 00 0C 6A 50 20 20 0D 0A 87 0A"):
    case upperCaseHexString.startsWith("FF 4F FF 51"):
    case upperCaseHexString.startsWith("71 6f 69 66"):
      return "image/jp2"
    case upperCaseHexString.startsWith("47 49 46 38 37 61"):
    case upperCaseHexString.startsWith("47 49 46 38 39 61"):
      return "image/gif"
    case upperCaseHexString.startsWith("49 49 2A 00"):
    case upperCaseHexString.startsWith("4D 4D 00 2A"):
      return "image/tiff"
    case upperCaseHexString.startsWith("89 50 4E 47 0D 0A 1A 0A"):
      return "image/png"
    case upperCaseHexString.startsWith("52 49 46 46") && upperCaseHexArray.slice(8, 12).join(" ") === "57 45 42 50":
      return "image/webp"
    case upperCaseHexString.startsWith("00 00 01 B3"):
      return "video/mpeg"
    case upperCaseHexString.startsWith("46 4C 56"):
      return "video/x-flv"
    case upperCaseHexString.startsWith("52 49 46 46") && upperCaseHexArray.slice(8, 12).join(" ") === "41 56 49 20":
      return "video/x-msvideo"
    case upperCaseHexString.startsWith("FF FB"):
    case upperCaseHexString.startsWith("FF F3"):
    case upperCaseHexString.startsWith("FF F2"):
    case upperCaseHexString.startsWith("49 44 33"):
      return "audio/mp3"
    case upperCaseHexString.startsWith("42 4D"):
      return "image/bmp"
    case upperCaseHexString.startsWith("1A 45 DF A3"):
      return "video/webm"
    case upperCaseHexString.startsWith("77 4F 46 46"):
      return "font/woff"
    case upperCaseHexString.startsWith("77 4F 46 32"):
      return "font/woff2"
    case upperCaseHexString.startsWith("00 01 00 00 00"):
      return "font/ttf"
    case upperCaseHexString.startsWith("4F 54 54 4F"):
      return "font/otf"
    default:
      return "application/octet-stream"
  }
}
