import { motion } from "motion/react";
import { 
  Globe, 
  Smartphone, 
  Brain, 
  Cog, 
  Code, 
  Rocket, 
  Target,
  Palette
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web & App Development",
      description: "Robust, scalable, and responsive solutions that work across all devices and platforms."
    },
    {
      icon: Cog,
      title: "Automation & Agents",
      description: "n8n workflows, chatbots, RPA, and intelligent process automation."
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored solutions built specifically for your business needs and requirements."
    },
    {
      icon: Palette,
      title: "UI/UX & Product Design",
      description: "Intuitive, user-focused experiences that delight and convert."
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that users love to use."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 text-black">Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, we offer comprehensive solutions to bring your digital vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6"
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-xl mb-4 text-black">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl mb-4 text-black">Not Sure What You Need?</h3>
            <p className="text-gray-600 mb-6">
              Let's discuss your project and find the perfect recipe for success.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              Start a Conversation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}