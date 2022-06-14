import { names } from "../names/names";

const mailServersList = [
  "gmail",
  "yahoo",
  "email"
]

const domainList = [
  "com",
  "net",
  "tech"
]

export const generateEmail = (rowCount, isUnique) => {
  const emailList = [];

  // Generates Unique Email
  if(isUnique){

    for(let i = 0; i < rowCount; i++){
      let email = ""
      let regen  = true;
      while(regen){
        const firstName = names[Math.floor(Math.random() * names.length)];
        const lastName = names[Math.floor(Math.random() * names.length)];
        const mailServers = mailServersList[Math.floor(Math.random() * mailServersList.length)];
        const domain = domainList[Math.floor(Math.random() * domainList.length)];
        email = firstName + lastName + "@" +mailServers + "." + domain;

        //Keeps generating until a unique email is obtained
        regen = emailList.includes(email);
      }
      emailList.push(email);
    }

  //Generates None Unique Email
  }else {

    for(let i = 0; i < rowCount; i++){
      const firstName = names[Math.floor(Math.random() * names.length)];
      const lastName = names[Math.floor(Math.random() * names.length)];
      const mailServers = mailServersList[Math.floor(Math.random() * mailServersList.length)];
      const domain = domainList[Math.floor(Math.random() * domainList.length)];
      const email = firstName + lastName + "@" +mailServers + "." + domain;

      emailList.push(email);
    }

  }

  return emailList;
}