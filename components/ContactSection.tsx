import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-b from-gray-900/80 to-black/90 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Scale?</h2>
            <p className="text-gray-400">Transform your digital presence with Horizon Corp.</p>
          </div>

          {!submitted ? (
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Name</label>
                    <input 
                    required
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="John Doe"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1">Email</label>
                    <input 
                    required
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="john@example.com"
                    />
                </div>
                </div>

                <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Service Interest</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer">
                    <option className="bg-gray-900">Bulk YouTube Automation</option>
                    <option className="bg-gray-900">3D AI Animation</option>
                    <option className="bg-gray-900">Web Development</option>
                    <option className="bg-gray-900">Graphic Design</option>
                    <option className="bg-gray-900">Video Editing</option>
                </select>
                </div>

                <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Message</label>
                <textarea 
                    rows={4}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    placeholder="Tell us about your project..."
                ></textarea>
                </div>

                <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-blue-600/25 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                <Send className="w-5 h-5" />
                Send Message
                </button>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Received!</h3>
                <p className="text-gray-400 text-center max-w-md">
                    Thank you for contacting Horizon Corp. Our team will review your request and get back to you within 24 hours.
                </p>
            </div>
          )}
          
          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>contact@horizoncorp.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              <span>Live Chat Available 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
