module.exports = (sequelize, DataTypes) => {
  var Posts = sequelize.define('Posts', {
    post: DataTypes.TEXT,
    author: DataTypes.STRING
  });

  Posts.associate = (models) => {
    // associations can be defined here 
  }

  return Posts;
};
