import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const posts = [
    {
      title: "10 Web Design Trends to Watch in 2025",
      excerpt: "Discover the latest trends shaping the future of web design and how to implement them in your projects.",
      category: "Design",
      date: "Jan 15, 2025",
      readTime: "5 min read",
    },
    {
      title: "Building Performant React Applications",
      excerpt: "Learn best practices for optimizing React apps and delivering lightning-fast user experiences.",
      category: "Development",
      date: "Jan 12, 2025",
      readTime: "8 min read",
    },
    {
      title: "The Complete Guide to SEO in 2025",
      excerpt: "Master modern SEO techniques to boost your website's visibility and drive organic traffic.",
      category: "Marketing",
      date: "Jan 10, 2025",
      readTime: "10 min read",
    },
    {
      title: "Mastering Tailwind CSS: Tips and Tricks",
      excerpt: "Advanced techniques and lesser-known features to supercharge your Tailwind CSS workflow.",
      category: "Development",
      date: "Jan 8, 2025",
      readTime: "6 min read",
    },
    {
      title: "User Experience Design Best Practices",
      excerpt: "Create intuitive and delightful user experiences with these proven UX design principles.",
      category: "Design",
      date: "Jan 5, 2025",
      readTime: "7 min read",
    },
    {
      title: "TypeScript for JavaScript Developers",
      excerpt: "Make the switch from JavaScript to TypeScript and write more reliable, maintainable code.",
      category: "Development",
      date: "Jan 3, 2025",
      readTime: "9 min read",
    },
  ];

  const categories = ["All", "Design", "Development", "Marketing"];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Our
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Blog
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Insights, tutorials, and updates from our team of experts.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4">{post.excerpt}</CardDescription>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
