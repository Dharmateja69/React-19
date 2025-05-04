type numbers = {
  a: number;
  b: number;
};
export const add = ({ a, b }: numbers) => {
  return a + b;
};
export const sub = ({ a, b }: numbers) => {
  return a - b;
};
export const mul = ({ a, b }: numbers) => {
  return a * b;
};
export const div = ({ a, b }: numbers) => {
  if (b == 0) throw new Error("Division by zero");
  return a / b;
};
