import { reverseString } from "../../utilities/utilities";

export const generatePhoneNumber = (rowCount) => {
  //By Default Generates unique phone numbers
  const phoneNumberList = [];

  for(let i = 0; i < rowCount; i++){
    let phoneNumber = "";
    let regen = true;

    while(regen){ 
      const intNumber = (Math.floor(Math.random() * (999999999 - 100000000 + 1)) + 100000000);
      const stringNumber = intNumber.toString();
      phoneNumber = "07"+reverseString(stringNumber);

      //Check if phone number has already been generated
      regen = phoneNumberList.includes(phoneNumber)
    }

    phoneNumberList.push(phoneNumber);
  }


 return phoneNumberList;
}