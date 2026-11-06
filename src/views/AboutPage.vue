<script setup>
const plannedPages = ['Home', 'About', 'Portfolio']

const palette = [
  { name: 'Ink', value: '#182a2b', className: 'ink' },
  { name: 'Parchment', value: '#f5f2eb', className: 'parchment' },
  { name: 'Moss', value: '#87977b', className: 'moss' },
  { name: 'Clay', value: '#d77d5d', className: 'clay' },
]
</script>

<template>
  <main>
    <section class="about-section">
      <div class="portfolio-container about-layout">
        <div class="section-label"><span>01</span> About me</div>
        <div class="about-copy">
          <h1>From hands-on work to software development.</h1>
          <p>
            My name is Jesse Wolfe-Emery, and I’m studying software and web development at Central
            Community College (CCC). Before returning to school, I spent several years working in
            construction and manufacturing, where I developed strong problem-solving skills,
            attention to detail, and a solid work ethic.
          </p>
          <p>
            Since 2025, I’ve been building my technical skills through college coursework and
            independent learning at home. I enjoy technology, web development, programming, and
            exploring how software can solve real-world problems.
          </p>
        </div>
      </div>
    </section>

    <section class="about-skills-section portfolio-container">
      <div class="section-label"><span>02</span> Technical skills</div>
      <div class="about-skills-content">
        <div>
          <h2>Tools I’m learning and building with.</h2>
          <p>
            Through my studies and personal projects, I’ve gained experience with languages,
            frameworks, and development tools. My projects have included website development,
            responsive design, databases, version control, and application development.
          </p>
          <p>
            Each project helps me strengthen my understanding of modern development practices and
            software design.
          </p>
        </div>
        <ul class="about-skill-list" aria-label="Technical skills">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>Vue.js</li>
          <li>Python</li>
          <li>Flask</li>
          <li>SQL</li>
          <li>SQLite</li>
          <li>Git</li>
          <li>GitHub</li>
          <li>VS Code</li>
          <li>Netlify</li>
        </ul>
      </div>
    </section>

    <section class="goals-section portfolio-container">
      <div class="section-label"><span>03</span> Looking ahead</div>
      <div class="goals-heading">
        <div>
          <h2>Growing into a professional developer.</h2>
          <p>
            My goal is to become a professional software developer and continue expanding my
            knowledge of web technologies, programming, and software engineering. I’m especially
            interested in web development, game design concepts, and how complex software systems
            are built.
          </p>
          <p>
            I plan to keep learning new tools and frameworks while building projects that challenge
            me. Ultimately, I want to create useful applications that help people and demonstrate
            what I’ve learned through education and hands-on experience.
          </p>
        </div>
        <span class="goals-mark" aria-hidden="true">✳</span>
      </div>
      <div class="goals-grid">
        <article class="goal-card">
          <span class="goal-number">01 / DEVELOP</span>
          <h3>Keep learning</h3>
          <p>Expand my knowledge of web technologies, programming, and software engineering.</p>
        </article>
        <article class="goal-card">
          <span class="goal-number">02 / EXPLORE</span>
          <h3>Understand how systems work</h3>
          <p>Explore game design concepts and the ideas behind complex software systems.</p>
        </article>
        <article class="goal-card">
          <span class="goal-number">03 / BUILD</span>
          <h3>Take on new challenges</h3>
          <p>Build projects that put new tools and ideas into practice.</p>
        </article>
        <article class="goal-card">
          <span class="goal-number">04 / CONTRIBUTE</span>
          <h3>Create useful applications</h3>
          <p>Use my education and hands-on experience to make things that help people.</p>
        </article>
      </div>
    </section>

    <section class="about-interests-section">
      <div class="portfolio-container about-interests-layout">
        <div class="section-label"><span>04</span> Personal interests</div>
        <div>
          <h2>Curiosity beyond the classroom.</h2>
          <ul class="about-interest-list">
            <li>Web development and software engineering</li>
            <li>Game design and programming concepts</li>
            <li>Learning new technologies and development tools</li>
            <li>Version control and collaborative development</li>
            <li>Building personal coding projects</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="site-plan-section">
      <div class="portfolio-container">
        <div class="section-label"><span>05</span> Design plan</div>
        <div class="site-plan-heading">
          <h2>A simple plan for the portfolio.</h2>
          <p>
            The homepage introduces me today. These design elements show how the portfolio can grow
            over the semester.
          </p>
        </div>
        <div class="blueprint-grid portfolio-blueprint">
          <article class="blueprint-card sitemap-card">
            <div class="card-topline">
              <span>Conceptual site map</span>
              <span class="card-index">A</span>
            </div>
            <div class="sitemap">
              <div class="map-node map-home">Home <span>current page</span></div>
              <div class="map-branches" aria-hidden="true"><i></i><i></i><i></i></div>
              <div class="map-children">
                <div v-for="page in plannedPages.slice(1)" :key="page" class="map-node">
                  {{ page }}
                </div>
              </div>
            </div>
            <p class="card-footnote">The three main pages that make up this portfolio.</p>
          </article>

          <article class="blueprint-card layout-card">
            <div class="card-topline">
              <span>Home page layout</span>
              <span class="card-index">B</span>
            </div>
            <div
              class="layout-sketch"
              aria-label="Wireframe showing navigation, introduction with portrait, and footer"
            >
              <div class="sketch-nav"><i></i><i></i><i></i></div>
              <div class="sketch-hero">
                <div class="sketch-lines"><i></i><i></i><i></i><b></b></div>
                <div class="sketch-photo"></div>
              </div>
              <div class="sketch-cards"><i></i><i></i><i></i></div>
              <div class="sketch-footer"></div>
            </div>
            <p class="card-footnote">Navigation → introduction → about → footer.</p>
          </article>

          <article class="blueprint-card palette-card">
            <div class="card-topline">
              <span>Color palette</span>
              <span class="card-index">C</span>
            </div>
            <div class="swatches">
              <div v-for="color in palette" :key="color.name" class="swatch">
                <span class="swatch-color" :class="color.className"></span>
                <span class="swatch-label"
                  >{{ color.name }}<small>{{ color.value }}</small></span
                >
              </div>
            </div>
            <p class="card-footnote">Calm, natural colors with a warm accent for contrast.</p>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-skills-section {
  display: grid;
  grid-template-columns: 0.58fr 1.42fr;
  gap: 62px;
  padding-block: 48px 78px;
  border-top: 1px solid #deddd4;
}

.about-skills-content {
  display: grid;
  grid-template-columns: 1fr 0.9fr;
  align-items: start;
  gap: 32px;
}

.about-skills-content h2,
.about-interests-layout h2 {
  margin: 0 0 14px;
  font-family: var(--serif);
  font-size: clamp(30px, 3.4vw, 40px);
  font-weight: 400;
  letter-spacing: -0.035em;
  line-height: 1.1;
}

.about-skills-content p {
  margin: 0 0 11px;
  color: #626d66;
  font-size: 12px;
  line-height: 1.85;
}

.about-skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.about-skill-list li {
  padding: 9px 11px;
  border: 1px solid #d7d8cf;
  background: #f8f6f0;
  color: #46554c;
  font-size: 10px;
  font-weight: 600;
}

.goals-heading p + p {
  margin-top: 9px;
}

.about-interests-section {
  padding-block: 65px 72px;
  background: #ebe9e0;
}

.about-interests-layout {
  display: grid;
  grid-template-columns: 0.58fr 1.42fr;
  gap: 62px;
}

.about-interest-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 28px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.about-interest-list li {
  padding: 13px 0;
  border-bottom: 1px solid #d2d2c8;
  color: #626d66;
  font-size: 11px;
  line-height: 1.6;
}

@media (max-width: 850px) {
  .about-skills-section,
  .about-interests-layout {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 600px) {
  .about-skills-section {
    padding-block: 38px 55px;
  }

  .about-skills-content {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .about-interest-list {
    grid-template-columns: 1fr;
  }
}
</style>
