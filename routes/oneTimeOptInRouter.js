const express = require("express");
const { 
    oneTimeOptIn, 
    oneTimeOptInMardi,
    oneTimeOptInWithName 
} = require("../controller/oneTimeOptInController.js");

const router = express.Router();

router.get('/opt-in/:email', oneTimeOptIn);
router.get('/opt-in/m/:email', oneTimeOptInMardi);
router.get('/opt-in/:email/:name', oneTimeOptInWithName);

module.exports = router;