# Magic Types
[English](readme.zh-cn.md)

通过分析文件头的 [Magic Number](https://en.wikipedia.org/wiki/Magic_number_(programming)) 获取数据的 `MIME`，支持大部分常见的文件类型。

## 特点
- 支持浏览器和 Nodejs
- 高效且无需完整数据，可以从 `url`/`Base64`/`ArrayBuffer` 数据直接推测 `MIME`
- 简单小巧、没有任何依赖

## 使用方法
### npm 模块
```typescript
import { fetchMime, base64Mime, arraybufferMime } from 'magic-types'

// 使用 fetch 请求读取头数据推测 -> image/png
console.log(await fetchMime("https://en.wikipedia.org/static/images/icons/wikipedia.png")) // -> image/png

// 使用 base64 头数据推测 -> image/png
console.log(base64Mime("iVBORw0KGgoAAAANSUhEUgAAAMgAAAC3CAMAAABg8uG4AAACNFBMVEVMaXGHh4jc3N6bm5yNjo6Vlpjh4eOnqKuysrPW19mwsbOtra5vb2/Fxsd4eHiBg4SY"))

// 使用 ArrayBuffer 头数据推测 -> image/png
const res = await fetch("https://en.wikipedia.org/static/images/icons/wikipedia.png")
const buffer = await res.arrayBuffer()
console.log(arraybufferMime(buffer))
```

# Document
### base64Mime(base64String: string): string
使用 `base64` 头数据推测文件 MIME 类型

### fetchMime(url: string, requestInit: RequestInit): Promise<string>
对于 `fetch` 请求，推荐优先使用 `Content-Type` 作为 `MIME` 类型而不是盲目使用此方法。

### arraybufferMime(arraybuffer: ArrayBuffer): string
使用 ArrayBuffer 头数据推测

# License
MIT
