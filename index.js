const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const OneTimeOptInRouter = require("./routes/oneTimeOptInRouter.js");
const CbAbsoluRouter = require("./routes/cbAbsoluRouter.js");

dotenv.config();
const app = express();

app.use(cors({ credentials: true, origin: '*' }));
app.use(express.json({ limit: '150mb' }));

app.use('/api/one-time/', OneTimeOptInRouter);
app.use('/api/absolu/', CbAbsoluRouter);

app.get('/', (req, res) => res.json({ msg: 'Welcome to MailerLite One Time Opt In...' }));

app.listen(process.env.PORT, () => console.log(`Server running at port ${process.env.PORT}`));