const resource2Service = require('../services/resource2Service');
const resource2Validation = require('../validation/resource2Validation');

const createResource2 = async (req, res) => {
    const resource2 = await resource2Service.create(req.body);
    res.status(201).json(resource2);
};

const getResource2 = async (req, res) => {
    const resource2 = await resource2Service.getById(req.params.id);
    if (!resource2) {
        return res.status(404).json({ message: 'Resource not found' });
    }
    res.status(200).json(resource2);
};

const updateResource2 = async (req, res) => {
    const updatedResource2 = await resource2Service.update(req.params.id, req.body);
    if (!updatedResource2) {
        return res.status(404).json({ message: 'Resource not found' });
    }
    res.status(200).json(updatedResource2);
};

const deleteResource2 = async (req, res) => {
    const deleted = await resource2Service.deleteById(req.params.id);
    if (!deleted) {
        return res.status(404).json({ message: 'Resource not found' });
    }
    res.status(204).send();
};


const getAllResources2 = async (req, res) => {
    try {
        const resource2Data = await resource2Service.getAll();
        if (!resource2Data) {
            return res.status(404).json({ message: 'Resource not found' });
        }
        res.status(200).json(resource2Data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createResource2,
    getResource2,
    updateResource2,
    deleteResource2,
    getAllResources2
};