export function isString(value) {
  return typeof value === "string";
}

export function isNumber(value) {
  return typeof value === "number" && !Number.isNaN(value);
}

export function isInteger(value) {
  return Number.isInteger(value);
}

export function isFiniteNumber(value) {
  return Number.isFinite(value);
}

export function isPositiveNumber(value) {
  return isNumber(value) && value > 0;
}

export function isPositiveInteger(value) {
  return isInteger(value) && value > 0;
}

export function isNonNegativeNumber(value) {
  return isNumber(value) && value >= 0;
}

export function isNonNegativeInteger(value) {
  return isInteger(value) && value >= 0;
}

export function isBoolean(value) {
  return typeof value === "boolean";
}

export function isUndefined(value) {
  return value === undefined;
}

export function isNull(value) {
  return value === null;
}

export function isNullOrUndefined(value) {
  return value === null || value === undefined;
}

export function isArray(value) {
  return Array.isArray(value);
}

export function isObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

export function isFunction(value) {
  return typeof value === "function";
}

export function isSymbol(value) {
  return typeof value === "symbol";
}

export function isBigInt(value) {
  return typeof value === "bigint";
}
