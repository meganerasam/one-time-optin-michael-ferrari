const express = require("express");
const { updateAbsoluGroup } = require("../controller/cbAbsoluController.js");

const router = express.Router();

router.get('/:email/:absolu', updateAbsoluGroup);

module.exports = router;