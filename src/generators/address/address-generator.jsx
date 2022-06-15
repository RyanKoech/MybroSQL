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
  },

  country: (rowCount) => {

    const countryList = [];
  
    for(let i = 0; i < rowCount; i++){
  
      const country = faker.address.country();
  
      countryList.push(country);
    }
  
    return countryList;
  },

  state: (rowCount) => {

    const stateList = [];
  
    for(let i = 0; i < rowCount; i++){
  
      const state = faker.address.state();
  
      stateList.push(state);
    }
  
    return stateList;
  },

  
  postalCode: (rowCount, isUnique) => {

    const postalCodeList = [];

    if(isUnique){

      for(let i = 0; i < rowCount; i++){

        let postalCode = "";
        let regen = true;

        while(regen){

          postalCode = faker.address.zipCode();
          regen = postalCodeList.includes(postalCode);

        }

        postalCodeList.push(postalCode);

      }
    }else{

      for(let i = 0; i < rowCount; i++){
  
        const postalCode = faker.address.zipCode();
        postalCodeList.push(postalCode);

      }
    }
  
    return postalCodeList;
  }
}

export default addressGenerator;