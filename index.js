const express = require("express");
const PORT = process.env.port || 3001;

const app = express();

/* API routes */

app.get("/allentries", (req, res) =>{
    res.json({message: "Result from allentries api route!"});
});

app.post("/newentry", (req, res) =>{
    res.json({message: "result from newentry api route!" });
});

// Finalize server setup
app.listen(PORT, () => {
    console.log(`Markside server up on port ${PORT}`);
})