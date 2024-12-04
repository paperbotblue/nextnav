import { useState } from "react";

function EmailInput() {
  const [email, setEmail] = useState("");
  const [isTouched, setIsTouched] = useState(false); // Track user interaction
  const [isValid, setIsValid] = useState(true); // Track validity

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Validate email with regex pattern
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    setIsValid(emailRegex.test(value));
  };

  const handleBlur = () => {
    setIsTouched(true); // Set touched state to true on blur
  };

  return (
    <input
      type="email"
      name="email"
      placeholder="Enter email"
      value={email}
      onChange={handleEmailChange}
      onBlur={handleBlur} // Set touched on blur
      pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
      title="Please enter a valid email address."
      className={`border-b-2 py-2 px-4 w-full ${
        isTouched && !isValid ? "border-red-500" : "border-gray-300"
      } focus:border-sky-600`}
      required
    />
  );
}

export default EmailInput;
