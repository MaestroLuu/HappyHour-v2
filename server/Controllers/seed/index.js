const seedReviews = require("./reviewsSeed");
const seedUsers = require("./reviewsSeed");

const sequelize = require("../config/connection");


const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
  
    await seedReviews();
    console.log('\n----- REVIEWS SEEDED -----\n');

    process.exit(0);
  } catch (error) {
    console.log(error);
    console.log("There was an error seeding the database, see above for details. Exiting...");
    process.exit(1);
  }
};

seedAll();
