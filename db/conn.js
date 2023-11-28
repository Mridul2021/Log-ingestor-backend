const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true, // Corrected typo here
}).then(() =>
  console.log("Database Connected")
).catch((err) => {
  console.log(err);
});
