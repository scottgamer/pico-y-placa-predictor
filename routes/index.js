const router = require("express").Router();

const picoPlacaValidator = require("../http/validators/picoPlacaValidator");
const picoPlacaController = require("../http/controllers/picoPlacaController");

router.post(
  "/predict",
  picoPlacaValidator.validatePicoPlaca,
  picoPlacaController.predictPicoPlaca
);

module.exports = router;
