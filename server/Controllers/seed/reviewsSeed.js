const { Job } = require('../models');
const createDate = (time) => {
  const date = new Date()
  const [hour,minute] = time.split(":");
  date.setHours(hour);
  date.setMinutes(minute);
  if (Date.now() - date.getTime() < 0) {
    date.setDate(date.getDate()-1)
  }
  return date;
}

const reviewData = [
  {
    id: 1,
    time: createDate("12:05"),
    review: "I love their tapas!",
    user_id: 1,
  },
  {
    id: 2,
    time: createDate('11:17'),
    review: "The beer was cheap, A+ would go again",
    user_id: 2,
  },
  {
    id: 3,
    time: createDate('2:28'),
    review: "Great food, but very loud and hard to talk to friends",
    user_id: 3,
  },
];

const seedReviews = () => Job.bulkCreate(jobData);

module.exports = seedReviews;