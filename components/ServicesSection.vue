<template>
  <section id="services" class="py-20 md:py-32 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="font-bodoni text-4xl md:text-5xl text-theme-navy mb-4">Our Services</h2>
        <p class="font-sans text-gray-500 max-w-2xl mx-auto">Tailored design solutions to transform your space.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Service 1: 2 Hour Consultation -->
        <div class="bg-theme-beige/5 p-8 md:p-12 rounded-lg hover:shadow-lg transition-shadow duration-300 border border-theme-beige/20">
          <div class="h-12 w-12 bg-theme-gold/10 rounded-full flex items-center justify-center mb-6 text-theme-gold">
            <Icon name="heroicons:clock" size="24" />
          </div>
          <h3 class="font-bodoni text-2xl text-theme-navy mb-4">Two-Hour Consultancy Service</h3>
          <p class="font-sans text-gray-600 mb-6 italic">A personalised and efficient solution for expert insights.</p>
          
          <div class="space-y-4 text-gray-600 font-sans text-sm leading-relaxed">
            <p>
              My Two-Hour Consultancy Service begins with an in-depth discussion where I take the time to understand your unique vision, challenges, and goals. Whether you're seeking assistance with room layout, colour schemes, furniture selection, or general design direction, I am here to provide tailored solutions.
            </p>
            <p>
              Drawing upon my expertise and industry knowledge, this service empowers you with the knowledge and tools to implement design changes effectively. We share valuable tips on lighting strategies, textures, patterns, and advise on budget-friendly options and sourcing.
            </p>
          </div>
        </div>

        <!-- Service 2: Full Interior Design -->
        <div class="bg-theme-navy text-white p-8 md:p-12 rounded-lg shadow-xl transform lg:-translate-y-4 relative overflow-hidden">
          <div class="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-theme-gold/10 rounded-full blur-3xl"></div>
          
          <div class="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center mb-6 text-theme-gold">
            <Icon name="heroicons:home-modern" size="24" />
          </div>
          <h3 class="font-bodoni text-2xl text-white mb-4">Full Interior Design Service</h3>
          <p class="font-sans text-gray-300 mb-6 italic">Transforming houses into homes that are both beautiful and practical.</p>
          
          <ul class="space-y-6 font-sans text-sm text-gray-300">
            <li class="flex items-start">
              <Icon name="heroicons:check-circle" class="flex-shrink-0 text-theme-gold mr-3 mt-1" />
              <div>
                <strong class="text-white block mb-1">Consultation & Concept</strong>
                Thorough consultation to understand your vision, followed by a personalised design concept tailored to your style.
              </div>
            </li>
            <li class="flex items-start">
              <Icon name="heroicons:check-circle" class="flex-shrink-0 text-theme-gold mr-3 mt-1" />
              <div>
                <strong class="text-white block mb-1">Space Planning & Layout</strong>
                Optimising functionality and flow with detailed floor plans and 3D models to maximise every square inch.
              </div>
            </li>
            <li class="flex items-start">
              <Icon name="heroicons:check-circle" class="flex-shrink-0 text-theme-gold mr-3 mt-1" />
              <div>
                <strong class="text-white block mb-1">Material Selection & Finishes</strong>
                Expert guidance on flooring, wall coverings, lighting, and bespoke cabinetry to achieve the perfect ambiance.
              </div>
            </li>
            <li class="flex items-start">
              <Icon name="heroicons:check-circle" class="flex-shrink-0 text-theme-gold mr-3 mt-1" />
              <div>
                <strong class="text-white block mb-1">Custom Furniture & Installation</strong>
                Collaborating with skilled craftsmen for bespoke pieces, followed by final installation and styling.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
