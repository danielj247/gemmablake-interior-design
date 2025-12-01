<template>
  <section
    id="top"
    class="relative flex min-h-[80vh] items-center bg-fixed bg-center bg-cover"
  >
    <div class="absolute inset-0 bg-gradient-to-r from-beige/95 via-beige/90 to-beige/70" />

    <div class="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 lg:flex-row lg:items-center">
      <div class="max-w-xl space-y-6">
        <p class="font-body text-xs uppercase tracking-[0.25em] text-brown/70">
          Interior Design Studio · Bromsgrove · Midlands
        </p>
        <h1 class="font-heading text-4xl leading-tight text-navy sm:text-5xl lg:text-6xl">
          Timeless, luxurious interiors
          <span class="block font-script text-4xl text-brown/80">
            crafted around you.
          </span>
        </h1>
        <p class="max-w-lg text-base leading-relaxed text-brown/80">
          Established in 2022, Gemma Blake Interior Design specialises in high-end residential and
          commercial projects across the Midlands, thoughtfully curated from concept to installation.
        </p>
        <div class="flex flex-wrap gap-4">
          <a
            href="#contact"
            class="inline-flex items-center justify-center rounded-full border border-gold bg-navy px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-beige shadow-soft transition hover:bg-brown hover:border-brown"
          >
            Book a two-hour consultation
          </a>
          <a
            href="#portfolio"
            class="inline-flex items-center justify-center rounded-full border border-brown/40 bg-beige/80 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-brown transition hover:bg-beige/100"
          >
            View portfolio
          </a>
        </div>
      </div>

      <div class="grid flex-1 grid-cols-2 gap-4 lg:gap-6">
        <div class="col-span-1 mt-8 flex flex-col gap-4 lg:mt-12">
          <div class="h-40 rounded-3xl bg-[url('https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg')] bg-cover bg-center shadow-soft" />
          <div class="h-40 rounded-3xl bg-[url('https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg')] bg-cover bg-center shadow-soft" />
        </div>
        <div class="col-span-1 flex flex-col gap-4">
          <div class="h-52 rounded-3xl bg-[url('https://images.pexels.com/photos/6588574/pexels-photo-6588574.jpeg')] bg-cover bg-center shadow-soft" />
          <div class="rounded-3xl border border-light-gray/70 bg-beige/80 p-5 text-sm leading-relaxed text-brown/80 shadow-soft">
            “Our home now looks like something straight out of a magazine. The extension feels
            completely different from day to night – Gemma&rsquo;s eye for detail is exceptional.”
            <span class="mt-3 block text-xs font-semibold uppercase tracking-[0.2em] text-brown/70">
              Kay · Sutton Coldfield
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


