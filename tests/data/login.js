
import 'dotenv/config';

export const USERS = {
    valid: {
        username: process.env.VALID_USERNAME,
        password: process.env.VALID_PASSWORD,
        expectedMessage: 'User successfully logged in!'
    },
    blocked: {
        username: process.env.BLOCKED_USERNAME,
        password: process.env.BLOCKED_PASSWORD,
        expectedMessage: 'User blocked!'
    }, 
    invalid: {
        username: process.env.INVALID_USERNAME,
        password: process.env.INVALID_PASSWORD,
        expectedMessage: 'User not found!'
    }, 
    wrongPassword: {
        username: process.env.WRONG_PASSWORD_USERNAME,
        password: process.env.WRONG_PASSWORD,
        expectedMessage: 'Incorrect username or password!'
    }
}; 

