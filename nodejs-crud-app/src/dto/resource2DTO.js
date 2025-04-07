module.exports = (title, description) => {
    return {
        title,
        description,
        createdAt: new Date(),
        updatedAt: new Date(),
    }
};