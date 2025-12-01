<script setup lang="ts">
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Process', href: '#process' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const scrollToSection = (href: string) => {
  closeMobileMenu()
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="[
      isScrolled || isMobileMenuOpen
        ? 'bg-cream-light/95 backdrop-blur-md shadow-sm'
        : 'bg-transparent'
    ]"
  >
    <div class="container-wide mx-auto px-6 lg:px-12">
      <div class="flex items-center justify-between h-20 lg:h-24">
        <!-- Logo -->
        <a
          href="#"
          class="font-script text-2xl lg:text-3xl text-navy tracking-wide transition-opacity hover:opacity-70"
          @click.prevent="scrollToSection('#hero')"
        >
          Gemma Blake
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-10">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="font-serif text-sm tracking-widest uppercase text-navy/80 hover:text-navy transition-colors duration-300 relative group"
            @click.prevent="scrollToSection(link.href)"
          >
            {{ link.name }}
            <span class="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="lg:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
          aria-label="Toggle menu"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <span
            class="w-6 h-0.5 bg-navy transition-all duration-300 absolute"
            :class="isMobileMenuOpen ? 'rotate-45' : '-translate-y-2'"
          ></span>
          <span
            class="w-6 h-0.5 bg-navy transition-all duration-300"
            :class="isMobileMenuOpen ? 'opacity-0' : 'opacity-100'"
          ></span>
          <span
            class="w-6 h-0.5 bg-navy transition-all duration-300 absolute"
            :class="isMobileMenuOpen ? '-rotate-45' : 'translate-y-2'"
          ></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-400 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        class="lg:hidden bg-cream-light/98 backdrop-blur-md border-t border-cream-dark/20"
      >
        <div class="container-wide mx-auto px-6 py-8">
          <div class="flex flex-col space-y-6">
            <a
              v-for="(link, index) in navLinks"
              :key="link.name"
              :href="link.href"
              class="font-serif text-lg tracking-widest uppercase text-navy/80 hover:text-navy transition-colors duration-300 animate-fade-in-up"
              :style="{ animationDelay: `${index * 50}ms` }"
              @click.prevent="scrollToSection(link.href)"
            >
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

