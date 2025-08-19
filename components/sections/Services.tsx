"use client"

import React from 'react'

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
                {/* <Carousel items={cards} /> */}
            </div>
        </div>
    </section>
  )
}

