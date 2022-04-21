import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Trivia from "./components/trivia/Trivia";
import { dataQuetionaire, moneyPyramid } from "../src/dataSource";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("R 0");

  // const moneyPyramid = useMemo(() => [
  //     { id: 1, amount: "R 100" },
  //     { id: 2, amount: "R 200" },
  //     { id: 3, amount: "R 1000" },
  //     { id: 4, amount: "R 2500" },
  //     { id: 5, amount: "R 5000" },
  //     { id: 6, amount: "R 10 000" },
  //     { id: 7, amount: "R 15 000" },
  //     { id: 8, amount: "R 40 000" },
  //     { id: 9, amount: "R 50 000" },
  //     { id: 10, amount: "R 90 000" },
  //     { id: 11, amount: "R 100 000" },
  //     { id: 12, amount: "R 150 000" },
  //     { id: 13, amount: "R 200 000" },
  //     { id: 14, amount: "R 580 000" },
  //     { id: 15, amount: "R 1 000 000" },
  //   ].reverse(), 
  //   []
  // ); 

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
