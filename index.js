const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const authRouter = require("./routes/admin/auth");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
    keys: ["lksmcarnjlkmscf"]
}));
app.use(authRouter);

app.listen(3000, () => {
    console.log("App is listening on port 3000")
});