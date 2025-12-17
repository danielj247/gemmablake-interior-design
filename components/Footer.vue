<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/gemmablakeinteriors',
    icon: 'instagram'
  },
]

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Process', href: '#process' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' }
]

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <footer class="bg-navy text-white">
    <!-- Main Footer -->
    <div class="container-wide mx-auto px-6 lg:px-12 py-16 lg:py-20">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        <!-- Brand Column -->
        <div class="lg:col-span-2">
          <a
            href="#hero"
            class="font-script text-3xl text-white tracking-wide inline-block mb-6 hover:text-gold transition-colors duration-300 bg-cream-light p-4 rounded-md"
            @click.prevent="scrollToSection('#hero')"
          >
            <span class="sr-only">Gemma Blake Interior Design</span>
            <img
              src="/images/logo.png"
              alt="Gemma Blake Interior Design"
              class="w-[200px]"
            >
          </a>
          <p class="text-body text-white/60 max-w-md mb-6">
            Specialist interior design studio based in Bromsgrove, Worcestershire, crafting timeless, luxurious homes tailored to each client's individual needs.
          </p>

          <!-- Social Links -->
          <div class="flex items-center space-x-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.name"
              class="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-gold hover:bg-gold/10 transition-all duration-300 group"
            >
              <!-- Instagram -->
              <svg v-if="social.icon === 'instagram'" class="w-4 h-4 text-white/60 group-hover:text-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke-width="1.5"/>
                <circle cx="12" cy="12" r="4" stroke-width="1.5"/>
                <circle cx="18" cy="6" r="1" fill="currentColor"/>
              </svg>
              <!-- Pinterest -->
              <svg v-else-if="social.icon === 'pinterest'" class="w-4 h-4 text-white/60 group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
              <!-- Houzz -->
              <svg v-else-if="social.icon === 'houzz'" class="w-4 h-4 text-white/60 group-hover:text-gold transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.003 0L4 4.386v6.364l3.998-2.318v13.193l8.005-4.636V8.068L12.003 5.75v7.568l-4.005 2.318V8.068L12.003 5.75V0z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-serif font-semibold text-sm tracking-widest uppercase text-white mb-6">Quick Links</h4>
          <nav class="space-y-3">
            <a
              v-for="link in navLinks"
              :key="link.name"
              :href="link.href"
              class="block font-body text-white/60 hover:text-gold transition-colors duration-300"
              @click.prevent="scrollToSection(link.href)"
            >
              {{ link.name }}
            </a>
          </nav>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="font-serif font-semibold text-sm tracking-widest uppercase text-white mb-6">Contact</h4>
          <div class="space-y-4">
            <a
              href="mailto:hello@gemmablakeinteriordesign.com"
              class="block font-body text-white/60 hover:text-gold transition-colors duration-300"
            >
              hello@gemmablakeinteriordesign.com
            </a>
            <a
              href="https://instagram.com/gemmablake.interiordesign"
              target="_blank"
              rel="noopener noreferrer"
              class="block font-body text-white/60 hover:text-gold transition-colors duration-300"
            >
              @gemmablake.interiordesign
            </a>
            <p class="font-body text-white/60">
              Bromsgrove, Worcestershire
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-white/10">
      <div class="container-wide mx-auto px-6 lg:px-12 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="font-body text-sm text-white/40">
            &copy; {{ currentYear }} Gemma Blake Interior Design. All rights reserved.
          </p>
          <div class="flex items-center space-x-6">
            <a href="#" class="font-body text-sm text-white/40 hover:text-white/70 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" class="font-body text-sm text-white/40 hover:text-white/70 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
