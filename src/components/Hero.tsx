import { motion } from "framer-motion";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-nuclear-plant.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Green Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Decorative Atom Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle
            cx="400"
            cy="400"
            r="300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
          />
          <circle
            cx="400"
            cy="400"
            r="200"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary"
          />
          <ellipse
            cx="400"
            cy="400"
            rx="300"
            ry="100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary"
            transform="rotate(60, 400, 400)"
          />
          <ellipse
            cx="400"
            cy="400"
            rx="300"
            ry="100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary"
            transform="rotate(-60, 400, 400)"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-primary text-lg md:text-xl tracking-[0.3em] font-medium mb-4"
          >
            NUCLEARN IS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-8"
          >
            AI THAT SPEAKS
            <br />
            <span className="text-foreground">NUCLEAR.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center gap-4 mt-8"
          >
            <button className="group flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300">
              <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <Play className="w-5 h-5 text-primary group-hover:text-primary-foreground ml-1" />
              </div>
              <span className="text-sm font-medium">Watch Video</span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
