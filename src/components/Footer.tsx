import { motion } from "framer-motion";
import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* College Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white/10 p-3 rounded-xl">
                <GraduationCap className="h-8 w-8" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold">Firstmark College of Management and Information Technology</h3>
                <p className="text-primary-foreground/80 text-sm">N.B.T.E Accredited</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Empowering students with practical ICT skills for a digital future. 
              Join thousands of successful graduates in the tech industry.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Courses", "Why Choose Us", "Admissions", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/80 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Courses */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-lg font-semibold mb-6">Our Courses</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-primary-foreground/80">Home Automation & IoT</li>
              <li className="text-primary-foreground/80">Hardware Repair & Maintenance</li>
              <li className="text-primary-foreground/80">Social Media & Animation</li>
              <li className="text-primary-foreground/80">Computer Networking and System Security installation</li>
            </ul>
          </motion.div> */}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary-foreground/80" />
                <p className="text-sm text-primary-foreground/80">
                  Falana Street, Opposite Maria Assumpta Catholic Hospital, Ajilosun, Ado-Ekiti, Ekiti State
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-foreground/80" />
                <div>
                  <p className="text-sm text-primary-foreground/80">
                  0810 994 7499
                </p>
                <p className="text-sm text-primary-foreground/80">
                  0803 550 8930
                </p>
                </div>
                
              </div>
              {/* <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-foreground/80" />
                <p className="text-sm text-primary-foreground/80">
                  info@firstmarkcollege.edu.ng
                </p>
              </div> */}
            </div>
          </motion.div>
        </div>

        {/* Social Media & Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © 2025 Firstmark College of Management and Information Technology. All rights reserved.
            </p>
            
            {/* <div className="flex items-center gap-4">
              <p className="text-sm text-primary-foreground/80">Follow us:</p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.2 }}
                    className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors duration-200"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;