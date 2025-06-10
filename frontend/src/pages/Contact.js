import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-dark-900 pt-16">
      {/* Header Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            I'm always interested in new opportunities, collaborations, and connecting 
            with fellow developers. Whether you have a project in mind, want to discuss 
            technology, or just want to say hello, I'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-4 bg-dark-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-100">Send Me a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors duration-300"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell me about your project, idea, or just say hello..."
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-gray-100 placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors duration-300 resize-vertical"
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
                      <p>✓ Message sent successfully! I'll get back to you soon.</p>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
                      <p>✗ Something went wrong. Please try again or contact me directly.</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-100">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-dark-800 rounded-lg border border-dark-700">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white">
                      <FaEnvelope size={16} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-100 mb-1">Email</h3>
                      <p className="text-gray-400 mb-2">ammiel@example.com</p>
                      <a href="mailto:ammiel@example.com" className="text-primary-400 hover:text-primary-300 transition-colors">
                        Send an email
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-dark-800 rounded-lg border border-dark-700">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white">
                      <FaPhone size={16} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-100 mb-1">Phone</h3>
                      <p className="text-gray-400 mb-2">+1 (555) 123-4567</p>
                      <a href="tel:+15551234567" className="text-primary-400 hover:text-primary-300 transition-colors">
                        Give me a call
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-dark-800 rounded-lg border border-dark-700">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white">
                      <FaMapMarkerAlt size={16} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-100 mb-1">Location</h3>
                      <p className="text-gray-400 mb-1">City, State</p>
                      <p className="text-gray-500 text-sm">Available for remote work</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-100">Connect With Me</h3>
                <div className="space-y-3">
                  <a 
                    href="https://github.com/ammiel" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-dark-800 rounded-lg border border-dark-700 hover:border-primary-500 hover:bg-dark-700 transition-all duration-300 group"
                  >
                    <FaGithub className="text-primary-400 text-xl" />
                    <span className="text-gray-300 group-hover:text-primary-400 transition-colors">GitHub</span>
                  </a>
                  <a 
                    href="https://linkedin.com/in/ammiel" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-dark-800 rounded-lg border border-dark-700 hover:border-primary-500 hover:bg-dark-700 transition-all duration-300 group"
                  >
                    <FaLinkedin className="text-primary-400 text-xl" />
                    <span className="text-gray-300 group-hover:text-primary-400 transition-colors">LinkedIn</span>
                  </a>
                  <a 
                    href="https://twitter.com/ammiel" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-dark-800 rounded-lg border border-dark-700 hover:border-primary-500 hover:bg-dark-700 transition-all duration-300 group"
                  >
                    <FaTwitter className="text-primary-400 text-xl" />
                    <span className="text-gray-300 group-hover:text-primary-400 transition-colors">Twitter</span>
                  </a>
                </div>
              </div>

              {/* Availability Status */}
              <div className="p-6 bg-dark-800 rounded-lg border border-dark-700">
                <h3 className="text-xl font-bold mb-3 text-gray-100">Availability</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  I'm currently open to internship opportunities, freelance projects, 
                  and collaborative work. I typically respond to messages within 24 hours.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">Available for new opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
            Whether you're looking for a developer for your next project, want to 
            collaborate on an open-source initiative, or just want to connect with 
            a fellow tech enthusiast, I'm always excited to meet new people and 
            explore new possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:ammiel@example.com" 
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <FaEnvelope /> Email Me
            </a>
            <a 
              href="https://linkedin.com/in/ammiel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <FaLinkedin /> Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
