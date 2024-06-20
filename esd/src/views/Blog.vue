<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import LatestPosts from '../sections/LatestPosts.vue'
import Categories from '../sections/Categories.vue'
import FeaturedArticles from '../sections/FeaturedArticles.vue'
import Subscribe from '../sections/Subscribe.vue'

const props = defineProps<{
  activeTab: string
}>()

const emit = defineEmits<{
  (e: 'updateActiveTab', tab: string): void
}>()

function updateActiveTab(tab: string) {
  emit('updateActiveTab', tab)
}
</script>

<template>
  <div class="content-nav">
    <nav>
      <a href="#" :class="['green', {'active': props.activeTab === 'latestPosts'}]" title="Latest Posts" @click.prevent="updateActiveTab('latestPosts')">Latest Posts</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'categories'}]" title="Categories" @click.prevent="updateActiveTab('categories')">Categories</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'featuredArticles'}]" title="Featured Articles" @click.prevent="updateActiveTab('featuredArticles')">Featured Articles</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'subscribe'}]" title="Subscribe" @click.prevent="updateActiveTab('subscribe')">Subscribe</a>
    </nav>
  </div>
  <LatestPosts v-if="props.activeTab === 'latestPosts'" />
  <Categories v-if="props.activeTab === 'categories'" />
  <FeaturedArticles v-if="props.activeTab === 'featuredArticles'" />
  <Subscribe v-if="props.activeTab === 'subscribe'" />
</template>
