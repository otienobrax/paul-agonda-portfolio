const http = require("http");
const next = require("next");

const port = 6660;
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http.createServer((req, res) => handle(req, res))
    .listen(port, () => {
      console.log("Server running on port " + port);
    });
}).catch(err => {
  console.error("Failed to start server", err);
  process.exit(1);
});