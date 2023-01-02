const {Contact} = require("../../models/contacts")

const getAll = async(req, res)=> {
    const result = await Contact.find({}, "-createdAt -updatedAt")

    res.json(result)
}

module.exports = getAll;