//Data Domain Constants
//FOR TEXT
const NAME = "NAME";
const WORD = "WORD";
//FOR INT
const RANDOM_NUMBER = "RANDOM NUMBER";
const PHONE = "PHONE";
//FOR VARCHAR
const ADDRESS = "ADDRESS";
const EMAIL = "EMAIL";


export const DATA_TYPE = {
  TEXT : "TEXT",
  INT : "INT",
  VARCHAR : "VARCHAR"
}

//Maps datatype to specific data domains
export const DATA_DOMAINS = {
    [DATA_TYPE.TEXT]: [
      NAME,
      WORD
    ],
    [DATA_TYPE.INT] : [
      PHONE,
      RANDOM_NUMBER
    ],
    [DATA_TYPE.VARCHAR] : [
      ADDRESS,
      EMAIL
    ]
}