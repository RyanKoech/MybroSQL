import {faker} from '@faker-js/faker'

export const generateAddress = (rowCount) => {

  const addressList = [];

  for(let i = 0; i < rowCount; i++){

    const stressAddress = faker.address.streetAddress();
    const city = faker.address.city();
    const state = faker.address.stateAbbr();

    const address = `${stressAddress}, ${city}, ${state}`;

    addressList.push(address);
  }

  return addressList;
}