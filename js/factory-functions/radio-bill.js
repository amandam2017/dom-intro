function radioBillTotal(){
    var callCostTotal = 0;
    var smsCostTotal = 0;

    function checkedBillType(billItemType){
            if(billItemType === "call"){
                callCostTotal += 2.75;
            }

            else if(billItemType === "sms"){
                smsCostTotal += 0.75;
            }
    }

    function getOverallCost(){

        return callCostTotal +  smsCostTotal;
    }

    function getSmsCostTotal(){
        return smsCostTotal;   
    }

    function getCallCostTotal(){
        return callCostTotal;
    }

    function addClass(){
        if(getOverallCost() >= 30 && getOverallCost() < 50){
            return "warning";
        }

        if(getOverallCost() >= 50){
            return "danger";
        }
    }

    return{
        checkedBillType,
        getOverallCost,
        getSmsCostTotal,
        getCallCostTotal,
        addClass
    }

// if (totalCost >= 50){
//     // adding the danger class will make the text red
//     totalTwoElem.classList.add("danger");
// }
// else if (totalCost >= 30){
//     totalTwoElem.classList.add("warning");
// }

}
