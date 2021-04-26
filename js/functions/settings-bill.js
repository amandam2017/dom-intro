// get a reference to the sms or call radio buttons
const billSettingsItemTypeElem = document.querySelector('.billSettingsItemType');
const callSettingsTotalElem = document.querySelector('.callTotalSettings');
const smsSettingsTotalElem = document.querySelector('.smsTotalSettings');
const totalSettingsSpanElem = document.querySelector('.totalSettings');
// get refences to all the settings fields

const callCostSettingField = document.querySelector('.callCostSetting');
const smsCostSettingField = document.querySelector('.smsCostSetting');
const warningLevelSettingField = document.querySelector('.warningLevelSetting');
const criticalLevelSettingField = document.querySelector('.criticalLevelSetting');

//get a reference to the add button
const billSettingsAddButtonBtn = document.querySelector('.billSettingsAddButton');

//get a reference to the 'Update settings' button
const updateSettingsbtnElem = document.querySelector('.updateSettingsbtn');

//INSTANCE FOR MY FF-----
var billSettings = BillWithSettings();

//on the settigsBil--set and get inserted values and update them
    function updateSettings(){
    billSettings.setCallCost(Number (callCostSettingField.value));
    billSettings.getCallCost();
    
    billSettings.setSmsCost(Number (smsCostSettingField.value));
    billSettings.getSmsCost();
    
    billSettings.setWarningLevel(Number (warningLevelSettingField.value));
    billSettings.getWarningLevel();

    billSettings.setCriticalLevel(Number (criticalLevelSettingField.value));
    billSettings.getCriticalLevel();

    addClassName();

};


// function BillWithSettings1(){


// }


updateSettingsbtnElem.addEventListener('click', updateSettings);
//});

//add an event listener for when the add button is pressed
//in the event listener get the value from the billItemTypeRadio radio buttons

function totalBillSettings(){
    var checkedRadioSettingsBtn = document.querySelector("input[name='billSettingsItemType']:checked");
    // if(overallCost < dangerSettings){
        var billSett = checkedRadioSettingsBtn.value;               
            
    //PASS THE VALUES FROM html-----
            billSettings.billItems(billSett);
    // }

    console.log(typeof(callsTotalSettings));

    callSettingsTotalElem.innerHTML = billSettings.getTotalCallCost().toFixed(2);
    smsSettingsTotalElem.innerHTML = billSettings.getTotalSmsCost().toFixed(2);
    // overallCost = callsTotalSettings + smsTotalSettings;
    totalSettingsSpanElem.innerHTML = billSettings.getTotalCost().toFixed(2);

    addClassName();
    }

    // color function
function addClassName(){


    totalSettingsSpanElem.classList.remove("danger");
    totalSettingsSpanElem.classList.remove("warning");


    totalSettingsSpanElem.classList.add(billSettings.totalClassName());
}


billSettingsAddButtonBtn.addEventListener('click', totalBillSettings);


// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
