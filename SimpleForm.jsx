import React, { useState } from "react";

export function Form() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const formHandleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={formHandleSubmit}>
        Name
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
        <br />
        Email
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleInputChange}
        />
        <br />
        Password
        <input
          type="text"
          name="password"
          value={user.password}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
