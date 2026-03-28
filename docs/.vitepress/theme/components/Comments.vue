<template>
  <div class="comments-wrapper">
    <h2>💬 Comments</h2>
    <div id="giscus-container"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // Clean up any previous instance
  const existing = document.querySelector('.giscus')
  if (existing) existing.remove()

  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.setAttribute('data-repo', 'jjlong150/excel-to-graphviz-comments')
  script.setAttribute('data-repo-id', 'R_kgDORypoLg')
  script.setAttribute('data-category', 'Blog Comments')
  script.setAttribute('data-category-id', 'DIC_kwDORypoLs4C5a_C')
  script.setAttribute('data-mapping', 'pathname')
  script.setAttribute('data-strict', '0')
  script.setAttribute('data-reactions-enabled', '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', 'bottom')
  script.setAttribute('data-theme', 'preferred_color_scheme')
  script.setAttribute('data-lang', 'en')
  script.setAttribute('crossorigin', 'anonymous')
  script.async = true

  const container = document.getElementById('giscus-container')
  if (container) {
    container.innerHTML = ''
    container.appendChild(script)
  }
})
</script>

<style scoped>
.comments-wrapper {
  margin-top: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
}

/* Keep the post content tight */
:deep(.vp-doc) {
  margin-bottom: 0 !important;
}

:deep(.vp-doc > *:last-child) {
  margin-bottom: 0 !important;
}
</style>