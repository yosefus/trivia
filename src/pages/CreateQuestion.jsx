import React from 'react'
import Header from '../components/Header'

export default function CreateQuestion({ setQues }) {

   const handleSubmit = (e) => {
      e.preventDefault()
      const
         ques = { answers: [] },
         oldData = localStorage.questions ? JSON.parse(localStorage.questions) : []

      Object.values(e.target).forEach(input => {
         if (!input.name) return;

         const
            [n, num] = input.name.split("%"),
            val = input.value

         if (n === "ques") ques.name = val
         if (n === "right") if (input.checked) ques.right = Number(val)
         if (n === "answer") ques.answers.push({ text: val, index: Number(num) })
      })

      oldData.push(ques)
      setQues(oldData)
      localStorage.questions = JSON.stringify(oldData)
      e.target.reset()
   }

   return (
      <div className='d-flex create'>
         <Header />

         <form onSubmit={handleSubmit} className="glass form">
            <h2>create a new question</h2>
            <input required type="text" name='ques' placeholder='name of the question...' />
            {Array.from(Array(4)).map((X, i) =>
               <AnswerInput i={i} key={`a${i}`} />)}
            <button type='submit'>create</button>
         </form>

      </div>
   )
}

const AnswerInput = ({ i }) =>
   <span className='d-flex' >
      <input required type="text" name={`answer%${i}`} placeholder={`text for answer ${i}`} />
      <input required type="radio" name="right" value={i} />
   </span>