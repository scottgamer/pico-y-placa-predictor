// TODO implement logic

// "Pico y Placa" predictor.
// The inputs should be
// - a license plate number (the full number, not the last digit)
// - a date (as a String)
// - a time
// the program will return whether or not that car can be on the road.

// Note: To develop this application you need to consider the past rules of the Pico & Placa.
// (Hours: 7:00am - 9:30am / 16:00pm - 19:30).
// Additional research would be needed to complete the exercise. ​

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 4000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

const predictorRoutes = require("./routes/index");
app.use("/api/pico-placa", predictorRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
