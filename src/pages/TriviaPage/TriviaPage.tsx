import React, { useState, useEffect, } from 'react';
import { answerStatusColors } from '../../consts/AnswerConst';
import { Grid } from '@material-ui/core';
import { Answer } from '../../components/Answer/Answer';
import { Question } from '../../components/Question/Question';
import { getAnswersAfterSelection, getAnswersWithTheRightAnswer, fetchQuestions, chooseQuestion } from './Functions';
import { Timer } from '../../components/Timer/Timer';
import { TIME_TO_ANSWER_IN_SECONDS } from '../../consts/TimerConsts';
import { Title } from '../../components/Title/Title';
import GameFinisedMessage from '../../components/GameFinishedMessage.tsx/GameFinishedMessage';


const TriviaPage = () => {
    const [points, setPoints] = useState<number>(0);
    const [isTimerActive, setIsTimerActive] = useState<boolean>(true);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [isGameFinished, setIsGameFinished] = useState<boolean>(false);
    
    const [question, setQuestion] = useState<Question>(chooseQuestion(questions));

    useEffect(() => {
        fetchQuestions().then(
            (questions: Question[]) => {
                setQuestions(questions);
                setQuestion(chooseQuestion(questions));
            }
        );
        return () => {  };
    }, []);

    const removeQuestion = (questionText: string) => {
        setQuestions((prevState) => {
            const questionAfterFiler = prevState.filter((question) => question.text !== questionText);
            setIsGameFinished(questionAfterFiler.length === 0);
            return questionAfterFiler;
        });
    }

    const setNextQuestion = () => {
        removeQuestion(question.text);
        setTimeout(() => {
           const nextQuestion = chooseQuestion(questions,question.text);
            setQuestion(nextQuestion);
            setIsTimerActive(true);
        }, 2000);
    }

    const showRightAnswer = (answers: Answer[]) => setQuestion(
        {
            ...question,
            answers: getAnswersWithTheRightAnswer(answers)
        });

    const onTimesUp = () => {
        setIsTimerActive(false);
        showRightAnswer(question.answers);
        setNextQuestion();
    }

    const checkAnswer = (answerIndex: number) => {
        setIsTimerActive(false);
        setQuestion({ ...question, answers: getAnswersAfterSelection(question.answers, answerIndex) });
        setTimeout(() => {
            let selectedAnswer = question.answers[answerIndex];
            let answers = question.answers;
            if (!selectedAnswer.isRight) {
                selectedAnswer.color = answerStatusColors.WRONG;
                answers[answerIndex] = selectedAnswer;
            } else {
                setPoints(points + 10);
            }
            showRightAnswer(answers);
        }, 1000);
        setTimeout(() => {
            setNextQuestion();
        }, 2000);

    }

    return (question) ? <>
        <Grid item xs={3}>
            {<Timer
                isActive={isTimerActive}
                showAnswer={onTimesUp}
            />}
        </Grid>
        <Grid xs={6}>
            <Title />
        </Grid>
        <Grid item xs={3}>
            {!isGameFinished && <Grid container
                direction='column'
                justify='center'
                alignItems='center'>
                <Grid item>shimon</Grid>
                <Grid item>{points} points</Grid>
            </Grid>}
        </Grid>
        {!isGameFinished ? <> <Grid item>
            <Question text={question.text} />
        </Grid>
            <Grid container
                spacing={1}
                direction='column'
                justify='center'
                alignItems='center'>
                {question.answers.map((answer, index) => <Grid item>
                    <Answer
                        handleClick={() => checkAnswer(index)}
                        color={answer.color}
                        key={index}
                        text={answer.text}
                        index={index}
                        isDisabled={answer.isDisabled} />
                </Grid>)}
            </Grid> </> : <GameFinisedMessage message={'GameOver your score is: ' + points} />}
    </> : <div>yosssiiii</div>
}

export default TriviaPage;