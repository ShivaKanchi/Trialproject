"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserModel = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const UserSchema = new _mongoose.default.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    Type: String
  },
  phone: {
    Type: Number
  }
});
const UserModel = _mongoose.default.model("users", UserSchema);
exports.UserModel = UserModel;