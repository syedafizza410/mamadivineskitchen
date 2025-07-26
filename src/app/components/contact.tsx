"use client";
import React, { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("New Contact Message");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage:\n${message}`);
    const mailtoLink = `mailto:mamadivineskitchen@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-900 mb-4">Contact Us</h2>
        <p className="text-lg text-red-900 mb-8">
          We&apos;d love to hear from you! Please fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <div>
          <label className="block text-sm font-medium text-red-900">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="text-gray-900 mt-1 block w-full border border-red-300 rounded-md shadow-sm p-2 focus:ring-red-900 focus:border-red-900"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-red-900">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-gray-900 mt-1 block w-full border border-red-300 rounded-md shadow-sm p-2 focus:ring-red-900 focus:border-red-900"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-red-900">Message</label>
          <textarea
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="text-gray-900 mt-1 block w-full border border-red-300 rounded-md shadow-sm p-2 focus:ring-red-900 focus:border-red-900"
            placeholder="Your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-red-900 text-white py-2 px-4 rounded hover:bg-red-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
