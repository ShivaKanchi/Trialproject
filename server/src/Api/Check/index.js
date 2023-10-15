import Express from "express";
import { CheckModel } from "../../Database/allmodel";

const Router = Express.Router();

Router.get("/hello", async (req, res) => {
  try {
    const parseIp = (req) =>
      req.headers["x-forwarded-for"]?.split(",").shift() ||
      req.socket?.remoteAddress;

    const newHello = await CheckModel.create({
      senderAddress: parseIp(req),
      sendDate: new Date(),
    });
    return res.status(200).json({
      data: "Hello",
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

Router.get(`/okay/:secret`, async (req, res) => {
  try {
    if (req.params["secret"] === process.env.CHECK_URL) {
      const allChecks = await CheckModel.find();
      return res.status(200).json({
        param: req.params,
        data: allChecks,
      });
    } else {
      return res.status(500).json({
        message: "You cant access this Api",
      });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
