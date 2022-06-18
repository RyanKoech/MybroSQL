//External Libraries Imports
import { faker } from "@faker-js/faker";

//Constants Imports
import { MAX_TRIES } from "../../model/Constants";

const randomGenerator = {
  password : (rowCount) => {
    const passwordList = [];

    for(let i = 0; i < rowCount; i++){

      const password = faker.random.alphaNumeric(6);
      passwordList.push(password);

    }

    return passwordList;
  },

  number : (rowCount, size, isUnique) => {
    const randomNumberList = []
  
    // Generates Unique Random Number
    if(isUnique){
      for (let i = 0; i < rowCount; i++){
        let randomNumber = 0;
        let maxTries = MAX_TRIES;
        let regen = true;
        while(regen && maxTries > 0){
          randomNumber = Math.floor(Math.random() * (size+1));
          //Keeps generating until a unique random number is obtained
          regen = randomNumberList.includes(randomNumber);
          maxTries--;
        }
        randomNumberList.push(randomNumber);
      }
  
    //Generates None Unique Random Number
    }else {
      for (let i = 0; i < rowCount; i++){
        const randomNumber = Math.floor(Math.random() * (size+1));
        randomNumberList.push(randomNumber);
      }
    }
  
    return randomNumberList;
  },

  word: (rowCount, isUnique) => {
    
    const wordList = [];

    if(isUnique){

      for(let i = 0; i < rowCount; i++){

        let word = "";
        let maxTries = MAX_TRIES;
        let regen = true;
        while(regen && maxTries > 0){

          word = faker.random.word();
          //Ensures generated word is unique
          regen = wordList.includes(word);
          maxTries--;

        }

        wordList.push(word)
  
      }
    } else {
      
      for(let i = 0; i < rowCount; i++){

        const word = faker.random.word();
        wordList.push(word)
  
      }
    }

    return wordList;
  },

  letter: (rowCount, isUnique) =>  {
    
    const letterList = [];

    if(isUnique && rowCount < 26 ){ //Avoid infinite loop in while statement

      for(let i = 0; i < rowCount; i++){

        let letter = "";
        let maxTries = MAX_TRIES;
        let regen = true;
        while(regen && maxTries > 0){

          letter = faker.random.alpha();
          //Ensures generated letter is unique
          regen = letterList.includes(letter);
          maxTries--;

        }

        letterList.push(letter)
  
      }
    } else {
      
      for(let i = 0; i < rowCount; i++){

        const letter = faker.random.alpha();
        letterList.push(letter)
  
      }
    }

    return letterList;
  },

  sentence : (rowCount, isUnique) => {

    const sentenceList = [];

    if(isUnique){

      for(let i = 0; i < rowCount; i++){

        let sentence = "";
        let maxTries = MAX_TRIES;
        let regen = true;
        while(regen && maxTries > 0){

          sentence = faker.lorem.sentence();
          //Ensures generated sentence is unique
          regen = sentenceList.includes(sentence);
          maxTries--;

        }

        sentenceList.push(sentence)
  
      }
    } else {
      
      for(let i = 0; i < rowCount; i++){

        const sentence = faker.lorem.sentence();
        sentenceList.push(sentence)
  
      }
    }

    return sentenceList;
  },

  paragraphs : (rowCount, isUnique) => {

    const paragraphsList = [];

    if(isUnique){

      for(let i = 0; i < rowCount; i++){

        let paragraphs = "";
        let maxTries = MAX_TRIES;
        let regen = true;
        while(regen && maxTries > MAX_TRIES){

          paragraphs = faker.lorem.paragraphs();
          //Ensures generated paragraphs is unique
          regen = paragraphsList.includes(paragraphs);
          maxTries--;

        }

        paragraphsList.push(paragraphs)
  
      }
    } else {
      
      for(let i = 0; i < rowCount; i++){

        const paragraphs = faker.lorem.paragraphs();
        paragraphsList.push(paragraphs)
  
      }
    }

    return paragraphsList;
  },

  gender : (rowCount) => {
    const genders = ["Male", "Female"];
    const genderList = [];

    for (let i = 0; i < rowCount; i++){

      const gender = genders[Math.floor(Math.random()*genders.length)];
      genderList.push(gender);

    }

    return genderList;
  }
}

export default randomGenerator;