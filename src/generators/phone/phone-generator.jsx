//Utilities Imports
import { reverseString } from "../../utilities/utilities";

//Constants Imports
import { MAX_TRIES } from "../../model/Constants";

const phoneGenerator = {
  phone :  (rowCount) => {
    //By Default Generates unique phone numbers
    const phoneNumberList = [];
  
    for(let i = 0; i < rowCount; i++){
      let phoneNumber = "";
      let maxTries = MAX_TRIES;
      let regen = true;
  
      while(regen && maxTries > 0){ 
        const intNumber = (Math.floor(Math.random() * (999999999 - 100000000 + 1)) + 100000000);
        const stringNumber = intNumber.toString();
        phoneNumber = "07"+reverseString(stringNumber);
  
        //Check if phone number has already been generated
        regen = phoneNumberList.includes(phoneNumber);
        maxTries--;

      }
  
      phoneNumberList.push(phoneNumber);
    }
  
  
   return phoneNumberList;
  }
}

export default phoneGenerator;