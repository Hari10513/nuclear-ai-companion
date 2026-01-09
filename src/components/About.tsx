import { motion } from "framer-motion";
import { Atom } from "lucide-react";

const keywords = ["AUTOMATION", "GENERATIVE AI", "ANALYTICS"];

export const About = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-primary text-sm tracking-widest font-medium">
                AI
              </span>
              <Atom className="w-5 h-5 text-primary" />
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {keywords.map((keyword, index) => (
                <motion.span
                  key={keyword}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full"
                >
                  {keyword}
                </motion.span>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
              Purpose-Built AI for Nuclear's Daily Workflows
            </h2>

            <p className="text-muted-foreground leading-relaxed text-lg">
              Nuclearn simplifies your most time-consuming tasks—automating
              condition report coding, CAP screening, trend detection, and
              safety documentation with unmatched accuracy. Designed from the
              ground up for nuclear operations, our AI platform is secure,
              adaptable, and ready to deploy on-premise or in controlled
              environments.
            </p>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Animated Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute inset-8 border-2 border-primary/30 rounded-full" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute inset-16 border-2 border-primary/20 rounded-full" />
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute inset-24 border-2 border-primary/10 rounded-full" />
              </motion.div>

              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center"
                >
                  <Atom className="w-12 h-12 text-primary" />
                </motion.div>
              </div>

              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="absolute w-2 h-2 bg-primary rounded-full"
                  style={{
                    left: `${20 + i * 12}%`,
                    top: `${30 + (i % 3) * 20}%`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
