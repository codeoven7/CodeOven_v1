import { motion } from "motion/react";
import { Lightbulb, Zap, Shield, Users } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology"
    },
    {
      icon: Zap,
      title: "Agility",
      description: "Fast prototyping and iterative development"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Rock-solid, scalable solutions you can trust"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working together as partners, not just vendors"
    }
  ];

  const highlights = [
    "Hackathon-style rapid prototyping",
    "Agile development methodology",
    "Scalable & future-proof code",
    "Human-first design"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 text-black">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At CodeOven, we believe building software is like crafting recipes — 
            it needs the right ingredients, timing, and technique.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl text-black">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              We started CodeOven with a simple belief: great software should be crafted with 
              the same passion and precision as a master chef's signature dish. Every line of 
              code is an ingredient, every feature a carefully balanced flavor, and every 
              product a feast for the senses.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From startups to enterprise, we've helped organizations transform their wildest 
              ideas into digital realities that users love and businesses thrive on.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-2xl text-center"
              >
                <value.icon className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                <h4 className="text-lg mb-2 text-black">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black text-white p-12 rounded-3xl"
        >
          <h3 className="text-3xl text-center mb-8">What Makes Us Different</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-2 h-2 bg-white rounded-full mx-auto mb-3"></div>
                <p className="text-gray-300">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}