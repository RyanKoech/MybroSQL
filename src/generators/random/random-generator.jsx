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
  }  
}

export default randomGenerator;