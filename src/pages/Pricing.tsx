import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small projects and personal websites",
      features: [
        "Up to 5 pages",
        "Basic SEO optimization",
        "Mobile responsive",
        "Contact form",
        "24/7 support",
        "Free SSL certificate",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses and e-commerce",
      features: [
        "Up to 20 pages",
        "Advanced SEO tools",
        "E-commerce integration",
        "Custom domain",
        "Priority support",
        "Analytics dashboard",
        "Email marketing",
        "Social media integration",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited pages",
        "Enterprise SEO suite",
        "Advanced e-commerce",
        "Custom integrations",
        "Dedicated support",
        "Advanced analytics",
        "Multi-language support",
        "Custom development",
        "White-label option",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Simple, Transparent
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Pricing
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Choose the perfect plan for your needs. All plans include a 14-day free trial.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in ${
                    plan.popular ? "border-primary shadow-lg scale-105" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                        <Sparkles className="w-4 h-4" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  <CardHeader className="text-center pb-8 pt-8">
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <CardDescription className="mb-4">{plan.description}</CardDescription>
                    <div className="text-center">
                      <span className="text-5xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant={plan.popular ? "hero" : "outline"}
                      className="w-full"
                      size="lg"
                    >
                      {plan.popular ? "Start Free Trial" : "Get Started"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center text-muted-foreground">
              <p className="mb-4">All plans include 14-day free trial • No credit card required</p>
              <p className="text-sm">
                Need a custom solution?{" "}
                <a href="/contact" className="text-primary hover:underline">
                  Contact us
                </a>{" "}
                for enterprise pricing
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
