import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({ setCurrQues, page }) {

   return (
      <div className='header'>
         {page === "game" && <button onClick={() => setCurrQues([])}> reload game</button>}
         {page === "game" ?
            <Link to={"/create"}> <button> add questions</button></Link> :
            <Link to={"/"}> <button>play</button> </Link>
         }
      </div>
   )
}
