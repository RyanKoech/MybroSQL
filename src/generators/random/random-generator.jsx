import { faker } from "@faker-js/faker";

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
        let regen = true;
        while(regen){
          randomNumber = Math.floor(Math.random() * (size+1));
          //Keeps generating until a unique random number is obtained
          regen = randomNumberList.includes(randomNumber);
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
        let regen = true;
        while(regen){

          word = faker.random.word();
          //Ensures generated word is unique
          regen = wordList.includes(word);

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
        let regen = true;
        while(regen){

          letter = faker.random.alpha();
          //Ensures generated letter is unique
          regen = letterList.includes(letter);

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
        let regen = true;
        while(regen){

          sentence = faker.lorem.sentence();
          //Ensures generated sentence is unique
          regen = sentenceList.includes(sentence);

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
        let regen = true;
        while(regen){

          paragraphs = faker.lorem.paragraphs();
          //Ensures generated paragraphs is unique
          regen = paragraphsList.includes(paragraphs);

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