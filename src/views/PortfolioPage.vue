<script setup>
import { onMounted, ref } from 'vue'

const githubUsername = 'Praetorian0420'
const repositories = ref([])
const loading = ref(true)
const errorMessage = ref('')

async function loadRepositories() {
  loading.value = true
  errorMessage.value = ''

  try {
    const response = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=100`,
      { headers: { Accept: 'application/vnd.github+json' } },
    )

    if (!response.ok) {
      throw new Error(`GitHub returned ${response.status}. Please try again later.`)
    }

    const data = await response.json()

    if (!Array.isArray(data)) {
      throw new Error('GitHub returned an unexpected response. Please try again later.')
    }

    repositories.value = data.filter((repository) => !repository.fork)
  } catch (error) {
    errorMessage.value =
      error instanceof Error
        ? error.message
        : 'Unable to load GitHub repositories. Please try again later.'
  } finally {
    loading.value = false
  }
}

function formatUpdatedDate(date) {
  return new Intl.DateTimeFormat('en', { dateStyle: 'medium' }).format(new Date(date))
}

onMounted(loadRepositories)
</script>

<template>
  <main class="portfolio-page portfolio-container">
    <section class="portfolio-page-heading">
      <p class="section-label"><span>01</span> Selected work</p>
      <div class="portfolio-page-title">
        <div>
          <h1>My GitHub repositories.</h1>
          <p>
            Projects and experiments from my software development journey. This list is retrieved
            directly from my public GitHub account.
          </p>
        </div>
        <a
          class="github-profile-link"
          :href="`https://github.com/${githubUsername}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>

    <p v-if="loading" class="repository-status" role="status">Loading repositories…</p>

    <div v-else-if="errorMessage" class="repository-status repository-error" role="alert">
      <p>{{ errorMessage }}</p>
      <button class="retry-button" type="button" @click="loadRepositories">Try again</button>
    </div>

    <p v-else-if="repositories.length === 0" class="repository-status">
      No public repositories to show yet. Check back soon.
    </p>

    <div v-else class="repository-grid">
      <article v-for="repository in repositories" :key="repository.id" class="repository-card">
        <div class="repository-card-heading">
          <span class="repository-mark" aria-hidden="true">⌘</span>
          <span v-if="repository.language" class="repository-language">
            {{ repository.language }}
          </span>
        </div>
        <h2>
          <a :href="repository.html_url" target="_blank" rel="noopener noreferrer">
            {{ repository.name }} <span aria-hidden="true">↗</span>
          </a>
        </h2>
        <p class="repository-description">
          {{ repository.description || 'A project in progress from my software development journey.' }}
        </p>
        <div class="repository-details">
          <span>★ {{ repository.stargazers_count }}</span>
          <span>Updated {{ formatUpdatedDate(repository.updated_at) }}</span>
        </div>
      </article>
    </div>
  </main>
</template>
