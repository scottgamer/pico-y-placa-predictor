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
    let message = `You don't have pico y placa`;

    // check with days
    for (let dayOfWeek in days) {
      if (
        day === dayOfWeek &&
        (lastDigit === days[dayOfWeek].charAt(0) ||
          lastDigit === days[dayOfWeek].charAt(1))
      ) {
        // validate if morning or evening
        if (
          (currentTime >= 700 && currentTime <= 930) ||
          (currentTime >= 1600 && currentTime <= 1930)
        ) {
          message = `You have pico & placa`;
        }
      }
    }

    res.status(200).send({ message });
  } catch (error) {
    next(error);
  }
};
