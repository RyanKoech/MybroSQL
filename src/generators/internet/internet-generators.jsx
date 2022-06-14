import { faker } from "@faker-js/faker";

const internetGenerator = {
  email : (rowCount) => {
    //Emails by standard will be unique so no need for isUnique Parameter
    const emailList = [];

    for(let i = 0; i < rowCount; i++){
      let email = "";
      let regen = true;

      while(regen){
        email = faker.internet.email();

        //Makes sure a unique email is obtained
        regen = emailList.includes(email);
      }

      emailList.push(email);
    }

    return emailList;
  }
}

export default internetGenerator;