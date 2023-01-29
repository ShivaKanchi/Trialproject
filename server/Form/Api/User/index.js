import Express from "express";

import { UserModel } from "../../Database/User";

const Router = Express.Router();

// To add User to databse from form 
Router.post("/add", async (req, res) => {
    try {
        const newUser = await UserModel.create(req.body.user);
        return res.status(200).json({
            message: "Added", newUser
        })
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

// To add User to databse from form 
Router.get("/", async (req, res) => {
    try {
        const Users = await UserModel.find();
        if(Users.l)
        return res.status(200).json({
            message: Users.length, Users
        })
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

export default Router
