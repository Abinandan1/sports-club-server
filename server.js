import express from "express";
import emailRouter from "./routes/router.js";
import "express-async-errors";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

app.use("/api/v1/email", emailRouter);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
