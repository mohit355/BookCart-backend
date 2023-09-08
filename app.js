const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const cors = require("cors");

require("dotenv").config();

// import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const braintreeRoutes = require("./routes/braintree");
const orderRoutes = require("./routes/order");

// app
const app = express();

const DB_CONNECT =
  "mongodb+srv://admin1:Mr271232@cluster0.mhpuxxv.mongodb.net/ecommerce";
mongoose.connect(
  DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB");
  }
);

// .then(() => {
//   console.log("DB connected");
// })
// .catch((err) => {
//   console.log("error ", err);
// });

mongoose.connection.on("error", (err) => {
  console.log(`DB connection err ${err.message}`);
});

//MONGO_URI=mongodb+srv://mohit:Mr271232@nodeapi.eb82b.mongodb.net/ecommerce?retryWrites=true&w=majority

// mongoose
//   .connect(process.env.DATABASE, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Local DB connected");
//   })
//   .catch((error) => {
//     console.log("DB error ", error);
//   });

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", braintreeRoutes);
app.use("/api", orderRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// connecting through mongoDB Atlas (line 6 to 21 )

//db connection
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("DB connected");
//   })
//   .catch((err) => {
//     console.log("error");
//   });

// mongoose.connection.on("error", (err) => {
//   console.log(`DB connection err ${err.message}`);
// });

//MONGO_URI=mongodb+srv://mohit:Mr271232@nodeapi.eb82b.mongodb.net/ecommerce?retryWrites=true&w=majority
