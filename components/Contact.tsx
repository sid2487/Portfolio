"use client";

export default function Contact() {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold text-white border-b border-gray-700 pb-2">
        Contact Me
      </h2>

      <form
        action="https://formsubmit.co/your-email@example.com"
        method="POST"
        className="flex flex-col gap-4 bg-neutral-900 p-6 rounded-md shadow-md"
      >
        {/* Hidden field to turn off captcha (optional) */}
        <input type="hidden" name="_captcha" value="false" />

        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="bg-black text-white border border-gray-700 p-2 rounded-md"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="bg-black text-white border border-gray-700 p-2 rounded-md"
        />

        <textarea
          name="message"
          required
          placeholder="Your Message"
          rows={5}
          className="bg-black text-white border border-gray-700 p-2 rounded-md"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
