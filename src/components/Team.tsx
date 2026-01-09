import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "Bradley Fox",
    role: "CEO, Co-Founder",
    bio: "Recognized by the Nuclear Energy Institute as one of its \"40 Under 40\" leaders in 2024, and a recipient of the 2020 NEI Top Innovative Practice Award.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Jerrold Vincent",
    role: "CFO, Co-Founder",
    bio: "Over a decade of experience in utility and nuclear data analytics. Led Nuclearn's financial and product evolution from startup to multi-solution platform.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Phil Zeringue",
    role: "Chief Revenue Officer",
    bio: "Over two decades driving transformative growth in the nuclear industry. Renowned for operational rigor and strategic insight.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Lorenzo Slay",
    role: "Vice President, Product",
    bio: "Defines the company's product vision and roadmap by putting nuclear professionals at the center of every decision.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    linkedin: "#",
    twitter: "#",
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-widest font-medium mb-4">
            TEAM
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Our Team Knows Nuclear
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Social Links */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-background/90 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-foreground" />
                  </a>
                  <a
                    href={member.twitter}
                    className="w-10 h-10 bg-background/90 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-foreground" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary text-sm font-medium mb-3">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-foreground font-display italic">
            "We're not guessing. Nuclearn is the only AI company with 50+ years
            of nuclear experience — and that's why we get what makes your work
            so demanding and high-stakes."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
