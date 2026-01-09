import { motion } from "framer-motion";
import { Shield, Award, Cloud, Lock, Settings } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "AI Built for Nuclear—Trained, Tuned, Trusted",
    description:
      "Trained on terabytes of nuclear-specific procedures, reports, and regulatory data, Nuclearn's private AI models deliver results you can trust—right out of the box.",
  },
  {
    icon: Award,
    title: "Proven by the Industry, Built by Experts",
    description:
      "Nuclearn's founding team earned the NEI \"Top Innovative Practice\" Award for groundbreaking work in nuclear machine learning.",
  },
  {
    icon: Cloud,
    title: "Deployment Your Way: On-Prem, Walled, or Cloud",
    description:
      "Run where your security policies require. Nuclearn supports fully air-gapped, on-premise environments or secure government cloud deployments.",
  },
  {
    icon: Lock,
    title: "Compliant by Design—Export, Cyber, & Beyond",
    description:
      "From day one, Nuclearn has been built with compliance at its core. We support NIST, NEI 08-09, 10 CFR 50.59, and Export Control requirements.",
  },
  {
    icon: Settings,
    title: "Tailored to Your Plant, Not the Other Way Around",
    description:
      "Easily fine-tune Nuclearn's AI to your unique procedures, tech specs, and workflows—without requiring deep ML expertise.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-widest font-medium mb-4">
            FEATURES
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Nuclear Doesn't Need Generic AI—
            <br />
            <span className="text-primary">It Needs Nuclearn</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group p-8 bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
