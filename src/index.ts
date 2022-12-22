const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 4000;

const HOSTNAME = process.env.HOSTNAME || "http://localhost";

const app = express();

app.get("/", (req, res) => {
    res.send("teste");
});

app.use(
    cors({
        origin: ["http://localhost:3000"],
    })
);

app.use((req, res) => {
    res.status(404);
});

app.listen(PORT, () => {
    console.log(`Server running successfully ${HOSTNAME}:${PORT}`);
});
