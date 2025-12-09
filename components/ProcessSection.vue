<script setup lang="ts">
const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We begin with a thorough consultation to understand your vision, preferences, and requirements. We take the time to listen to your ideas and aspirations.'
  },
  {
    number: '02',
    title: 'Concept Development',
    description: 'Creating a personalised design concept tailored to your individual style, whether contemporary, traditional, or eclectic aesthetic.'
  },
  {
    number: '03',
    title: 'Space Planning',
    description: 'Optimising the functionality and flow of your living spaces with detailed floor plans, considering natural light, traffic patterns, and furniture placement.'
  },
  {
    number: '04',
    title: 'Material Selection',
    description: 'Guiding you through flooring, wall coverings, lighting fixtures, and bespoke cabinetry with our extensive knowledge of trends and timeless elements.'
  },
  {
    number: '05',
    title: 'Installation & Styling',
    description: 'Bringing the vision to life with the perfect finishing touches, styling pieces, and accessories that complete your dream home.'
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
    id="process"
    ref="sectionRef"
    class="section-padding bg-cream/30"
  >
    <div class="container-wide mx-auto">
      <!-- Section Header -->
      <div
        class="text-center max-w-3xl mx-auto mb-16 lg:mb-24 transition-all duration-700"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <p class="font-serif font-bold text-sm tracking-ultra uppercase text-gold mb-4">
          Our Process
        </p>
        <h2 class="heading-lg text-navy mb-6">
          From Vision to Reality
        </h2>
        <div class="divider"></div>
        <p class="text-body text-navy/70 mt-6">
          Our comprehensive design service takes you through every step of the journey, ensuring a seamless and enjoyable experience.
        </p>
      </div>

      <!-- Process Timeline -->
      <div class="relative">
        <!-- Vertical line (desktop) -->
        <div class="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/0 via-gold/40 to-gold/0 transform -translate-x-1/2"></div>

        <!-- Process Steps -->
        <div class="space-y-12 lg:space-y-0">
          <div
            v-for="(step, index) in processSteps"
            :key="step.number"
            class="relative transition-all duration-700"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
            :style="{ transitionDelay: `${(index + 1) * 150}ms` }"
          >
            <!-- Desktop Layout -->
            <div
              class="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center"
              :class="index % 2 === 0 ? '' : 'direction-rtl'"
            >
              <!-- Content Side -->
              <div
                class="p-8 lg:p-10"
                :class="index % 2 === 0 ? 'text-right' : 'text-left lg:order-2'"
              >
                <span class="font-serif font-semibold text-5xl text-gold block mb-2">{{ step.number }}</span>
                <h3 class="heading-sm text-navy mb-4">{{ step.title }}</h3>
                <p class="text-body text-navy/60">{{ step.description }}</p>
              </div>

              <!-- Center Point -->
              <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div class="w-4 h-4 bg-gold rounded-full border-4 border-cream shadow-lg"></div>
              </div>

              <!-- Empty Side (for alignment) -->
              <div :class="index % 2 === 0 ? 'lg:order-2' : ''"></div>
            </div>

            <!-- Mobile Layout -->
            <div class="lg:hidden flex gap-6">
              <!-- Number -->
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center border border-gold/30">
                  <span class="font-serif font-semibold text-lg text-gold">{{ step.number }}</span>
                </div>
                <!-- Connecting line -->
                <div
                  v-if="index < processSteps.length - 1"
                  class="w-px h-full bg-gold/20 mx-auto mt-4"
                ></div>
              </div>

              <!-- Content -->
              <div class="pb-8">
                <h3 class="heading-sm text-navy mb-3">{{ step.title }}</h3>
                <p class="text-body text-navy/60">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.direction-rtl {
  direction: ltr;
}
</style>

