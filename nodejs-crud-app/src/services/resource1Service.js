const resource1Data = require('../data/resource1Data');

const create = async (data) => {
    return await resource1Data.create(data);
};

const getById = async (id) => {
    return await resource1Data.getById(id);
};

const update = async (id, data) => {
    return await resource1Data.update(id, data);
};

const deleteById = async (id) => {
    return await resource1Data.deleteById(id);
};

const getAll = async () => {
    return await resource1Data.getAll();
};

module.exports = {
    create,
    getById,
    update,
    deleteById,
    getAll,
};