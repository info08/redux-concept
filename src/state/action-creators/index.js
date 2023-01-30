export const depositeMoney = (amount) =>{
   return (dispath) => {
     dispath({
        type:'deposite',
        payload:amount
     })
   }
}

export const WithdrawMoney = (amount) =>{
    return (dispath) => {
        dispath({
           type:'withdraw',
           payload:amount
        })
      }
 }
 
