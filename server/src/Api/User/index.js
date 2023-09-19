import Express from "express";

import { UserModel } from "../../Database/allmodel";

const Router = Express.Router();

// To add User to databsse
Router.post("/add", async (req, res) => {
  try {
    const newUser = await UserModel.create(req.body.user);
    return res.status(200).json({
      message: "Added",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.get("/all", async (req, res) => {
  try {
    const newUser = await UserModel.find();
    console.log(UserModel);
    return res.status(200).json({
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
