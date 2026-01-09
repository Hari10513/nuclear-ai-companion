import { Atom } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Atom className="w-6 h-6 text-primary" />
            <span className="text-lg font-display font-bold text-foreground">
              Nuclearn
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Opt-out Preferences
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nuclearn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
