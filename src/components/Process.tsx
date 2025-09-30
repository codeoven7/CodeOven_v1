import { motion } from "motion/react";
import { 
  Search, 
  PenTool, 
  Palette, 
  Code, 
  Rocket, 
  Headphones 
} from "lucide-react";

export function Process() {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      description: "Understanding your vision, goals, and requirements through collaborative workshops and research."
    },
    {
      icon: PenTool,
      title: "Planning",
      description: "Selecting the right ingredients - tech stack, architecture, and development approach."
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating UI/UX mockups, wireframes, and interactive prototypes that delight users."
    },
    {
      icon: Code,
      title: "Development",
      description: "Baking the product in agile sprints with continuous feedback and iteration."
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Delivering hot & fresh to the market with comprehensive testing and deployment."
    },
    {
      icon: Headphones,
      title: "Support",
      description: "Ongoing maintenance, scaling, and feature enhancements as your business grows."
    }
  ];

  return (
    <section id="process" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 text-black">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Like master chefs, we follow a proven recipe for digital success. 
            Every project is carefully crafted through our six-step process.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex items-center gap-8 mb-16 ${
                index % 2 === 1 ? 'flex-row-reverse' : ''
              }`}
            >
              {/* Step Content */}
              <div className="flex-1">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Step {index + 1}</span>
                      <h3 className="text-2xl text-black">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              </div>

              {/* Timeline Connection */}
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="w-4 h-4 bg-black rounded-full"
                />
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: 80 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className="w-0.5 bg-gray-300 mt-4"
                  />
                )}
              </div>

              {/* Step Number */}
              <div className="flex-1 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                  className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center"
                >
                  <span className="text-2xl text-gray-400">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-black text-white p-12 rounded-3xl max-w-3xl mx-auto">
            <h3 className="text-3xl mb-6">Ready to Start Cooking?</h3>
            <p className="text-gray-300 mb-8 text-lg">
              Every great product starts with a conversation. Let's discuss your project 
              and create something amazing together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-colors"
            >
              Let's Talk
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}