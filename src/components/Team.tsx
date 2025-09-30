import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Team() {
  const team = [
    {
      name: "Rudra Pratap Singh",
      role: "UI/UX Designer & Frontend Developer",
      techStack: ["Figma", "Adobe Illustrator", "Photoshop", "Canva", "Next.js", "React.js", "Tailwind CSS", "HTML", "CSS"],
      avatar: "https://images.unsplash.com/photo-1585972949687-48eff8b879a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb29kbGUlMjBhdmF0YXIlMjBwcm9maWxlfGVufDF8fHx8MTc1OTEwMzk1MHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Akshit Singh",
      role: "Backend Developer & ML Enthusiast",
      techStack: ["Next.js", "React.js", "Tailwind CSS", "HTML", "CSS", "Node.js", "Django", "Express.js", "PostgreSQL", "MongoDB", "Python", "scikit-learn", "TensorFlow"],
      avatar: "https://images.unsplash.com/photo-1715528233539-5fe70a4e0d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRvb2RsZSUyMGlsbHVzdHJhdGlvbnxlbnwxfHx8fDE3NTkxMDM5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 text-black">The Chefs Behind the Code 🍳</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At CodeOven, every project is baked to perfection by a team of passionate designers, 
            developers, and innovators.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-3xl overflow-hidden p-8 text-center"
            >
              {/* Profile Avatar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative mx-auto mb-6"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-4 border-white shadow-lg">
                  <ImageWithFallback
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-black rounded-full flex items-center justify-center border-4 border-white">
                  <span className="text-white text-sm">👨‍💻</span>
                </div>
              </motion.div>
              
              {/* Profile Info */}
              <div className="mb-6">
                <h3 className="text-2xl mb-2 text-black">{member.name}</h3>
                <p className="text-gray-600 leading-relaxed">{member.role}</p>
                
                <div className="flex gap-3 mt-4 justify-center">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Github className="w-5 h-5 text-gray-600" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Linkedin className="w-5 h-5 text-gray-600" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Twitter className="w-5 h-5 text-gray-600" />
                  </motion.a>
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-lg mb-4 text-black">Tech Stack</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.techStack.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-white text-gray-700 text-xs rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
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
          <div className="bg-black text-white p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl mb-4">Want to Join Our Kitchen?</h3>
            <p className="text-gray-300 mb-6">
              We're always looking for talented chefs to join our team and help us 
              bake amazing digital products.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}