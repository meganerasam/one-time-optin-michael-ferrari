const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const OneTimeOptInRouter = require("./routes/oneTimeOptInRouter.js");
const OneTmeOptInActiveCampaign = require("./routes/oneTimeOptInActiveCampaignRouter.js");

dotenv.config();
const app = express();

app.use(cors({ credentials: true, origin: '*' }));
app.use(express.json({ limit: '150mb' }));

app.use('/api/one-time/', OneTimeOptInRouter);
app.use('/api/one-time/ac/', OneTmeOptInActiveCampaign);

app.get('/', (req, res) => res.json({ msg: 'Welcome to One Time Opt In...' }));

app.listen(process.env.PORT, () => console.log(`Server running at port ${process.env.PORT}`));