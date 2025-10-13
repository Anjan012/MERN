
const validate = (schema) => async(req, res, next) => { // the schema is the signupSchema that we have defined

    try {

        const parseBody = await schema.parseAsync(req.body); // parseAsync tells the data we have filled matches to the schema or not
        req.body = parseBody;
        next();

        
    } catch (err) {
        const status = 422;
        const message = 'fill the input properly';
        const extraDetails = err.issues[0].message;
        console.log(message);
        // res.status(400).json({msg: message});

        const error = {
            status,
            message,
            extraDetails
        }

        next(error);
    }

};

module.exports = validate;