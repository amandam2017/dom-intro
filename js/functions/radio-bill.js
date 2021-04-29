// get a reference to the sms or call radio buttons
const callTotalTwoElem = document.querySelector('.callTotalTwo');
const smsTotalTwoElem = document.querySelector('.smsTotalTwo');
const billItemTypeRadio = document.querySelector('.billItemTypeRadio');
const totalTwoElem = document.querySelector('.totalTwo');

//get a reference to the add button
const radioBillAddBtnElement = document.querySelector('.radioBillAddBtn');

//an instance for my function
var radioBill = radioBillTotal();

function radioBillTotal2(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value;
    // console.log(billItemType);
    // billItemType will be 'call' or 'sms'
    // alert("hello");

    //passing the values
    radioBill.checkedBillType(billItemType);
    }


    //adding and removing the colors

    totalTwoElem.classList.remove("danger");
    totalTwoElem.classList.remove("warning");

    totalTwoElem.classList.add(radioBill.addClass());

    callTotalTwoElem.innerHTML = radioBill.getCallCostTotal().toFixed(2);
    smsTotalTwoElem.innerHTML = radioBill.getSmsCostTotal().toFixed(2);
    totalTwoElem.innerHTML = radioBill.getOverallCost().toFixed(2);

}

//in the event listener get the value from the billItemTypeRadio radio buttons
radioBillAddBtnElement.addEventListener('click', radioBillTotal2);

// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
