import {faker} from '@faker-js/faker'

const addressGenerator = {
  address :  (rowCount, isUnique) => {

    const addressList = [];

    
    if(isUnique){

      for(let i = 0; i < rowCount; i++){

        let streetAddress = "";
        let city = "";
        let state = "";
        let address = "";
        let maxTries = 10;
        let regen = true;

        while(regen && maxTries > 0){

          streetAddress = faker.address.streetAddress();
          city = faker.address.city();
          state = faker.address.stateAbbr();
      
          address = `${streetAddress}, ${city}, ${state}`;
          regen = addressList.includes(address);
          maxTries--;
          
        }
        addressList.push(address);

      }
    }else{

      for(let i = 0; i < rowCount; i++){
  
        const streetAddress = faker.address.streetAddress();
        const city = faker.address.city();
        const state = faker.address.stateAbbr();
    
        const address = `${streetAddress}, ${city}, ${state}`;
    
        addressList.push(address);
      }
    }
  
    return addressList;
  }, 

  city: (rowCount, isUnique) => {

    const cityList = [];
  

    if(isUnique){

      for(let i = 0; i < rowCount; i++){

        let city = "";
        let maxTries = 10;
        let regen = true;

        while(regen && maxTries > 0){

          city = faker.address.cityName();
          regen = cityList.includes(city);
          maxTries--;
          
        }

        cityList.push(city);

      }
    }else{

      for(let i = 0; i < rowCount; i++){
  
        const city = faker.address.cityName();
        cityList.push(city);

      }
    }

    return cityList;
  },

  country: (rowCount, isUnique) => {

    const countryList = [];

    if(isUnique){

      for(let i = 0; i < rowCount; i++){

        let country = "";
        let maxTries = 10;
        let regen = true;

        while(regen && maxTries > 0){

          country = faker.address.country();
          regen = countryList.includes(country);
          maxTries--;
          
        }
        countryList.push(country);

      }
    }else{

      for(let i = 0; i < rowCount; i++){
  
        const country = faker.address.country();
    
        countryList.push(country);
      }
    }
  
    return countryList;
  },

  state: (rowCount, isUnique) => {

    const stateList = [];

    
    if(isUnique){

      for(let i = 0; i < rowCount; i++){

        let state = "";
        let maxTries = 10;
        let regen = true;

        while(regen && maxTries > 0){

          state = faker.address.state();
          regen = stateList.includes(state);
          maxTries--;
          
        }
        stateList.push(state);

      }
    }else{

      for(let i = 0; i < rowCount; i++){
  
        const state = faker.address.state();
    
        stateList.push(state);
      }
    }

  
    return stateList;
  },

  
  postalCode: (rowCount, isUnique) => {

    const postalCodeList = [];

    if(isUnique){

      for(let i = 0; i < rowCount; i++){

        let postalCode = "";
        let maxTries = 10;
        let regen = true;

        while(regen && maxTries > 0){

          postalCode = faker.address.zipCode('#####-#####');
          regen = postalCodeList.includes(postalCode);
          maxTries--;

        }

        postalCodeList.push(postalCode);

      }
    }else{

      for(let i = 0; i < rowCount; i++){
  
        const postalCode = faker.address.zipCode('#####-#####');
        postalCodeList.push(postalCode);

      }
    }
  
    return postalCodeList;
  }
}

export default addressGenerator;