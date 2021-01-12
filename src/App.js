import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [square, setSquare] = useState([
    {id: uuidv4(), state: ''},
    {id: uuidv4(), state: ''},
    {id: uuidv4(), state: ''},
    {id: uuidv4(), state: ''},
    {id: uuidv4(), state: ''},
    {id: uuidv4(), state: ''},
    {id: uuidv4(), state: ''},
    {id: uuidv4(), state: ''},
    {id: uuidv4(), state: ''},
  ]);

  const lineWin = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  const [step, setStep] = useState(0);
  let [winner, setWinner] = useState('');
  const clickOnBox = (id) => {
    const newWinner =  winner;
    let newStep = step;
    let newSquare = [...square];
        newSquare.map(el => {
          if (el.id === id && el.state === '' && newWinner === '') {
            el.state = (step % 2 === 0) ? 'X' : '0';
          newStep++;
          setStep(newStep);
        } return el;
    });
    setSquare(newSquare);
    whoWon();
  }

  const whoWon = () => {
    let s = (step % 2 === 0) ? 'X' : '0';
    for (let i=0; i<lineWin.length; i++) {
        if (square[lineWin[i][0]].state === s && square[lineWin[i][1]].state === s && square[lineWin[i][2]].state === s) {
          setWinner(`Congratulation! \n ${s} won!`);
          console.log(winner);
        }
      if (square.every(el => el.state!=='')) setWinner('Draw!');
    }
  };

  const reset=() => {
    square.map(el => el.state = '');
    setStep(0);
    setWinner('')
  }

  return (
    <div className="App">
      <header className='App-header'>Tic-tac-toe</header>
        <div className="area">
          {square.map(el => <div className= {(el.state==='0') ? "box0" : 'boxX'} onClick={()=>clickOnBox(el.id)}>{el.state}</div>)}
        </div>
        <p className='winner'>{winner}</p>
      <button className='reset' onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
