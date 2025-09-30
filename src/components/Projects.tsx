import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, ArrowUpRight } from "lucide-react";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "Restro Elegance",
      category: "Restaurant Website",
      description: "A sophisticated restaurant website featuring online reservations, menu showcase, and chef profiles with seamless user experience.",
      image: "https://images.unsplash.com/photo-1682778418768-16081e4470a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTkwMzAxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://restro-silk.vercel.app/",
      year: "2024"
    },
    {
      id: 2,
      title: "PhotoGraphy Pro",
      category: "Photography Portfolio",
      description: "A stunning photography portfolio showcasing work with dynamic galleries, client testimonials, and booking system.",
      image: "https://images.unsplash.com/photo-1594318075462-5b5494d47c8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHBvcnRmb2xpbyUyMHdlYnNpdGV8ZW58MXx8fHwxNzU5MTAxMjE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "Next.js", "Image Optimization"],
      liveUrl: "https://photogr.vercel.app/",
      year: "2024"
    },
    {
      id: 3,
      title: "Hotel Luxe",
      category: "Hotel Booking Website",
      description: "Comprehensive hotel booking platform with room reservations, amenity showcase, and guest management system.",
      image: "https://images.unsplash.com/photo-1663147737123-9cbd239fc3b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGJvb2tpbmclMjB3ZWJzaXRlJTIwbHV4dXJ5fGVufDF8fHx8MTc1OTEwMzk0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Next.js", "Booking System", "Hospitality"],
      liveUrl: "https://hospil.vercel.app/",
      year: "2024"
    },
    {
      id: 4,
      title: "NGO Impact Hub",
      category: "Non-Profit Website",
      description: "Inspiring NGO website highlighting social impact, donation systems, and volunteer engagement platform.",
      image: "https://images.unsplash.com/photo-1576381330792-d759250b35ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOR08lMjBub25wcm9maXQlMjB3ZWJzaXRlfGVufDF8fHx8MTc1OTEwMTIyNHww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "Payment Gateway", "CMS"],
      liveUrl: "https://ng-oweb-g2z5.vercel.app/",
      year: "2024"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-6 text-black">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest digital creations that blend innovation with exceptional user experience.
          </p>
        </motion.div>

        {/* Grid Layout for Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-50 rounded-3xl overflow-hidden hover:bg-gray-100 transition-all duration-500"
            >
              {/* Project Image */}
              <div className="aspect-[4/3] relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay with Visit Button */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-6 left-6 right-6">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Visit Live Site</span>
                    </motion.a>
                  </div>
                </div>

                {/* Year Badge */}
                <div className="absolute top-6 right-6">
                  <span className="bg-black/70 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="w-8 h-8 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors"
                  >
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </motion.div>
                </div>

                <h3 className="text-2xl mb-4 text-black group-hover:text-gray-800 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: tagIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
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
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}