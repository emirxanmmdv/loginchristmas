import jwt from "jsonwebtoken";
export const adminAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]
    const decode = jwt.verify(token, "qakif");
    if (decode.role === "Admin") {
      next();
    } else {
      res.status(404).send("Invalid Token");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
