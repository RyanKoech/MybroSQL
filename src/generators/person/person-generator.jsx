import { faker } from "@faker-js/faker";

const personGenerator = {
  name: (rowCount, isUnique) => {

    const fullNameList = []
  
    // Generates Unique Full Names
    if(isUnique){
      for(let i = 0; i < rowCount; i++){
        let fullName = ""
        let regen = true;
        while (regen){
              
          fullName = faker.name.findName();
  
          //Keeps generating until a unique full name is obtained
          regen = fullNameList.includes(fullName);
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