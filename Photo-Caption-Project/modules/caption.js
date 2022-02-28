const {DataTypes} = require('sequelize');
const dbConnection = require('../config/database');
const photos = require('./photos');
const User = require('./user');

const photoCaption = dbConnection.define('photos_caption',{
    description: DataTypes.TEXT,
    user_id:{ 
        type:DataTypes.INTEGER,
        references:{
            model: User,
            key: 'id'
        }
    },
    photo_id: {
        type: DataTypes.INTEGER,
        references:{
            model: photos,
            key: 'id'
        }
       },
    created_on: DataTypes.DATE
},{
    timestamps:false
});
//photoCaption.sync()
module.exports=photoCaption;