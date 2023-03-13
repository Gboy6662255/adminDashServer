const connectionString = require("../../configs/mongodb.json");
const User = require("../../Schemas/schema");
const mongoose = require("mongoose");

const uri = connectionString[0].connectionUrl;
let active;
const connectDB = async () => {

  try {
    await mongoose.connect(uri);
    console.log("connected to Mongo");
    // getUsers();
  } catch (error) {
    console.log("Conncection Err" + error.message);
  }
};
async function getUsers() {
  try {
    const result = await User.aggregate([
      {
        $match: {
          loggedin_at: {
            $gte: new Date("2022-09-01"),
            $lte: new Date("2022-09-30"),
          },
        },
      },
      {
        $project: {
          _id: 0,
          date: { $dateToString: { format: "%Y-%m-%d", date: "$loggedin_at" } },
          member_id: 1,
          school_name: 1,
        },
      },
      {
        $group: {
          _id: {
            date: "$date",
            member_id: "$member_id",
            school_name: "$school_name",
          },
        },
      },
      {
        $group: {
          _id: { day: "$_id.date", school_name: "$_id.school_name" },
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          Date: "$_id.day",
          school_name: "$_id.school_name",
          Users: "$count",
        },
      },
      { $sort: { Date: 1 } },
    ]);
    console.log(result);
  } catch (err) {
    console.error("Error getting aggregation result:", err);
  }
}
// const handleActiveUsers=(result)=>{
// activeUsers = result;

// }
module.exports = {connectDB,active,getUsers};
