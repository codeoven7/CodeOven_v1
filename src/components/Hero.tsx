import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-7xl mb-6 text-black leading-tight"
          >
            Where Ideas Are <br />
            <span className="text-gray-600">Baked Into Code.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            CodeOven transforms your raw ideas into fully baked digital products — 
            hot, fresh, and scalable.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-full text-lg"
              >
                Let's Cook Something
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                onClick={() => scrollToSection('projects')}
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full text-lg"
              >
                See Our Work
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}