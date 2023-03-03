const create = async (request) => {
  // if campos inváliados, então, lance um erro que será captado pelo middleware.
    throw new Error('ValidationError'); 
};

module.exports = {
  create,
};
