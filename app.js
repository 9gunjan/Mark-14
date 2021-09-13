var initialPrice = document.querySelector('#initial-price');
var currentPrice = document.querySelector('#current-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');



function calculateProfitAndLoss(initial,quantity,current){
    if(initial>current){
        var loss = (initial-current)*quantity;
        var lossPercentage = (loss/initial)*100;
        showOutput("Loss is" + loss + "and the percent is" + lossPercentage + "%");

    }else if(current>initial){
        var profit = (current-initial)*quantity;
        var profitPercentage = (profit/initial)*100;
        showOutput("The profit is"+ profit + "and the percentage is" + profitPercentage + "%");

    }else{
        showOutput("No pain No gain :)");
    }
}

function showOutput(message){
    outputBox.innerHTML = message;
}


function submitHandler(){
    var ip = initialPrice.value;
    var qty = stocksQuantity.value;
    var curr = currentPrice.value;

    calculateProfitAndLoss(ip,qty,curr);
}



submitBtn.addEventListener('click',submitHandler);