import express from "express";
import cors from "cors";
import { testConnection } from "./database/connection.js";
import { routes } from "./routes/index.router.js";

export const app = express();
const port = 4000;

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(routes)

app.listen(port, async () => {
    testConnection();
    console.log(`Server run on port: ${port}`)
});