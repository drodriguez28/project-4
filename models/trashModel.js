const mongoose = require('./connection.js')


const TrashSchema = new mongoose.Schema({
    name: String,
    comment: String
})

const TrashCollection = mongoose.model('Trash', TrashSchema)



// get all 
const getAllTrashs = () => {
    return TrashCollection.find({})
}


//get one
const getSingleTrash = (id) => {
    return TrashCollection.findById(id)
}

// create
const createTrash = (trashData) => {
    return TrashCollection.create(trashData)
}

//delete
const deleteTrash = (id) => {
    return TrashCollection.deleteOne({ _id: id })
}

module.exports = {
    getAllTrashs,
    getSingleTrash,
    createTrash,
    deleteTrash
}

