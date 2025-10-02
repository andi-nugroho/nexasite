import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "We're on a mission to make beautiful web design accessible to everyone.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Our customers' success is our success. We're here to help you grow.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Great things happen when talented people work together.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                About
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  NexaSite
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're a team of passionate designers and developers creating beautiful digital experiences
                for modern businesses.
              </p>
            </div>

            <div className="prose prose-lg max-w-none mb-16 animate-fade-in">
              <Card className="border-muted">
                <CardContent className="p-8 md:p-12">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Our Story</h2>
                  <p className="text-muted-foreground mb-4">
                    Founded in 2020, NexaSite started with a simple idea: make professional web design
                    accessible to businesses of all sizes. What began as a small team of three has grown
                    into a thriving company serving thousands of customers worldwide.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    We believe that every business deserves a beautiful, functional website that helps
                    them achieve their goals. That's why we've built a platform that combines cutting-edge
                    technology with intuitive design, making it easy for anyone to create stunning websites.
                  </p>
                  <p className="text-muted-foreground">
                    Today, we're proud to be trusted by startups, SMBs, and enterprises across various
                    industries. Our commitment to quality, innovation, and customer success drives everything
                    we do.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                        <value.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
