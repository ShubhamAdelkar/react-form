import "./SignupForm.css";
import React, { useState } from "react";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setEmailValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);
  const [isNameValid, setNameValid] = useState(true);
  const [ageValid, setAgeValid] = useState(true);
  const [ageErrorMessage, setAgeErrorMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [countryValid, setCountryValid] = useState(true);
  const [countryErrorMessage, setCountryErrorMessage] = useState("");

  // name check
  const validateName = () => {
    const isValid = /^[a-zA-Z ]{3,}$/.test(name);
    setNameValid(isValid);
  };

  // age check
  const validateAge = () => {
    const isValidAge = age === "" || (age >= 18 && age <= 80);
    setAgeValid(isValidAge);

    if (!isValidAge && age !== "") {
      setAgeErrorMessage("Age must be between 18 and 80");
    } else {
      setAgeErrorMessage("");
    }
  };

  // country check
  const validateCountry = () => {
    const isValid = /^[a-zA-Z ]{3,}$/.test(country);
    setCountryValid(isValid);

    if (!isValid) {
      setCountryErrorMessage("Country can only contain letters. No numbers.");
    } else {
      setCountryErrorMessage("");
    }
  };

  // email check
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(email));
  };

  // password check
  const validatePassword = () => {
    setPasswordValid(password.length >= 8);
  };

  // handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !name || !country || !age || !password) {
      alert("Please fill in all fields.");
      return;
    }

    setEmail("");
    setName("");
    setCountry("");
    setAge("");
    setPassword("");
    setEmailValid(true);
    setNameValid(true);
    setPasswordValid(true);

    // Show success message
    setShowSuccessMessage(true);

    // Reset success message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);

    console.log("Form submitted:", { email, name, country, age, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => validateEmail()}
        />
        {!isEmailValid && <p className="error-message">Invalid email format</p>}
      </div>

      <div>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          onBlur={() => validateName()}
        />
        {!isNameValid && (
          <p className="error-message">
            Name can only contain letters. No numbers.
          </p>
        )}
      </div>

      <div>
        <input
          type="text"
          id="country"
          value={country}
          placeholder="Country"
          onChange={(e) => setCountry(e.target.value)}
          onBlur={() => validateCountry()}
        />
        {!countryValid && (
          <p className="error-message">{countryErrorMessage}</p>
        )}
      </div>

      <div>
        <input
          type="number"
          id="age"
          value={age}
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
          onBlur={() => validateAge()}
        />
        {!ageValid && <p className="error-message">{ageErrorMessage}</p>}
      </div>

      <div>
        <input
          type="password"
          id="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => validatePassword()}
        />
        {!isPasswordValid && (
          <p className="error-message">
            Password must be at least 8 characters long
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={
          !isEmailValid || !isPasswordValid || !name || !country || !age
        }
      >
        Submit
      </button>

      <p className="credits">By Shubham Adelkar</p>

      {showSuccessMessage && (
        <div>
          <p style={{ color: "green" }}>
            Form submitted successfully in console!
          </p>
        </div>
      )}
    </form>
  );
};

export default SignupForm;
