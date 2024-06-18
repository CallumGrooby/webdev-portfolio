import React from "react";

export const ContactUs = () => {
  return (
    <section className="bg-purple-300">
      <section className="container mx-auto flex flex-col md:flex-row gap-4 mt-1 p-8">
        <h1 className="basis-1/2 text-2xl">
          Lets Discuss on something cool together
        </h1>
        <Form></Form>
      </section>
    </section>
  );
};

const Form = () => {
  const APIKey = import.meta.env.VITE_GET_FORM_API_KEY;

  return (
    <form
      action={`https://getform.io/f/${APIKey}`}
      method="POST"
      className="basis-1/2 flex flex-col gap-1"
    >
      <span>Full Name</span>
      <input
        type="text"
        name="name"
        placeholder="Enter your full name"
        className="border-2 border-purple-700 rounded-lg p-2"
        required
      />
      <span>Email Address</span>
      <input
        type="email"
        name="email"
        placeholder="Enter your email address"
        className="border-2 border-purple-700 rounded-lg p-2"
        required
      />

      <span>Message</span>
      <textarea
        name="message"
        placeholder="Enter your message"
        rows="4"
        className="border-2 border-purple-700 rounded-lg p-2"
        required
      />
      <button type="submit" className="bg-purple-900 text-white p-4 text-lg">
        Send
      </button>
    </form>
  );
};
