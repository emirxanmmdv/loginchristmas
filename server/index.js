import express from "express";
const app = express();
import cors from "cors"
const port = 3000;
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { adminAuth } from "./src/middleware/adminAuth.js";
const { Schema } = mongoose;

app.use(express.json());
app.use(cors())
const UserSchema = new Schema({
  userName: String,
  password: String,
  role: String,
});
const User = mongoose.model("User", UserSchema);

app.get("/users", async (req, res) => {
  console.log("test");
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
    const user = await User.findOne({ userName});
    if (!user) {
      return res.status(201).send({message:"invalid username"});
    }
    const isPasswordValid =  bcrypt.compare(password, user.password)
    if ( isPasswordValid) {
      var token = jwt.sign({ userId: user._id, role: user.role}, 'qakif');
      return res.send(token);
    }
    res.send({message:"username or password is invalid"})
  } catch (error) {
    res.status(404).send("Couldn't Log in");
  }
});

app.delete("/:id",adminAuth, async (req, res) => {
  try {
    const data = await User.findByIdAndDelete(req.params.id);
    res.status(200).send("User Deleted successfully!");
  } catch (error) {
    res.status(500).send("Couldn't delete User");
  }
});

mongoose
  .connect("mongodb+srv://emirxan123:emirxan321@cluster0.esb9xx0.mongodb.net/")
  .then(() => console.log("Connected!"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
