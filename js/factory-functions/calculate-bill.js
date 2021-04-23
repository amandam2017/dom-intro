//     //get a reference to the calculate button
// const calculateBtnElement = document.querySelector(".calculateBtn");

// //get a reference to the billTotal element
// const billTotalElement = document.querySelector(".billTotal");

// //get a reference to the billString
// const billStringField = document.querySelector(".billString");

// //get a reference for the bill total element
// const billTotalSpanElement = document.querySelector(".total");
    
    
    function totalPhoneBill(){
        //console.log(billString);
        // var call = 0;
        // var sms = 0;
        var billTotal = 0; 
 
 
    function billItemType(billString){

        // var billTotal1 = 0;

        var billItems = billString.split(",");
        for (var i=0;i<billItems.length;i++){
            var billItem = billItems[i].trim();
            if (billItem === "call"){
                billTotal += 2.75;

            }
            else if (billItem === "sms"){
                billTotal += 0.75;
            }
        }
        return billTotal;
    
    }


   function getbillTotal(){
       return billTotal;
   }

   //add colors classes for warningLevel and criticalLevel
   function addClass(){
    // const currentTotal = Number(roundedBillTotal);

    if(getbillTotal() >= 20 && getbillTotal() < 30){
        //make the total orange
        billTotalSpanElement.classList.add("warning");
    }else if(getbillTotal() >= 30){
        //make the total red
        billTotalSpanElement.classList.add("danger");

    }
    }


    return{
        billItemType,
        getbillTotal,
        addClass
        // getCallTotaCost,
        // getSmsTotaCost

    }

}
    // }