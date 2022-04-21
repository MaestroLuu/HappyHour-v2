const User = require("./Users");
const Review = require("./Reviews");

Review.belongsTo(User, {
    foreignKey: "user_id"
});

// Define sequelize associations in this file.
module.exports = { User, Review };