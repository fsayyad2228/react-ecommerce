import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";

//configure
dotenv.config();
// database config
connectDB();
//rest object
const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/auth", authRoutes);
///rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to E-commerce App</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run
app.listen(PORT, () => {
  console.log(
    `Server Running On ${process.env.DEV_MODE} Mode and Port ${PORT}`.bgCyan
      .white
  );
});
