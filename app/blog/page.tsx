"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const blogPosts = [
  {
    id: "ai-future-2025",
    title: "The Future of AI in 2025: Trends and Predictions",
    excerpt:
      "Explore the emerging trends in artificial intelligence and what we can expect in the coming year. From large language models to autonomous systems, discover how AI is reshaping industries.",
    date: "January 15, 2025",
    category: "AI & Technology",
    readTime: "8 min read",
    image: "/ai-technology-future-2025.jpg",
  },
  {
    id: "web-dev-best-practices",
    title: "Web Development Best Practices for 2025",
    excerpt:
      "Learn the latest best practices in web development. From performance optimization to security considerations, we cover everything you need to know to build modern web applications.",
    date: "January 10, 2025",
    category: "Web Development",
    readTime: "10 min read",
    image: "/web-development-code.png",
  },
  {
    id: "scaling-startups",
    title: "Scaling Your Startup: A Technical Perspective",
    excerpt:
      "As your startup grows, technical challenges multiply. Discover strategies for scaling your infrastructure, managing databases, and maintaining code quality as you expand.",
    date: "January 5, 2025",
    category: "Startups",
    readTime: "12 min read",
    image: "/startup-growth-scaling.jpg",
  },
  {
    id: "rag-systems-guide",
    title: "Building Effective RAG Systems: A Complete Guide",
    excerpt:
      "Retrieval-Augmented Generation (RAG) is transforming how we build AI applications. Learn how to implement RAG systems that provide accurate, contextual responses.",
    date: "December 28, 2024",
    category: "AI & Technology",
    readTime: "15 min read",
    image: "/rag-retrieval-augmented-generation.jpg",
  },
  {
    id: "chatbot-implementation",
    title: "Implementing Custom Chatbots for Your Business",
    excerpt:
      "Custom chatbots can revolutionize customer service. Explore different approaches to building chatbots that understand your business domain and provide real value.",
    date: "December 20, 2024",
    category: "AI & Technology",
    readTime: "9 min read",
    image: "/chatbot-ai-customer-service.jpg",
  },
  {
    id: "full-stack-development",
    title: "Full Stack Development: From Frontend to Backend",
    excerpt:
      "Master the complete journey of full stack development. Learn how to build cohesive applications that seamlessly integrate frontend and backend technologies.",
    date: "December 15, 2024",
    category: "Web Development",
    readTime: "11 min read",
    image: "/full-stack-development.png",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-20 px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Insights, tips, and stories about AI, web development, and building scalable products.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category and Read Time */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>

                  {/* Date and Arrow */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
