import { faker } from "@faker-js/faker";

const entityGenerator = {

  company : (rowCount, isUnique) => {

    const companyList = [];

    if(isUnique){

      for(let i = 0; i < rowCount; i++){

        let company = "";
        let regen = true;
        while(regen){

          company = faker.random.companyName();
          //Ensures generated company is unique
          regen = companyList.includes(company);

        }

        companyList.push(company)
  
      }
    } else {
      
      for(let i = 0; i < rowCount; i++){

        const company = faker.random.companyName();
        companyList.push(company)
  
      }
    }

    return companyList;
  }
}

export default entityGenerator;