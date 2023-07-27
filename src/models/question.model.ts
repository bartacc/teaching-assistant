import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import { Exam } from "./exam.model";
import { Answer } from "./answer.model";

export enum QuestionType {
    MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
    OPEN = "OPEN"
}

@Table
export class Question extends Model {
    @ForeignKey(() => Exam)
    @Column
    examId: number;

    @BelongsTo(() => Exam)
    exam: Exam

    @Column({
        defaultValue: QuestionType.OPEN,
        type: DataType.ENUM(...Object.values(QuestionType))
    })
    type: QuestionType;

    @Column
    content: string;

    @HasMany(() => Answer)
    answers: Answer[]
}
