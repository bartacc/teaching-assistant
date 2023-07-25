import {
    saveUser
} from "../dbQueries";
import {mockUsers} from "./mockData";

export async function fillDbWithMockData(){
    await addUsers();
}

export async function addUsers() {
    await Promise.all(
        mockUsers.map(async (usr) => await saveUser(usr))
    )
}