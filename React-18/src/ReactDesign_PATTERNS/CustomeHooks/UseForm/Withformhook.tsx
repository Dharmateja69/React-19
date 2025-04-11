import UseForm from "./UseForm";

const validateEmail = (value: string): string | undefined => {
  if (!value) return "Email is required";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(value)) return "Email is invalid";
};

const validateName = (value: string): string | undefined => {
  if (!value) return "Name is required";
  if (value.length < 2) return "Name must be at least 2 characters long";
};

const Withformhook = () => {
  const { values, error, handlechange, handlesubmit, submitted } = UseForm({
    initialValues: { name: "", email: "" },
    validates: { name: validateName, email: validateEmail },
  });

  const onSubmit = () => {
    console.log("Submitted:", values);
  };

  return (
    <div>
      {submitted ? (
        <h2>Thank you for submitting your information!</h2>
      ) : (
        <form onSubmit={handlesubmit(onSubmit)}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                placeholder="Enter the name..."
                value={values.name}
                onChange={handlechange}
              />
            </label>
            {error.name && <p style={{ color: "red" }}>{error.name}</p>}
          </div>

          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                placeholder="Enter the email..."
                value={values.email}
                onChange={handlechange}
              />
            </label>
            {error.email && <p style={{ color: "red" }}>{error.email}</p>}
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Withformhook;
