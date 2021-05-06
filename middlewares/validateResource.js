const validateResource = (resourceSchema, field = 'body') => async (req, res, next) => {
  const resource = req[field];
  console.log("@@@@@ chegou na validacao");
  try {
    // throws an error if not valid
    await resourceSchema.validate(resource);
    next();
  } catch (e) {
    console.error(">>>>>>>>>>>>>>>>>>>>>>> erro valdiacao: ", e);
    res.status(400).json({ error: e.errors.join(', ') });
  }
};

module.exports = validateResource;