const http = require('http')

const server = http.createServer((req, res) => {
  if(req.url === '/') {
    res.end("welcome to our home page")
  }
  if (req.url === '/about') {
    res.end("this is our history")
  }
  else {
    res.end(`
    <h1>Oops!</h1>
    <p>We cant find the page your looking for<p>
    <a href="/">back home</a>
  `)
  }
})

server.listen(5000)
