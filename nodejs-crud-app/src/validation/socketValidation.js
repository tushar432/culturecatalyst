exports.validateSocketConnection = (req, res, next) => {
    const { userId } = req.body;

    if (!userId) {
        return res.status(400).json({ error: 'User ID is required' });
    }

    next();
};

exports.validateSocketMessage = (req, res, next) => {
    const { message } = req.body;

    if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Valid message is required' });
    }

    next();
};