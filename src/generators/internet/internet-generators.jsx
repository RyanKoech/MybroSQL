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
  },

  url : (rowCount, isUnique) => {
    const urlList = [];

    if(isUnique){
      
      for(let i = 0; i < rowCount; i++){
        let url = "";
        let regen = true;
  
        while(regen){
          url = faker.internet.url();
  
          //Makes sure a unique url is obtained
          regen = urlList.includes(url);
        }
  
        urlList.push(url);

      }
    }else {

      for(let i = 0; i < rowCount; i++){

        const url = faker.internet.url();
        urlList.push(url);

      }
    }

    return urlList;
  },
}

export default internetGenerator;