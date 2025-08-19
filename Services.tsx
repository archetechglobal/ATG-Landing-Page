"use client"
import { Carousel, Card } from "../ui/apple-cards-carousel"

export const Services = () => {
  const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} />)
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 lg:px-14 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Services</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What We Offer</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We provide comprehensive technology solutions to help your business thrive in the digital age.
            </p>
          </div>
        </div>
        <div className="max-w-9xl mx-auto px-8">
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  )
}

const WebDevelopmentContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">Modern Web Solutions</h3>
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg mb-6">
      We create stunning, responsive websites and web applications that deliver exceptional user experiences across all
      devices.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Frontend Development</h4>
        <ul className="text-neutral-600 dark:text-neutral-400 space-y-1">
          <li>• React, Next.js, Vue.js</li>
          <li>• Responsive Design</li>
          <li>• Progressive Web Apps</li>
          <li>• Performance Optimization</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Backend Development</h4>
        <ul className="text-neutral-600 dark:text-neutral-400 space-y-1">
          <li>• Node.js, Python, PHP</li>
          <li>• RESTful APIs</li>
          <li>• Database Integration</li>
          <li>• Security Implementation</li>
        </ul>
      </div>
    </div>
  </div>
)

const AISolutionsContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
      Intelligent Automation
    </h3>
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg mb-6">
      Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation in your
      business.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Machine Learning</h4>
        <ul className="text-neutral-600 dark:text-neutral-400 space-y-1">
          <li>• Predictive Analytics</li>
          <li>• Natural Language Processing</li>
          <li>• Computer Vision</li>
          <li>• Recommendation Systems</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">AI Integration</h4>
        <ul className="text-neutral-600 dark:text-neutral-400 space-y-1">
          <li>• Chatbots & Virtual Assistants</li>
          <li>• Document Processing</li>
          <li>• Automated Decision Making</li>
          <li>• Custom AI Models</li>
        </ul>
      </div>
    </div>
  </div>
)

const AutomatedWorkflowContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
      Streamline Your Process
    </h3>
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg mb-6">
      Eliminate manual tasks and optimize your business processes with intelligent automation solutions that save time
      and reduce errors.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Process Automation</h4>
        <ul className="text-neutral-600 dark:text-neutral-400 space-y-1">
          <li>• Workflow Design & Implementation</li>
          <li>• Task Scheduling</li>
          <li>• Email & Notification Systems</li>
          <li>• Data Processing Pipelines</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Integration Solutions</h4>
        <ul className="text-neutral-600 dark:text-neutral-400 space-y-1">
          <li>• API Integrations</li>
          <li>• Third-party Connectors</li>
          <li>• Legacy System Modernization</li>
          <li>• Real-time Synchronization</li>
        </ul>
      </div>
    </div>
  </div>
)

const CloudInfrastructureContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
      Scalable Cloud Solutions
    </h3>
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg mb-6">
      Build robust, scalable, and secure cloud infrastructure that grows with your business needs and ensures optimal
      performance.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Cloud Platforms</h4>
        <ul className="text-neutral-600 dark:text-neutral-400 space-y-1">
          <li>• AWS, Azure, Google Cloud</li>
          <li>• Serverless Architecture</li>
          <li>• Container Orchestration</li>
          <li>• Microservices Design</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">DevOps & Security</h4>
        <ul className="text-neutral-600 dark:text-neutral-400 space-y-1">
          <li>• CI/CD Pipelines</li>
          <li>• Infrastructure as Code</li>
          <li>• Monitoring & Logging</li>
          <li>• Security Best Practices</li>
        </ul>
      </div>
    </div>
  </div>
)

const AppDevelopmentContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
      Mobile & Desktop Apps
    </h3>
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg mb-6">
      Create powerful, user-friendly applications for mobile and desktop platforms that engage users and drive business
      growth.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Mobile Development</h4>
        <ul className="text-neutral-600 dark:text-neutral-400 space-y-1">
          <li>• iOS & Android Apps</li>
          <li>• React Native & Flutter</li>
          <li>• Cross-platform Solutions</li>
          <li>• App Store Optimization</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Desktop Applications</h4>
        <ul className="text-neutral-600 dark:text-neutral-400 space-y-1">
          <li>• Electron & Tauri</li>
          <li>• Native Desktop Apps</li>
          <li>• Cross-platform Compatibility</li>
          <li>• Performance Optimization</li>
        </ul>
      </div>
    </div>
  </div>
)

const DataAnalyticsContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
      Insights from Your Data
    </h3>
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg mb-6">
      Transform raw data into actionable insights with advanced analytics, visualization, and business intelligence
      solutions.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Data Processing</h4>
        <ul className="text-neutral-600 dark:text-neutral-400 space-y-1">
          <li>• ETL Pipelines</li>
          <li>• Data Warehousing</li>
          <li>• Real-time Analytics</li>
          <li>• Data Quality Management</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">Visualization & BI</h4>
        <ul className="text-neutral-600 dark:text-neutral-400 space-y-1">
          <li>• Interactive Dashboards</li>
          <li>• Custom Reports</li>
          <li>• Predictive Analytics</li>
          <li>• Business Intelligence Tools</li>
        </ul>
      </div>
    </div>
  </div>
)

const data = [
  {
    category: "Web Development",
    title: "Modern Web Solutions",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <WebDevelopmentContent />,
  },
  {
    category: "AI Solutions",
    title: "Intelligent Automation",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <AISolutionsContent />,
  },
  {
    category: "Automated Workflow",
    title: "Streamline Your Process",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <AutomatedWorkflowContent />,
  },
  {
    category: "Cloud Infrastructure",
    title: "Scalable Cloud Solutions",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <CloudInfrastructureContent />,
  },
  {
    category: "App Development",
    title: "Mobile & Desktop Apps",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <AppDevelopmentContent />,
  },
  {
    category: "Data Analytics",
    title: "Insights from Your Data",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DataAnalyticsContent />,
  },
]
