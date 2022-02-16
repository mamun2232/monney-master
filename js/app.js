document.getElementById('calculated-btn').addEventListener('click',function(){
         let tutalCost = calculate()
         const userfled = document.getElementById('user-incame')
         let userIncame = userfled.value
//          const tutalBalance = parseInt(userIncame) - tutalCost.innerText

//          const tutal = document.getElementById('balance').innerText = tutalBalance
          if(tutalCost.innerText < userIncame){
                    const tutalBalance = parseInt(userIncame) - tutalCost.innerText

         const tutal = document.getElementById('balance').innerText = tutalBalance

          }
          else{
                    console.log('sorry');
          }

})

// function use for tutalExpenses 
function calculate(){
          const UserFood = document.getElementById('user-food')
          const UserRent = document.getElementById('user-rent')
          const UserClothes = document.getElementById('user-clothes')

          const tutal = parseInt(UserFood.value) + parseInt(UserRent.value) + parseInt(UserClothes.value) 

          const tutalExpenses = document.getElementById('user-Expenses')
          tutalExpenses.innerText = tutal

          

          return tutalExpenses
}

// tutal balance 
document.getElementById('saving-btn').addEventListener('click',function(){
          const savingFlied = document.
          
})