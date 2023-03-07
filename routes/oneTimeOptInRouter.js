import express from "express";
import { oneTimeOptIn } from "../controller/oneTimeOptInController.js";

const router = express.Router();

router.get('/opt-in/:groupName/:email/:name', oneTimeOptIn);

export default router;