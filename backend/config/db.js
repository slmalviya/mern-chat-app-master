const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();
const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {})
    .then(console.log("Server is connected to MongoDB Database"))
    .catch((err) => {
      console.log(err);
    });
};

// const client = new MongoClient(process.env.MONGO_URI, {
//   serverApi: ServerApiVersion.v1,
// });

// const connectDB = async () => {
//   await client
//     .connect()
//     .then(() => {
//       console.log("Coonected to MongoDB");
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };

module.exports = connectDB;
