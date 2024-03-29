"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = async () => {
  _mongoose.default.set("strictQuery", true);
  return _mongoose.default.connect(process.env.MONGODB_URI);
};
exports.default = _default;