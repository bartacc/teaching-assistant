import {BelongsToMany, Column, HasMany, IsEmail, Model, Table, Unique} from "sequelize-typescript";

@Table
export class User extends Model {
    @Column
    name: string;

    @Column
    surname: string;

    @IsEmail
    @Unique
    @Column
    email: string;

    @Column
    passwordHash: string;

    @Column
    phoneNumber: string;

    @Column
    birthday: Date;

    @Column
    gender: Gender;

    @Column
    country: string;

    @Column
    city: string;

    @Column
    street: string;

    @Column
    postalCode: string
}

export enum Gender {
    Female = 0,
    Male = 1,
    Other = 2
}

