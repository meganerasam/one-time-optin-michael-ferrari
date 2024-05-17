const express = require("express");
const {
  oneTimeOptInActiveCamapaignMichael,
  testFind,
} = require("../controller/oneTimeOptInActiveCampaignMichaelFerrariController.js");

const router = express.Router();

router.get("/opt-in/michael/test/", (req, res) => {
  res.send("You are here");
});

router.get("/opt-in/michael/:name/:email", oneTimeOptInActiveCamapaignMichael);

module.exports = router;
