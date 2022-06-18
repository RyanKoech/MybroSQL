//External Libraries Imports
import { faker } from "@faker-js/faker";

//Constants Imports
import { MAX_TRIES } from "../../model/Constants";

const personGenerator = {
  name: (rowCount, isUnique) => {

    const fullNameList = []
  
    // Generates Unique Full Names
    if(isUnique){
      for(let i = 0; i < rowCount; i++){
        let fullName = ""
        let maxTries = MAX_TRIES;
        let regen = true;
        while (regen && maxTries > 0){
              
          fullName = faker.name.findName();
          //Keeps generating until a unique full name is obtained
          regen = fullNameList.includes(fullName);
          maxTries--;

        }
        fullNameList.push(fullName)
      }
  
    //Generates None Unique Full Names
    }else {
      for(let i = 0; i < rowCount; i++){

        const fullName = faker.name.findName();
  
        fullNameList.push(fullName)
      }
  
    }
    return fullNameList
  }
  
}

export default personGenerator;