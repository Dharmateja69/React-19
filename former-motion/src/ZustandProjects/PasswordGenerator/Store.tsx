import { create } from "zustand";

interface PasswordGeneratorStore {
  includeUppercase: boolean;
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  length: number;
  generatedPassword: string;

  setIncludeUppercase: (value: boolean) => void;
  setIncludeLowercase: (value: boolean) => void;
  setIncludeNumbers: (value: boolean) => void;
  setIncludeSymbols: (value: boolean) => void;
  setLength: (value: number) => void;

  generatePassword: () => void;
}

export const usePasswordGeneratorStore = create<PasswordGeneratorStore>()(
  (set, get) => ({
    includeUppercase: false,
    includeLowercase: false,
    includeNumbers: false,
    includeSymbols: false,
    length: 8,
    generatedPassword: "",

    setIncludeUppercase: (value) => set({ includeUppercase: value }),
    setIncludeLowercase: (value) => set({ includeLowercase: value }),
    setIncludeNumbers: (value) => set({ includeNumbers: value }),
    setIncludeSymbols: (value) => set({ includeSymbols: value }),
    setLength: (value) => set({ length: value }),

    generatePassword: () => {
      const {
        includeUppercase,
        includeLowercase,
        includeNumbers,
        includeSymbols,
        length,
      } = get();

      const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowerChars = "abcdefghijklmnopqrstuvwxyz";
      const numberChars = "0123456789";
      const symbolChars = "!@#$%^&*()_+[]{}|;:',.<>?";

      let charSet = "";
      if (includeUppercase) charSet += upperChars;
      if (includeLowercase) charSet += lowerChars;
      if (includeNumbers) charSet += numberChars;
      if (includeSymbols) charSet += symbolChars;

      if (charSet.length === 0) {
        set({
          generatedPassword: "Please select at least one character type!",
        });
        return;
      }

      let password = "";
      for (let i = 0; i < length; i++) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }

      set({ generatedPassword: password });
    },
  })
);
