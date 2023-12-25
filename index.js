import express from "express";
const app = express();
const port = 3000;
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const { Schema } = mongoose;

app.use(express.json());

const UserSchema = new Schema({
  userName: String,
  password: String,
  role: String,
});
const User = mongoose.model("User", UserSchema);

app.get("/users", async (req, res) => {
  const data = await User.find({});
  res.send(data);
});

app.get("/:id", async (req, res) => {
  try {
    const data = await User.findById(req.params.id).exec();
    res.send(data);
  } catch (error) {
    res.status(404).send("User not found. ");
  }
});

app.post("/register", async (req, res) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    const data = new User({
      userName: req.body.userName,
      password: hash,
      role: req.body.role,
    });
    await data.save();
    res.status(200).send("User Created!");
  } catch (error) {
    res.status(404).send("Couldn't create User");
  }
});
app.post("/login", async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = User.findOne({ userName });
    if (!user) {
      return res.status(404).send("invalid username");
    }
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.send("You successfully logged!");
    }
  } catch (error) {
    res.send(error)
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const data = await User.findByIdAndDelete(req.params.id);
    res.status(200).send("User Deleted successfully!");
  } catch (error) {
    res.status(500).send("Couldn't delete User");
  }
});

// app.put('/users', async (req, res) => {
//     try {
//         const newUser = new

//     } catch (error) {
//         res.status(500).send("Couldn't Uptate User")

//     }
//   })

mongoose
  .connect("mongodb+srv://emirxan123:emirxan321@cluster0.esb9xx0.mongodb.net/")
  .then(() => console.log("Connected!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
