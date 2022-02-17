document.getElementById('calculated-btn').addEventListener('click',function(){
          TutalCalculate();

})

// function use for tutalExpenses ----------------------
function TutalCalculate(){
          const userfield = document.getElementById('user-incame');
          const userIname = userfield.value
          const userFood = document.getElementById('food-cost');
          const userFoodAmount = userFood.value

          const userRent = document.getElementById('rent-cost');
          const userRentAmount = userRent.value
          const userClothes = document.getElementById('clothes-cost');
          const userClothesAmount = userClothes.value
          //  candition ...........
    
          if(userFoodAmount > 0 && userRentAmount > 0 && userClothesAmount > 0 && userIname > 0){
                    const tutalCost = parseInt(userFoodAmount) + parseInt(userRentAmount) + parseInt(userClothesAmount)
                    // another candition ...........
                    if(userIname > tutalCost){
                    const tutalExpenses = document.getElementById('user-Expenses')
                    const tutalExpensesText = tutalExpenses.innerText;
                    const tutalExpensesAmount = parseInt(tutalExpensesText)
                    tutalExpenses.innerText = tutalCost

                    const updateBalance = document.getElementById('balance')
                    const newBalance = userIname - tutalExpenses.innerText
                    updateBalance.innerText = newBalance


                    }
                    else{
                              alert('Sorry!! you can not expemses money more then your incame')
                    }

                    

          }
          else{
                    alert('Please input a valid number.')

          }
           
}

// saving balance calculated ..........................
document.getElementById('saving-btn').addEventListener('click',function(){
        
          const savingField = document.getElementById('saving-input');
           const userSaveingAmount = savingField.value
          //  candition .....
           if(userSaveingAmount > 0){
                    const userIncameField = document.getElementById('user-incame');
                    const userAmount = userIncameField.value;
                    const balance = document.getElementById('balance').innerText;
                    const tutalSave = userAmount * userSaveingAmount / 100;
                     
                    // candition .................
                    if(balance > tutalSave){
                             const savingAmount = document.getElementById('saveing-amount');
                             savingAmount.innerText = tutalSave;
                           
                             remainingBalance();
         
                    }
                    else{
                              alert('Sorry!! you dont have enough money.')
                    }
          

           }

           else{
                     alert('Please input a valid number')
           }
           
              

})


// funcation use for remaining Balance ....................
function remainingBalance(){
         const balance = document.getElementById('balance').innerText;
         const savingAmount = document.getElementById('saveing-amount').innerText;
         const tutalBalance = balance - savingAmount;

         const remainingBalance = document.getElementById('remaining-balance');
         remainingBalance.innerText = tutalBalance;
}