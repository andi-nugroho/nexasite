import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "NexaSite transformed our online presence. The design is stunning and the performance is incredible. Our conversion rate increased by 150%!",
      rating: 5,
      initials: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Founder, GrowthLabs",
      content: "The best investment we made this year. The team delivered beyond our expectations. Highly professional and responsive throughout the entire process.",
      rating: 5,
      initials: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director, BrandCo",
      content: "Outstanding quality and attention to detail. Every element feels polished and well-thought-out. Our customers love the new website!",
      rating: 5,
      initials: "ER",
    },
    {
      name: "David Park",
      role: "CTO, InnovateTech",
      content: "Clean code, modern architecture, and excellent documentation. As a technical person, I really appreciate the quality of work here.",
      rating: 5,
      initials: "DP",
    },
    {
      name: "Lisa Anderson",
      role: "Designer, Creative Studio",
      content: "The design system is phenomenal. Beautiful animations and a cohesive visual language that's easy to customize and extend.",
      rating: 5,
      initials: "LA",
    },
    {
      name: "James Wilson",
      role: "Product Manager, SaaS Inc",
      content: "Fast turnaround, professional service, and a product that exceeded our expectations. Will definitely work with them again!",
      rating: 5,
      initials: "JW",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Loved by
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Thousands of Customers
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. See what our customers have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
