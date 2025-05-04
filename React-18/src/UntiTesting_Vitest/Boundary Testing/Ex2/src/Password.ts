export const validatePassword = (password: string) => {
  if (password.length < 8 || password.length > 16) {
    throw new Error("Password must be between 8 and 16 characters.");
  }
  return "Password is valid!";
};
