import { Message } from "./types";

export const boolTrue = {
  boolean: true,
};

export const boolFalse = {
  boolean: false,
};

export const stringEqual = {
  string: "string",
};

export const stringStartsWith = {
  string: "$StartsWith",
};

export const stringEndsWith = {
  string: "EndsWith$",
};

export const stringContains = {
  string: "string contains $$ double dollar symbol",
};

export const numberEqual = {
  number: 12,
};

export const dateMessage = { date: new Date().toISOString() };

export const complexMessage = {
  field1: 122,
  field2: new Date("2024-01-01T12:00:00.000Z").toISOString(),
};

export const complexMessage2 = {
  field1: 123,
  field2: new Date("2024-01-01T12:00:00.000Z").toISOString(),
};

export const complexMessage3 = {
  field1: 124,
  field2: new Date("2024-01-01T12:00:00.000Z").toISOString(),
};

export const complexMessage4 = {
  field1: "string",
  field2: new Date("2024-01-01T12:00:00.000Z").toISOString(),
};

export const messages: Message[] = [
  boolTrue,
  boolFalse,
  stringEqual,
  stringStartsWith,
  stringEndsWith,
  stringContains,
  numberEqual,
  dateMessage,
  complexMessage,
  complexMessage2,
  complexMessage3,
];
