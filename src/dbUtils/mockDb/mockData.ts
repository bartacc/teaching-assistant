import { Answer } from "../../models/answer.model";
import { Exam } from "../../models/exam.model";
import { ExamSolution } from "../../models/examSolution.model";
import { Question, QuestionType } from "../../models/question.model";
import { QuestionSolution } from "../../models/questionSolution.model";
import {User, Role} from "../../models/user.model";

export const mockUsers: User[]=[
    User.build({
        name: "Jan",
        surname: "Kowalski",
        email: "jankowal@gmail.com",
        passwordHash: "$argon2i$v=19$m=16,t=2,p=1$YVNERmFzZmc$v7rRXcRmy/RxEmOGecl3gA", //tojesthaslo
        phoneNumber: "123456789",
        birthday:  new Date("1999-01-16"),
        role: Role.TEACHER,
        country: "Poland",
        city: "Gdansk",
        street: "Warszawska 28",
        postalCode: "00-123",
        exams: [
            {
                startDate: new Date(2023, 8, 1),
                endDate: new Date(2023, 8, 10),
            }
        ]
    }, 
    {include: Exam}),
    User.build({
        name: "Pawel",
        surname: "Michalski",
        email: "pawmichal@gmail.com",
        passwordHash: "$argon2i$v=19$m=16,t=2,p=1$YVNERmFzZmc$v7rRXcRmy/RxEmOGecl3gA", //tojesthaslo
        phoneNumber: "123456789",
        birthday:  new Date("1999-01-21"),
        role: Role.STUDENT,
        country: "Poland",
        city: "Bialystok",
        street: "Powstancow 28",
        postalCode: "01-111",
        examSolutions: [
            {
                submissionDate: new Date(2023, 8, 8),
                grade: 8,
                feedback: "Gr8 m8, I r8 8/8!",
                questionSolutions: [] //This is later filled with data below
            }
        ]
    }, 
    {include: ExamSolution}),
]

export const mockQuestionsWithSolutions: [Question, QuestionSolution][] = [
    [
        Question.build({
        type: QuestionType.OPEN,
        content: "What is the name of the process by which a cell divides into two identical daughter cells?",
        answers: [
            {
                content: "Mitosis",
                isCorrectAnswer: true
            }
        ]
        },
        {include: Answer}),

        QuestionSolution.build({
            solutionContent: "I don't know man",
            feedback: "You'll get there eventually"
        })
    ],

    [
        Question.build({
            type: QuestionType.MULTIPLE_CHOICE,
            content: "What are the four phases of mitosis in order?",
            answers: [
                {
                    content: "prophase, metaphase, anaphase, telophase",
                    isCorrectAnswer: true
                },
                {
                    content: "interphase, prophase, metaphase, anaphase",
                    isCorrectAnswer: false
                },
                {
                    content: "metaphase, anaphase, telophase, cytokinesis",
                    isCorrectAnswer: false
                },
                {
                    content: "prophase, metaphase, cytokinesis, anaphase",
                    isCorrectAnswer: false
                },
            ]
        },
        {include: Answer}),

        QuestionSolution.build({
            chosenAnswerId: 3, // First answer is at index 0, so here we choose the last answer.
            feedback: "Almost there, first two phases are correct."
        })
    ],

    [
        Question.build({
            type: QuestionType.OPEN,
            content: "What must happen a cell before it divides?",
            answers: [
                {
                    content: "It must first copy its DNA",
                    isCorrectAnswer: true
                }
            ]
        },
        {include: Answer}),

        QuestionSolution.build({
            solutionContent: "It must first create its DNA",
            feedback: "How does it create it?"
        })
    ],
]