const { Sequelize, DataTypes } = require('sequelize');
const dbConnection = require('../config/database')

const User = dbConnection.define('user_accounts',{
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING
},{
      timestamps:true
});
//User.sync()
module.exports =User;