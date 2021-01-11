require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const crypto = require("crypto");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json(), cors());
app.options("*", cors());

app.post("/", async (req, res) => {
  const timestamp = new Date().getTime();
  const msg = Buffer.from(
    process.env.API_KEY + req.body.meetingNumber + timestamp + req.body.role
  ).toString("base64");
  const hash = crypto
    .createHmac("sha256", process.env.API_SECRET)
    .update(msg)
    .digest("base64");
  const signature = Buffer.from(
    `${process.env.API_KEY}.${req.body.meetingNumber}.${timestamp}.${req.body.role}.${hash}`
  ).toString("base64");

  await res.json({
    signature: signature,
  });
});

app.listen(port, () =>
  console.log(`Video Conferencing Credentials generator on port ${port}!`)
);
