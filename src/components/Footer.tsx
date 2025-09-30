import { motion } from "motion/react";
import { Github, Linkedin, Twitter, MessageSquare, Heart } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    "Web Development",
    "Mobile Apps", 
    "Automation",
    "UI/UX Design",
    "Custom Software"
  ];

  const company = [
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Process", id: "process" },
    { label: "Contact", id: "contact" }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: MessageSquare, href: "#", label: "Discord" }
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <motion.h3 
              whileHover={{ scale: 1.05 }}
              className="text-3xl mb-4 cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              CodeOven
            </motion.h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Baking Code, Serving Innovation.
            </p>
            <p className="text-gray-400 text-sm">
              Transforming ideas into digital experiences that matter.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="text-gray-400 hover:text-white transition-all duration-200 cursor-pointer"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl mb-6">Connect</h4>
            <div className="space-y-4 mb-6">
              <p className="text-gray-400">codeoven7@gmail.com</p>
              <p className="text-gray-400">+91 7906095839</p>
              <p className="text-gray-400">+91 8650070322</p>
              <p className="text-gray-400">Noida, Uttar Pradesh</p>
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mb-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
        >
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <span>© 2025 CodeOven. All rights reserved.</span>
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>by CodeOven</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}