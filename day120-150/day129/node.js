//console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  //res.end('Hello World this is Nisha Jha');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CSS GRID</title>
      <style>
          .grid{
          display: grid;
          grid-template-rows: 1fr 1fr 4fr;
          grid-auto-rows: 2fr;
          grid-template-columns: 1fr 4fr 2fr;
          grid-gap: 1rem;
          }
          .box{
          background-color: brown;
          border: 2px solid black;
          }
      </style>
  </head>
  <body>
      <div class="grid">
          <div class="box">This is box-1</div>
          <div class="box">This is box-2</div>
          <div class="box">This is box-3</div>
          <div class="box">This is box-4</div>
          <div class="box">This is box-5</div>
          <div class="box">This is box-6</div>
          <div class="box">This is box-7</div>
          <div class="box">This is box-8</div>
          <div class="box">This is box-9</div>
          <div class="box">This is box-10</div>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
