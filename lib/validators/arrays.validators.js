import { isArray, isInteger } from "./primitive-types.validators.js";

export function isValidIndex(index, size) {
  return isInteger(index) && index >= 0 && index < size;
}

export function isValidInsertionIndex(index, size) {
  return isInteger(index) && index >= 0 && index <= size;
}

export function isEmptyArray(value) {
  return isArray(value) && value.length === 0;
}

export function isNonEmptyArray(value) {
  return isArray(value) && value.length > 0;
}
