</> JavaScript
const http = require("node:http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain; charset=utf-8"
  });

  res.end("Hello from my DevOps CI/CD demo app!\n");
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
  });
}

module.exports = server;
