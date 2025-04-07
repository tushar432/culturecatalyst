const resource2Data = require('../data/resource2Data');
const resource2DTO = require('../dto/resource2DTO');

const create = async (data) => {
    const resource2 = resource2DTO(data.title, data.description);
    return await resource2Data.create(resource2);
};

const getById = async (id) => {
    return await resource2Data.getById(id);
};

const getAll = async () => {
    return await resource2Data.getAll();
};

const update = async (id, data) => {
    const resource2 = resource2DTO(data.title, data.description);
    return await resource2Data.update(id, resource2);
};

const deleteById = async (id) => {
    return await resource2Data.deleteById(id);
};

module.exports = {
    create,
    getById,
    getAll,
    update,
    deleteById,
};