import { isString } from "./primitive-types.validators.js";

export function isEmptyString(value) {
  return isString(value) && value.length === 0;
}

export function isNonEmptyString(value) {
  return isString(value) && value.length > 0;
}

export function isBlankString(value) {
  return isString(value) && value.trim().length === 0;
}

export function isNonBlankString(value) {
  return isString(value) && value.trim().length > 0;
}
