<template>
  <section
    id="portfolio"
    class="border-y border-light-gray/70 bg-beige/95 px-6 py-20"
  >
    <div class="mx-auto max-w-6xl space-y-10">
      <header class="max-w-2xl space-y-4">
        <p class="text-xs font-medium uppercase tracking-[0.25em] text-brown/70">
          Portfolio
        </p>
        <h2 class="font-heading text-3xl text-navy sm:text-4xl">
          A glimpse into the calm, elevated spaces Gemma creates.
        </h2>
        <p class="text-sm leading-relaxed text-brown/80">
          While we build out a full project gallery, these curated stock images echo the neutral,
          textural and layered aesthetic of Gemma&rsquo;s work.
        </p>
      </header>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <figure
          v-for="(image, index) in images"
          :key="index"
          class="group relative overflow-hidden rounded-3xl bg-light-gray/40 shadow-soft"
        >
          <div
            class="h-64 w-full bg-cover bg-center transition duration-500 group-hover:scale-105"
            :style="{ backgroundImage: `url(${image.url})` }"
          />
          <figcaption class="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/40 via-black/10 to-transparent p-4 text-sm text-beige opacity-0 transition group-hover:opacity-100">
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-beige/80">
              {{ image.category }}
            </p>
            <p class="mt-1 font-medium">
              {{ image.title }}
            </p>
          </figcaption>
        </figure>
      </div>

      <p class="text-xs text-brown/60">
        Project photography coming soon. Stock imagery used for now while current projects are professionally documented.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const images = [
  {
    url: 'https://images.pexels.com/photos/6588588/pexels-photo-6588588.jpeg',
    title: 'Light-filled kitchen with warm timber and stone',
    category: 'Residential'
  },
  {
    url: 'https://images.pexels.com/photos/6585786/pexels-photo-6585786.jpeg',
    title: 'Soft neutral bedroom with layered textures',
    category: 'Residential'
  },
  {
    url: 'https://images.pexels.com/photos/6480219/pexels-photo-6480219.jpeg',
    title: 'Calm, welcoming clinic reception',
    category: 'Commercial'
  },
  {
    url: 'https://images.pexels.com/photos/6585763/pexels-photo-6585763.jpeg',
    title: 'Relaxed living space with sculptural lighting',
    category: 'Residential'
  },
  {
    url: 'https://images.pexels.com/photos/6480217/pexels-photo-6480217.jpeg',
    title: 'Minimal, modern workspace with natural light',
    category: 'Commercial'
  },
  {
    url: 'https://images.pexels.com/photos/6588597/pexels-photo-6588597.jpeg',
    title: 'Textural styling vignette with ceramics',
    category: 'Styling'
  }
]
</script>


