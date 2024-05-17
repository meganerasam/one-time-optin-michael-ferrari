const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const OneTmeOptInActiveCampaignMichael = require("./routes/oneTimeOptInActiveCampaignMichaelFerrariRouter.js");

dotenv.config();
const app = express();

app.use(cors({ credentials: true, origin: '*' }));
app.use(express.json({ limit: '150mb' }));

app.use('/api/ac/one-time/michael/', OneTmeOptInActiveCampaignMichael);

app.get('/', (req, res) => res.json({ msg: 'Welcome to One Time Opt In...' }));

app.listen(process.env.PORT, () => console.log(`Server running at port ${process.env.PORT}`));