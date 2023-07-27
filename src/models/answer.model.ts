import {BelongsTo, Column, ForeignKey, Model, Table} from "sequelize-typescript";
import { Question } from "./question.model";

@Table
export class Answer extends Model {
    @ForeignKey(() => Question)
    @Column
    questionId: number;

    @BelongsTo(() => Question)
    question: Question

    @Column
    content: string;

    @Column
    isCorrectAnswer: boolean;
}
