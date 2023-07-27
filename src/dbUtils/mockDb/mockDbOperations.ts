import { Exam } from "../../models/exam.model";
import { ExamSolution } from "../../models/examSolution.model";
import { Role, User } from "../../models/user.model";
import {
    saveUser
} from "../dbQueries";
import {mockQuestionsWithSolutions, mockUsers} from "./mockData";

export async function fillDbWithMockData(){
    await addUsers();
    await addQuestionsWithSolutions();
}

export async function addUsers() {
    await Promise.all(
        mockUsers.map(async usr => await saveUser(usr))
    )
}

export async function addQuestionsWithSolutions() {
    const teachers = await User.findAll({
        where: {
            role: Role.TEACHER
        },
        include: Exam
    });

    const students = await User.findAll({
        where: {
            role: Role.STUDENT
        },
        include: ExamSolution
    });

    const examId = teachers[0].exams[0].id;

    const examSolution = students[0].examSolutions[0];
    examSolution.examId = examId;
    await examSolution.save();
    const examSolutionId = examSolution.id;

    await Promise.all(
        mockQuestionsWithSolutions.map(async questionAndSolution => {
            const question = questionAndSolution[0];
            const solution = questionAndSolution[1];
    
            question.examId = examId;
            await question.save();
            
            const questionId = await question.get('id');

            solution.examSolutionId = examSolutionId;
            solution.questionId = questionId;
            if (solution.chosenAnswerId !== undefined){
                // Overwrite chosenAnswerId in QuestionSOlution for multiple choice questions
                solution.chosenAnswerId = question.answers[solution.chosenAnswerId].id;
            }
            await solution.save();
        })
    );


}