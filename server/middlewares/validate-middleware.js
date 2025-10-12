
const validate = (schema) => async(req, res, next) => { // the schema is the signupSchema that we have defined

    try {

        const parseBody = await schema.parseAsync(req.body); // parseAsync tells the data we have filled matches to the schema or not
        req.body = parseBody;
        next();

        
    } catch (err) {
        const message =err.errors[0].message;
        console.log(message);
        res.status(400).json({msg: message});
    }

};

module.exports = validate;