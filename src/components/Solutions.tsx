import { motion } from "framer-motion";
import { Cpu, Cog, Bot, TrendingUp, Lightbulb, Brain, Boxes } from "lucide-react";

const solutions = [
  {
    icon: TrendingUp,
    title: "Performance Improvement AI (PIAI)",
    color: "bg-primary/20",
  },
  {
    icon: Cog,
    title: "Engineering AI",
    color: "bg-primary/20",
  },
  {
    icon: Bot,
    title: "AtomAssist",
    color: "bg-primary/20",
  },
  {
    icon: Cpu,
    title: "Capitalizer",
    color: "bg-primary/20",
  },
  {
    icon: Lightbulb,
    title: "Project Genius",
    color: "bg-primary/20",
  },
  {
    icon: Brain,
    title: "Cap AI",
    color: "bg-primary/20",
  },
  {
    icon: Boxes,
    title: "PartsAI",
    color: "bg-primary/20",
  },
];

export const Solutions = () => {
  return (
    <section id="products" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm tracking-widest font-medium mb-2">
            OUR SOLUTIONS
          </p>
        </motion.div>
      </div>

      {/* Infinite Scrolling Carousel */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, -1400] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {[...solutions, ...solutions].map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex-shrink-0 w-48 p-6 bg-card rounded-xl border border-border/50 cursor-pointer group transition-all duration-300 hover:border-primary/50"
              >
                <div
                  className={`w-16 h-16 rounded-xl ${solution.color} flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors`}
                >
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground leading-tight">
                  {solution.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
