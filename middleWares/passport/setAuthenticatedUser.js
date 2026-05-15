

const setAuthenticatedUser=(req, res, next)=>
    {
        if(req.isAuthenticated())
            {
                res.locals.user= req.user;
            };
        next();
    }

    export default setAuthenticatedUser;