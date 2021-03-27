   
   //Launchcode LC101-Assignment 5
   //March 2021 by Claire Patterson
   //Launch-Checklist-Form

   //add load event to make sure everything has loaded before working 
   //with the form
   window.addEventListener("load", function(){
      console.log('window loaded');
      //add event handler for when form submit button clicked
      let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
         //prevent the form from loading if the submit button is pressed and
         //all the information is not correctly entered   
         event.preventDefault();
         let inputPilot = document.querySelector("input[name=pilotName]");
         let inputCoPilot = document.querySelector("input[name=copilotName]");
         let inputFuelLevel = document.querySelector("input[name=fuelLevel]");
         let inputCargoMass = document.querySelector("input[name=cargoMass]");      
         //validate that the user is entering something for each field
         if (inputPilot.value==="" || inputCoPilot.value==="" || inputFuelLevel.value==="" || inputCargoMass.value===""){
            alert("All fields Are Required!");
         }
         
         else if(isNaN(inputPilot.value)===false){
            alert("Please enter a valid pilot name");
            }

         else if(isNaN(inputCoPilot.value)===false){
            alert("Please enter a valid Co-pilot name");
            }

         else if(isNaN(inputFuelLevel.value)===true){
            alert("Please enter a valid fuel level");
            }
         
         else if(isNaN(inputCargoMass.value)===true){
            alert("Please enter a valid cargo mass");
            };

      const faultyItems = document.getElementById("faultyItems");
      faultyItems.innerHTML=
            <div id ="faultyItems">
               <ol>
                  <li id="pilotStatus"></li>
               </ol>
            </div>
      // let launchStatus = document.getElementById("launchStatus");
      // launchStatus.innerHTML=`The Pilot ${inputPilot.value} is ready and The Co Pilot ${inputCoPilot.value} is ready` ;

      let pilotStatus = getElementById("pilotStatus");
      let copilotStatus = getElementById("copilotStatus");
      // let fuelStatus = getElementById("fuelStatus");
      // let cargoStatus = getElementById("cargoStatus");

      pilotStatus.innerHTML=`The Pilot ${inputPilot.value} is ready`;
      // copilotStatus.innerHTML=`The CoPilot ${inputCoPilot} is ready`;

      
      });
         
});   
         
     
