export const genDis = (qu) => {
   let arrNum = []
   while (arrNum.length !== 2) {
      const num = (Math.floor(Math.random() * qu.answers.length))
      if (!arrNum.includes(num) && qu.right !== num) arrNum.push(num)
   }
   return arrNum
}

export const getRandom3 = (arrQues) => {
   const
      final = [],
      arr = [...arrQues]

   if (arrQues.length) {
      Array.from(Array(3)).forEach(() =>
         final.push(
            ...arr.splice(Math.floor(Math.random() * arr.length), 1)
         )
      );
   }

   return final
}