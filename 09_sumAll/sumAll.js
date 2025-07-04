function sumAll(num1,num2){
    let result = 0
    let finalResult = 0
   do{
     result += num1
     console.log(result)
     finalResult += result
     ++num1

   } while(num1 != num2)
    console.log(finalResult)
   }

sumAll(1,4)

//I need to save the iterations

