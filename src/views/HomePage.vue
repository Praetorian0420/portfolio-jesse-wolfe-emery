<template>
  <main>
    <section class="portfolio-hero">
      <div class="portfolio-hero-inner">
        <div class="portfolio-hero-copy">
          <p class="portfolio-eyebrow"><span></span> Future software developer · Nebraska</p>
          <h1>Hi, I’m<br /><span>Jesse Wolfe-Emery.</span></h1>
          <p class="portfolio-role">Aspiring Software Developer</p>
          <p class="portfolio-lede">
            I’m building my skills to create useful, reliable software. I enjoy solving problems,
            learning how things work, and designing thoughtful experiences for the people who use
            them.
          </p>
          <div class="portfolio-actions">
            <RouterLink class="portfolio-button" to="/about"
              >Get to know me <span aria-hidden="true">↓</span></RouterLink
            >
            <RouterLink class="portfolio-secondary-link" to="/portfolio"
              >View my work <span aria-hidden="true">↗</span></RouterLink
            >
          </div>
        </div>
        <figure class="portfolio-portrait">
          <img src="/Jesse.jpg" alt="Professional portrait of Jesse Wolfe-Emery" />
          <figcaption>
            <span>Jesse Wolfe-Emery</span><span>Future software developer</span>
          </figcaption>
        </figure>
        <div class="hero-side-note" aria-hidden="true">LEARN · BUILD · GROW</div>
      </div>
    </section>

    <section class="home-next-section portfolio-container">
      <div>
        <p class="section-label"><span>01</span> A little about me</p>
        <h2>Curiosity is where good work begins.</h2>
        <p>
          I’m studying software development and working toward a career building useful, dependable
          software. I’m drawn to the mix of logic and creativity: understanding a problem, shaping a
          solution, and making sure it works well for real people.
        </p>
      </div>
      <RouterLink class="contact-back-to-top" to="/about">
        More about me <span aria-hidden="true">↗</span>
      </RouterLink>
    </section>
  </main>
</template>
