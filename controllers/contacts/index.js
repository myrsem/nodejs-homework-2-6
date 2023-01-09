const getAll = require("./getAllContacts");
const getById = require("./getByContactId");
const add = require("./addContact");
const updateById = require("./updateByContactId");
const removeById = require("./removeByContactId");
const updateFavorite = require("./updateFavoriteContacts");

module.exports = {
    getAll,
    getById,
    add,
    updateById,
    removeById,
    updateFavorite,
}