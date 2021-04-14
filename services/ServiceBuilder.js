
const ServiceBuilder = (model) => ({

  add: async (data, transaction = undefined) => {
    // const response = await model.create(data, { transaction });
    // return response;
  },

  update: async (where, data, transaction = undefined) => {
    // data = await ajustPassword(where, data, model);
    // const [count] = await model.update(data, {
    //   where,
    //   returning: true,
    //   transaction,
    // });
    // if (count === 0) throw new Error(ERROR_MESSAGES.REGISTER_NOT_FOUND);
    // const response = await model.findOne({ ...where, transaction });
    // return clearResponse(response);
  },

  list: async (params = {}, transaction = undefined) => {
    // if (params.limit && params.offset) {
    //   const response = await model.findAndCountAll(params);
    //   return response;
    // }
    // const response = await model.findAll({ ...params, transaction });
    // return response;
  },

  getById: async (
    id,
    transaction = undefined,
    erroMenssage = ERROR_MESSAGES.REGISTER_NOT_FOUND
  ) => {
    // const response = await model.findByPk(id, { transaction });
    // if (!response) {
    //   throw new Error(erroMenssage);
    // }
    // return clearResponse(response);
  },

  getOne: async (params = {}, transaction = undefined) => {
    //const response = await model.findOne(params, { transaction });
    // const response = await model.findOne({ ...params, transaction });
    // if (!response) {
    //   throw new Error(ERROR_MESSAGES.REGISTER_NOT_FOUND);
    // }
    // return response;
  },


  delete: async (params = {}, transaction = undefined) => {
    // const count = await model.destroy({ where: { ...params }, transaction });
    // if (count === 0) throw new Error(ERROR_MESSAGES.REGISTER_NOT_FOUND);
    // return count;
  },

});

module.exports = ServiceBuilder;
