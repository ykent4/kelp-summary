const mongoose = require('mongoose');

const mongoUri = 'mongodb://mongodb/kelp-summaries';
const db = mongoose.connect(mongoUri);

module.exports = db;
