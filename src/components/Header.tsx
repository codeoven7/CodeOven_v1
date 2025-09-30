import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer"
          onClick={() => scrollToSection('hero')}
        >
          <h1 className="text-2xl font-bold text-black">CodeOven</h1>
        </motion.div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Services', 'Projects', 'Process', 'Contact'].map((item) => (
            <motion.button
              key={item}
              whileHover={{ y: -2 }}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-gray-700 hover:text-black transition-colors duration-200"
            >
              {item}
            </motion.button>
          ))}
        </nav>
        
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-full"
          >
            Start Baking Ideas
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
}