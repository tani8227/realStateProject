import db from "../../models/index.js";

const User = db.User;



export const userSignUpPage = (req, res) => {
    return res.render("signup", {
        layout: false
    });
}


export const userSignInPage = (req, res) => {
    return res.render("signin", {
        layout: false
    });
}

export const userSignUp = async (req, res) => {
    try {
        console.log(req.body);
        const { name, email } = req.body;
        const userExisted = await User.findOne({
            where:
            {
                email: email
            }
        });

        if (userExisted) {
            console.log("user already exist");
            return res.render("signin",
                {
                    layout: false
                }
            );
        }

        const user = await User.create(req.body);
        console.log("user created successfully")
        return res.render("signin", {
            layout: false
        });

    } catch (error) {
        console.log("error in signing user", error);
    }
}


export const userSignIn = (req, res) => {
    try {
        console.log("sign in")
        return res.redirect("/agent/dashboard");
    } catch (error) {
        console.log("error in creating the user session", error);
    }
}


export const userLogout=(req, res)=>
    {
        try {
             req.logout((err)=>
                {
                    if(err)
                        {
                            console.log("error in logging out", err);
                        }
                     return res.redirect("/");
                })
        } catch (error) {
           console.log("error", error); 
        }
    }