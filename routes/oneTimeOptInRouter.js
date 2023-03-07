const express = require("express");
const { oneTimeOptIn } = require("../controller/oneTimeOptInController.js");

const router = express.Router();

router.get('/opt-in/:groupName/:email/:name', oneTimeOptIn);

module.exports = router;