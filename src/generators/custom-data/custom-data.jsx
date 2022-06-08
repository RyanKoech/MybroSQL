import { shuffleArray } from "../../utilities/utilities";


export const getDataFromCustomData = (array, rowCount, isUnique) => {
  let finalData = []

  if(isUnique){

    finalData = shuffleArray(array).slice(0, rowCount)

    return finalData;
  } else {
    
    for(let i = 0; i < rowCount; i++){
      const randomData = array[Math.floor(Math.random()*array.length)];
      finalData.push(randomData)
    }
    
    return finalData
  }
}