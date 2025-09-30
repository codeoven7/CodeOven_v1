import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, MessageSquare, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import { submitToGoogleSheets } from "../utils/googleSheets";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent double submission
    if (loading) {
      return;
    }
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    // Set loading state first
    setLoading(true);
    
    // Use setTimeout to let the UI update before processing
    setTimeout(() => {
      // Submit to Google Sheets with timeout
      const submissionPromise = submitToGoogleSheets(formData);
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Request timeout')), 10000); // 10 second timeout
      });
      
      Promise.race([submissionPromise, timeoutPromise])
        .then((result) => {
          if (result.success) {
            toast.success("Message sent! We'll get back to you soon.", {
              description: "Thanks for reaching out to CodeOven!",
            });
            setFormData({ name: '', email: '', phone: '', message: '' });
          } else {
            toast.error("Failed to send message. Please try again.");
          }
        })
        .catch((error) => {
          console.error('Form submission error:', error);
          if (error.message === 'Request timeout') {
            toast.error("Request is taking too long. Your message might still be sent.", {
              description: "We'll contact you if we received it!"
            });
          } else {
            toast.error("Something went wrong. Please try again.");
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }, 0); // 0ms timeout just to let React update the UI
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "codeoven7@gmail.com",
      href: "mailto:codeoven7@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7906095839",
      href: "tel:+917906095839"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8650070322",
      href: "tel:+918650070322"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Noida, Uttar Pradesh",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: MessageSquare, href: "#", label: "Discord" }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 text-black">Got an idea? Let's bake it.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your vision into reality? Let's start the conversation and 
            create something extraordinary together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Form - Made Smaller */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1 bg-white p-6 rounded-3xl shadow-sm border border-gray-100"
          >
            <h3 className="text-2xl mb-4 text-black">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label className="block text-gray-700 mb-1">Name</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label className="block text-gray-700 mb-1">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                  className="w-full"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="block text-gray-700 mb-1">Phone</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  className="w-full"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label className="block text-gray-700 mb-1">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project idea..."
                  rows={3}
                  required
                  className="w-full resize-none"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-gray-800 py-3 rounded-2xl"
                >
                  <div className="flex items-center justify-center">
                    {loading && (
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    )}
                    <span>Send Message</span>
                  </div>
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-3xl mb-6 text-black">Get in touch</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you have a detailed project brief or just a spark of an idea, 
                we'd love to hear from you. Let's discuss how we can help bring your 
                digital vision to life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={`${info.label}-${index}`}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{info.label}</p>
                    <p className="text-black">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-xl mb-4 text-black">Follow us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}