import Joi from "joi";
//validation for username, email and passwords that the user creates
export const RegisterSchema = Joi.object(
    {
        username : Joi.string().required(),
        email : Joi.string().required().email().messages({'string-email': "Please Enter a Valid Email"}),
        password : Joi.string().required().pattern(
            new RegExp ('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
    )}
)
//validation for login
export const loginSchema = Joi.object(
    {
        email : Joi.string().required().email().messages({'string-email': "Please Enter a Valid Email"}),
        password : Joi.string().required().pattern(
            new RegExp ('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
    )}
)
//validation for posts
export const postSchema = Joi.object(
    {
        postDescription : Joi.string().required(),
    }
)
//validation for polls
export const pollSchema = Joi.object(
    {
        pollQuestion : Joi.string().required(),
        pollChoices: Joi.array().items(Joi.string()).required(),
    }
)
//validation for polls
export const incidentSchema = Joi.object(
    {
        multimedia : Joi.string().required(),
        incidentDescription : Joi.string().required(),
        incidentLocation : Joi.string().required(),
    }
)

