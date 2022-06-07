export const DATA_TYPE = {
  TEXT : "TEXT",
  INT : "INT",
  VARCHAR : "VARCHAR"
}

export const DATA_DOMAINS = {
    [DATA_TYPE.TEXT]: [
      "NAME",
      "EMAIL",
      "WORD"
    ],
    [DATA_TYPE.INT] : [
      "RANGE",
      "PHONE"
    ]
}