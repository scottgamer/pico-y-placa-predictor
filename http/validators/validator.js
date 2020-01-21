const Validatorjs = require("validatorjs");

exports.validate = (data, rules) => {
  const validator = new Validatorjs(data, rules);
  return validator;
};
