export const DATA_TYPE = {
  TEXT : "TEXT",
  INT : "INT",
  VARCHAR : "VARCHAR"
}

export const DATA_DOMAINS = {
    [DATA_TYPE.TEXT]: [
      "NAME",
      "WORD"
    ],
    [DATA_TYPE.INT] : [
      "RANDOM NUMBER",
      "PHONE"
    ],
    [DATA_TYPE.VARCHAR] : [
      "ADDRESS",
      "EMAIL"
    ]
}