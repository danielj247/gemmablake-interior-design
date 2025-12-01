<template>
  <section
    id="contact"
    class="border-y border-light-gray/70 bg-beige/95 px-6 py-20"
  >
    <div class="mx-auto max-w-6xl space-y-10">
      <header class="max-w-2xl space-y-4">
        <p class="text-xs font-medium uppercase tracking-[0.25em] text-brown/70">
          Contact
        </p>
        <h2 class="font-heading text-3xl text-navy sm:text-4xl">
          Ready to explore your project?
        </h2>
        <p class="text-sm leading-relaxed text-brown/80">
          Share a few details about your home or upcoming project and Gemma will be in touch to
          discuss next steps and availability for a two-hour consultation.
        </p>
      </header>

      <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="space-y-6">
          <div class="grid gap-4 text-sm text-brown/85 sm:grid-cols-2">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.23em] text-brown/60">
                Email
              </p>
              <a
                href="mailto:info@gemmablakeinteriordesign.co.uk"
                class="mt-1 block text-brown underline-offset-4 hover:underline"
              >
                info@gemmablakeinteriordesign.co.uk
              </a>
            </div>
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.23em] text-brown/60">
                Instagram
              </p>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                class="mt-1 block text-brown underline-offset-4 hover:underline"
              >
                @gemmablakeinteriordesign
              </a>
            </div>
          </div>

          <div class="rounded-3xl border border-light-gray/70 bg-beige/90 p-6 text-sm leading-relaxed text-brown/80">
            <p class="font-semibold">
              Two-Hour Consultation
            </p>
            <p class="mt-2">
              Consultations are typically held in your home or via video call, depending on
              location and project type. Please include a brief outline of your space, timescales,
              and any key challenges you&rsquo;d like to focus on.
            </p>
          </div>
        </div>

        <form
          class="space-y-4 rounded-3xl border border-light-gray/70 bg-beige/100 p-7 shadow-soft"
        >
          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <label class="block text-xs font-semibold uppercase tracking-[0.23em] text-brown/70">
                Name
              </label>
              <input
                type="text"
                class="mt-2 w-full rounded-full border border-light-gray/80 bg-beige/60 px-4 py-2 text-sm outline-none transition focus:border-brown focus:bg-beige/90"
                placeholder="Your full name"
              >
            </div>
            <div>
              <label class="block text-xs font-semibold uppercase tracking-[0.23em] text-brown/70">
                Email
              </label>
              <input
                type="email"
                class="mt-2 w-full rounded-full border border-light-gray/80 bg-beige/60 px-4 py-2 text-sm outline-none transition focus:border-brown focus:bg-beige/90"
                placeholder="you@example.com"
              >
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-[0.23em] text-brown/70">
              Project location
            </label>
            <input
              type="text"
              class="mt-2 w-full rounded-full border border-light-gray/80 bg-beige/60 px-4 py-2 text-sm outline-none transition focus:border-brown focus:bg-beige/90"
              placeholder="Town / area"
            >
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-[0.23em] text-brown/70">
              Project type
            </label>
            <select
              class="mt-2 w-full rounded-full border border-light-gray/80 bg-beige/60 px-4 py-2 text-sm outline-none transition focus:border-brown focus:bg-beige/90"
            >
              <option>Residential home</option>
              <option>Extension / renovation</option>
              <option>Commercial space</option>
              <option>Consultation only</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-semibold uppercase tracking-[0.23em] text-brown/70">
              Tell us about your project
            </label>
            <textarea
              rows="4"
              class="mt-2 w-full rounded-3xl border border-light-gray/80 bg-beige/60 px-4 py-3 text-sm outline-none transition focus:border-brown focus:bg-beige/90"
              placeholder="Share a brief overview, timescales and any key rooms or challenges."
            />
          </div>

          <div class="flex flex-wrap items-center justify-between gap-4 pt-2">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-full border border-gold bg-navy px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-beige shadow-soft transition hover:bg-brown hover:border-brown"
            >
              Submit enquiry
            </button>
            <p class="max-w-xs text-[11px] leading-relaxed text-brown/70">
              This is a visual form only. When the site goes live, this can be connected to your
              preferred email or booking system.
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>


