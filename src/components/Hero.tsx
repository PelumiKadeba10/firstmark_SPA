import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap, Award, Clock, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-secondary/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white"
          >
            {/* Logo/Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold">Firstmark Innovation School Of Technology</h2>
                  <p className="text-white/80 text-sm">N.B.T.E Accredited Institution</p>
                  <div className="flex gap-1 mt-1">
                    <MapPin size={16} />
                    <p className="text-sm">Falana Street, Ajilosun, Ado-Ekiti, Ekiti State</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <h1 className="font-heading text-5xl lg:text-6xl font-bold leading-tight mb-6">
                ADMISSIONS NOW 
                <span className="block bg-secondary text-secondary-foreground px-4 py-2 rounded-lg inline-block mt-2">
                  OPEN!
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 font-medium">
                SECURE YOUR FUTURE WITH PRACTICAL SKILLS
              </p>
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <Award className="h-6 w-6 text-yellow-400 mb-2" />
                <p className="font-semibold">Government Certified</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                <Clock className="h-6 w-6 text-green-400 mb-2" />
                <p className="font-semibold">6 Months Program</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col justify-center sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white w-full text-primary px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-white/90 transition-colors duration-200 shadow-lg"
                onClick={() => { window.location.href = "#contact"; }}
              >
                APPLY NOW 
              </motion.button>
              {/* <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 font-heading font-semibold text-lg px-8 py-6"
              >
                Learn More
              </Button> */}
            </motion.div>

            {/* Location */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8 flex items-center gap-2 text-white/80"
            >
              <MapPin className="h-5 w-5" />
              <p className="text-sm">Falana Street, Ajilosun, Ado-Ekiti, Ekiti State</p>
            </motion.div> */}
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-glow"
              >
                <img 
                  src="/firstmarkadvert.jpg"
                  alt="Firstmark College ICT Training Program - Student working on computer hardware"
                  className="w-full rounded-2xl shadow-2xl"
                  loading="eager"
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -right-6 bg-secondary text-secondary-foreground p-4 rounded-2xl shadow-secondary"
              >
                <p className="font-heading font-bold text-2xl">FREE</p>
                <p className="text-sm">Tuition</p>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white text-primary p-4 rounded-2xl shadow-primary"
              >
                <p className="font-heading font-bold text-xl">6 MONTHS</p>
                <p className="text-sm">Duration</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;