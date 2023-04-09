'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: {  
      type: DataTypes.STRING,
      allowNull: false,
      field: 'first_name',
      validate:{
        notEmpty: true,
        notNull: true
      }
    },
    lastName: {  
      type: DataTypes.STRING,
      allowNull: false,
      field: 'last_name',
      validate:{
        notEmpty: true,
        notNull: true
      }
    },
    email:{  
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        isEmail: true
      }
    },
    password: { 
      type: DataTypes.TEXT,
      allowNull: false
    },
    birthday: { 
      type: DataTypes.DATEONLY,
      validate: {
        notNull: true,
        notEmpty: true,
        isDate: true,
        isValidDate (value) {
          if(isAfter(new Date(value)), new Date()){
            throw new Error('Your birthday must be earlier than today')
          }
        }
      }
    },
    gender: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    underscored: true
  });
  return User;
};