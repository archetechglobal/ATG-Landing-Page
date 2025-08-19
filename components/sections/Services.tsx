"use client"

import React from 'react'
import { Carousel, Card } from '../ui/apple-cards-carousel'

const data = [
  {
    category: "Web Developement",
    title: "Custom web applications built with modern frameworks and technologies.",
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "",
  },
  {
    category: "AI Solutions",
    title: "Intelligent systems that learn and adapt to your business needs.",
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "",
  },
  {
    category: "Automated Workflows",
    title: "Streamline your business processes with intelligent automation.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "",
  },
 
  {
    category: "Cloud Infrastructure",
    title: "Scalable and secure cloud solutions for your business.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "",
  },
  {
    category: "APP Development",
    title: "Native and cross-platform mobile applications for iOS and Android.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "",
  },
  {
    category: "API Developement",
    title: "Connect your systems and enable seamless data exchange.",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "",
  },
  {
    category: "Data Analytics",
    title: "Turn your data into actionable insights for better decision making.",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "",
  },
];

const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

export const Services = () => {
  return (
    <section id='services' className='w-full py-12 md:py-24 lg:py-32 lg:px-14 bg-muted/50'>
        <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
                <div className='space-y-2'>
                    <div className='inline-block rounded-lg bg-muted px-3 py-1 text-sm'>
                        Our Services
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What We Offer</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We provide comprehensive technology solutions to help your business thrive in the digital age.
                    </p>
                </div>
            </div>
            <div className='max-w-5xl mx-auto px-8'>
                <Carousel items={cards} />
            </div>
        </div>
    </section>
  )
}

