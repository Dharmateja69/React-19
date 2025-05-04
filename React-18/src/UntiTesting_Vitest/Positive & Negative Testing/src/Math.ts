export const add = (a: any, b: any) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both inputs must be numbers");
  }
  return a + b;
};
