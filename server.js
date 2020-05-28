require("regenerator-runtime/runtime")
const express = require("express")
const compression = require("compression")
const { join } = require("path")
const root = join(__dirname, "dist")
const render = require("./dist/umi.server")

const app = express()
app.use(compression())
app.use("/", express.static(root))
app.get("*", async (req, res, next) => {
  const context = {};
  const { html } = await render({
    path: req.url,
    context,
  })
  res.type("html")
  res.status(200).send(html)
  next()
})

if (!process.env.NOW_ZEIT_ENV) {
  app.listen(3000)
  console.log("http://localhost:3000")
}

module.exports = app
