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

