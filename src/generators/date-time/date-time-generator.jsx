import { faker } from "@faker-js/faker"

const dateTimeGenerator = {
  date : (rowCount) => {
    const dateList = [];

    for(let i = 0; i < rowCount; i++){

      const dateTime = faker.date.between('1980-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z');
      const date = dateTime.toISOString().split('T')[0];
      dateList.push(date);

    }

    return dateList;
  },

  time: (rowCount) => {
    const timeList = [];

    for(let  i = 0; i < rowCount; i++){

      const dateTime = faker.date.between('1900-01-01T00:00:00.000Z', '1900-01-02T00:00:00.000Z');
      const time = dateTime.toISOString().slice(11, 23);
      timeList.push(time);

    }

    return timeList;
  },

  dateTime : (rowCount) => {
    const dateTimeList = [];

    for(let i = 0; i < rowCount; i++){

      const dateTime = faker.date.between('1900-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z')
        .toISOString()
        .slice(0, 23)
        .replace("T", " ");
      dateTimeList.push(dateTime);

    }

    return dateTimeList;
  },

  year: (rowCount) => {
    const yearList = [];

    for(let i = 0; i < rowCount; i++){

      const dateTime = faker.date.between('1900-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z');
      const year = dateTime.getFullYear();
      yearList.push(year);

    }

    return yearList;
  },

  timestamp: (rowCount) => {
    const timeStampList = [];

    for(let i = 0; i < rowCount; i++){

      const timestamp = Math.floor(Math.random() * 1893456000);
      timeStampList.push(timestamp);

    }

    return timeStampList;

  }


}

export default dateTimeGenerator;