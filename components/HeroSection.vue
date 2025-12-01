<script setup lang="ts">
const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    <!-- Background with gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-cream via-cream-light to-cream-dark">
      <!-- Decorative geometric shapes -->
      <div class="absolute top-20 right-10 w-64 h-64 border border-gold/20 rotate-45 opacity-40"></div>
      <div class="absolute bottom-32 left-16 w-48 h-48 border border-navy/10 rotate-12 opacity-30"></div>
      <div class="absolute top-1/3 left-1/4 w-32 h-32 bg-gold/5 rounded-full blur-2xl"></div>
      <div class="absolute bottom-1/4 right-1/3 w-48 h-48 bg-navy/5 rounded-full blur-3xl"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 text-center px-6 max-w-5xl mx-auto">
      <!-- Decorative line -->
      <div
        class="w-px h-16 bg-gradient-to-b from-transparent via-gold to-transparent mx-auto mb-8 transition-all duration-1000"
        :class="isVisible ? 'opacity-100' : 'opacity-0'"
      ></div>

      <!-- Subtitle -->
      <p
        class="font-serif text-sm md:text-base tracking-ultra uppercase text-navy/60 mb-6 transition-all duration-700 delay-200"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        Interior Design Studio
      </p>

      <!-- Main Title -->
      <h1
        class="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-navy mb-6 tracking-wide transition-all duration-700 delay-300"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        Gemma Blake
      </h1>

      <!-- Divider -->
      <div
        class="w-24 h-px bg-gold mx-auto mb-8 transition-all duration-700 delay-400"
        :class="isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'"
      ></div>

      <!-- Tagline -->
      <p
        class="font-serif text-xl md:text-2xl lg:text-3xl text-navy/80 font-light tracking-wide mb-12 transition-all duration-700 delay-500"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        Timeless, Luxurious Interiors
      </p>

      <!-- Location -->
      <p
        class="font-body text-base md:text-lg text-navy/50 tracking-widest uppercase transition-all duration-700 delay-600"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        Bromsgrove, Worcestershire
      </p>

      <!-- CTA Button -->
      <div
        class="mt-12 transition-all duration-700 delay-700"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <a
          href="#contact"
          class="btn-primary"
          @click.prevent="$el.closest('section')?.parentElement?.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })"
        >
          Book a Consultation
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 delay-1000"
      :class="isVisible ? 'opacity-100' : 'opacity-0'"
    >
      <a
        href="#about"
        class="flex flex-col items-center text-navy/40 hover:text-navy/70 transition-colors duration-300"
        @click.prevent="document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })"
      >
        <span class="font-serif text-xs tracking-widest uppercase mb-3">Scroll</span>
        <div class="w-px h-12 bg-gradient-to-b from-navy/40 to-transparent animate-bounce-slow"></div>
      </a>
    </div>
  </section>
</template>

