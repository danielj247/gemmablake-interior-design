<script setup lang="ts">
const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

const testimonials = [
  {
    id: 1,
    name: 'Kay',
    location: 'Sutton Coldfield',
    quote: 'Gemma Exceeded All Expectations! We initially brought Gemma on board for a full refurbishment of our Skin Clinic, a highly complex project with extremely tight deadlines. From day one, Gemma was nothing short of exceptional—professional, solution-focused, and incredibly organized. Beyond her outstanding project management skills, Gemma\'s design expertise completely transformed our clinic. We receive endless compliments on how stunning the space looks. Our home now looks like something straight out of a magazine. If you\'re considering an interior designer, we can\'t recommend Gemma highly enough.',
    featured: true
  },
  {
    id: 2,
    name: 'James',
    location: 'Nottingham',
    quote: 'Gemma was instructed to design and implement her ideas within a property under our management, with the intention of creating a luxury accommodation type for students. It is clear to see that Gemma\'s experience and expertise have differentiated the property from other student properties within the local area. This in turn has enabled us to maximise rents, reduce void periods and attract a much better profile of tenant. The attention to detail is apparent within the design and finished product.',
    featured: false
  },
  {
    id: 3,
    name: 'Natasha',
    location: 'Solihull',
    quote: 'Working with Gemma was an absolute pleasure from start to finish. Her attention to detail and ability to understand exactly what we wanted made the entire process seamless. Our home has been transformed into a space that truly reflects our personality and lifestyle. We couldn\'t be happier with the results and would highly recommend Gemma Blake Interior Design to anyone looking for a truly bespoke service.',
    featured: false
  }
]

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.disconnect()
        }
      })
    },
    { threshold: 0.1 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<template>
  <section
    id="testimonials"
    ref="sectionRef"
    class="section-padding bg-navy relative overflow-hidden"
  >
    <!-- Decorative elements -->
    <div class="absolute top-0 left-0 w-64 h-64 border border-gold/10 rotate-45 -translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 border border-gold/5 -rotate-12 translate-x-1/2 translate-y-1/2"></div>

    <div class="container-wide mx-auto relative z-10">
      <!-- Section Header -->
      <div
        class="text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-700"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <p class="font-serif text-sm tracking-ultra uppercase text-gold mb-4">
          Testimonials
        </p>
        <h2 class="heading-lg text-white mb-6">
          What Our Clients Say
        </h2>
        <div class="w-20 h-px bg-gold mx-auto"></div>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.id"
          class="group transition-all duration-700"
          :class="[
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            testimonial.featured ? 'md:col-span-2 lg:col-span-1' : ''
          ]"
          :style="{ transitionDelay: `${(index + 1) * 150}ms` }"
        >
          <div class="h-full bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-10 relative overflow-hidden group-hover:bg-white/10 transition-colors duration-400">
            <!-- Quote mark -->
            <div class="absolute top-6 left-8 text-gold/20">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            <!-- Content -->
            <div class="relative z-10 pt-8">
              <!-- Quote text -->
              <p class="text-body text-white/80 mb-8 line-clamp-6 lg:line-clamp-none">
                "{{ testimonial.quote }}"
              </p>

              <!-- Author -->
              <div class="flex items-center pt-6 border-t border-white/10">
                <!-- Avatar placeholder -->
                <div class="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mr-4">
                  <span class="font-serif text-lg text-gold">{{ testimonial.name.charAt(0) }}</span>
                </div>
                <div>
                  <p class="font-serif text-white tracking-wide">{{ testimonial.name }}</p>
                  <p class="font-body text-sm text-white/50">{{ testimonial.location }}</p>
                </div>
              </div>
            </div>

            <!-- Decorative corner -->
            <div class="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-gold/20 transform translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-400"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
