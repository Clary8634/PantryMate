import React, { useState } from "react";
import API_BASE from "../apiConfig";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent successfully.");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Submit failed. Missing fields.");
      }
    } catch {
      setStatus("Error submitting message.");
    }
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "0 auto",
        background: "#ffffff",
        padding: 20,
        borderRadius: 16,
        boxShadow: "0 2px 12px rgba(15,23,42,0.06)",
      }}
    >
      <h2>Contact</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} required />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>

      {status && <p style={{ marginTop: 12 }}>{status}</p>}
    </div>
  );
}
