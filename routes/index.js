const router = require("express").Router();
const picoPlacaValidator = require("../http/validators/picoPlacaValidator");

router.post("/predict", (req, res, next) => {
  res.status(200).send({ body: req.body });
});

module.exports = router;
