import { faker } from "@faker-js/faker"

const dateTimeGenerator = {
  date : (rowCount) => {
    const dateList = [];

    for(let i = 0; i < rowCount; i++){

      const dateTime = faker.date.between('1900-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z');
      const date = dateTime.slice(0 , 10);
      dateList.push(date);

    }

    return dateList;
  },

  time: (rowCount) => {
    const timeList = [];

    for(let  i = 0; i < rowCount; i++){

      const dateTime = faker.date.between('1900-01-01T00:00:00.000Z', '1900-01-02T00:00:00.000Z');
      const time = dateTime.slice(11, 8);
      timeList.push(time);

    }

    return timeList;
  },

  
}

export default dateTimeGenerator;