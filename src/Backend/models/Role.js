const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema({
    role: String,
    isAvailable: Boolean,
    player: String,
	obsComp:[String]
})

module.exports = mongoose.model('Role', roleSchema);   