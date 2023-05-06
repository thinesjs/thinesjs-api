import { check } from 'express-validator';
 
export const contactValidation = [
    check('name', 'name is a required property').not().isEmpty(),
    check('email', 'email is a required property').not().isEmpty().isEmail(),
    check('message', 'message is a required property').isLength({ min: 6 })
]