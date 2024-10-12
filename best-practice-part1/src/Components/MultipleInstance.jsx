import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    zipCode: "",
  });

  // const handleChange = (e) => {
  //   setForm((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  // NOTE: both ways are fine
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        onChange={handleChange}
        placeholder="first name"
        name="firstName"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="last name"
        name="lastName"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="email"
        name="email"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="password"
        name="password"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="address"
        name="address"
      />
      <input
        type="text"
        onChange={handleChange}
        placeholder="zip code"
        name="zipCode"
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
