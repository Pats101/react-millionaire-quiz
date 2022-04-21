import { useEffect, useState } from "react"

export default function Trivia({
    dataQuetionaire, 
    setStop, 
    questionNumber, 
    setQuestionNumber
}) {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");

    useEffect(() => {
        setQuestion(dataQuetionaire[questionNumber - 1]);
    }, [dataQuetionaire, questionNumber]);

    const delay = (duration, callback) =>{
        setTimeout(() => {
            callback();
        },duration)
    };

    const handleClick = (ans) => {
        setSelectedAnswer(ans);
        setClassName("answer active");
        delay(3000, () =>
            setClassName(ans.correct ? "answer correct" : "answer wrong")
        );
        delay(6000, () =>
            {
                if(ans.correct) {
                    setQuestionNumber((prev) => prev + 1);
                    setSelectedAnswer(null);
                } else {
                    setStop(true);
                }
            }
        );
    };
  return (
    <div className="trivia">
        <div className="question">{question?.question}</div>
        <div className="answers">
            {question?.answers.map((ans) => (
                <div className={selectedAnswer === ans ? className : "answer"} onClick={()=>handleClick(ans)}>{ans.text}</div>
            ))}
        </div>
    </div>
  )
}
