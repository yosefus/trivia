import React from 'react'


export default function Answer({ a, disable, right, ques, setChoice }) {
   const
      isDisable = disable.includes(a.index),
      disStyle = { textDecoration: "line-through", color: "#0303038d" }
   return (
      <span >
         <label style={isDisable ? disStyle : {}}>{a.text}</label>
         <input
            disabled={isDisable || right !== undefined}
            type={"radio"}
            name={ques.name}
            onChange={() => setChoice(a.index)}
            required
         />
      </span>
   )
}
