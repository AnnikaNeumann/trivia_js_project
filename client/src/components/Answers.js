import Answer from "./Answer";

const Answers = ({questions, answers}) => {

    const answersDisplay = [];

    for(let i = 0; i < questions.length; i++){
        const answer = {};
        answer["question"] = questions[i].question;
        answer["user_answer"] = answers[i];
        answer["correct_answer"] = questions[i].correct_answer;
        answersDisplay.push(answer);
    }

    const answerNodes = answersDisplay.map((answer, index) => {
        return <Answer question={answer.question} userAnswer={answer.user_answer} correctAnswer={answer.correct_answer} key={index}/>
    })

    return (
        <>
        {answerNodes}
        </>
    )
}

export default Answers;