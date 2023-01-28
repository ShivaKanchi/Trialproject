import Express from "express";

import { UserModel } from "../../Database/User";

const Router = express.Router();

// To add User to databse from form 
Router.post("/add", async (req, res) => {
    try {
        const newUser = await UserModel.create(req.body.data);
        return res.status(200).json({
            status: "Added", newUser
        })
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
})


export default Router
