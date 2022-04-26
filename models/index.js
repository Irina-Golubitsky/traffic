//import all models

const Question = require('./Question');
const Score = require('./Score');
const User = require('./User');
const Hdall= require('./Hdall');

//create associations
User.hasMany(Score, {
  foreignKey: 'user_id'
});

Score.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "cascade"
});
User.hasMany(Question, {
  foreignKey: 'user_id'
});

Question.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "cascade"
});
module.exports = { Question, Score, User, Hdall };