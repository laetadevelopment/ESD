<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import Introduction from '../sections/Introduction.vue'
import KeyFeatures from '../sections/KeyFeatures.vue'
import Testimonials from '../sections/Testimonials.vue'
import NewUsers from '../sections/NewUsers.vue'
import Login from '../sections/Login.vue'

const props = defineProps<{
  activeTab: string
}>()

const emit = defineEmits<{
  (e: 'updateActiveTab', tab: string): void
}>()

function updateActiveTab(tab: string) {
  emit('updateActiveTab', tab)
}

function freeTrial() {
  updateActiveTab('newUsers')
}
</script>

<template>
  <div class="content-nav">
    <nav>
      <a href="#" :class="['green', {'active': props.activeTab === 'introduction'}]" title="Introduction" @click.prevent="updateActiveTab('introduction')">Introduction</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'keyFeatures'}]" title="Key Features" @click.prevent="updateActiveTab('keyFeatures')">Key Features</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'testimonials'}]" title="Testimonials" @click.prevent="updateActiveTab('testimonials')">Testimonials</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'newUsers'}]" title="New Users" @click.prevent="updateActiveTab('newUsers')">New Users</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'login'}]" title="Login" @click.prevent="updateActiveTab('login')">Login</a>
    </nav>
  </div>
  <Introduction :activeTab="props.activeTab" v-if="props.activeTab === 'introduction'" @freeTrial="freeTrial" />
  <KeyFeatures :activeTab="props.activeTab" v-if="props.activeTab === 'keyFeatures'" />
  <Testimonials :activeTab="props.activeTab" v-if="props.activeTab === 'testimonials'" />
  <NewUsers :activeTab="props.activeTab" v-if="props.activeTab === 'newUsers'" />
  <Login :activeTab="props.activeTab" v-if="props.activeTab === 'login'" />
</template>
