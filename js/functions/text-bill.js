// get a reference to the textbox where the bill type is to be entered
const billTypeTextElement = document.querySelector(".billTypeText");
const callsTotalElem = document.querySelector(".callTotalOne");
const smsTotalElem = document.querySelector(".smsTotalOne");
const totalCostElem = document.querySelector(".totalOne");


//get a reference to the add button
var addToBillBtnElement = document.querySelector(".addToBillBtn");
    
    // created an instance for my function
    var billWithString = textBillTotal();

    function textBillTotal1(){
        // triming the value that is being entered --from bus logic in ff 
        var billType = billTypeTextElement.value.trim();

        //pass the value from the html element
        billWithString.billItem(billType);

        //remove the colors first
        totalCostElem.classList.remove("danger");
        totalCostElem.classList.remove("warning");

        //acces the color functions (there is no need to create a new instance for this because I have instantiated my function textBillTotal)
        totalCostElem.classList.add(billWithString.getColorClass());

       
        //access and update the totals that is displayed on the screen.
        callsTotalElem.innerHTML = billWithString.getCallCostTotal().toFixed(2);
        smsTotalElem.innerHTML = billWithString.getSmsCostTotal().toFixed(2);
        totalCostElem.innerHTML = billWithString.getTotalCost().toFixed(2);

    };

    //this event listener listens for click on the add button and return what is on the
    addToBillBtnElement.addEventListener('click', textBillTotal1);
//});


//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
//addToBillBtnElement.addEventListener("click", addToBillBtnClicked);