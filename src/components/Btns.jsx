import React from 'react'
import { BsLifePreserver, BsCheckAll } from "react-icons/bs"
import { BiReset } from "react-icons/bi"

export default function Btns({ choice, handleClue, disable, right }) {

   return (
      <div className='btns'>
         <button disabled={choice === undefined || right !== undefined} type='submit'><BsCheckAll /></button>
         <button disabled={choice === undefined || right !== undefined} type='reset'><BiReset /></button>
         <button onClick={handleClue} disabled={disable.length || right !== undefined} type='button'><BsLifePreserver /></button>
      </div>
   )
}
