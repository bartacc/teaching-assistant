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
                grade: 6,
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
            grade: 4,
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
            grade: 0,
            feedback: "Almost there, first two phases are correct."
        })
    ],

    [
        Question.build({
            type: QuestionType.MULTIPLE_CHOICE,
            content: "What is the term for a solution that has a higher concentration of solutes than the cell?",
            answers: [
                {
                    content: "hypotonic",
                    isCorrectAnswer: false
                },
                {
                    content: "hypertonic",
                    isCorrectAnswer: true
                },
                {
                    content: "isotonic",
                    isCorrectAnswer: false
                },
                {
                    content: "none of the above",
                    isCorrectAnswer: false
                },
            ]
        },
        {include: Answer}),

        QuestionSolution.build({
            chosenAnswerId: 0,
            grade: 0,
            feedback: "Almost, almost..."
        })
    ],

    [
        Question.build({
            type: QuestionType.MULTIPLE_CHOICE,
            content: "What is the difference between diffusion and osmosis?",
            answers: [
                {
                    content: "Osmosis is the movement of water molecules across a selectively permeable membrane, while diffusion is the movement of any molecules across any membrane.",
                    isCorrectAnswer: true
                },
                {
                    content: "Osmosis is the movement of any molecules across a selectively permeable membrane, while diffusion is the movement of water molecules across any membrane.",
                    isCorrectAnswer: false
                },
                {
                    content: "Osmosis is the movement of water molecules from an area of low solute concentration to an area of high solute concentration, while diffusion is the movement of solute molecules from an area of high solute concentration to an area of low solute concentration.",
                    isCorrectAnswer: false
                },
                {
                    content: "Osmosis is the movement of solute molecules from an area of low water concentration to an area of high water concentration, while diffusion is the movement of water molecules from an area of high water concentration to an area of low water concentration.",
                    isCorrectAnswer: false
                },
            ]
        },
        {include: Answer}),

        QuestionSolution.build({
            chosenAnswerId: 0,
            grade: 10,
            feedback: "Yeah, you got it!"
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
            grade: 7,
            feedback: "How does it create it?"
        })
    ],

    [
        Question.build({
            type: QuestionType.OPEN,
            content: "State 2 functions of Meiosis",
            answers: [
                {
                    content: "Sexual reproduction and Variation",
                    isCorrectAnswer: true
                }
            ]
        },
        {include: Answer}),

        QuestionSolution.build({
            solutionContent: "Variation and sexual reproduction",
            grade: 10,
            feedback: "Great! You might become a biologist one day :)"
        })
    ],

    [
        Question.build({
            type: QuestionType.MULTIPLE_CHOICE,
            content: "What happens to the turgor pressure of a plant cell when it is placed in a hypertonic solution?",
            answers: [
                {
                    content: "It increases",
                    isCorrectAnswer: false
                },
                {
                    content: "It decreases",
                    isCorrectAnswer: true
                },
                {
                    content: "It stays the same",
                    isCorrectAnswer: false
                },
                {
                    content: "It depends on the type of plant",
                    isCorrectAnswer: false
                },
            ]
        },
        {include: Answer}),

        QuestionSolution.build({
            chosenAnswerId: 1,
            grade: 10,
            feedback: "You're right, it decreases... Just like your chances of failing this subject :)"
        })
    ],

    [
        Question.build({
            type: QuestionType.OPEN,
            content: "What happens to an animal cell when it is placed in a hypertonic solution?",
            answers: [
                {
                    content: " It will swell and burst due to the water entering the cell by osmosis.",
                    isCorrectAnswer: true
                }
            ]
        },
        {include: Answer}),

        QuestionSolution.build({
            solutionContent: "It swells and bursts.",
            grade: 7,
            feedback: "That's correct. But why?"
        })
    ],
]