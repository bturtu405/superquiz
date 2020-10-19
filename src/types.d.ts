type Question = {
    text:string,
    answers:Answer[];
};

type Answer ={
    text:string,
    isRight:boolean,
    isDisabled:boolean,
    color:string,
}

type QuestionFromApi = {
    question:string,
    correct_answer:string,
    incorrect_answers:string[],
}