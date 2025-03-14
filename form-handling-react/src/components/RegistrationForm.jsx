import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Form submitted:", { username, email, password });
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
