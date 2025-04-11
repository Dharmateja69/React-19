import { useState } from "react";

const Withoutformhook = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.table({ name, email });
    setname("");
    setemail("");
  };
  return (
    <>
      <form onSubmit={handlesubmit}>
        <div>
          <label>
            name:
            <input
              type="text"
              value={name}
              placeholder="enter the name"
              onChange={(e) => setname(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="text"
              value={email}
              placeholder="enter the email"
              onChange={(e) => setemail(e.target.value)}
            />
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Withoutformhook;
