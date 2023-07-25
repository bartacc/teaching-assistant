import {User} from "../models/user.model";

export function getAdmin() {
    // TODO: query database for a user and check if he's an admin
    return {
        login: "admin",
        password: "$argon2i$v=19$m=16,t=2,p=1$YXdkdGZneGM$mjr3iMKplxjkI6867RVLmg" //admin
    }
}

export async function getAllUsers() {
    return await User.findAll();
}

export async function getUserById(id: number) {
    return await User.findByPk(id);
}

export async function getUserByEmail(targetEmail: string) {
    let user = await User.findOne({
        where: {
            email: targetEmail
        }
    });
    if (user === null) {
        return Promise.reject(`Couldn't find user with email ${targetEmail} in db.`);
    }
    return user;
}

export async function isEmailUsed(email: string) {
    try {
        await getUserByEmail(email);
        return true;
    } catch {
        return false;
    }
}

/*
Saves specified user to the database.
If the user didn't exist, it creates it with SQL INSERT query.
If the user did exist, it updates it with SQL UPDATE query.
 */
export async function saveUser(user: User) {
    await user.save();
}

export async function changeUserPassword(user: User, newPasswordHash: string) {
    user.passwordHash = newPasswordHash;
    await saveUser(user);
}
