import React, { useState } from "react";

type Validator = (value: string) => string | undefined;
interface UseFormProps {
  initialValues: { [key: string]: string };
  validates: { [key: string]: Validator };
}
const UseForm = ({ initialValues, validates }: UseFormProps) => {
  const [values, setvalue] = useState(initialValues);
  const [error, seterror] = useState<{ [key: string]: string | undefined }>({});
  const [submitted, setsubmitted] = useState(false);
  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setvalue((prev) => ({ ...prev, [name]: value }));
    if (error[name]) {
      seterror((prev) => ({ ...prev, [name]: undefined }));
    }
  };
  const validateForm = (): boolean => {
    let isvalid = true;
    const newErrors: { [key: string]: string | undefined } = {};
    for (const field in validates) {
      const error = validates[field](values[field]);
      if (error) {
        isvalid = false;
        newErrors[field] = error;
      }
    }
    seterror(newErrors);
    return isvalid;
  };

  const handlesubmit = (callback: () => void) => (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setsubmitted(true);
      callback();
    }
  };
  return { values, error, handlechange, handlesubmit, submitted };
};

export default UseForm;
