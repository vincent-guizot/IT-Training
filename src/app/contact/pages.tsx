export default function Contact() {
  return (
    <section>
      <h1 className="text-3xl font-bold text-brand-orange">Contact Us</h1>
      <form className="mt-6 max-w-md space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border p-3 rounded"
          rows={4}
        />
        <button className="w-full py-3 bg-brand-orange text-white rounded hover:bg-orange-600">
          Send Message
        </button>
      </form>
    </section>
  );
}
