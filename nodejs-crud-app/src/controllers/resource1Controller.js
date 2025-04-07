const resource1Service = require('../services/resource1Service');

const createResource1 = async (req, res) => {
    try {
        const resource1Data = await resource1Service.create(req.body);
        res.status(201).json(resource1Data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getResource1 = async (req, res) => {
    try {
        const resource1Data = await resource1Service.getById(req.params.id);
        if (!resource1Data) {
            return res.status(404).json({ message: 'Resource not found' });
        }
        res.status(200).json(resource1Data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateResource1 = async (req, res) => {
    try {
        const updatedResource1 = await resource1Service.update(req.params.id, req.body);
        if (!updatedResource1) {
            return res.status(404).json({ message: 'Resource not found' });
        }
        res.status(200).json(updatedResource1);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteResource1 = async (req, res) => {
    try {
        const deletedResource1 = await resource1Service.deleteById(req.params.id);
        if (!deletedResource1) {
            return res.status(404).json({ message: 'Resource not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllResources1 = async (req, res) => {
    try {
        const resource1Data = await resource1Service.getAll();
        if (!resource1Data) {
            return res.status(404).json({ message: 'Resource not found' });
        }
        res.status(200).json(resource1Data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    createResource1,
    getResource1,
    updateResource1,
    deleteResource1,
    getAllResources1
};