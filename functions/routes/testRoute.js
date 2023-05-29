const express = require("express");
const testController = require("../controllers/testController");
const router = express();


router.post("/test", testController.test);
