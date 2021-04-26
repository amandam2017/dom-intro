// function totalPhoneBill() {
//     //console.log(billString);
//     // var call = 0;
//     // var sms = 0;
//     // var billTotal = 0; 


//     function billItemType(billString) {
//         var billTotal = 0;

//         var billItems = billString.split(",");
//         for (var i = 0; i < billItems.length; i++) {
//             var billItem = billItems[i].trim();
//             if (billItem === "call") {
//                 billTotal += 2.75;

//             }
//             else if (billItem === "sms") {
//                 billTotal += 0.75;
//             }
//         }
//         return billTotal;

//     }


//     // function getbillTotal() {
//     //     return billTotal;
//     // }

//     //add colors classes for warningLevel and criticalLevel
//     function addClass() {
//         // const currentTotal = Number(roundedBillTotal);

//         if (billTotal() >= 20 && billTotal() < 30) {
//             return "warning"
//             //make the total orange
//         } else if (billTotal() >= 30) {
//             //make the total red
//             return "danger"

//         }
//     }


//     return {
//         billItemType,
//         // getbillTotal,
//         addClass
//         // getCallTotaCost,
//         // getSmsTotaCost

//     }

// }
//     // }

function calculatedStrings() {
    function totalPhoneBill(billString) {
        var billItems = billString.split(",");
        // a variable for the total phone bill.
        var billTotal = 0;
        //loop over all the bill items
        for (var i = 0; i < billItems.length; i++) {
            var billItem = billItems[i].trim();
            if (billItem === "call") {
                billTotal += 2.75;
            }
            else if (billItem === "sms") {
                billTotal += 0.75;
            }

            // addColor();

        }

        return billTotal.toFixed(2);

    }


    function addColor(billString) {

        if (totalPhoneBill(billString) >= 20 && totalPhoneBill(billString) < 30) {
            return "warning";
        }

        if (totalPhoneBill(billString) >= 30) {
            return "danger";
        }
    }

    return {
        totalPhoneBill,
        addColor
    }

}
