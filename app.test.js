const test = require("node:test");
const assert = require("node:assert/strict");
const http = require("node:http");
const server = require("./app");

test("app responds with a successful status and greeting", async () => {
  await new Promise((resolve) => {
    server.listen(0, "127.0.0.1", resolve);
  });

  const address = server.address();

  try {
    const response = await new Promise((resolve, reject) => {
      http.get(`http://127.0.0.1:${address.port}/`, (res) => {
        let body = "";
        res.setEncoding("utf8");
        res.on("data", (chunk) => body += chunk);
        res.on("end", () => resolve({
          statusCode: res.statusCode,
          body
        }));
      }).on("error", reject);
    });

    assert.equal(response.statusCode, 200);
    assert.match(response.body, /Hello from my DevOps CI\/CD demo app/);
  } finally {
    await new Promise((resolve, reject) => {
      server.close((err) => err ? reject(err) : resolve());
    });
  }
});
