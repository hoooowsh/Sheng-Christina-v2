// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const express = require("express");
const PORT = process.env.PORT | 3000;
const ApiError = require("./controllers/middlewares/ApiError");
var cors = require("cors");
const apiErrorHandler = require("./controllers/middlewares/ApiError-handler");
const speech = require("@google-cloud/speech");
const fs = require("fs");
var app = express();
app.use(cors());

// test route
app.get("/test", async (req, res) => {
  res.status(200).send("test");
});

app.get("/testingSpeech", async (req, res) => {
  console.log("testtt")
  const client = new speech.SpeechClient();
  const filename = "./test.wav";
  const file = fs.readFileSync(filename);
  const audioBytes = file.toString("base64");
  const audio = {
    content: audioBytes,
  };
  const config = {
    encoding: "LINEAR16",
    sampleRateHertz: 8000,
    languageCode: "en-US",
  };
  console.log("testtt")

  const request = {
    audio: audio,
    config: config,
  };
  console.log("testtt")
  const [response] = await client.recognize(request);
  console.log("wf")
  const transcription = response.results
    .map((result) => result.alternatives[0].transcript)
    .join("\n");
  res.status(200).send(transcription);
});

// error handler
app.use(apiErrorHandler);

// main func
async function main() {
  app.listen(PORT, () => {
    if (process.env.NODE_ENV === "development") {
      console.log(`Server listening at http://localhost:${PORT}`);
    }
  });
}
main();
exports.app = functions.https.onRequest(app);
