import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import { User } from "./user.model";
import { Exam } from "./exam.model";
import { QuestionSolution } from "./questionSolution.model";

@Table
export class ExamSolution extends Model {
    @ForeignKey(() => User)
    @Column
    studentId: number;

    @BelongsTo(() => User)
    student: User;

    @ForeignKey(() => Exam)
    @Column
    examId: number;

    @BelongsTo(() => Exam)
    exam: Exam;

    @Column
    submissionDate: Date;

    @Column({
        validate: {
            isInt: true,
            min: 0,
            max: 10
        }
    })
    grade: number;

    @Column({
        type: DataType.STRING(1000)
    })
    feedback: string;

    @HasMany(() => QuestionSolution)
    questionSolutions: QuestionSolution[]
}