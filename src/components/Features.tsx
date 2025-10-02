import { Code2, Layers, Palette, Smartphone, Lock, Zap, Cloud, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Code2,
      title: "Modern Technology",
      description: "Built with the latest web technologies including React, TypeScript, and Tailwind CSS.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Palette,
      title: "Beautiful Design",
      description: "Carefully crafted design system with attention to every detail and micro-interaction.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Smartphone,
      title: "Fully Responsive",
      description: "Perfect viewing experience across all devices from mobile phones to large displays.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Lock,
      title: "Secure & Safe",
      description: "Enterprise-grade security with best practices and regular security updates.",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with lazy loading, code splitting, and efficient rendering.",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: Cloud,
      title: "Cloud Ready",
      description: "Deploy anywhere with support for all major cloud platforms and CDN integration.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: Layers,
      title: "Component Library",
      description: "Extensive collection of reusable components built with Radix UI primitives.",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Developer Friendly",
      description: "Clean code structure, comprehensive documentation, and excellent developer experience.",
      color: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section className="py-20 px-4" id="features">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Build Amazing Sites
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features and tools to help you create professional websites faster than ever before.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-muted animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
