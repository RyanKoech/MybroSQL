import {faker} from '@faker-js/faker'

const addressGenerator = {
  address :  (rowCount) => {

    const addressList = [];
  
    for(let i = 0; i < rowCount; i++){
  
      const stressAddress = faker.address.streetAddress();
      const city = faker.address.city();
      const state = faker.address.stateAbbr();
  
      const address = `${stressAddress}, ${city}, ${state}`;
  
      addressList.push(address);
    }
  
    return addressList;
  }, 

  city: (rowCount) => {

    const cityList = [];
  
    for(let i = 0; i < rowCount; i++){
  
      const city = faker.address.cityName();
  
      cityList.push(city);
    }
  
    return cityList;
  }
}

export default addressGenerator;