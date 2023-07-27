import {BelongsToMany, Column, DataType, HasMany, IsEmail, Model, Table, Unique} from "sequelize-typescript";
import { Exam } from "./exam.model";
import { ExamSolution } from "./examSolution.model";

export enum Role {
    TEACHER = "TEACHER",
    STUDENT = "STUDENT"
}

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

    @Column({
        defaultValue: Role.STUDENT,
        type: DataType.ENUM(...Object.values(Role))
    })
    role: Role;

    @Column
    country: string;

    @Column
    city: string;

    @Column
    street: string;

    @Column
    postalCode: string;

    @HasMany(() => Exam)
    exams: Exam[];

    @HasMany(() => ExamSolution)
    examSolutions: ExamSolution[];
}