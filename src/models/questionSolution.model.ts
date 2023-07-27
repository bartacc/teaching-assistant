import {BelongsTo, Column, ForeignKey, Model, Table} from "sequelize-typescript";
import { ExamSolution } from "./examSolution.model";
import { Answer } from "./answer.model";
import { Question } from "./question.model";

@Table
export class QuestionSolution extends Model {
    @ForeignKey(() => ExamSolution)
    @Column
    examSolutionId: number;

    @BelongsTo(() => ExamSolution)
    examSolution: ExamSolution

    @ForeignKey(() => Question)
    @Column
    questionId: number;

    @BelongsTo(() => Question)
    question: Question

    @Column
    solutionContent: string;

    @ForeignKey(() => Answer)
    @Column
    chosenAnswerId: number;

    @BelongsTo(() => Answer)
    chosenAnswer: Answer;

    @Column
    feedback: string;
}
