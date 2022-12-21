const mongoose = require('mongoose');
const UserModel = require('./users');


//MongoDB Connection
const DB_URI = 'mongodb+srv://pruebacesde:contraseñacesde@cesde.r5glbas.mongodb.net/?retryWrites=true&w=majority';

const mongoConnection = mongoose.connect(DB_URI, {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, 
    (e) =>{
        if (e) {
            console.log('DB: ERROR !!');
        } else {
            console.log('Conexión correcta !!')
        }
    }
);

const User = UserModel;

module.exports = {
    User,
}


