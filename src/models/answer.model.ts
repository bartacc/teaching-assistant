import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import { Question } from "./question.model";

@Table
export class Answer extends Model {
    @ForeignKey(() => Question)
    @Column
    questionId: number;

    @BelongsTo(() => Question)
    question: Question

    @Column({
        type: DataType.STRING(1000)
    })
    content: string;

    @Column
    isCorrectAnswer: boolean;
}
