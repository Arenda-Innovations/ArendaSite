import { useState } from 'react';
import { submitContactToAppsScript } from './FormSubmitFunction';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const result = await submitContactToAppsScript({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      });

      if (!result.ok) {
        throw new Error(`HTTP ${result.status}`);
      }

      setSuccessMessage('Thank you! Form is submitted');
      setFormData({ name: '', email: '', subject: '', message: '' });
      window.location.reload();
    } catch (err) {
      console.error('Error!', err);
      setErrorMessage('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="flex h-screen px-8 py-12 gap-8 bg-black">
      {/* Left - Form */}
      <div className="w-[48%] bg-white p-10 flex flex-col justify-center rounded-3xl shadow-xl">
        <h2 className="text-3xl font-semibold text-zinc-800 mb-6">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-black">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Wolfe Glick"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-2 rounded-xl bg-zinc-100 border border-zinc-300 text-black focus:outline-none focus:ring-2 focus:ring-zinc-500 disabled:opacity-50"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Wolfe@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-2 rounded-xl bg-zinc-100 border border-zinc-300 text-black focus:outline-none focus:ring-2 focus:ring-zinc-500 disabled:opacity-50"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-black">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Inquiry on Pokemon"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-2 rounded-xl bg-zinc-100 border border-zinc-300 text-black focus:outline-none focus:ring-2 focus:ring-zinc-500 disabled:opacity-50"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-black">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full px-4 py-2 rounded-xl bg-zinc-100 border border-zinc-300 text-black focus:outline-none focus:ring-2 focus:ring-zinc-500 disabled:opacity-50"
            />
          </div>

          <div className="flex items-center justify-end gap-4 mt-4">
            {successMessage && (
              <p className="text-green-600 font-medium text-sm">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="text-red-600 font-medium text-sm">{errorMessage}</p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2 rounded-xl bg-black text-white hover:bg-zinc-700 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>

      {/* Right - Info */}
      <div className="w-[48%] bg-gray-200 p-10 flex flex-col justify-center rounded-3xl shadow-xl">
        <h3 className="text-2xl font-semibold text-zinc-800 mb-4">Why Contact Us?</h3>
        <p className="text-zinc-700 text-sm leading-relaxed">
          We value your input. Whether you need support, have a question, or just want to share your thoughts,   
          we're here to listen. Our team aims to respond within 24 hours. Reach out to start the conversation.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;





