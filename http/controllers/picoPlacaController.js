exports.predictPicoPlaca = (req, res, next) => {
  try {
    const { plate, day, time } = req.body;

    const lastDigit = plate.charAt(6);

    const days = {
      Monday: "12",
      Tuesday: "34",
      Wednesday: "56",
      Thursday: "78",
      Friday: "90"
    };

    const currentTime = parseInt(time);
    let message = "";

    // check with days
    for (let dayOfWeek in days) {
      if (
        day === dayOfWeek &&
        (lastDigit === days[dayOfWeek].charAt(0) ||
          lastDigit === days[dayOfWeek].charAt(1))
      ) {
        // validate if morning
        if (currentTime >= 700 && currentTime <= 930) {
          message = `Is in pico y placa`;
        } // validate if evening
        else if (currentTime >= 1600 && currentTime <= 1930) {
          message = `Is in pico y placa`;
        } else {
          message = `Is not in pico y placa`;
        }
      }
    }

    res.status(200).send({ message });
  } catch (error) {
    next(error);
  }
};
