const userService = require('../services/userService');

const create = async (request, response, next) => {
  try {
    const result = await userService.create(request.body);
    response.status(201).json({ response: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
};