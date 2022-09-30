// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mint', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// module.exports = mongoose.connection;

const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mint', { useNewUrlParser: true })
        .then(connect => console.log('connected to mongodb..'))
        .catch(e => console.log('could not connect to mongodb', e))

module.exports = {mongoose}

