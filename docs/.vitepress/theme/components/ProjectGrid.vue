<script setup lang="ts">
import { useRouter } from 'vitepress'
// @ts-ignore
import type { ProjectItem } from '../../data/projects'

defineProps<{ projects: ProjectItem[] }>()

const router = useRouter()

function open(link: string) {
  router.go(link)
}
</script>

<template>
  <div class="project-grid">
    <div
      v-for="p in projects"
      :key="p.name"
      class="project-card"
      role="link"
      tabindex="0"
      @click="open(p.link)"
      @keydown.enter="open(p.link)"
    >
      <div class="card-head">
        <span class="card-title">{{ p.name }}</span>
        <span v-if="p.status" class="status">{{ p.status }}</span>
      </div>

      <p class="desc">{{ p.description }}</p>

      <div class="card-foot">
        <div class="tags">
          <span v-for="t in p.tags || []" :key="t" class="tag">{{ t }}</span>
        </div>
        <a
          v-if="p.github"
          class="gh"
          :href="p.github"
          target="_blank"
          rel="noopener noreferrer"
          title="在 GitHub 上查看"
          @click.stop
        >GitHub ↗</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 16px;
  margin: 16px 0 24px;
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  cursor: pointer;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
}

.project-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
}

.card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.card-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.status {
  flex-shrink: 0;
  font-size: 12px;
  line-height: 20px;
  padding: 0 8px;
  border-radius: 10px;
  color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.desc {
  flex: 1;
  margin: 0;
  font-size: 13.5px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

.card-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-height: 22px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  font-size: 12px;
  line-height: 20px;
  padding: 0 8px;
  border-radius: 10px;
  color: var(--vp-c-text-2);
  background: var(--vp-c-default-soft);
}

.gh {
  flex-shrink: 0;
  font-size: 12.5px;
  color: var(--vp-c-text-2);
  text-decoration: none;
}

.gh:hover {
  color: var(--vp-c-brand-1);
}
</style>
