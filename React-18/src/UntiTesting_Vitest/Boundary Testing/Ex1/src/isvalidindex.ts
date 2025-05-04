export const isValidIndex = (array: number[], index: number) => {
  if (index < 0 || index >= array.length) {
    throw new Error("Index out of bounds.");
  }
  return "Index is valid!";
};
