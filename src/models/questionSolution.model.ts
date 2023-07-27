import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
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

    @Column({
        type: DataType.STRING(1000)
    })
    solutionContent: string;

    @ForeignKey(() => Answer)
    @Column
    chosenAnswerId: number;

    @BelongsTo(() => Answer)
    chosenAnswer: Answer;

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
}
