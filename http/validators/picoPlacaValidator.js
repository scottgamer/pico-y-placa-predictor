const validator = require("./validator");

exports.validatePicoPlacaInput = (req, res, next) => {
  const data = req.body;
  const rules = {
    plate: "required|string",
    day: "required|string",
    time: "required|string"
  };

  const validation = validator.validate(data, rules);
  validation.passes(() => {
    next();
  });

  validation.fails(() => {
    res.status(422).send(validation.errors.all());
  });
};
