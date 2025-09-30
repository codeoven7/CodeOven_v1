import { motion } from "motion/react";
import { useState, useEffect } from "react";

interface LogoRevealProps {
  onComplete: () => void;
}

export function LogoReveal({ onComplete }: LogoRevealProps) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setTimeout(onComplete, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1.5, 
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100
          }}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 0 0 rgba(255, 255, 255, 0)",
                "0 0 0 20px rgba(255, 255, 255, 0.1)",
                "0 0 0 40px rgba(255, 255, 255, 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-4xl text-black"
            >
              🍳
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Company Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mb-4"
        >
          <h1 className="text-6xl text-white mb-2">CodeOven</h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="h-0.5 bg-white mx-auto"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="text-gray-300 text-xl"
        >
          Baking Code, Serving Innovation
        </motion.p>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 0.4 }}
          className="mt-8 flex justify-center"
        >
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                className="w-2 h-2 bg-white rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
    </motion.div>
  );
}