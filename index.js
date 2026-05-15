import express from "express";
const port = 8000;

import routes from "./api/index.js";
import { DB, sequelize } from "./config/db.js";
import passport from "../src/config/passport.js";
import session from "express-session";
import expressEjsLayouts from "express-ejs-layouts";
import setAuthenticatedUser from "./middleWares/passport/setAuthenticatedUser.js";
import connectSessionSequelize from "connect-session-sequelize";


const sequelizeSession = new connectSessionSequelize(session.Store);

const sequelizeStore = new sequelizeSession(
    {
        db: sequelize,
        expiration: 24 * 60 * 60 * 1000,
    })



const app = express();

DB();

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set("view engine", "ejs");
app.set("views", "./views");

app.set("layout", "./layout");
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

app.use(expressEjsLayouts);

app.use(
    session({
        secret: "realstate",
        resave: false,
        saveUninitialized: false,
        cookie:
        {
            maxAge: 24 * 60 * 60 * 1000,
        },
        store:sequelizeStore,
    })
);



app.use(passport.initialize());
app.use(passport.session());

app.use(setAuthenticatedUser);

app.use("/", routes);

app.listen(port, (err) => {
    if (err) {
        console.log("error in running the server", err);
    }

    console.log("server is running on port", port);
});