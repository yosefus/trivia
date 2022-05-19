import React from 'react'

export default function Answer({ a, disable, right, ques, setChoice }) {
   return (
      <span >
         <label>{a.text}</label>
         <input
            disabled={disable.includes(a.index) || right !== undefined}
            type={"radio"}
            name={ques.name}
            onChange={() => setChoice(a.index)}
            required
         />
      </span>
   )
}
