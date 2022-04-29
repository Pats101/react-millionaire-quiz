import { useEffect, useState } from "react";
import "./App.css";
import Trivia from "./components/trivia/Trivia";
import { dataQuetionaire, moneyPyramid } from "../src/dataSource";
import Timer from "./components/timer/Timer";
import Start from "./components/start/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("R 0");

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() =>{
    questionNumber >1 && setEarned(moneyPyramid.find((money)=> money.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? ( 
              <>
                <div className="start endOfGame">
                  <h3 className="endText">{username}</h3>
                  <h2 className="endText">Game Over</h2> 
                  <h1 className="endText">You earned: </h1>
                  <h1 className="endText">{earned}</h1>
                  <button className="startButton" onClick={refreshPage}>Play Again</button>
                </div>
              </>
            ) : (
              <>
                <div className="top">
                  <h1 className="playerName">{username}</h1> 
                  <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber}/></div>
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
        </>
      ) : <Start setUsername={setUsername}/>}
    </div>
  );
}

export default App;
