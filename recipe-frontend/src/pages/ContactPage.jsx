import React, { useState } from 'react';

// An array to hold the reasons. This makes it easy to add more later.
const contactReasons = [
  { emoji: '💡', title: 'Recipe Suggestion' },
  { emoji: '🐞', title: 'I Found a Bug' },
  { emoji: '🤝', title: 'Partnership Inquiry' },
  { emoji: '👋', title: 'Just Saying Hi!' },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // New state to track the currently selected reason card.
  const [selectedReason, setSelectedReason] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    // If user types in subject manually, deselect the reason card.
    if (name === 'subject') {
      setSelectedReason('');
    }
  };
  
  // This function handles clicking on one of the reason cards.
  const handleReasonClick = (reasonTitle) => {
    setSelectedReason(reasonTitle);
    // Automatically update the form's subject line.
    setFormData(prevState => ({ ...prevState, subject: reasonTitle }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will send a response soon!');
    console.log('Form data submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSelectedReason(''); // Reset selected reason as well
  };

  return (
    <div className="bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-4xl font-bold text-pink-600">Get in Touch</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or a suggestion? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* ## LEFT COLUMN: NEW INTERACTIVE SECTION */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-pink-600 mb-3">What can we help with?</h3>
              <p className="text-gray-700">Choose a topic below to get started. This will help us direct your message to the right place.</p>
            </div>
            {/* Grid for the reason cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactReasons.map((reason) => (
                <button
                  key={reason.title}
                  type="button" // Important to prevent form submission
                  onClick={() => handleReasonClick(reason.title)}
                  className={`p-4 rounded-lg border-2 text-left transition-all duration-300 transform hover:-translate-y-1
                    ${selectedReason === reason.title
                      ? 'bg-pink-100 border-pink-400 ring-2 ring-pink-300' // Selected state
                      : 'bg-white border-gray-200 hover:border-pink-300' // Default state
                    }`}
                >
                  <span className="text-2xl">{reason.emoji}</span>
                  <p className="font-semibold text-gray-800 mt-2">{reason.title}</p>
                </button>
              ))}
            </div>
            <div className="pt-4">
              <h3 className="text-2xl font-semibold text-pink-600 mb-2">Contact Details</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>📍 Location:</strong> Kanpur, Uttar Pradesh, India</p>
                <p><strong>✉️ Email:</strong> kaushikitripathi07@gmail.com</p>
              </div>
            </div>
          </div>

          {/* ## RIGHT COLUMN: CONTACT FORM */}
          <div className="bg-pink-50 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-800">Full Name</label>
                <input
                  type="text" name="name" id="name" required value={formData.name} onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-800">Email Address</label>
                <input
                  type="email" name="email" id="email" required value={formData.email} onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-800">Subject</label>
                <input
                  type="text" name="subject" id="subject" required value={formData.subject} onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                  placeholder="Click a topic on the left or type here"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-800">Message</label>
                <textarea
                  name="message" id="message" rows="5" required value={formData.message} onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
                  placeholder="I would love to see a feature for..."
                ></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-semibold text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-300 transform hover:scale-105">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;