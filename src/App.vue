<template>
  <div class="site-shell portfolio-home">
    <header class="portfolio-header">
      <RouterLink class="portfolio-wordmark" to="/" aria-label="Jesse Wolfe-Emery home">
        <span class="portfolio-monogram">JW</span>
        <span>Jesse Wolfe-Emery</span>
      </RouterLink>
      <nav class="portfolio-nav" aria-label="Main navigation">
        <RouterLink to="/" exact-active-class="is-active">Home</RouterLink>
        <RouterLink to="/about" active-class="is-active">About</RouterLink>
        <RouterLink to="/portfolio" active-class="is-active">Portfolio</RouterLink>
      </nav>
    </header>

    <RouterView />

    <footer class="portfolio-footer">
      <div class="portfolio-container">
        <span>Jesse Wolfe-Emery</span>
        <span>Learning today. Building for tomorrow.</span>
      </div>
    </footer>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display:ital@0;1&display=swap');

:root {
  font-family: 'DM Sans', sans-serif;
  color: #182a2b;
  background: #f5f2eb;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-optical-sizing: auto;
  font-weight: 400;
  --ink: #182a2b;
  --paper: #f5f2eb;
  --moss: #87977b;
  --clay: #d77d5d;
  --muted: #727b73;
  --serif: 'DM Serif Display', Georgia, serif;
}

* {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  min-width: 320px;
  margin: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
button,
a {
  -webkit-tap-highlight-color: transparent;
}

.site-shell {
  overflow: hidden;
}
.section-wrap,
.site-header,
.site-footer {
  width: min(1120px, calc(100% - 96px));
  margin-inline: auto;
}
.site-header {
  min-height: 86px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #deddd4;
}
.wordmark {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.wordmark-mark {
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 1px solid var(--ink);
  border-radius: 50%;
  font-family: var(--serif);
  font-size: 13px;
  font-weight: 400;
}
.main-nav {
  display: flex;
  gap: 32px;
  margin-left: 60px;
}
.nav-link,
.header-cta {
  font-size: 11px;
  font-weight: 600;
}
.nav-link {
  color: #777d75;
  transition: color 0.2s ease;
}
.nav-link:hover,
.nav-link.active {
  color: var(--ink);
}
.header-cta {
  padding: 12px 15px;
  border: 1px solid #c8cbc0;
  border-radius: 3px;
}
.header-cta span {
  margin-left: 10px;
  color: var(--clay);
}

.hero {
  position: relative;
  display: grid;
  grid-template-columns: 1.12fr 0.88fr;
  align-items: center;
  min-height: 615px;
  padding-block: 68px 82px;
}
.hero-copy {
  position: relative;
  z-index: 1;
  padding-bottom: 7px;
}
.eyebrow {
  margin: 0 0 23px;
  color: #778270;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
.status-dot {
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-right: 7px;
  border-radius: 50%;
  background: var(--clay);
  vertical-align: 1px;
}
h1,
h2,
h3,
p {
  margin-top: 0;
}
h1,
h2 {
  font-family: var(--serif);
  font-weight: 400;
  letter-spacing: -0.035em;
}
h1 {
  max-width: 660px;
  margin-bottom: 24px;
  font-size: clamp(50px, 6.5vw, 78px);
  line-height: 0.99;
}
h1 span {
  color: var(--moss);
  font-style: italic;
}
.hero-intro {
  max-width: 470px;
  margin-bottom: 28px;
  color: #626d66;
  font-size: 14px;
  line-height: 1.85;
}
.hero-intro strong {
  color: var(--ink);
  font-weight: 700;
}
.hero-actions {
  display: flex;
  align-items: center;
  gap: 25px;
}
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  min-height: 47px;
  padding: 0 17px;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 700;
  transition:
    transform 0.2s ease,
    background 0.2s ease;
}
.button:hover {
  transform: translateY(-2px);
}
.button-dark {
  color: white;
  background: var(--ink);
}
.button-dark:hover {
  background: #2a4240;
}
.button span {
  color: #df9b7f;
  font-size: 15px;
}
.text-link {
  font-size: 11px;
  font-weight: 700;
}
.text-link span {
  padding-left: 5px;
  color: var(--clay);
}
.hero-note {
  display: flex;
  align-items: center;
  gap: 11px;
  margin-top: 59px;
}
.note-line {
  width: 28px;
  height: 1px;
  background: var(--clay);
}
.hero-note p {
  margin: 0;
  color: #7a8078;
  font-family: var(--serif);
  font-size: 14px;
  font-style: italic;
}
.portrait-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.portrait-frame {
  position: relative;
  display: grid;
  width: min(100%, 360px);
  aspect-ratio: 0.84;
  place-items: center;
  overflow: hidden;
  background: #dfe2d7;
}
.portrait-photo {
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
}
.portrait-frame::before {
  position: absolute;
  z-index: 2;
  inset: 17px;
  border: 1px solid rgb(24 42 43 / 17%);
  content: '';
}
.portrait-frame::after {
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  background:
    linear-gradient(0deg, rgb(24 42 43 / 68%), transparent 38%),
    linear-gradient(140deg, transparent 40%, rgb(135 151 123 / 18%));
  content: '';
}
.portrait-caption {
  position: absolute;
  z-index: 3;
  right: 28px;
  bottom: 26px;
  display: flex;
  align-items: center;
  gap: 9px;
  color: #fff;
  font-size: 9px;
  line-height: 1.55;
}
.portrait-caption strong {
  font-size: 11px;
}
.caption-icon {
  color: var(--clay);
  font-size: 25px;
}
.hero-index {
  position: absolute;
  right: 0;
  bottom: 34px;
  color: #96988e;
  font-size: 9px;
  letter-spacing: 0.12em;
}

.intro-band {
  padding-block: 78px;
  color: #f5f2eb;
  background: var(--ink);
}
.intro-grid {
  display: grid;
  grid-template-columns: 0.7fr 1.8fr 0.72fr;
  align-items: start;
  gap: 45px;
}
.light-eyebrow {
  margin-top: 9px;
  color: #b7c0ab;
}
.intro-grid h2 {
  max-width: 620px;
  margin-bottom: 18px;
  font-size: clamp(32px, 4vw, 47px);
  line-height: 1.13;
}
.intro-grid div > p {
  max-width: 610px;
  margin-bottom: 0;
  color: #bdc4bb;
  font-size: 12px;
  line-height: 1.9;
}
.intro-aside {
  align-self: end;
  padding: 11px 0 0 18px;
  border-left: 1px solid #57645d;
}
.intro-aside .aside-mark {
  color: #d98d70;
  font-size: 23px;
}
.intro-aside p {
  margin: 9px 0 0;
  color: #c6c9c0;
  font-family: var(--serif);
  font-size: 12px;
  font-style: italic;
  line-height: 1.6;
}

.direction-section {
  padding-block: 104px 112px;
}
.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 50px;
  margin-bottom: 47px;
}
.section-heading .eyebrow {
  margin-bottom: 17px;
}
.section-heading h2,
.contact-content h2 {
  margin-bottom: 0;
  font-size: clamp(38px, 4.7vw, 56px);
  line-height: 1.06;
}
.section-summary {
  max-width: 370px;
  margin: 0 0 5px;
  color: #727a71;
  font-size: 12px;
  line-height: 1.85;
}
.focus-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid #d8d9cf;
}
.focus-card {
  position: relative;
  min-height: 213px;
  padding: 26px 25px 22px 0;
  border-right: 1px solid #d8d9cf;
}
.focus-card + .focus-card {
  padding-left: 27px;
}
.focus-card:last-child {
  border-right: 0;
}
.focus-number {
  position: absolute;
  top: 30px;
  right: 25px;
  color: #96998f;
  font-size: 9px;
  letter-spacing: 0.08em;
}
.focus-icon {
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  margin-bottom: 22px;
  border: 1px solid #b9c0b1;
  border-radius: 50%;
  color: #677665;
  font-size: 16px;
}
.focus-card h3 {
  margin-bottom: 9px;
  font-family: var(--serif);
  font-size: 20px;
  font-weight: 400;
}
.focus-card p {
  max-width: 245px;
  margin-bottom: 0;
  color: #767d74;
  font-size: 11px;
  line-height: 1.75;
}

.design-section {
  padding-block: 88px 100px;
  background: #ebe9e0;
}
.design-heading {
  margin-bottom: 40px;
}
.design-heading .section-summary {
  max-width: 330px;
}
.blueprint-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 14px;
}
.blueprint-card {
  min-height: 262px;
  padding: 21px 20px 18px;
  border: 1px solid #d8d7ce;
  background: #f7f5ef;
}
.card-topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #526158;
  font-size: 10px;
  font-weight: 700;
}
.card-index {
  color: #a0a195;
  font-size: 8px;
  font-weight: 500;
  letter-spacing: 0.1em;
}
.card-footnote {
  margin: 17px 0 0;
  color: #83857c;
  font-size: 9px;
  line-height: 1.5;
}
.sitemap {
  position: relative;
  max-width: 294px;
  margin: 25px auto 0;
}
.map-node {
  display: grid;
  min-height: 34px;
  place-items: center;
  border: 1px solid #d9dbd0;
  background: #fcfbf7;
  color: #526057;
  font-size: 9px;
  font-weight: 600;
}
.map-home {
  position: relative;
  width: 105px;
  margin: 0 auto;
  border-color: #a8b09e;
  background: #e5e8de;
  color: var(--ink);
}
.map-home span {
  position: absolute;
  top: -14px;
  right: -57px;
  color: #9b9c90;
  font-size: 7px;
  font-weight: 400;
}
.map-branches {
  position: relative;
  display: flex;
  justify-content: space-around;
  height: 26px;
  margin: 0 26px;
  border-top: 1px solid #c9ccc1;
}
.map-branches::before {
  position: absolute;
  top: -1px;
  left: 50%;
  height: 14px;
  border-left: 1px solid #c9ccc1;
  content: '';
}
.map-branches i {
  height: 10px;
  margin-top: -1px;
  border-left: 1px solid #c9ccc1;
}
.map-children {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}
.map-children .map-node {
  min-height: 30px;
}
.layout-sketch {
  height: 146px;
  margin-top: 18px;
  padding: 8px;
  border: 1px solid #e0dfd6;
  background: #eeece4;
}
.sketch-nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 14px;
  border-bottom: 1px solid #d2d2c8;
}
.sketch-nav i {
  width: 15%;
  height: 3px;
  background: #bdc4b6;
}
.sketch-hero {
  display: flex;
  justify-content: space-between;
  height: 66px;
  padding: 10px 9px;
}
.sketch-lines {
  display: flex;
  flex: 0.9;
  flex-direction: column;
  gap: 5px;
  padding-top: 3px;
}
.sketch-lines i {
  width: 88%;
  height: 4px;
  background: #bdc4b6;
}
.sketch-lines i:nth-child(2) {
  width: 63%;
}
.sketch-lines i:nth-child(3) {
  width: 75%;
}
.sketch-lines b {
  width: 30%;
  height: 8px;
  margin-top: 3px;
  background: #d89b7f;
}
.sketch-photo {
  width: 26%;
  background: #c6cebc;
}
.sketch-cards {
  display: flex;
  gap: 6px;
  height: 28px;
}
.sketch-cards i {
  flex: 1;
  border: 1px solid #d8d8ce;
  background: #faf9f4;
}
.sketch-footer {
  height: 8px;
  margin-top: 7px;
  background: #d5d5ca;
}
.swatches {
  display: grid;
  gap: 10px;
  margin-top: 20px;
}
.swatch {
  display: flex;
  align-items: center;
  gap: 9px;
}
.swatch-color {
  width: 34px;
  height: 28px;
  border: 1px solid rgb(24 42 43 / 8%);
}
.swatch-color.ink {
  background: #182a2b;
}
.swatch-color.parchment {
  background: #f5f2eb;
}
.swatch-color.moss {
  background: #87977b;
}
.swatch-color.clay {
  background: #d77d5d;
}
.swatch-label {
  display: flex;
  flex: 1;
  justify-content: space-between;
  color: #4c5a52;
  font-size: 9px;
}
.swatch-label small {
  color: #97978c;
  font-size: 8px;
}

.contact-section {
  position: relative;
  display: flex;
  align-items: start;
  justify-content: space-between;
  min-height: 325px;
  padding-block: 76px;
}
.contact-section > .eyebrow {
  margin-top: 9px;
}
.contact-content {
  max-width: 490px;
  margin-right: 190px;
}
.contact-content h2 {
  margin-bottom: 16px;
}
.contact-content p {
  max-width: 410px;
  margin-bottom: 23px;
  color: #727a71;
  font-size: 12px;
  line-height: 1.8;
}
.button-light {
  border: 1px solid #c4c7bb;
}
.button-light span {
  color: var(--clay);
}
.contact-stamp {
  position: absolute;
  right: 38px;
  top: 79px;
  display: flex;
  width: 108px;
  height: 108px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #aeb6a8;
  border-radius: 50%;
  color: #7b8876;
  text-align: center;
  transform: rotate(9deg);
}
.contact-stamp span {
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.13em;
  line-height: 1.5;
}
.contact-stamp b {
  position: absolute;
  right: -9px;
  bottom: 0;
  color: var(--clay);
  font-size: 21px;
  font-weight: 400;
}
.site-footer {
  display: flex;
  min-height: 76px;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #deddd4;
}
.footer-wordmark {
  font-size: 11px;
}
.footer-wordmark .wordmark-mark {
  width: 28px;
  height: 28px;
  font-size: 11px;
}
.site-footer p,
.back-top {
  margin: 0;
  color: #82867c;
  font-size: 9px;
}
.back-top {
  color: #46554c;
  font-weight: 700;
}

@media (min-width: 1440px) {
  .hero {
    min-height: 680px;
  }
}

@media (max-width: 850px) {
  .section-wrap,
  .site-header,
  .site-footer {
    width: min(100% - 52px, 700px);
  }
  .site-header {
    min-height: 74px;
  }
  .main-nav {
    gap: 17px;
    margin-left: 0;
  }
  .header-cta {
    padding: 10px 11px;
  }
  .hero {
    min-height: 555px;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 18px;
  }
  h1 {
    font-size: clamp(46px, 7vw, 65px);
  }
  .intro-grid {
    grid-template-columns: 0.65fr 1.7fr;
    gap: 26px;
  }
  .intro-aside {
    grid-column: 2;
  }
  .focus-card {
    padding-right: 16px;
  }
  .focus-card + .focus-card {
    padding-left: 16px;
  }
  .focus-card h3 {
    font-size: 18px;
  }
  .blueprint-grid {
    grid-template-columns: 1fr 1fr;
  }
  .palette-card {
    grid-column: span 2;
    min-height: 175px;
  }
  .swatches {
    grid-template-columns: repeat(4, 1fr);
  }
  .swatch {
    align-items: start;
    flex-direction: column;
  }
  .swatch-label {
    width: 100%;
  }
  .contact-content {
    margin-right: 135px;
  }
}

@media (max-width: 600px) {
  .section-wrap,
  .site-header,
  .site-footer {
    width: calc(100% - 40px);
  }
  .site-header {
    min-height: 69px;
    flex-wrap: wrap;
  }
  .wordmark {
    gap: 8px;
    font-size: 11px;
  }
  .wordmark-mark {
    width: 30px;
    height: 30px;
  }
  .main-nav {
    order: 3;
    width: 100%;
    justify-content: space-between;
    gap: 8px;
    padding: 0 0 13px;
  }
  .nav-link {
    font-size: 10px;
  }
  .header-cta {
    padding: 9px;
    font-size: 10px;
  }
  .header-cta span {
    margin-left: 3px;
  }
  .hero {
    grid-template-columns: 1fr;
    gap: 38px;
    padding-block: 61px 58px;
  }
  .hero-copy {
    padding: 0;
  }
  .eyebrow {
    margin-bottom: 18px;
    font-size: 9px;
  }
  h1 {
    margin-bottom: 19px;
    font-size: clamp(48px, 13vw, 68px);
  }
  .hero-intro {
    font-size: 13px;
  }
  .hero-note {
    margin-top: 34px;
  }
  .portrait-frame {
    width: min(85%, 330px);
  }
  .hero-index {
    bottom: 24px;
  }
  .intro-band {
    padding-block: 55px;
  }
  .intro-grid {
    grid-template-columns: 1fr;
    gap: 14px;
  }
  .intro-grid h2 {
    font-size: 36px;
  }
  .intro-aside {
    grid-column: 1;
    margin-top: 12px;
  }
  .direction-section {
    padding-block: 70px;
  }
  .section-heading {
    align-items: start;
    flex-direction: column;
    gap: 18px;
    margin-bottom: 30px;
  }
  .section-heading h2,
  .contact-content h2 {
    font-size: 42px;
  }
  .focus-grid {
    grid-template-columns: 1fr;
  }
  .focus-card,
  .focus-card + .focus-card {
    min-height: auto;
    padding: 22px 38px 22px 0;
    border-right: 0;
    border-bottom: 1px solid #d8d9cf;
  }
  .focus-card:last-child {
    border-bottom: 0;
  }
  .focus-number {
    top: 27px;
    right: 4px;
  }
  .focus-icon {
    margin-bottom: 14px;
  }
  .design-section {
    padding-block: 65px;
  }
  .blueprint-grid {
    grid-template-columns: 1fr;
  }
  .blueprint-card,
  .palette-card {
    grid-column: auto;
    min-height: 245px;
  }
  .palette-card {
    min-height: 188px;
  }
  .swatches {
    grid-template-columns: repeat(2, 1fr);
  }
  .swatch {
    align-items: center;
    flex-direction: row;
  }
  .swatch-label {
    flex-direction: column;
    gap: 3px;
  }
  .contact-section {
    min-height: 320px;
    flex-direction: column;
    gap: 12px;
    padding-block: 60px;
  }
  .contact-content {
    margin-right: 0;
  }
  .contact-content h2 {
    max-width: 310px;
  }
  .contact-stamp {
    top: 37px;
    right: 3px;
    width: 75px;
    height: 75px;
  }
  .contact-stamp span {
    font-size: 6px;
  }
  .contact-stamp b {
    font-size: 16px;
  }
  .site-footer {
    min-height: 105px;
    flex-wrap: wrap;
    gap: 6px;
    padding-block: 14px;
  }
  .site-footer p {
    order: 3;
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    transition-duration: 0.01ms !important;
  }
}

.portfolio-home {
  --ink: #182a2b;
  --paper: #f5f2eb;
  min-height: 100vh;
  color: var(--ink);
  background: var(--paper);
}
.portfolio-container {
  width: min(1120px, calc(100% - 64px));
  margin-inline: auto;
}
.portfolio-header {
  display: flex;
  width: min(1120px, calc(100% - 64px));
  min-height: 78px;
  align-items: center;
  justify-content: space-between;
  margin-inline: auto;
  border-bottom: 1px solid #deddd4;
}
.portfolio-wordmark {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  font-weight: 700;
}
.portfolio-monogram {
  display: grid;
  width: 32px;
  height: 32px;
  place-items: center;
  border: 1px solid #182a2b;
  border-radius: 50%;
  font-family: var(--serif);
  font-size: 12px;
  font-weight: 400;
}
.portfolio-nav {
  display: flex;
  align-items: center;
  gap: 27px;
}
.portfolio-nav a {
  color: #626d66;
  font-size: 11px;
  font-weight: 600;
}
.portfolio-nav a:hover {
  color: #182a2b;
}
.portfolio-nav a.is-active {
  color: #182a2b;
}
.portfolio-nav .nav-contact {
  padding: 10px 15px;
  border: 1px solid #bcc4b7;
  border-radius: 3px;
  color: #182a2b;
}
.portfolio-hero {
  background: #eeeae0;
}
.portfolio-hero-inner {
  position: relative;
  display: grid;
  width: min(1120px, calc(100% - 64px));
  min-height: 530px;
  grid-template-columns: 1.12fr 0.78fr;
  align-items: center;
  gap: 70px;
  margin-inline: auto;
  padding-block: 60px;
}
.portfolio-hero-copy {
  position: relative;
  z-index: 1;
}
.portfolio-eyebrow,
.section-label {
  color: #6f7c6a;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.portfolio-eyebrow {
  margin: 0 0 23px;
}
.portfolio-eyebrow span {
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-right: 7px;
  border-radius: 50%;
  background: #d77d5d;
  vertical-align: 1px;
}
.portfolio-hero h1 {
  max-width: 640px;
  margin: 0;
  font-family: var(--serif);
  font-size: clamp(48px, 6.2vw, 76px);
  font-weight: 400;
  letter-spacing: -0.045em;
  line-height: 0.98;
}
.portfolio-hero h1 span {
  color: #718268;
  font-style: italic;
}
.portfolio-role {
  margin: 20px 0 12px;
  color: #182a2b;
  font-size: 13px;
  font-weight: 700;
}
.portfolio-lede {
  max-width: 480px;
  margin: 0;
  color: #626d66;
  font-size: 13px;
  line-height: 1.8;
}
.portfolio-actions {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 25px;
}
.portfolio-button {
  display: inline-flex;
  min-height: 44px;
  align-items: center;
  gap: 20px;
  padding: 0 16px;
  border-radius: 3px;
  color: white;
  background: #182a2b;
  font-size: 11px;
  font-weight: 700;
}
.portfolio-button:hover {
  background: #304340;
}
.portfolio-button span {
  color: #e3a187;
  font-size: 15px;
}
.portfolio-secondary-link {
  font-size: 11px;
  font-weight: 700;
}
.portfolio-secondary-link span {
  margin-left: 4px;
  color: #d77d5d;
}
.portfolio-portrait {
  position: relative;
  width: min(100%, 220px);
  justify-self: center;
  margin: 0;
  padding: 0;
}
.portfolio-portrait img {
  position: relative;
  display: block;
  width: 100%;
  /* Match the square source to preserve the full portrait without a tall crop. */
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
}
.portfolio-portrait figcaption {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 12px;
  padding: 11px 14px;
  color: white;
  background: #182a2b;
}
.portfolio-portrait figcaption span:first-child {
  font-size: 10px;
  font-weight: 700;
}
.portfolio-portrait figcaption span:last-child {
  color: #d4dbd0;
  font-size: 8px;
  text-align: right;
}
.hero-side-note {
  position: absolute;
  right: -43px;
  bottom: 50%;
  color: #87917f;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.18em;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}

.about-section {
  padding-block: 78px 82px;
}
.about-layout {
  display: grid;
  grid-template-columns: 0.58fr 1.42fr;
  gap: 62px;
}
.section-label {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
}
.section-label span {
  color: #d77d5d;
  font-size: 9px;
}
.about-copy h2,
.goals-heading h2,
.site-plan-heading h2,
.contact-section h2 {
  margin: 0;
  font-family: var(--serif);
  font-weight: 400;
  letter-spacing: -0.035em;
}
.about-copy h1 {
  max-width: 620px;
  margin: 0 0 15px;
  font-family: var(--serif);
  font-size: clamp(34px, 4vw, 46px);
  font-weight: 400;
  letter-spacing: -0.035em;
  line-height: 1.1;
}
.about-copy h2 {
  max-width: 620px;
  margin-bottom: 15px;
  font-size: clamp(34px, 4vw, 46px);
  line-height: 1.1;
}
.about-copy p {
  max-width: 660px;
  margin: 0 0 11px;
  color: #626d66;
  font-size: 12px;
  line-height: 1.85;
}
.about-copy p:last-child {
  margin-bottom: 0;
}
.goals-section {
  padding-block: 48px 90px;
  border-top: 1px solid #deddd4;
}
.goals-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 40px;
  margin: 20px 0 31px;
}
.goals-heading > div {
  max-width: 660px;
}
.goals-heading h2,
.site-plan-heading h2 {
  font-size: clamp(34px, 4.2vw, 48px);
  line-height: 1.06;
}
.goals-heading p,
.site-plan-heading p {
  max-width: 590px;
  margin: 12px 0 0;
  color: #626d66;
  font-size: 12px;
  line-height: 1.8;
}
.goals-mark {
  color: #d77d5d;
  font-size: 31px;
}
.goals-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}
.goal-card {
  min-height: 154px;
  padding: 21px 22px;
  border: 1px solid #d7d8cf;
  background: #f8f6f0;
}
.goal-number {
  color: #829078;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.12em;
}
.goal-card h3 {
  margin: 13px 0 7px;
  font-family: var(--serif);
  font-size: 20px;
  font-weight: 400;
}
.goal-card p {
  max-width: 360px;
  margin: 0;
  color: #626d66;
  font-size: 12px;
  line-height: 1.75;
}
.site-plan-section {
  padding-block: 69px 78px;
  background: #ebe9e0;
}
.site-plan-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 30px;
  margin: 18px 0 30px;
}
.site-plan-heading h2 {
  max-width: 500px;
}
.site-plan-heading p {
  max-width: 365px;
  margin: 0 0 3px;
}
.portfolio-blueprint {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}
.portfolio-blueprint .blueprint-card {
  min-width: 0;
  min-height: 254px;
  padding: 17px;
  border-color: #d5d5cb;
  background: #f8f6f0;
}
.portfolio-blueprint .card-topline {
  color: #344840;
  font-size: 10px;
}
.portfolio-blueprint .card-index {
  color: #87917f;
}
.portfolio-blueprint .card-footnote {
  color: #737b72;
  font-size: 9px;
}
.portfolio-blueprint .layout-sketch {
  height: 145px;
}
.portfolio-blueprint .palette-card {
  grid-column: auto;
}
.portfolio-blueprint .swatches {
  gap: 9px;
}
.portfolio-blueprint .swatch-color {
  flex: 0 0 auto;
}
.portfolio-blueprint .swatch-label {
  flex-direction: column;
  gap: 3px;
  font-size: 9px;
}
.portfolio-blueprint .swatch-label small {
  font-size: 8px;
}
.contact-section.portfolio-container {
  display: flex;
  min-height: 210px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-block: 45px;
}
.contact-section .section-label {
  margin-bottom: 13px;
}
.contact-section h2 {
  font-size: 36px;
}
.contact-section p:last-child {
  margin: 9px 0 0;
  color: #626d66;
  font-size: 12px;
}
.contact-back-to-top {
  color: #46554c;
  font-size: 11px;
  font-weight: 700;
}
.contact-back-to-top:hover {
  color: #d77d5d;
}
.portfolio-footer {
  border-top: 1px solid #deddd4;
}
.portfolio-footer > div {
  display: flex;
  min-height: 66px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: #737b72;
  font-size: 9px;
}
.portfolio-footer > div span:first-child {
  color: #344840;
  font-weight: 700;
}
.home-next-section {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 48px;
  padding-block: 70px 78px;
}
.home-next-section > div {
  max-width: 670px;
}
.home-next-section h2 {
  margin: 18px 0 12px;
  font-family: var(--serif);
  font-size: clamp(32px, 4vw, 45px);
  font-weight: 400;
  letter-spacing: -0.035em;
  line-height: 1.1;
}
.home-next-section > div > p:last-child {
  margin: 0;
  color: #626d66;
  font-size: 12px;
  line-height: 1.85;
}
.home-next-section .contact-back-to-top span {
  color: #d77d5d;
}
.portfolio-page {
  min-height: calc(100vh - 144px);
  padding-block: 66px 90px;
}
.portfolio-page-heading {
  padding-bottom: 30px;
  border-bottom: 1px solid #deddd4;
}
.portfolio-page-title {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 30px;
  margin-top: 20px;
}
.portfolio-page-title h1 {
  margin: 0;
  font-family: var(--serif);
  font-size: clamp(40px, 5vw, 60px);
  font-weight: 400;
  letter-spacing: -0.04em;
  line-height: 1.05;
}
.portfolio-page-title p {
  max-width: 580px;
  margin: 13px 0 0;
  color: #626d66;
  font-size: 12px;
  line-height: 1.8;
}
.github-profile-link {
  flex: 0 0 auto;
  padding: 12px 15px;
  border: 1px solid #bcc4b7;
  border-radius: 3px;
  font-size: 11px;
  font-weight: 700;
}
.github-profile-link span {
  margin-left: 9px;
  color: #d77d5d;
}
.repository-status {
  padding-block: 44px;
  color: #626d66;
  font-size: 13px;
}
.repository-error p {
  margin-bottom: 14px;
}
.retry-button {
  padding: 10px 14px;
  border: 1px solid #bcc4b7;
  border-radius: 3px;
  color: #182a2b;
  background: transparent;
  cursor: pointer;
  font: inherit;
  font-size: 11px;
  font-weight: 700;
}
.retry-button:hover {
  background: #ebe9e0;
}
.repository-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  padding-top: 27px;
}
.repository-card {
  display: flex;
  min-height: 215px;
  flex-direction: column;
  padding: 22px;
  border: 1px solid #d7d8cf;
  background: #f8f6f0;
}
.repository-card-heading,
.repository-details {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.repository-mark {
  color: #829078;
  font-size: 22px;
}
.repository-language {
  color: #727b73;
  font-size: 10px;
}
.repository-card h2 {
  margin: 14px 0 8px;
  font-family: var(--serif);
  font-size: 23px;
  font-weight: 400;
}
.repository-card h2 a:hover {
  color: #718268;
}
.repository-card h2 a span {
  color: #d77d5d;
  font-family: 'DM Sans', sans-serif;
  font-size: 12px;
}
.repository-description {
  margin: 0 0 20px;
  color: #626d66;
  font-size: 11px;
  line-height: 1.7;
}
.repository-details {
  margin-top: auto;
  color: #727b73;
  font-size: 9px;
}
.portfolio-nav a:focus-visible,
.portfolio-wordmark:focus-visible,
.portfolio-button:focus-visible,
.portfolio-secondary-link:focus-visible,
.github-profile-link:focus-visible,
.repository-card a:focus-visible,
.retry-button:focus-visible {
  outline: 2px solid #d77d5d;
  outline-offset: 3px;
}

@media (max-width: 850px) {
  .portfolio-hero-inner {
    grid-template-columns: 1.1fr 0.8fr;
    gap: 35px;
  }
  .hero-side-note {
    right: -20px;
  }
  .portfolio-blueprint {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .portfolio-page-title {
    align-items: start;
    flex-direction: column;
  }
  .repository-grid {
    grid-template-columns: 1fr;
  }
  .portfolio-blueprint .palette-card {
    grid-column: 1 / -1;
  }
  .portfolio-blueprint .swatches {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
@media (max-width: 600px) {
  .portfolio-header {
    width: calc(100% - 36px);
    min-height: 66px;
  }
  .portfolio-wordmark {
    font-size: 10px;
  }
  .portfolio-monogram {
    width: 29px;
    height: 29px;
  }
  .portfolio-nav {
    gap: 12px;
  }
  .portfolio-nav a {
    font-size: 9px;
  }
  .portfolio-hero-inner {
    width: calc(100% - 40px);
    min-height: auto;
    grid-template-columns: 1fr;
    gap: 30px;
    padding-block: 50px 44px;
  }
  .portfolio-eyebrow {
    margin-bottom: 18px;
    font-size: 8px;
  }
  .portfolio-hero h1 {
    font-size: clamp(45px, 12vw, 61px);
  }
  .portfolio-role {
    margin-top: 14px;
  }
  .portfolio-lede {
    font-size: 12px;
  }
  .portfolio-actions {
    gap: 17px;
  }
  .portfolio-button {
    min-height: 42px;
    gap: 12px;
    padding-inline: 12px;
    font-size: 10px;
  }
  .portfolio-secondary-link {
    font-size: 10px;
  }
  .portfolio-portrait {
    width: min(78%, 250px);
    padding-left: 13px;
  }
  .hero-side-note {
    display: none;
  }
  .portfolio-container {
    width: calc(100% - 40px);
  }
  .home-next-section {
    align-items: start;
    flex-direction: column;
    gap: 22px;
    padding-block: 48px 54px;
  }
  .portfolio-page {
    padding-block: 45px 60px;
  }
  .portfolio-page-title {
    gap: 20px;
  }
  .portfolio-page-title h1 {
    font-size: 42px;
  }
  .portfolio-page-title p {
    font-size: 11px;
  }
  .repository-card {
    min-height: 195px;
    padding: 18px;
  }
  .about-section {
    padding-block: 48px 54px;
  }
  .about-layout {
    grid-template-columns: 1fr;
    gap: 18px;
  }
  .about-copy h2 {
    font-size: 36px;
  }
  .about-copy p {
    font-size: 11px;
  }
  .goals-section {
    padding-block: 35px 56px;
  }
  .goals-heading {
    align-items: start;
    gap: 15px;
    margin: 16px 0 22px;
  }
  .goals-heading h2,
  .site-plan-heading h2 {
    font-size: 36px;
  }
  .goals-heading p,
  .site-plan-heading p {
    font-size: 11px;
  }
  .goals-mark {
    font-size: 23px;
  }
  .goals-grid {
    grid-template-columns: 1fr;
  }
  .goal-card {
    min-height: 0;
    padding: 18px;
  }
  .goal-card h3 {
    margin: 10px 0 6px;
  }
  .site-plan-section {
    padding-block: 48px 56px;
  }
  .site-plan-heading {
    align-items: start;
    flex-direction: column;
    gap: 10px;
    margin: 15px 0 22px;
  }
  .portfolio-blueprint {
    grid-template-columns: 1fr;
  }
  .portfolio-blueprint .blueprint-card,
  .portfolio-blueprint .palette-card {
    grid-column: auto;
    min-height: 245px;
  }
  .portfolio-blueprint .palette-card {
    min-height: 200px;
  }
  .portfolio-blueprint .swatches {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .portfolio-blueprint .swatch {
    align-items: center;
    flex-direction: row;
  }
  .portfolio-blueprint .swatch-label {
    flex: 1;
  }
  .contact-section.portfolio-container {
    min-height: 180px;
    padding-block: 35px;
  }
  .contact-section h2 {
    font-size: 31px;
  }
  .contact-back-to-top {
    font-size: 9px;
    white-space: nowrap;
  }
  .portfolio-footer > div {
    min-height: 58px;
    font-size: 8px;
  }
}
</style>
