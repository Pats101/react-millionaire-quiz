import { useEffect, useState } from "react";
import "./App.css";
import Trivia from "./components/trivia/Trivia";
import { dataQuetionaire, moneyPyramid } from "../src/dataSource";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("R 0");

  useEffect(() =>{
    questionNumber >1 && setEarned(moneyPyramid.find((money)=> money.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="app">
      <div className="main">
        {stop ? ( 
          <h1 className="endText">You earned: {earned}</h1> 
        ) : (
          <>
            <div className="top">
              <div className="timer">30</div>
            </div>
            <div className="bottom">
              <Trivia 
                dataQuetionaire={dataQuetionaire} 
                setStop={setStop}
                questionNumber={questionNumber} 
                setQuestionNumber={setQuestionNumber} 
              />
            </div>
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((money) =>(
            <li className={questionNumber === money.id ? "moneyListItem active" : "moneyListItem"}>
              <span className="moneyListItemNumber">{money.id}</span>
              <span className="moneyListItemAmount">{money.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
