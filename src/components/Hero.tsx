import { motion } from "framer-motion";
import { GraduationCap, Award, Clock, MapPin, DollarSign } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-neutral-200 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-between items-start min-h-screen pt-24 pb-20 gap-20 flex-col lg:flex-row">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-neutral-800 flex flex-col justify-center lg:max-w-lg max-w-md mx-auto lg:mx-0"
          >
            {/* Logo/Header */}
            {/* <div className="flex items-start gap-4 mb-10">
              <div className="bg-primary/10 p-3 rounded-xl">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="font-heading text-2xl font-bold leading-snug">
                  Firstmark College of Management & ICT
                </h2>
                <p className="text-neutral-600 text-sm">N.B.T.E Accredited Institution</p>
                <div className="flex gap-1 mt-1 text-neutral-500 text-sm">
                  <MapPin size={16} />
                  <span>Falana Street, Ajilosun, Ado-Ekiti</span>
                </div>
              </div>
            </div> */}

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <h1 className="font-heading text-5xl lg:text-6xl font-bold leading-tight">
                Admissions Now
              </h1>
              <p className="font-heading text-5xl lg:text-6xl font-bold leading-tight text-white md:w-60 w-40 bg-green-600 px-2 py-1 rounded-md mb-6">Open</p>
              <p className="text-lg text-neutral-700 font-medium ">
                Secure your future with practical skills now
              </p>
            </motion.div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-4 mb-10 text-center">
              <div className="flex flex-col justify-center items-center bg-neutral-100 border shadow-md p-4 rounded-xl">
                <Award className="h-6 w-6 text-primary mb-2 " />
                <p className="font-semibold text-neutral-700">Government Certified</p>
              </div>
              <div className="flex flex-col justify-center items-center bg-neutral-100 p-4 shadow-md  rounded-xl">
                <Clock className="h-6 w-6 text-primary mb-2" />
                <p className="font-semibold text-neutral-700">6 Months Program</p>
              </div>
              <div className="flex flex-col justify-center items-center bg-neutral-100 p-4 shadow-md rounded-xl">
                <DollarSign className="h-6 w-6 text-primary mb-2" />
                <p className="flex flex-col justify-center items-center font-semibold text-neutral-700">Government Financed Tuition and Monthly stipend</p>
              </div>
              {/* <div className="bg-neutral-100 p-4 rounded-xl">
                <Clock className="h-6 w-6 text-primary mb-2" />
                <p className="font-semibold text-neutral-700">6 Months Program</p>
              </div> */}
            </div>

            <div className="flex justify-center ">
              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary w-full text-center text-white px-8 py-4 rounded-xl font-heading font-semibold text-lg hover:bg-primary/90 transition-colors shadow-sm"
                onClick={() => { window.location.href = "#contact"; }}
              >
                Apply Now
              </motion.button>
            </div>
            
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-md">
              <img 
                src="/firstmarkadvert.jpg"
                alt="Firstmark College ICT Training"
                className="w-full rounded-lg"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
