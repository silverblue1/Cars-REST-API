const express = require("express");
const cors = require("cors");

const CarsRouter = require("./routes/CarsRouter.js");

const app = express();
const port = 8080 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use("/cars", CarsRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
})