import express from "express";
import cors from "cors";

export const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.listen(port, async () => {
    await testConneciton();
    console.log(`Server run on port: ${port}`)
});