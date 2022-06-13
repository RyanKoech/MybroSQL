//Data Imports
import { names } from "./names";

//Used to generate a list of full names
export const generateFullNames = (rowCount, isUnique) => {

  const fullNameList = []

  // Generates Unique Full Names
  if(isUnique){
    for(let i = 0; i < rowCount; i++){
      let fullName = ""
      let regen = true;
      while (regen){
        const firstName = names[Math.floor(Math.random()*names.length)];
        const lastName = names[Math.floor(Math.random()*names.length)];
  
        fullName = `${firstName} ${lastName}`

        //Keeps generating until a unique full name is obtained
        regen = fullNameList.includes(fullName);
      }
      fullNameList.push(fullName)
    }

  //Generates None Unique Full Names
  }else {
    for(let i = 0; i < rowCount; i++){
      const firstname = names[Math.floor(Math.random()*names.length)];
      const lastname = names[Math.floor(Math.random()*names.length)];

      const fullName = `${firstname} ${lastname}`

      fullNameList.push(fullName)
    }

  }
  return fullNameList
}