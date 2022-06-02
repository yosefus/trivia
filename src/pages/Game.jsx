
import Card from '../components/Card';
import Header from '../components/Header';


export default function Game({ currQues, setCurrQues }) {

   return (
      <div className='main d-flex'>
         <Header page={"game"} setCurrQues={setCurrQues} />
         <div className='d-flex cardContainer'>
            {currQues.length && currQues.map((c, i) =>
               <Card key={`qus${i}`} ques={c} />
            )}
         </div>
      </div>
   );

}
