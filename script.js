   
   //Launchcode LC101-Assignment 5
   //March 2021 by Claire Patterson
   //Launch-Checklist-Form 
     
   //add load event to make sure everything has loaded before working 
   //with the form
   window.addEventListener("load", function(){
      //use fetch to retrieve Json data about the different planets that are targeted for this mission
      fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
         response.json().then( function(json) {
                              
            const missionTarget = document.getElementById("missionTarget");
                                 
                  missionTarget.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                    <li>Name: ${json[3].name}</li>
                    <li>Diameter: ${json[3].diameter}</li>
                    <li>Star: ${json[3].star}</li>
                    <li>Distance from Earth: ${json[3].distance}</li>
                    <li>Number of Moons: ${json[3].moons}</li>
                 </ol>
                 <img src="${json[3].image}">`
              });
            });  
            
      //add event handler for when form submit button clicked
      let form = document.querySelector("form");
      form.addEventListener("submit", function(event) {
         //prevent the form from loading if the submit button is pressed and
         //all the information is not correctly entered or filled out
         event.preventDefault();
         //get the values that the user entered in the form
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
            alert("Please enter a valid fuel entry");
            }
         
         else if(isNaN(inputCargoMass.value)===true){
            alert("Please enter a valid cargo mass");
            }
         //check that the fuel level entered is sufficient for the journey
         else if(inputFuelLevel.value < 10000){
            //if the fuel level is too low, display that the shuttle is not ready for launch
            //let the user know it is because the fuel level is too low
            let launchStatus = document.getElementById("launchStatus");
            launchStatus.style.color='red';
            launchStatus.innerHTML=`Shuttle Not Ready For Launch`;
            let faultyItems = document.getElementById("faultyItems");
            faultyItems.style.visibility='visible';
            faultyItems.innerHTML=`
                  <ol>
                     <li id="pilotStatus">The Pilot ${inputPilot.value} is Ready</li>
                     <li id="copilotStatus">The Co-pilot ${inputCoPilot.value} is Ready</li>
                     <li id="fuelStatus">There is not enough fuel for the journey</li>
                     <li id="cargoMass">Cargo mass low enough for launch</li>
                 </ol>
            `}

            else if(inputCargoMass.value > 10000){
               let launchStatus = document.getElementById("launchStatus");
               launchStatus.style.color='red';
               launchStatus.innerHTML=`Shuttle Not Ready For Launch`;
               let faultyItems = document.getElementById("faultyItems");
               faultyItems.style.visibility='visible';
               faultyItems.innerHTML=`
                     <ol>
                        <li id="pilotStatus">The Pilot ${inputPilot.value} is Ready</li>
                        <li id="copilotStatus">The Co-pilot ${inputCoPilot.value} is Ready</li>
                        <li id="fuelStatus">There is enough fuel for the journey</li>
                        <li id="cargoStatus">There is too much mass for the shuttle to take off</li>
                    </ol>
               `}
               else {
                  let launchStatus = document.getElementById("launchStatus");
                  launchStatus.style.color='green';
                  launchStatus.innerHTML=`Shuttle is Ready For Launch`;
                  let faultyItems = document.getElementById("faultyItems");
                  faultyItems.style.visibility='visible';
                  faultyItems.innerHTML=`
                        <ol>
                           <li id="pilotStatus">The Pilot ${inputPilot.value} is Ready</li>
                           <li id="copilotStatus">The Co-pilot ${inputCoPilot.value} is Ready</li>
                           <li id="fuelStatus">There is enough fuel for the journey</li>
                           <li id="cargoStatus">The cargo mass is low enough for take off</li>
                       </ol>
                  `};
               
                                  
          });
  });
