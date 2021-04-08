// get a reference to the sms or call radio buttons
const callSettingsTotalElem = document.querySelector('.callTotalSettings');
const smsSettingsTotalElem = document.querySelector('.smsTotalSettings');
const totalSettingsElem = document.querySelector('.totalSettings');
// get refences to all the settings fields

const callCostSettingField = document.querySelector('.callCostSetting');
const smsCostSettingField = document.querySelector('.smsCostSetting');
const warningLevelSettingField = document.querySelector('.warningLevelSetting');
const criticalLevelSettingField = document.querySelector('.criticalLevelSetting');
//const criticalLevelSettingField = document.querySelector('.criticalLevelSetting');

//get a reference to the add button
const billSettingsAddButtonBtn = document.querySelector('.billSettingsAddButton');

//get a reference to the 'Update settings' button
const updateSettingsbtnElem = document.querySelector('.updateSettingsbtn');

// create a variables that will keep track of all the settings
var callSettings = 0;
var smsSettings = 0; 
var warningSettings = 0;
var dangerSettings = 0;

// create a variables that will keep track of all three totals.
var callsTotalSettings = 0; 
var smsTotalSettings = 0;
var totalSettings = 0;

//add an event listener for when the 'Update settings' button is pressed
    function updateSettings(){
    callSettings = callCostSettingField.value;
    smsSettings = smsCostSettingField.value;
    warningSettings = warningLevelSettingField.value;
    dangerSettings = criticalLevelSettingField.value;
    // console.log(callSettings);
    // console.log(smsSettings);
};

updateSettingsbtnElem.addEventListener('click', updateSettings);
//});

//add an event listener for when the add button is pressed
//in the event listener get the value from the billItemTypeRadio radio buttons

function totalBillSettings(){
    var checkedRadioSettingsBtn = document.querySelector("input[name='billSettingsItemType']:checked");
    if(checkedRadioSettingsBtn){
        var billSettingsItemType = checkedRadioSettingsBtn.value;
        //ADD the appropriate value to the call / sms total
        //AND use parseFloat to change string value to a number
        if(billSettingsItemType === "call"){
            callsTotalSettings +=  parseFloat(callSettings);
        }
        if(billSettingsItemType === "sms"){
            smsTotalSettings += parseFloat(smsSettings);
        }

        // if(callSettings == '' || smsSettings == ''){
        //     return 0.00;
        // }
    }


// * add the appropriate value to the overall total

    console.log(typeof(callsTotalSettings))

    callSettingsTotalElem.innerHTML = callsTotalSettings.toFixed(2);
    smsSettingsTotalElem.innerHTML = smsTotalSettings.toFixed(2);
    var overallCost = callsTotalSettings + smsTotalSettings;
    totalSettingsElem.innerHTML = overallCost.toFixed(2);

    // adding the criticalLevelSetting class will make the overall cost red
    if (overallCost >= 50){
        totalSettingsElem.classList.add("danger");
    }

    else if (overallCost >= 30){
        // adding the warningLevelSetting class will make the overall cost orange
        totalSettingsElem.classList.add("warning");
    }
}

billSettingsAddButtonBtn.addEventListener('click', totalBillSettings);


// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
