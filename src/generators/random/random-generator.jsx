import { faker } from "@faker-js/faker";

const randomGenerator = {
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

  sentence : (rowCount, size) => {

    const sentenceList = [];

    if(isUnique){

      for(let i = 0; i < rowCount; i++){

        let sentence = "";
        let regen = true;
        while(regen){

          sentence = faker.random.sentence();
          //Ensures generated sentence is unique
          regen = sentenceList.includes(sentence);

        }

        sentenceList.push(sentence)
  
      }
    } else {
      
      for(let i = 0; i < rowCount; i++){

        const sentence = faker.random.sentence();
        sentenceList.push(sentence)
  
      }
    }

    return sentenceList;
  }
}

export default randomGenerator;