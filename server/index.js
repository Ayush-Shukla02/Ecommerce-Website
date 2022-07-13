import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Router from "./routes/route.js";

const app = express();
dotenv.config();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json({ extended: true }));
4;
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));

DefaultData();
