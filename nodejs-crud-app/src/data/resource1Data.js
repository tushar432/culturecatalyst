const resource1Data = [];

const create = (data) => {
    const newResource = { id: resource1Data.length + 1, ...data };
    resource1Data.push(newResource);
    return newResource;
};

const getById = (id) => {
    return resource1Data.find(resource => resource.id == id);
};

const getAll = () => {
    return resource1Data;
};

const update = (id, updatedData) => {
    const index = resource1Data.findIndex(resource => resource.id == id);
    if (index !== -1) {
        resource1Data[index] = { ...resource1Data[index], ...updatedData };
        return resource1Data[index];
    }
    return null;
};

const deleteById = (id) => {
    const index = resource1Data.findIndex(resource => resource.id == id);
    if (index !== -1) {
        return resource1Data.splice(index, 1)[0];
    }
    return null;
};

module.exports = {
    create,
    getById,
    getAll,
    update,
    deleteById
};