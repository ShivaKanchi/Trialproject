import Express from "express";

import { UserModel } from "../../Database/User";

const Router = Express.Router();

// To add User to databsse  
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

// To get Users from database  
Router.get("/all", async (req, res) => {
    try {
        const users = await UserModel.find();
        if (users.length === 0) return res.status(404).json({ failed: "No Users Found" })
        return res.status(200).json({ users })
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

Router.get("/all", async (req, res) => {
    try {
        const users = await UserModel.find();
        if (users.length === 0) return res.status(404).json({ failed: "No Users Found" })
        return res.status(200).json({ users })
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

Router.get("/all", async (req, res) => {
    try {
        const users = await UserModel.find();
        if (users.length === 0) return res.status(404).json({ failed: "No Users Found" })
        return res.status(200).json({ users })
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
})
export default Router
