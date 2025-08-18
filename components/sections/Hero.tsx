import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import { Spotlight } from '../ui/spotlight'


export const Hero = () => {
    return (
      <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48'>
        <Spotlight fill='blue' className="-top-40 left-0 md:-top-20 md:left-0"/>
        <div className='container px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
                <div className='flex flex-col justify-center space-y-4'>
                    <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                        <span className='gradient-text'>ArcheTeching</span> the Future with <span className="">Tech</span>
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                        We help startups and enterprises unlock growth with AI-first, end-to-end software development — strategy, design, development, and cloud infrastructure, all in one place.
                    </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Button size="lg" className="bg-white hover:bg-accent/90">
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button size="lg" variant="outline">
                            View Our Work
                        </Button>
                        
                    </div>
                </div>
                 <div className="hidden lg:block">
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-3xl" />
                  <div className="relative h-full w-full rounded-lg border bg-card p-8 shadow-lg gradient-border">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <div className="h-3 w-3 rounded-full bg-red-500" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                        <div className="h-3 w-3 rounded-full bg-green-500" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 w-3/4 rounded bg-muted" />
                        <div className="h-4 w-full rounded bg-muted" />
                        <div className="h-4 w-2/3 rounded bg-muted" />
                        <div className="h-4 w-full rounded bg-muted" />
                        <div className="h-4 w-1/2 rounded bg-muted" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded bg-accent" />
                        <div className="h-8 w-24 rounded bg-muted" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </div>
      </section>
      
  )
}
