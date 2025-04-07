const resource2Data = [];

const create = (data) => {
    const newResource2 = { id: resource2Data.length + 1, ...data };
    resource2Data.push(newResource2);
    return newResource2;
};

const getById = (id) => {
    return resource2Data.find(resource => resource.id == id);
};

const getAll = () => {
    return resource2Data;
};

const update = (id, updatedData) => {
    const index = resource2Data.findIndex(resource => resource.id == id);
    if (index !== -1) {
        resource2Data[index] = { ...resource2Data[index], ...updatedData };
        return resource2Data[index];
    }
    return null;
};

const deleteById = (id) => {
    const index = resource2Data.findIndex(resource => resource.id == id);
    if (index !== -1) {
        return resource2Data.splice(index, 1)[0];
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