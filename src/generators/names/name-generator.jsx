import { names } from "./names";

//Used to generate a list of full names
export const generateFullNames = (rowCount) => {

  const fullNameList = []

  for(let i = 0; i < rowCount; i++){
    const firstname = names[Math.floor(Math.random()*names.length)];
    const lastname = names[Math.floor(Math.random()*names.length)];

    const fullname = `${firstname} ${lastname}`

    fullNameList.push(fullname)
  }

  return fullNameList
}