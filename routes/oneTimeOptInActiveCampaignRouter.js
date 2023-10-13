const express = require("express");
const {
    oneTimeOptInActiveCamapaignBen
} = require("../controller/oneTimeOptInActiveCampaignController.js");

const router = express.Router();

router.get('/opt-in/ben/:email', oneTimeOptInActiveCamapaignBen);

module.exports = router;