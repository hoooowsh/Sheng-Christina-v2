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
var app = express();
app.use(cors());

// test route
app.get("/test", async (req, res) => {
  res.status(200).send("test");
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
