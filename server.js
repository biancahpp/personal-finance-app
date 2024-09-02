import http from 'http'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const port = 8080
const distDir = path.join(__dirname, 'dist')

const server = http.createServer((req, res) => {
  let filePath = path.join(distDir, req.url === '/' ? 'index.html' : req.url)

  fs.promises
    .access(filePath)
    .then(() => fs.promises.stat(filePath))
    .then((stats) => {
      if (stats.isDirectory()) {
        filePath = path.join(filePath, 'index.html')
      }
      return fs.promises.readFile(filePath)
    })
    .then((content) => {
      const ext = path.extname(filePath)
      let contentType = 'text/html'

      switch (ext) {
        case '.js':
          contentType = 'text/javascript'
          break
        case '.css':
          contentType = 'text/css'
          break
        case '.json':
          contentType = 'application/json'
          break
        case '.png':
          contentType = 'image/png'
          break
        case '.jpg':
          contentType = 'image/jpg'
          break
        case '.svg':
          contentType = 'image/svg+xml'
          break
      }

      res.writeHead(200, { 'Content-Type': contentType })
      res.end(content, 'utf-8')
    })
    .catch((err) => {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('404 Not Found')
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.end('500 Internal Server Error')
      }
    })
})

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
