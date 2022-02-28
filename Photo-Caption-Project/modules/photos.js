const {DataTypes} = require('sequelize');
const dbConnection = require('../config/database')

const photos = dbConnection.define('photos',{
    title: DataTypes.STRING,
    imagepath: DataTypes.STRING,
    created_on: DataTypes.DATE
},{
    timestamps:false
});
//photos.sync();
module.exports=photos;