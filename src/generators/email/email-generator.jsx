import { names } from "../names/names";

const mailServersList = [
  "gmail",
  "yahoo"
]

const domainList = [
  "com",
  "net",
  "tech"
]


const generateEmail = (rowCount, isUnique) => {
  const emailList = [];

  // Generates Unique Random Number
  if(isUnique){

    for(let i = 0; i < rowCount; i++){
      let email = ""
      let regen  = true;
      while(regen){
        const firstName = names[Math.floor(Math.random() * names.length)];
        const lastName = names[Math.floor(Math.random() * names.length)];
        const mailServers = mailServersList[Math.floor(Math.random() * mailServersList.length)];
        const domain = domainList[Math.floor(Math.random() * domainList.length)];


        //Keeps generating until a unique random number is obtained
      }
    }

  //Generates None Unique Random Number
  }else {

  }

  return emailList;
}