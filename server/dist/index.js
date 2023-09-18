"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _cors = _interopRequireDefault(require("cors"));
var _dbconnection = _interopRequireDefault(require("./Form/Database/dbconnection"));
var _User = _interopRequireDefault(require("./Form/Api/User"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
const app = (0, _express.default)();
app.use(_express.default.json());
app.use((0, _cors.default)());
app.get("/", (req, res) => {
  res.json({
    message: "Trialproject Server Up"
  });
});

//Routes

app.use("/user", _User.default);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  (0, _dbconnection.default)().then(() => {
    console.log("Database connected");
  }).catch(error => {
    console.log("Database not connected", error);
  });
});