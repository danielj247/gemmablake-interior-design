<script setup lang="ts">
const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

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
    { threshold: 0.2 }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<template>
  <section
    id="about"
    ref="sectionRef"
    class="section-padding bg-white"
  >
    <div class="container-wide mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <!-- Image Column -->
        <div
          class="relative transition-all duration-700"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'"
        >
          <!-- Image placeholder with elegant frame -->
          <div class="relative aspect-[4/5] bg-cream overflow-hidden">
            <img src="/images/about-me/me.jpg" alt="About Me" class="w-full h-full object-cover">
            <!-- Placeholder pattern -->
            <!-- <div class="absolute inset-0 bg-gradient-to-br from-cream-dark/30 to-cream flex items-center justify-center">
              <div class="text-center">
                <svg class="w-16 h-16 mx-auto text-navy/20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p class="font-serif text-sm text-navy/30 tracking-widest uppercase">Portrait Image</p>
              </div>
            </div> -->
            <!-- Decorative frame -->
            <div class="absolute inset-4 border border-gold/70 pointer-events-none"></div>
          </div>
          <!-- Decorative accent -->
          <div class="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold/20 -z-10"></div>
        </div>

        <!-- Content Column -->
        <div
          class="transition-all duration-700 delay-200"
          :class="isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'"
        >
          <!-- Section Label -->
          <p class="font-serif font-bold text-sm tracking-ultra uppercase text-gold mb-4">
            About Me
          </p>

          <!-- Heading -->
          <h2 class="heading-lg text-navy mb-6">
            Creating Spaces That Tell Your Story
          </h2>

          <!-- Divider -->
          <div class="divider-left"></div>

          <!-- Content -->
          <div class="space-y-6 text-body text-navy/70">
            <p>
              Established in 2022, Gemma Blake Interior Design is a specialist interior design studio
              based in Bromsgrove, Worcestershire, specialising in high-end residential and commercial
              projects across the Midlands.
            </p>
            <p>
              Providing a fully comprehensive service for private clients and developers, we craft
              timeless, luxurious homes tailored to each client's individual needs.
            </p>
            <p>
              From preliminary concept to installation, each detail is carefully considered and curated,
              providing bespoke, effortless design.
            </p>
          </div>

          <!-- Stats/Features -->
          <div class="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-cream-dark/30">
            <div class="text-center">
              <p class="font-serif font-semibold text-3xl md:text-4xl text-navy mb-1">3+</p>
              <p class="font-body text-sm text-navy/50 tracking-wide uppercase">Years Experience</p>
            </div>
            <div class="text-center">
              <p class="font-serif font-semibold text-3xl md:text-4xl text-navy mb-1">50+</p>
              <p class="font-body text-sm text-navy/50 tracking-wide uppercase">Projects</p>
            </div>
            <div class="text-center">
              <p class="font-serif font-semibold text-3xl md:text-4xl text-navy mb-1">100%</p>
              <p class="font-body text-sm text-navy/50 tracking-wide uppercase">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

