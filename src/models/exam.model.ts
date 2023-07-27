import {BelongsTo, Column, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import { User } from "./user.model";
import { Question } from "./question.model";
import { ExamSolution } from "./examSolution.model";

@Table
export class Exam extends Model {
    @ForeignKey(() => User)
    @Column
    ownerId: number;

    @BelongsTo(() => User)
    owner: User;

    @Column
    startDate: Date;

    @Column
    endDate: Date;

    @HasMany(() => Question)
    questions: Question[];

    @HasMany(() => ExamSolution)
    examSolutions: ExamSolution[];
}