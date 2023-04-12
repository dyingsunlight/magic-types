import { createServer, ServerResponse, IncomingMessage, Server } from 'http'

import fs from 'fs'
import Path from 'path'
import {fetchMime} from "../src";
import {expect} from "chai";
import {base64Mime} from "../src";


describe("Entry", () => {
  let server: Server
  before(async () => {
    server = createServer((req: IncomingMessage, res: ServerResponse) => {
      const path = Path.join(__dirname, './' , req.url)
      if (fs.existsSync(path)) {
        const stream = fs.createReadStream(path)
        stream.pipe(res)
      } else {
        res.statusCode = 404
        res.end()
      }
    })
    server.listen(9000, '127.0.0.1')
  })
  it('should match fetch mime with png', async function () {
    const mime = await fetchMime('http://127.0.0.1:9000/assets/wikipedia.png')
    expect(mime).is.equals("image/png")
  })
  it('should match base mime with base64', async function () {
    const file = fs.readFileSync(Path.join(__dirname, '/assets/wikipedia.png'))
    const imageBase64 = file.toString('base64')
    console.log("imageBase64", imageBase64)
    expect(base64Mime(imageBase64)).is.equals("image/png")
  })
  after(async () => {
    server.close()
  })
})
