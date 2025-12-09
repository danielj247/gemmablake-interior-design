<script setup lang="ts">
const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

const contactInfo = [
  {
    icon: 'phone',
    label: 'Phone',
    value: '+44 (0) 7XXX XXX XXX',
    href: 'tel:+447XXXXXXXXX'
  },
  {
    icon: 'email',
    label: 'Email',
    value: 'hello@gemmablakeinteriordesign.com',
    href: 'mailto:hello@gemmablakeinteriordesign.com'
  },
  {
    icon: 'instagram',
    label: 'Instagram',
    value: '@gemmablake.interiordesign',
    href: 'https://instagram.com/gemmablake.interiordesign'
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
    id="contact"
    ref="sectionRef"
    class="section-padding bg-cream relative overflow-hidden"
  >
    <!-- Decorative background -->
    <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cream/50 to-transparent pointer-events-none"></div>

    <div class="container-wide mx-auto relative z-10">
      <div class="lg:grid lg:grid-cols-2 gap-16 lg:gap-24">
        <!-- Left Column - Content -->
        <div
          class="transition-all duration-700 w-full"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'"
        >
          <p class="font-serif font-bold text-sm tracking-ultra uppercase text-gold mb-4">
            Get In Touch
          </p>
          <h2 class="heading-lg text-navy mb-6">
            Let's Create Something Beautiful Together
          </h2>
          <div class="divider-left"></div>

          <p class="text-body text-navy/70 mb-8">
            Ready to transform your space? Whether you're looking for a complete interior design service or expert guidance through our two-hour consultation, we'd love to hear from you.
          </p>

          <!-- Contact Details -->
          <div class="space-y-6 mb-10">
            <a
              v-for="(item, index) in contactInfo"
              :key="item.label"
              :href="item.href"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center group transition-all duration-500"
              :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'"
              :style="{ transitionDelay: `${(index + 2) * 100}ms` }"
            >
              <!-- Icon -->
              <div class="w-12 h-12 bg-navy/5 rounded-full flex items-center justify-center mr-4 group-hover:bg-gold/20 transition-colors duration-300 flex-shrink-0">
                <!-- Phone Icon -->
                <svg v-if="item.icon === 'phone'" class="w-5 h-5 text-navy/60 group-hover:text-gold transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <!-- Email Icon -->
                <svg v-else-if="item.icon === 'email'" class="w-5 h-5 text-navy/60 group-hover:text-gold transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <!-- Instagram Icon -->
                <svg v-else-if="item.icon === 'instagram'" class="w-5 h-5 text-navy/60 group-hover:text-gold transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke-width="1.5"/>
                  <circle cx="12" cy="12" r="4" stroke-width="1.5"/>
                  <circle cx="18" cy="6" r="1" fill="currentColor"/>
                </svg>
              </div>
              <div class="min-w-0 flex-1">
                <p class="font-serif font-semibold text-xs tracking-widest uppercase text-navy/40 mb-0.5">{{ item.label }}</p>
                <p class="font-body text-navy group-hover:text-gold transition-colors duration-300 break-words">{{ item.value }}</p>
              </div>
            </a>
          </div>

          <!-- Location -->
          <div
            class="p-6 bg-white/60 border border-cream-dark/20 transition-all duration-700 delay-500"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
          >
            <div class="flex items-start">
              <svg class="w-5 h-5 text-gold mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p class="font-serif font-semibold text-sm tracking-widest uppercase text-navy/40 mb-1">Location</p>
                <p class="font-body text-navy">Bromsgrove, Worcestershire</p>
                <p class="font-body text-sm text-navy/60 mt-1">Serving clients across the Midlands and beyond</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Consultation CTA Card -->
        <div
          class="transition-all duration-700 delay-200"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'"
        >
          <div class="bg-white p-8 lg:p-12 shadow-xl relative overflow-hidden h-full flex flex-col">
            <!-- Decorative corner -->
            <div class="absolute top-0 right-0 w-32 h-32 bg-gold/5"></div>
            <div class="absolute top-4 right-4 w-24 h-24 border border-gold/20"></div>

            <div class="relative z-10 flex-1 flex flex-col">
              <span class="font-serif font-bold text-xs tracking-ultra uppercase text-gold mb-2">Exclusive Offer</span>
              <h3 class="heading-md text-navy mb-4">Two-Hour Consultation</h3>

              
              <div class="w-12 h-px bg-gold mb-6"></div>

              <p class="text-body text-navy/70 mb-6">
                Our exclusive Two-Hour Consultancy Service is a personalised and efficient solution for those who desire expert insights and actionable recommendations for their home.
              </p>

              <div class="space-y-4 mb-8 flex-1">
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p class="text-body text-navy/70">In-depth discussion of your vision and goals</p>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p class="text-body text-navy/70">Tailored solutions for layout, colour & furniture</p>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p class="text-body text-navy/70">Expert tips on lighting, textures & patterns</p>
                </div>
                <div class="flex items-start">
                  <svg class="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <p class="text-body text-navy/70">Budget-friendly sourcing recommendations</p>
                </div>
              </div>

               <!-- Price Display -->
                <div class="flex items-center justify-end mb-2 block md:hidden">
                  <div class="bg-gold-light/10 border-2 border-gold/30 px-6 py-3">
                    <div class="flex items-baseline">
                      <span class="font-serif text-2xl font-bold text-gold mr-1">£</span>
                      <span class="font-serif text-4xl font-bold text-navy">250</span>
                    </div>
                  </div>
                </div>

              <!-- CTA Button -->
              <a
                href="mailto:hello@gemmablakeinteriordesign.com?subject=Two-Hour Consultation Request"
                class="flex flex-col md:flex-row items-center justify-between btn-gold py-6 md:p-2"
              >
                <div class="font-extrabold w-full text-center">
                  Book Your Consultation
                </div>

                <!-- Price Display -->
                <div class="flex items-center p-1 hidden md:block">
                  <div class="bg-gold-light/10 border-2 border-gold/30 px-6 py-3">
                    <div class="flex items-baseline">
                      <span class="font-serif text-2xl font-bold text-gold mr-1">£</span>
                      <span class="font-serif text-4xl font-bold text-white">250</span>
                    </div>
                  </div>
                </div>
              </a>

              <p class="text-center font-body text-sm text-navy/50 mt-4">
                Or call to discuss your project
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
