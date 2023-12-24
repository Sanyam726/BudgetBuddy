const mongoose = require("mongoose");

//connect

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sanyamtayal5:wV7rFcHYAcK4gUvg@cluster0.akilhnt.mongodb.net/income-expenses-app?retryWrites=true&w=majority"
    );
    console.log("Db connected Successfully");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

dbConnect();
