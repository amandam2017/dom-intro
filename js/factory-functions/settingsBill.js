function BillWithSettings(){
    //create variable for settingsBill
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    var callCostTotal = 0;
    var smsCostTotal = 0;
    //var theCriticalTotal = 0 

    //SETTING AND GETTING THE VALUES--function

    // function setTheBill(){
        function setCallCost(callCost){
            theCallCost = callCost;
       }
   
       function getCallCost(){
           return theCallCost;
      }
   
      function setSmsCost(smsCost){
           theSmsCost = smsCost;
       }
   
       function getSmsCost(){
           return theSmsCost;
       }
   //set warningLevel function
       function setWarningLevel(warningLevel){
           theWarningLevel = warningLevel;
       }
   
       function getWarningLevel(){
           return theWarningLevel;
       }
   
   
       //set warningLevel function
       function setCriticalLevel(criticalLevel){
           theCriticalLevel = criticalLevel;
       }
   
       function getCriticalLevel(){
           return theCriticalLevel;
       }
    // }


    // USING THE VALUES NOW

    function makeCall(){
        //when sending sms if I have not reached the criticalLevel...increament the call cost 
        if(!hasReachedCriticalLevel()){
            callCostTotal += theCallCost;
        }
    }
    
    function getTotalCost(){
        return callCostTotal + smsCostTotal;
    }

    function getTotalCallCost(){
        return callCostTotal;
    }

    function getTotalSmsCost(){
        return smsCostTotal;
    }

    function sendSms(){
        //when sending sms if I have not reached the criticalLevel...increament the sms cost 
        if(!hasReachedCriticalLevel()){
            smsCostTotal += theSmsCost;
            
        };
    }
    //this function below checks if the total cost is great or equal the criticalLevel
    function hasReachedCriticalLevel(){
        return getTotalCost() >= getCriticalLevel();
    }

    function totalClassName(){

        if(hasReachedCriticalLevel()){
            return "danger";
        };

        if(getTotalCost() >= getWarningLevel()){
            return "warning";
        };
    
    }

    function billItems(){
    var checkedRadioSettingsBtn = document.querySelector("input[name='billSettingsItemType']:checked");
        
        if(checkedRadioSettingsBtn){
            var billSettingsItemType = checkedRadioSettingsBtn.value;

            if(billSettingsItemType === "call"){
                return makeCall();
            }
            
        else if(billSettingsItemType === "sms"){
            return sendSms();
        }
        
    }


        // if(billSettingsItemType === "call" &&  callSettings === ''){
        //     checkedRadioSettingsBtn+=0;
        // }

        // if(billSettingsItemType === "sms" &&  smsSettings === ''){
        //     smsTotalSettings+=0;
        // } 
    }

//expose functions into factory function
    return {
        billItems,
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        totalClassName

    }
}