import {User, Role} from "../../models/user.model";

export const mockUsers: User[]=[
    User.build({
        name: "Jan",
        surname: "Kowalski",
        email: "jankowal@gmail.com",
        passwordHash: "$argon2i$v=19$m=16,t=2,p=1$YVNERmFzZmc$v7rRXcRmy/RxEmOGecl3gA", //tojesthaslo
        phoneNumber: "123456789",
        birthday:  new Date("1999-01-16"),
        role: Role.Teacher,
        country: "Poland",
        city: "Gdansk",
        street: "Warszawska 28",
        postalCode: "00-123",
    }),
    User.build({
        name: "Pawel",
        surname: "Michalski",
        email: "pawmichal@gmail.com",
        passwordHash: "$argon2i$v=19$m=16,t=2,p=1$YVNERmFzZmc$v7rRXcRmy/RxEmOGecl3gA", //tojesthaslo
        phoneNumber: "123456789",
        birthday:  new Date("1999-01-21"),
        role: Role.Student,
        country: "Poland",
        city: "Bialystok",
        street: "Powstancow 28",
        postalCode: "01-111",
    }),
    User.build({
        name: "Maja",
        surname: "Grzywach",
        email: "majkagrzywa@gmail.com",
        passwordHash: "$argon2i$v=19$m=16,t=2,p=1$YVNERmFzZmc$v7rRXcRmy/RxEmOGecl3gA", //tojesthaslo
        phoneNumber: "987654321",
        birthday:  new Date("1999-01-16"),
        role: Role.Student,
        country: "Poland",
        city: "Olsztyn",
        street: "Szczepanskiego 18",
        postalCode: "00-000",
    }),
]