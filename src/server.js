import express from "express";
import cors from "cors";
import { testConnection } from "./database/connection.js";
import { routes } from "./routes/index.router.js";

export const app = express();
const port = 4000;

app.use(express.json());
app.use(routes)
app.use(cors());

app.listen(port, async () => {
    await testConnection;
    console.log(`Server run on port: ${port}`)
});