"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useParams } from "next/navigation"

const blogPostsData: Record<string, any> = {
  "ai-future-2025": {
    title: "The Future of AI in 2025: Trends and Predictions",
    date: "January 15, 2025",
    category: "AI & Technology",
    readTime: "8 min read",
    image: "/ai-technology-future-2025.jpg",
    content: `
      <h2>Introduction</h2>
      <p>Artificial Intelligence continues to evolve at an unprecedented pace. As we enter 2025, we're seeing transformative changes across industries. From healthcare to finance, AI is becoming increasingly integrated into our daily operations.</p>

      <h2>Key Trends to Watch</h2>
      <h3>1. Multimodal AI Systems</h3>
      <p>AI systems that can process multiple types of data—text, images, audio, and video—are becoming more sophisticated. These systems can understand context better and provide more nuanced responses.</p>

      <h3>2. Edge AI and On-Device Processing</h3>
      <p>As privacy concerns grow, more AI processing is moving to edge devices. This reduces latency and improves privacy by keeping data local.</p>

      <h3>3. AI-Powered Personalization</h3>
      <p>Businesses are leveraging AI to create highly personalized experiences for users. From recommendations to custom interfaces, personalization is becoming the standard.</p>

      <h2>Challenges Ahead</h2>
      <p>Despite the progress, challenges remain. Ethical considerations, data privacy, and the need for responsible AI development are critical issues that the industry must address.</p>

      <h2>Conclusion</h2>
      <p>2025 promises to be an exciting year for AI. By staying informed about these trends and challenges, businesses can better prepare for the future.</p>
    `,
  },
  "web-dev-best-practices": {
    title: "Web Development Best Practices for 2025",
    date: "January 10, 2025",
    category: "Web Development",
    readTime: "10 min read",
    image: "/web-development-code.png",
    content: `
      <h2>Building Better Web Applications</h2>
      <p>Web development continues to evolve with new frameworks, tools, and best practices emerging regularly. In 2025, developers need to focus on performance, security, and user experience.</p>

      <h2>Performance Optimization</h2>
      <h3>Core Web Vitals</h3>
      <p>Google's Core Web Vitals remain crucial for SEO and user experience. Focus on Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS).</p>

      <h3>Image Optimization</h3>
      <p>Images often account for the majority of page weight. Use modern formats like WebP, implement lazy loading, and serve responsive images.</p>

      <h2>Security Best Practices</h2>
      <p>Security should never be an afterthought. Implement HTTPS, use security headers, validate all inputs, and keep dependencies updated.</p>

      <h2>Accessibility</h2>
      <p>Building accessible web applications benefits all users. Follow WCAG guidelines, use semantic HTML, and test with assistive technologies.</p>

      <h2>Conclusion</h2>
      <p>By following these best practices, you can build web applications that are fast, secure, and accessible to all users.</p>
    `,
  },
  "scaling-startups": {
    title: "Scaling Your Startup: A Technical Perspective",
    date: "January 5, 2025",
    category: "Startups",
    readTime: "12 min read",
    image: "/startup-growth-scaling.jpg",
    content: `
      <h2>The Scaling Challenge</h2>
      <p>As your startup grows, technical challenges multiply exponentially. What worked for 100 users may not work for 100,000. Planning for scale from the beginning is crucial.</p>

      <h2>Infrastructure Scaling</h2>
      <h3>Cloud Architecture</h3>
      <p>Cloud platforms like AWS, Google Cloud, and Azure provide the flexibility needed to scale. Use auto-scaling groups and load balancers to handle traffic spikes.</p>

      <h3>Database Optimization</h3>
      <p>As data grows, database performance becomes critical. Consider sharding, replication, and caching strategies to maintain performance.</p>

      <h2>Code Quality and Maintainability</h2>
      <p>As your team grows, code quality becomes increasingly important. Implement code reviews, automated testing, and continuous integration/deployment.</p>

      <h2>Monitoring and Observability</h2>
      <p>You can't improve what you don't measure. Implement comprehensive monitoring, logging, and alerting to catch issues before they impact users.</p>

      <h2>Conclusion</h2>
      <p>Scaling a startup requires careful planning and execution. By focusing on infrastructure, code quality, and observability, you can build a foundation for sustainable growth.</p>
    `,
  },
  "rag-systems-guide": {
    title: "Building Effective RAG Systems: A Complete Guide",
    date: "December 28, 2024",
    category: "AI & Technology",
    readTime: "15 min read",
    image: "/rag-retrieval-augmented-generation.jpg",
    content: `
      <h2>What is RAG?</h2>
      <p>Retrieval-Augmented Generation (RAG) combines the power of large language models with external knowledge sources. This approach allows AI systems to provide accurate, contextual responses based on specific documents or databases.</p>

      <h2>Components of a RAG System</h2>
      <h3>1. Document Retrieval</h3>
      <p>The first step is retrieving relevant documents from your knowledge base. This typically involves semantic search using embeddings.</p>

      <h3>2. Context Augmentation</h3>
      <p>Retrieved documents are used to augment the prompt sent to the language model, providing context for more accurate responses.</p>

      <h3>3. Generation</h3>
      <p>The language model generates responses based on the augmented prompt, resulting in more accurate and contextual answers.</p>

      <h2>Implementation Considerations</h2>
      <p>When implementing RAG systems, consider factors like retrieval accuracy, latency, and cost. Choose appropriate embedding models and vector databases for your use case.</p>

      <h2>Conclusion</h2>
      <p>RAG systems represent a powerful approach to building AI applications that can leverage domain-specific knowledge. By understanding the components and implementation considerations, you can build effective RAG systems for your business.</p>
    `,
  },
  "chatbot-implementation": {
    title: "Implementing Custom Chatbots for Your Business",
    date: "December 20, 2024",
    category: "AI & Technology",
    readTime: "9 min read",
    image: "/chatbot-ai-customer-service.jpg",
    content: `
      <h2>The Value of Custom Chatbots</h2>
      <p>Generic chatbots often fall short of business needs. Custom chatbots trained on your specific domain can provide significantly better customer experiences and reduce support costs.</p>

      <h2>Approaches to Building Chatbots</h2>
      <h3>Rule-Based Systems</h3>
      <p>Simple rule-based systems work well for straightforward use cases with limited conversation flows.</p>

      <h3>Machine Learning Models</h3>
      <p>ML-based chatbots can handle more complex conversations and learn from interactions over time.</p>

      <h3>Large Language Models</h3>
      <p>LLMs like GPT provide powerful natural language understanding and can be fine-tuned for specific domains.</p>

      <h2>Integration and Deployment</h2>
      <p>Consider where your chatbot will live—website, messaging apps, or internal tools. Each platform has different requirements and considerations.</p>

      <h2>Conclusion</h2>
      <p>Custom chatbots can provide significant value to your business. By choosing the right approach and platform, you can build chatbots that truly serve your customers.</p>
    `,
  },
  "full-stack-development": {
    title: "Full Stack Development: From Frontend to Backend",
    date: "December 15, 2024",
    category: "Web Development",
    readTime: "11 min read",
    image: "/full-stack-development.png",
    content: `
      <h2>Understanding Full Stack Development</h2>
      <p>Full stack development involves working across the entire application stack—from user interfaces to databases. Full stack developers understand how all components work together.</p>

      <h2>Frontend Technologies</h2>
      <p>Modern frontend development uses frameworks like React, Vue, or Angular. These frameworks provide tools for building interactive, responsive user interfaces.</p>

      <h2>Backend Technologies</h2>
      <p>Backend development involves building APIs, managing databases, and handling business logic. Popular choices include Node.js, Python, and Go.</p>

      <h2>Database Design</h2>
      <p>Choosing the right database is crucial. Consider factors like data structure, scalability requirements, and query patterns when selecting between SQL and NoSQL databases.</p>

      <h2>DevOps and Deployment</h2>
      <p>Full stack developers should understand deployment, containerization, and infrastructure. Tools like Docker and Kubernetes are increasingly important.</p>

      <h2>Conclusion</h2>
      <p>Full stack development requires broad knowledge across many technologies. By understanding how all components work together, you can build cohesive, scalable applications.</p>
    `,
  },
}

export default function BlogPostPage() {
  const params = useParams()
  const postId = params.id as string
  const post = blogPostsData[postId]

  if (!post) {
    return (
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">Post not found</h1>
          <Link href="/blog" className="text-primary hover:underline">
            Back to Blog
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-muted-foreground">{post.readTime}</span>
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4">{post.title}</h1>
          <p className="text-muted-foreground">{post.date}</p>
        </div>

        {/* Featured Image */}
        <div className="relative h-96 rounded-lg overflow-hidden mb-12 bg-muted">
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: post.content }} className="text-foreground space-y-6" />
        </div>

        {/* CTA */}
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-2">Ready to build something great?</h3>
          <p className="text-muted-foreground mb-6">Let's discuss how we can help bring your ideas to life.</p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-md hover:opacity-90 transition font-semibold"
          >
            Book a Discovery Call
          </Link>
        </div>
      </div>
    </main>
  )
}
