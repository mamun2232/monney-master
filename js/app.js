document.getElementById('calculated-btn').addEventListener('click',function(){
         let tutalUserCost = TutalCalculate();
         const userfield = document.getElementById('user-incame');
         let userIncame = userfield.value;

                    const tutalBalance = parseInt(userIncame) - tutalUserCost.innerText;

                    const balance = document.getElementById('balance').innerText = tutalBalance;


})

// function use for tutalExpenses ----------------
function TutalCalculate(){
          const UserFoodAmount = document.getElementById('food-cost');
          const UserRentAmount = document.getElementById('rent-cost');
          const UserClothesAmount = document.getElementById('clothes-cost');

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

           const userIncameField = document.getElementById('user-incame');
           const userAmount = userIncameField.value;

           const tutalSave = userAmount * userSaveingAmount / 100;
           const savingAmount = document.getElementById('saveing-amount');
           savingAmount.innerText = tutalSave;
           remainingBalance();

})


// funcation use for remaining Balance ...........
function remainingBalance(){
         const balance = document.getElementById('balance').innerText;
         const savingAmount = document.getElementById('saveing-amount').innerText;
         const tutalBalance = balance - savingAmount;

         const remainingBalance = document.getElementById('remaining-balance');
         remainingBalance.innerText = tutalBalance;
}