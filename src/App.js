import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import data from './arrData';
import { getRandom3 } from './functions/functions';
import Game from './pages/Game';
import CreateQuestion from './pages/CreateQuestion';
import Footer from './components/Footer';

function App() {
  const
    initialState = localStorage.questions ? JSON.parse(localStorage.questions) : data,
    [Ques, setQues] = useState(initialState),
    [currQues, setCurrQues] = useState([])

  useEffect(() => {
    Ques.length && !currQues.length && handleReLoad()
  }, [Ques, currQues])

  const handleReLoad = () => {
    setCurrQues(getRandom3(Ques))
    localStorage.questions = JSON.stringify(Ques)
  }

  return (
    <>
      <div className='App' >
        <Routes>
          <Route path='/' element={<Game currQues={currQues} setCurrQues={setCurrQues} />} />
          <Route path='/create' element={<CreateQuestion setQues={setQues} Ques={Ques} />} />
        </Routes>
        <div style={{ flex: 1 }} />
        <Footer />
      </div>
    </>
  );
}

export default App;
