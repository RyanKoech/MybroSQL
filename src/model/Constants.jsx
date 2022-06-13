//Data Domain Constants
//FOR TEXT
export const NAME = "NAME";
export const WORD = "WORD";
//FOR INT
export const RANDOM_NUMBER = "RANDOM NUMBER";
export const PHONE = "PHONE";
//FOR VARCHAR
export const ADDRESS = "ADDRESS";
export const EMAIL = "EMAIL";


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