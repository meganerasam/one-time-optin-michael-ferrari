import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import OneTimeOptInRouter from "./routes/oneTimeOptInRouter.js"

dotenv.config();
const app = express();

app.use(cors({ credentials: true, origin: '*' }));
app.use(express.json({ limit: '150mb' }));

app.use('/api/one-time/', OneTimeOptInRouter);

app.get('/', (req, res) => res.json({ msg: 'Welcome to MailerLite One Time Opt In...' }));

app.listen(process.env.PORT, () => console.log(`Server running at port ${process.env.PORT}`));