const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`DB Connected Successfuly `);
    })
    .catch((error) => {
      console.log("Db Connection Failde ");
      console.error(error);
      process.exit(1);
    });
};
