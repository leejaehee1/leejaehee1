const url = require("url");
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`START SERVER : use ${port}`);
});

app.get("/", (_, res) => res.end("헬로 express"));
app.get("/user", user);
app.get("/feed", feed);

function user(req, res) {
  const userInfo = url.parse(req.url, true).query;
  res.end(`[user] name: ${userInfo.name}, age: ${userInfo.age}`);
}

function feed(_, res) {
  res.end(`<ul>
    <li>picture1</li>
    <li>picture2</li>
    <li>picture3</li>
    </ul>
    `);
}
