//get a reference to the calculate button
const calculateBtnElement = document.querySelector(".calculateBtn");

//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");

//get a reference to the billString
const billStringField = document.querySelector(".billString");

//get a reference for the bill total element
const billTotalSpanElement = document.querySelector(".total");

//create the function that will be called when the calculate button is pressed
//-add event listener to the button- use button element //

//instantiate my factory function

// document.addEventListener("DOMContentLoaded", function(billString){


//     //round to two decimals
//     // var roundedBillTotal = billTotal.toFixed(2);
//     // return roundedBillTotal;
// }
// function {



function calculateBtnClicked() {
    // logic goes here
    // alert(billStringField.value)
    //pass the value that is being entered
    //  -------------this is the line that was doubling the strings values---------------
    //  calculatedBill.billItemType(billStringField.value);
    // calculatedBill.billItemType(billStringField.value);
    //  console.log(calculatedBill.getbillTotal());

    // var billString = billStringField.value;
    // var roundedBillTotal = totalPhoneBill(billString);


    // billTotalSpanElement.classList.remove("danger");
    // billTotalSpanElement.classList.remove("warning");
    // billTotalSpanElement.innerHTML = totalPhoneBill(billStringField.value)
    // billTotalSpanElement.classList.add(calculatedBill.addClass());

    billTotalSpanElement.innerHTML =  totalPhoneBill(billStringField.value);
}
// billTotalSpanElement.classList.add("warning");
// billTotalSpanElement.classList.add("danger");


calculateBtnElement.addEventListener("click", calculateBtnClicked)




//calculateBtn.addEventListener("click", calculateBtnClicked)

//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button




