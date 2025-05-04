type sumprops = {
  a: number;
  b: number;
};

export function sum({ a, b }: sumprops): number {
  return a + b;
}
