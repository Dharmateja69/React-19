export const sum = (arr: number[]) =>
  arr.reduce((acc: number, ele: number) => acc + ele, 0);
export const max = (arr: number[]) => Math.max(...arr);
export const min = (arr: number[]) => Math.min(...arr);
export const filtereven = (arr: number[]) => arr.filter((ele) => ele % 2 == 0);
export const filterodd = (arr: number[]) => arr.filter((ele) => ele % 2 != 0);
