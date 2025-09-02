import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, HandHeart, DollarSign, Banknote } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Award,
      title: "Government-Recognized Certificates",
      description: "Earn N.B.T.E accredited certificates that are recognized by employers nationwide",
      color: "primary"
    },
    {
      icon: HandHeart,
      title: "Practical Hands-on Training", 
      description: "Learn through real-world projects and hands-on experience with industry-standard equipment",
      color: "secondary"
    },
    {
      icon: DollarSign,
      title: "Free Tuition Fees",
      description: "Access quality education without financial barriers - completely free tuition for all students",
      color: "primary"
    },
    {
      icon: Banknote,
      title: "Monthly Support Allowance",
      description: "Receive monthly financial support to help you focus on your studies and practical training",
      color: "secondary"
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-4">
            WHY CHOOSE US?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer unmatched value with government backing, practical training, and financial support
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-card border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-primary group text-center">
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                    benefit.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-secondary'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-hero p-8 rounded-3xl shadow-glow">
            <h3 className="font-heading text-3xl font-bold text-white mb-4">
              REGISTRATION ONGOING!
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Don't miss this opportunity to transform your future with practical ICT skills. 
              Join thousands of successful graduates who are now thriving in the tech industry.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-white/90 transition-colors duration-200 shadow-lg"
            >
              APPLY NOW - LIMITED SLOTS!
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;