import { answerStatusColors } from "../../consts/AnswerConst";

export const getAnswersAfterSelection = (answers: Answer[], answerIndex: number) =>
    answers.map((answer, index) => {
        if (index === answerIndex) {
            answer.color = answerStatusColors.PENDING;
        }
        answer.isDisabled = true;
        return answer;
    });

export const getAnswersWithTheRightAnswer = (answers: Answer[]) =>
    answers.map((answer) => {
        if (answer.isRight) {
            answer.color = answerStatusColors.RIGHT;
        }
        return answer;
    });

let questions: Question[] = [];

export const adjustQuestionFromApiObjectToQuestionObject = (questionsFromApi: QuestionFromApi[]) =>
    questionsFromApi.map((questionFromApi: QuestionFromApi) => {
        let answers = questionFromApi.incorrect_answers.map((answerText: string) => {
            return {
                text: answerText,
                isRight: false,
                isDisabled: false,
                color: answerStatusColors.BASE_COLOR,
            }
        });
        answers.splice(Math.floor(Math.random() * answers.length),
            0,
            {
                text: questionFromApi.correct_answer,
                isRight: true,
                isDisabled: false,
                color: answerStatusColors.BASE_COLOR,
            }
        );
        return {
            text: questionFromApi.question,
            answers: answers,
        }
    });

export const fetchQuestions = async () => {
    const response = await fetch('https://opentdb.com/api.php?amount=10')
    const data = await response.json();
    const results: QuestionFromApi[] = await data.results;
    return adjustQuestionFromApiObjectToQuestionObject(results);
}

export const chooseQuestion = (questions:Question[],removedQuestionText = '') => {
    const updatedQuestions = questions.filter((question)=>question.text !== removedQuestionText);
    return updatedQuestions[Math.floor(Math.random() * updatedQuestions.length)];
}
