const Form: React.FC = () => {
  const formAction = (formData: FormData) => {
    const userData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    console.log(userData);
  };

  return (
    <form action={formAction}>
      <label htmlFor="name">Name:</label>
      <input
        className="border-2 border-black rounded"
        type="text"
        id="name"
        name="name"
      />{" "}
      <br />
      <label htmlFor="email">Email:</label>
      <input
        className="border-2 border-black rounded"
        type="email"
        id="email"
        name="email"
      />{" "}
      <br />
      <label htmlFor="password">Password:</label>
      <input
        className="border-2 border-black rounded"
        type="password"
        id="password"
        name="password"
      />
      <br />
      <button type="submit" className="bg-black text-white px-4 py-2 mt-3">
        Submit
      </button>
    </form>
  );
};

export default Form;
