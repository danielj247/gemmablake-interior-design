<template>
  <header
    class="fixed inset-x-0 top-0 z-40 bg-beige/90 backdrop-blur border-b border-light-gray/60"
  >
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a
        href="#top"
        class="font-heading text-xl tracking-[0.2em] uppercase text-navy"
      >
        Gemma Blake
        <span class="block text-xs font-body tracking-[0.25em] uppercase text-brown">
          Interior Design
        </span>
      </a>

      <button
        class="inline-flex items-center justify-center rounded-md border border-light-gray/80 bg-beige/70 px-3 py-2 text-sm font-medium text-brown shadow-sm transition hover:bg-beige/100 md:hidden"
        type="button"
        @click="open = !open"
      >
        <span class="sr-only">Toggle navigation</span>
        <span class="i-[heroicons-bars-3-20-solid] h-5 w-5" />
        <span class="ml-2">Menu</span>
      </button>

      <ul class="hidden items-center gap-8 text-sm font-medium text-brown md:flex">
        <li v-for="item in items" :key="item.href">
          <a
            :href="item.href"
            class="transition hover:text-navy"
          >
            {{ item.label }}
          </a>
        </li>
        <li>
          <a
            href="#contact"
            class="rounded-full border border-gold bg-navy px-4 py-2 text-xs uppercase tracking-[0.18em] text-beige shadow-soft transition hover:bg-brown hover:border-brown"
          >
            Book Consultation
          </a>
        </li>
      </ul>
    </nav>

    <transition name="fade">
      <div
        v-if="open"
        class="border-t border-light-gray/70 bg-beige/95 px-6 pb-4 pt-2 md:hidden"
      >
        <ul class="space-y-3 text-sm font-medium text-brown">
          <li v-for="item in items" :key="item.href">
            <a
              :href="item.href"
              class="block py-1"
              @click="open = false"
            >
              {{ item.label }}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              class="mt-2 inline-flex w-full items-center justify-center rounded-full border border-gold bg-navy px-4 py-2 text-xs uppercase tracking-[0.18em] text-beige shadow-soft transition hover:bg-brown hover:border-brown"
              @click="open = false"
            >
              Book Consultation
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)

const items = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' }
]
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>


