//Data Domain Constants
//FOR TEXT
export const NAME = "NAME";
export const WORD = "WORD";
export const LETTER = "LETTER";
export const SENTENCE = "SENTENCE";
export const PARAGRAPHS = 'PARAGRAPHS';
export const GENDER = 'GENDER';
export const COMPANY = "COMPANY";
export const CITY = "CITY";
export const COUNTRY = "COUNTRY"
export const STATE = "STATE";
//FOR INT
export const RANDOM_NUMBER = "RANDOM NUMBER";
//FOR VARCHAR
export const PHONE = "PHONE";
export const ADDRESS = "ADDRESS";
export const EMAIL = "EMAIL";
export const URL = 'URL';
export const POSTAL_CODE = "POSTAL CODE";
export const PASSWORD = "PASSWORD";
//FOR DATE-TIME
export const DATE = "DATE";
export const TIME = "TIME";
export const DATE_TIME = "DATE-TIME";
export const YEAR = "YEAR";
export const TIMESTAMP = "TIMESTAMP";

export const DATA_TYPE = {
  TEXT : "TEXT",
  INT : "INT",
  VARCHAR : "VARCHAR",
  DATE_TIME : "DATE-TIME"
}

//Maps datatype to specific data domains
export const DATA_DOMAINS = {
    [DATA_TYPE.TEXT]: [
      NAME,
      WORD,
      LETTER,
      SENTENCE,
      PARAGRAPHS,
      GENDER,
      COMPANY,
      CITY,
      COUNTRY,
      STATE
    ],
    [DATA_TYPE.INT] : [
      RANDOM_NUMBER
    ],
    [DATA_TYPE.VARCHAR] : [
      PHONE,
      ADDRESS,
      EMAIL,
      URL,
      POSTAL_CODE
    ],
    [DATA_TYPE.DATE_TIME] : [
      DATE,
      TIME,
      DATE_TIME,
      YEAR,
      TIMESTAMP
    ]
}

//Define max number of tries a loop will try to find a unique data
export const MAX_TRIES = 10;