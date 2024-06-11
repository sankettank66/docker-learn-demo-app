const mongoose = require("mongoose");
const dotenv=require('dotenv').config();
const db = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=>console.log("mongodb connected"))
    .catch((err) => console.error(err));
};
module.exports={
    db
}
