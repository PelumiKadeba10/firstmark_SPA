import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Wrench, Video, Network } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      icon: Home,
      title: "Home Automation & IoT Technologies",
      description: "Learn cutting-edge smart home technologies and Internet of Things applications for modern living.",
      features: ["Smart Home Systems", "IoT Sensors", "Automation Programming", "Remote Control Systems"]
    },
    {
      icon: Wrench,
      title: "Computer Hardware Repair and Maintenance",
      description: "Master the skills to diagnose, repair, and maintain computer systems and components.",
      features: ["Hardware Diagnostics", "Component Replacement", "System Troubleshooting", "Preventive Maintenance"]
    },
    {
      icon: Video,
      title: "Social media Communications and Animation Technology",
      description: "Create engaging digital content with professional animation and social media strategies.",
      features: ["Digital Animation", "Video Editing", "Social Media Management", "Content Creation"]
    },
    {
      icon: Network,
      title: "Computer Networking and System Security installation",
      description: "Build and manage network infrastructures with enterprise-level networking skills.",
      features: ["Network Setup", "Security Protocols", "System Administration", "Troubleshooting"]
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-4">
            ICT TRAININGS OFFERED
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our comprehensive range of practical ICT courses designed to equip you with industry-relevant skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-primary group">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-gradient-primary p-3 rounded-xl text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                      <course.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <CardTitle className="font-heading text-2xl text-primary">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {course.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-secondary">Key Skills You'll Learn:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Duration Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 bg-primary text-primary-foreground px-8 py-4 rounded-2xl shadow-primary">
            <span className="font-heading text-3xl font-bold">6 MONTHS</span>
            <div className="w-px h-8 bg-primary-foreground/30"></div>
            <span className="text-lg">Complete Program Duration</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;