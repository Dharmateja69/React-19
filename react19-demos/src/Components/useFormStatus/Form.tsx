import FormButton from "./FormButton";

const Form: React.FC = () => {
  const myAction = async (formData: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const newPost = {
      title: formData.get("name") as string,
      email: formData.get("email") as string,
    };
    console.log(newPost);
  };

  return (
    <form action={myAction}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          className="border-2"
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          className="border-2"
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <FormButton />
    </form>
  );
};

export default Form;
