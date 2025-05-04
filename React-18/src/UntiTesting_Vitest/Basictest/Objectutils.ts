// function to get a property by path e.g., user.name
export const getproperty = (obj: Record<string, any>, path: string): any => {
  const keys = path.split(".");
  let result: any = obj;
  for (let key of keys) {
    if (result && key in result) {
      result = result[key];
    } else {
      return undefined;
    }
  }
  return result;
};

// function to merge two objects
export const merge = <T extends object, U extends object>(
  obj1: T,
  obj2: U
): T & U => {
  return { ...obj1, ...obj2 };
};

// function to deep clone an object
export const deepclone = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

// function to check equality of objects
export const equal = (obj1: any, obj2: any): boolean => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

// function to check if the object is empty
export const isEmpty = (obj: object): boolean => {
  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
};
