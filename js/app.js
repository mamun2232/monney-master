document.getElementById('calculated-btn').addEventListener('click',function(){
         let tutalUserCost = TutalCalculate();
         const userfield = document.getElementById('user-incame');
         let userIncame = userfield.value;

//          candition ---------
         if(userIncame > 0){
          const tutalBalance = parseInt(userIncame) - tutalUserCost.innerText;
     
          // const balance = document.getElementById('balance').innerText = tutalBalance;
                    if(userIncame > tutalUserCost){
                              balance = document.getElementById('balance').innerText = tutalBalance

                    }
                    else{
                              alert('user amount smoall')
                    }

         }
         else{
                   alert('plase')
         }

    

})

// function use for tutalExpenses ----------------
function TutalCalculate(){
          const UserFoodAmount = document.getElementById('food-cost');
          const UserRentAmount = document.getElementById('rent-cost');
          const UserClothesAmount = document.getElementById('clothes-cost');
          //  candition ...........
          if(UserFoodAmount.value > 0 && UserRentAmount.value > 0 && UserClothesAmount.value > 0){
                    const tutal = parseInt(UserFoodAmount.value) + parseInt(UserRentAmount.value) + parseInt(UserClothesAmount.value);

                    const tutalExpenses = document.getElementById('user-Expenses');
                    tutalExpenses.innerText = tutal;
                    return tutalExpenses;
            

          }
          else{
                    alert('Please Enter a possiitve number')
          }
         
         
}

// saving balance calculated .....................
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
                              alert('you have no Enaf marny')
                    }
          

           }

           else{
                     alert('please enter a possitive value')
           }
           
           
           

           
          

})


// funcation use for remaining Balance ...........
function remainingBalance(){
         const balance = document.getElementById('balance').innerText;
         const savingAmount = document.getElementById('saveing-amount').innerText;
         const tutalBalance = balance - savingAmount;

         const remainingBalance = document.getElementById('remaining-balance');
         remainingBalance.innerText = tutalBalance;
}