import {Role, User} from "../models/user.model";

const {validationResult } = require('express-validator');
const argon2 = require('argon2');
import {saveUser} from "../dbUtils/dbQueries";

//creating new user and addding to DB
async function registerUser(data) {
    const passwordHash = await argon2.hash(data.password);

    let newUser = User.build({
        name: data.firstName,
        surname: data.lastName,
        email: data.emailAddress,
        passwordHash: passwordHash,
        phoneNumber: data.phoneNumber,
        birthday: new Date(data.birthdayDate),
        role: data.role,
        country: data.country,
        city: data.city,
        street: data.street_and_num,
        postalCode: data.zipcode
    });

    await saveUser(newUser);
}

async function register(req, res){
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        await registerUser(req.body);
      }
    res.status(201).json({ errors: errors.array() });
}

export default register;