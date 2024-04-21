import { messages } from "./examples";
import {
  Message,
  StringFilter,
  NumberFilter,
  BooleanFilter,
  DateFilter,
  OrFilter,
  AndFilter,
  Filter,
} from "./types";

function filterByString(message: Message, filter: StringFilter): boolean {
  const value = `${message[filter.field]}`;
  switch (filter.operation) {
    case "eq":
      return value === filter.value;
    case "startsWith":
      return value.startsWith(filter.value);
    case "endsWith":
      return value.endsWith(filter.value);
    case "contains":
      return value.includes(filter.value);
    default:
      return false;
  }
}

function filterByNumber(message: Message, filter: NumberFilter): boolean {
  const value = +message[filter.field];
  switch (filter.operation) {
    case "eq":
      return value === filter.value;
    case "gt":
      return value > filter.value;
    case "lt":
      return value < filter.value;
    case "gte":
      return value >= filter.value;
    case "lte":
      return value <= filter.value;
    default:
      return false;
  }
}

function filterByBoolean(message: Message, filter: BooleanFilter): boolean {
  const value = message[filter.field];
  switch (filter.operation) {
    case "eq":
      return value === filter.value;
    default:
      return false;
  }
}

function filterByDate(message: Message, filter: DateFilter): boolean {
  const fieldValue = `${message[filter.field]}`;
  const date = new Date(fieldValue);
  const filterDate = new Date(filter.value);

  if (isNaN(date.getTime())) {
    return false;
  }

  switch (filter.operation) {
    case "eq":
      return date.getTime() === filterDate.getTime();
    case "after":
      return date.getTime() > filterDate.getTime();
    case "before":
      return date.getTime() < filterDate.getTime();
    default:
      return false;
  }
}
function applyFilter(message: Message, filter: Filter): boolean {
  switch (filter.type) {
    case "string":
      return filterByString(message, filter);
    case "number":
      return filterByNumber(message, filter);
    case "boolean":
      return filterByBoolean(message, filter);
    case "date":
      return filterByDate(message, filter);
    case "or":
      return filter.filters.some((subFilter) =>
        applyFilter(message, subFilter)
      );
    case "and":
      return filter.filters.every((subFilter) =>
        applyFilter(message, subFilter)
      );
    default:
      return false;
  }
}

export function filterMessages(messages: Message[], filter: Filter): Message[] {
  return messages.filter((message) => applyFilter(message, filter));
}
