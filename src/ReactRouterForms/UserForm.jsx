import React, { useState } from "react";
import "./UserForm.scss"; // 👈 Import SCSS

function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    agree: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.gender
    ) {
      alert("⚠️ Please fill all fields");
      return;
    }

    if (!formData.agree) {
      alert("⚠️ You must agree to the terms");
      return;
    }

    setSubmittedData(formData);

    // Reset
    setFormData({
      name: "",
      email: "",
      password: "",
      gender: "",
      agree: false,
    });
  };

  return (
    <div className="form-container">
      <h2>User Registration Form</h2>

      <form onSubmit={handleSubmit} className="form">
        <input
          className="input"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <input
          className="input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <input
          className="input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
        />

        <select
          className="input"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <label className="checkbox">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          I agree to the terms and conditions
        </label>

        <button type="submit" className="button">
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="result">
          <h3>Form Submitted Successfully 🎉</h3>
          <p>
            <b>Name:</b> {submittedData.name}
          </p>
          <p>
            <b>Email:</b> {submittedData.email}
          </p>
          <p>
            <b>Gender:</b> {submittedData.gender}
          </p>
        </div>
      )}
    </div>
  );
}

export default UserForm;
