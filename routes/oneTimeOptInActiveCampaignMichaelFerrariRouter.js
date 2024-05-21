const express = require("express");
const {
  oneTimeOptInActiveCamapaignMichael,
  oneTimeOptInActiveCamapaignMichaelNoName,
  oneTimeOptInActiveCamapaignMichaelEtudeDeCas,
  oneTimeOptInActiveCamapaignMichaelLive
} = require("../controller/oneTimeOptInActiveCampaignMichaelFerrariController.js");

const router = express.Router();

router.get("/opt-in/michael/test/", (req, res) => {
  res.send("You are here");
});

router.get("/opt-in/michael/:email", oneTimeOptInActiveCamapaignMichaelNoName);
router.get("/opt-in/michael/:name/:email", oneTimeOptInActiveCamapaignMichael);
router.get("/opt-in/michael/etude/cas/:email", oneTimeOptInActiveCamapaignMichaelEtudeDeCas);
router.get("/opt-in/michael/live/channel/micro-coloc/:email", oneTimeOptInActiveCamapaignMichaelLive);

module.exports = router;
