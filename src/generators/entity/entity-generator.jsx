//External Libraries Imports
import { faker } from "@faker-js/faker";

//Constants Imports
import { MAX_TRIES } from "../../model/Constants";

const entityGenerator = {

  company : (rowCount, isUnique) => {

    const companyList = [];

    if(isUnique){

      for(let i = 0; i < rowCount; i++){

        let company = "";
        let maxTries = MAX_TRIES;
        let regen = true;
        while(regen && maxTries > 0){

          company = faker.company.companyName();
          //Ensures generated company is unique
          regen = companyList.includes(company);
          maxTries--;

        }

        companyList.push(company)
  
      }
    } else {
      
      for(let i = 0; i < rowCount; i++){

        const company = faker.company.companyName();
        companyList.push(company)
  
      }
    }

    return companyList;
  }
}

export default entityGenerator;