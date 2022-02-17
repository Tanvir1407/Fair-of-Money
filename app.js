
// All cost Addition function
function totalCost() {
    const foodCostText = document.getElementById('food-cost');
    const homeRentText = document.getElementById('home-rent');
    const clothesPriceText = document.getElementById('clothes-price');
    const foodCost = foodCostText.value;
    const homeRent = homeRentText.value;
    const clothesPrice = clothesPriceText.value;    
    const totalCostAmount = parseFloat(foodCost) + parseFloat(homeRent) + parseFloat(clothesPrice); 
    return totalCostAmount;
}
// Balance and saving Count Function
function settleAccounts( addCondition) {
    const earnMoneyText = document.getElementById('Earn-Money');
    const earnMoney = parseFloat(earnMoneyText.value);
    const costAmount = totalCost();
    if (addCondition) {
        if (earnMoney >= costAmount) {
            const currentBalance = earnMoney - costAmount;
            document.getElementById('total-expenses').innerText = costAmount;
            document.getElementById('balance').innerText = currentBalance;
        }
        else {
            window.alert('Less than Income costs!!!!')
        }
    }
    else {
        const parcentageText = document.getElementById('parcentage-input');
        const parcentage = parcentageText.value;
        const parcentageNum = parseFloat(parcentage);
        const savingAmount = ((parcentageNum / 100) * earnMoney);
        const savingDisplay = document.getElementById('display-saving-amount');
        
        //remaining Balance
        const currentBalance = earnMoney - costAmount;
        if (currentBalance >= savingAmount) {
            const remaningBalance = currentBalance - savingAmount;
            document.getElementById('remaning-balance').innerText = remaningBalance;
            savingDisplay.innerText = savingAmount;
        }
        else {
            window.alert('Your Balance is Low')
        }
        
    }
}
// Calculate Button 
document.getElementById('money-calculate').addEventListener('click', function () {
    settleAccounts( true);
})
// Saving Button 
document.getElementById('parcentage-btn').addEventListener('click', function () { 
    settleAccounts( false);   
}) 

/****************
 * Error handel * 
 ***************/ 
document.getElementById('Earn-Money').addEventListener('keyup', function () {
    const inputFiled = document.getElementById('Earn-Money').value;
    if (isNaN(inputFiled) == true) {
        document.getElementById('Earn-Money').style.border = '1px solid red';
        document.getElementById('worng').style.display = 'block';
        
    }
});
document.getElementById('food-cost').addEventListener('keyup', function () {
    const inputFiled = document.getElementById('food-cost').value;
    if (isNaN(inputFiled) == true) {
        document.getElementById('food-cost').style.border = '1px solid red';
        document.getElementById('worng-text-1').style.display = 'block';
        
    }
})
document.getElementById('home-rent').addEventListener('keyup', function () {
    const inputFiled = document.getElementById('home-rent').value;
    if (isNaN(inputFiled) == true) {
        document.getElementById('home-rent').style.border = '1px solid red';
        document.getElementById('worng-text-2').style.display = 'block';
        
    }
})
document.getElementById('clothes-price').addEventListener('keyup', function () {
    const inputFiled = document.getElementById('clothes-price').value;
    if (isNaN(inputFiled) == true) {
        document.getElementById('clothes-price').style.border = '1px solid red';
        document.getElementById('worng-text-3').style.display = 'block';
        
    }
})
document.getElementById('food-cost').addEventListener('keyup', function () {
    const inputFiled = document.getElementById('food-cost').value;
    if (isNaN(inputFiled) == true) {
        document.getElementById('food-cost').style.border = '1px solid red';
        document.getElementById('worng-text').style.display = 'block';
        
    }
})
document.getElementById('parcentage-input').addEventListener('keyup', function () {
    const inputFiled = document.getElementById('parcentage-input').value;
    if (isNaN(inputFiled) == true) {
        document.getElementById('parcentage-input').style.border = '1px solid red';
        document.getElementById('worng-text-4').style.display = 'block';
        
    }
})

// Reset Input field
document.getElementById('reset-input').addEventListener('click', function () {
    const earnMoneyText = document.getElementById('Earn-Money');
    const foodCostText = document.getElementById('food-cost');
    const homeRentText = document.getElementById('home-rent');
    const clothesPriceText = document.getElementById('clothes-price');
    const parcentageText = document.getElementById('parcentage-input');
    parcentageText.value = '';
    earnMoneyText.value = '';
    foodCostText.value = '';
    homeRentText.value = '';
    clothesPriceText.value = '';
})
