"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_zxp2vkj",    
        "template_xhinv4k",   
        form.current,
        "Dw-i7oLogjT_-38Kl"     
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          form.current?.reset();
        },
        () => {
          setSuccess(false);
          setError(true);
        }
      );
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-900 mb-4">Contact Us</h2>
        <p className="text-lg text-red-900 mb-8">
          We&apos;d love to hear from you! Please fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-6">
        <div>
          <label className="block text-sm font-medium text-red-900">Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="text-gray-900 mt-1 block w-full border border-red-300 rounded-md shadow-sm p-2 focus:ring-red-900 focus:border-red-900"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-red-900">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="text-gray-900 mt-1 block w-full border border-red-300 rounded-md shadow-sm p-2 focus:ring-red-900 focus:border-red-900"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-red-900">Message</label>
          <textarea
            rows={5}
            name="message"
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

        {success && (
          <p className="text-green-600 text-center pt-4 font-semibold">
            ✅ Message sent successfully!
          </p>
        )}
        {error && (
          <p className="text-red-600 text-center pt-4 font-semibold">
            ❌ Failed to send message. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactPage;
