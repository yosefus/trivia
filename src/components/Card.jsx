import { useState } from 'react'
import { genDis } from '../functions/functions'
import Answer from './Answer'
import Btns from './Btns'

export default function Card({ ques }) {
   const
      [choice, setChoice] = useState(),
      [disable, setDisable] = useState([]),
      [right, setRight] = useState()

   const handleSubmit = async (e) => {
      e.preventDefault()
      console.log(ques.right, choice);
      setRight(ques.right === choice ? true : false)
   }

   const handleClue = async () => setDisable(genDis(ques))

   return (
      <form
         onSubmit={handleSubmit}
         className={`${right === true ? "true" : right === false ? "false" : ""}  card glass entrence`}>

         <h2>{ques.name}</h2>

         {ques.answers.map((a, i) =>
            <Answer
               a={a}
               key={`ans${i}`}
               disable={disable}
               ques={ques}
               right={right}
               setChoice={setChoice} />
         )}

         <Btns right={right} choice={choice} disable={disable} handleClue={handleClue} />
      </form>
   )
}
