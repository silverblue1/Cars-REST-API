const express = require("express");
const cors = require("cors");

const CarsRouter = require("./routes/CarsRouter.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use("/cars", CarsRouter);

app.get("/", (req, res) => {
    res.json({
        title: "Check Doc for URLs to use this API",
        exampleUrl: "/cars/color/Violet"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Check port ${PORT}...`);
})