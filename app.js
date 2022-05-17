const fs = require("fs");
const http = require("http");

const greenCids = [
  "QmaimhGJjt8ydhtFmJqNyeLSRmipC9gefSRUJJdYdYLVrQ",
  "QmbTc12i6Cnc7xsT8zN61JuvhregtUiVK2FQ3Pi3LPdnHb",
  "QmbtU9mKuKEvQeRx2gm3w3Bp1HvaEEJoGEJdVeE9TxBnBy",
  "QmRkNZV7vUbxiyWvSqV1BMasubiCbn3qoiuc5PZY9QBgYc",
];

function send404Response(response) {
  response.writeHead(404, { "Content-Type": "text/html" });
  fs.createReadStream("./path/to/404.html").pipe(response);
}

function onRequest(request, response) {
  switch (request.url) {
    case "/green":
      response.writeHead(302, {
        Location:
          "https://ipfs.io/ipfs/" +
          greenCids[Math.floor(Math.random() * greenCids.length)],
        //add other headers here...
      });
      response.end();
      break;
    case "/page2":
      //statements
      break;
    default:
      //if no 'match' is found
      send404Response(response);
      break;
  }
}

http.createServer(onRequest).listen(8000);
