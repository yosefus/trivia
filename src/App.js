import './App.css';
import { Routes, Route } from "react-router-dom";
import Game from './pages/Game';
import CreateQuestion from './pages/CreateQuestion';
import { useEffect } from 'react';
import { useState } from 'react';
import data from './arrData';
import { getRandom3 } from './functions/functions';

function App() {
  const
    initialState = localStorage.questions ? JSON.parse(localStorage.questions) : data,
    [Ques, setQues] = useState(initialState),
    [currQues, setCurrQues] = useState([])

  console.log(Ques, currQues, data);

  useEffect(() => {
    Ques.length &&
    !currQues.length &&
    handleReLoad()
  }, [Ques, currQues])

  const handleReLoad = () => setCurrQues(getRandom3(Ques))

  return (
    <div className='App' >
      <Routes>
        <Route path='/' element={<Game currQues={currQues} setCurrQues={setCurrQues} />} />
        <Route path='/create' element={<CreateQuestion setQues={setQues} />} />
      </Routes>
    </div>
  );
}

export default App;
