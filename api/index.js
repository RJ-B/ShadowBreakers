<<<<<<< HEAD
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

dotenv.config();

mongoose
.connect(process.env.MONGO_URL).then(() => console.log("Databáze úspěšně připojena")).catch((err) => {
    console.log(err);
});

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server běží na portu 5000");
});
=======
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

dotenv.config();

mongoose
.connect(process.env.MONGO_URL).then(() => console.log("Databáze úspěšně připojena")).catch((err) => {
    console.log(err);
});

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server běží na portu ${port}`);
});


>>>>>>> a2ab1112518d39227690f560726fa6511a2eee7d
