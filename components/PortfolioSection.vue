<script setup lang="ts">
const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

const portfolioItems = [
  {
    id: 1,
    title: '116 Sutton Coldfield',
    category: 'Residential',
    aspect: 'aspect-[4/5]',
    image: '/images/portfolio/1.jpg'
  },
  {
    id: 2,
    title: '116 Sutton Coldfield',
    category: 'Residential',
    aspect: 'aspect-square',
    image: '/images/portfolio/2.jpg'
  },
  {
    id: 3,
    title: '142 Solihull',
    category: 'Residential',
    aspect: 'aspect-[4/5]',
    image: '/images/portfolio/3.jpg'
  },
  {
    id: 4,
    title: '142 Solihull',
    category: 'Residential',
    aspect: 'aspect-square',
    image: '/images/portfolio/4.jpg'
  },
  {
    id: 5,
    title: '142 Solihull',
    category: 'Residential',
    aspect: 'aspect-[4/5]',
    image: '/images/portfolio/5.jpg'
  },
  {
    id: 6,
    title: '22 Edgbaston',
    category: 'Residential',
    aspect: 'aspect-square',
    image: '/images/portfolio/6.jpg'
  },
  {
    id: 7,
    title: 'FIJI Skin Clinic',
    category: 'Commercial',
    aspect: 'aspect-square',
    image: '/images/portfolio/7.png'
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
    id="portfolio"
    ref="sectionRef"
    class="section-padding bg-white"
  >
    <div class="container-wide mx-auto">
      <!-- Section Header -->
      <div
        class="text-center max-w-3xl mx-auto mb-16 lg:mb-20 transition-all duration-700"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <p class="font-serif font-bold text-sm tracking-ultra uppercase text-gold mb-4">
          Our Work
        </p>
        <h2 class="heading-lg text-navy mb-6">
          Featured Projects
        </h2>
        <div class="divider"></div>
        <p class="text-body text-navy/70 mt-6">
          Explore a selection of our recent interior design projects, showcasing our commitment to creating beautiful, functional spaces.
        </p>
      </div>

      <!-- Portfolio Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="(item, index) in portfolioItems"
          :key="item.id"
          class="group cursor-pointer transition-all duration-700"
          :class="[
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            index % 3 === 1 ? 'lg:translate-y-8' : ''
          ]"
          :style="{ transitionDelay: `${(index + 1) * 100}ms` }"
        >
          <div class="relative overflow-hidden bg-cream">
            <!-- Image Placeholder -->
            <div
              class="w-full bg-gradient-to-br from-cream-dark/40 to-cream transition-transform duration-600 group-hover:scale-105"
              :class="item.aspect"
            >
              <!-- Placeholder content -->
              <div class="absolute inset-0 flex items-center justify-center">
                <img :src="item.image" alt="Portfolio Item" class="w-full h-full object-cover">
                <!-- <div class="text-center">
                  <svg class="w-12 h-12 mx-auto text-navy/15 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p class="font-serif text-xs text-navy/20 tracking-widest uppercase">Coming Soon</p>
                </div> -->
              </div>
            </div>

            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
              <div class="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                <p class="font-serif font-semibold text-xs tracking-ultra uppercase text-gold mb-2">{{ item.category }}</p>
                <h3 class="font-serif font-semibold text-xl lg:text-2xl tracking-wide">{{ item.title }}</h3>
                <div class="w-8 h-px bg-gold mx-auto mt-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 delay-100"></div>
              </div>
            </div>

            <!-- Corner accent -->
            <div class="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-gold/0 group-hover:border-gold/50 transition-colors duration-400"></div>
            <div class="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-gold/0 group-hover:border-gold/50 transition-colors duration-400"></div>
          </div>

          <!-- Item Info (below image) -->
          <div class="pt-5">
            <p class="font-serif font-semibold text-xs tracking-ultra uppercase text-gold/70 mb-1">{{ item.category }}</p>
            <h3 class="font-serif font-semibold text-lg text-navy group-hover:text-navy/70 transition-colors duration-300">{{ item.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
