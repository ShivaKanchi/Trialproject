"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _allmodel = require("../../Database/allmodel");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Router = _express.default.Router();

// To add User to databsse
Router.post("/add", async (req, res) => {
  try {
    const newUser = await _allmodel.UserModel.create(req.body.user);
    return res.status(200).json({
      message: "Added",
      data: newUser
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
});
Router.get("/all", async (req, res) => {
  try {
    const newUser = await _allmodel.UserModel.find();
    return res.status(200).json({
      data: newUser
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
});
var _default = Router;
exports.default = _default;