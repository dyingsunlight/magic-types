# Magic Types
[简体中文](readme.zh-cn.md)

Get the `MIME` of the data by parsing the [Magic Number](https://en.wikipedia.org/wiki/Magic_number_(programming)) in the file header, supporting most common file types.

## Features
- Supports browsers and Nodejs
- Efficient and no need for complete data, can infer `MIME` directly from `url`/`Base64`/`ArrayBuffer` data
- Simple and small (5kb), no dependencies

## Usage
### npm module
```shell
npm i magic-types
```
```typescript
import { fetchMime, base64Mime, arraybufferMime } from 'magic-types'

// use fetch request to read header data speculation -> image/png
console.log(await fetchMime("https://en.wikipedia.org/static/images/icons/wikipedia.png")) // -> image/png

// using base64 header data speculation -> image/png
console.log(base64Mime("iVBORw0KGgoAAAANSUhEUgAAAMgAAAC3CAMAAABg8uG4AAACNFBMVEVMaXGHh4jc3N6bm5yNjo6Vlpjh4eOnqKuysrPW19mwsbOtra5vb2 /Fxsd4eHiBg4SY"))

// use ArrayBuffer header data speculation -> image/png
const res = await fetch("https://en.wikipedia.org/static/images/icons/wikipedia.png")
const buffer = await res.arrayBuffer()
console.log(arraybufferMime(buffer))
```
### From CDN
```html
<script src="https://unpkg.com/magic-types/dist/magic-types.umd.js"></script>
<!-- or https://www.jsdelivr.com/npm/magic-types/dist/umd/magic-types.umd.js -->
```

# Document
### base64Mime(base64String: string): string
Use `base64` headers to infer the document MIME type

### fetchMime(url: string, requestInit: RequestInit): Promise<string>
For `fetch` requests, it is recommended to use `Content-Type` as the `MIME` type in preference to using this method blindly.

### arraybufferMime(arraybuffer: ArrayBuffer): string
Using ArrayBuffer header data speculation

### License
MIT
