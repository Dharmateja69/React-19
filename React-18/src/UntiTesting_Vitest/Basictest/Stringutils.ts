type strprops = {
  str: string;
};

export const toUpperCase = ({ str }: strprops) => str.toUpperCase();
export const toLowerCase = ({ str }: strprops) => str.toLowerCase();

export const capitalize = ({ str }: strprops) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const reverse = ({ str }: strprops) => str.split("").reverse().join("");
