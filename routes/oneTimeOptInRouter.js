const express = require("express");
const { oneTimeOptIn } = require("../controller/oneTimeOptInController.js");

const router = express.Router();

router.get('/opt-in/:email', oneTimeOptIn);

module.exports = router;