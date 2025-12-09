<script setup lang="ts">
const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const isVisible = ref(false)

onMounted(() => {
  const video = document.querySelector('video')
  if (video) {
    video.playbackRate = 0.9
  }

  isVisible.value = true
})
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
  >
    <!-- Background videos -->
    <div class="absolute inset-0">
      <video
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        autoplay
        loop
        muted
        playsinline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videos/hero-loop.webm" type="video/webm">
        <source src="/videos/hero-loop-compressed.mp4" type="video/mp4">
      </video>
      <div class="absolute inset-0 z-20 bg-gradient-to-b from-black/0 to-black/10"></div>
    </div>

    <!-- Content -->
    <div class="relative z-30 text-center px-6 max-w-5xl mx-auto bg-white/40 p-30 backdrop-blur-[8px] transition-all duration-700 delay-300" :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'">

      <!-- Subtitle -->
      <p
        class="font-serif font-semibold text-sm md:text-base tracking-ultra uppercase text-navy mb-6 transition-all duration-700 delay-200"
      >
        Interior Design Studio
      </p>

      <!-- Main Title -->
      <div
        class="transition-all duration-700 delay-300 mb-6"
      >
        <span class="sr-only">Gemma Blake Interior Design</span>
        <img
          src="/images/logo.png"
          alt="Gemma Blake Interior Design"
          class="mx-auto max-w-[620px] w-4/5 md:w-3/4 drop-shadow-2xl"
        >
      </div>

      <!-- Divider -->
      <div
        class="w-24 h-px bg-gold mx-auto mb-8 transition-all duration-700 delay-400"
      ></div>

      <!-- Tagline -->
      <p
        class="font-serif text-xl md:text-2xl lg:text-3xl text-navy/90 font-semibold tracking-wide mb-12 transition-all duration-700 delay-500 w-3/4 mx-auto"
      >
        Calm, timeless interiors in a refined taupe and greige palette
      </p>

      <!-- Location -->
      <p
        class="font-body text-base md:text-lg text-navy/70 tracking-widest uppercase transition-all duration-700 delay-600"
      >
        Bromsgrove, Worcestershire
      </p>

      <!-- CTA Button -->
      <div
        class="mt-12 transition-all duration-700 delay-700"
      >
        <a
          href="#contact"
          class="btn-primary"
          @click.prevent="scrollToSection('#contact')"
        >
          Book a Consultation
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 delay-1000 z-30"
    >
      <a
        href="#about"
        class="flex flex-col items-center text-navy/50 hover:text-navy/80 transition-colors duration-300"
        @click.prevent="scrollToSection('#about')"
      >
        <span class="font-serif font-semibold text-xs tracking-widest uppercase mb-3 text-navy">Scroll</span>
        <div class="w-px h-12 bg-gradient-to-b from-navy/70 to-transparent animate-bounce-slow"></div>
      </a>
    </div>
  </section>
</template>
