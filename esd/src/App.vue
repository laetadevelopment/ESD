<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import MobileMenu from '@/components/MobileMenu.vue'
import { useNavigationStore } from '@/stores/navigation'
import { useUserStore } from '@/stores/user'

const route = useRoute()
const activeTab = ref('')
const openAccordionSections = ref<Set<number>>(new Set())
const isMobileMenuOpen = ref(false)
const router = useRouter()
const navigationStore = useNavigationStore()
const userStore = useUserStore()

router.beforeEach((to, from, next) => {
  activeTab.value = to.meta.defaultSection as string
  navigationStore.initializeGuestUserNavigation(to.path, to.meta.defaultSection as string)
  next()
})

watch(
  () => route.meta.defaultSection,
  (defaultSection) => {
    activeTab.value = defaultSection as string
    navigationStore.updateGuestUserNavigation(router.currentRoute.value.path, defaultSection as string)
  }
)

function updateActiveTab(tab: string) {
  activeTab.value = tab
  navigationStore.updateGuestUserNavigation(router.currentRoute.value.path, tab)
}

function toggleAccordionSection(index: number) {
  if (openAccordionSections.value.has(index)) {
    openAccordionSections.value.delete(index)
  } else {
    openAccordionSections.value.add(index)
  }
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

function navigateTo(path: string, tab: string) {
  router.push(path)
  updateActiveTab(tab)
  closeMobileMenu()
  navigationStore.updateGuestUserNavigation(path, tab)
}

async function handleLogout() {
  await userStore.logout()
  navigateTo('/', 'introduction')
}
</script>

<template>
  <header>
    <div class="logo">
      <RouterLink to="/" @click.prevent="navigateTo('/', 'introduction')">
        <img alt="ESD Logo" src="@/assets/esd.svg" />
      </RouterLink>
    </div>
    <div class="header-action">
      <RouterLink v-if="!userStore.currentUser" to="/" class="green" @click.prevent="navigateTo('/', 'login')">Login</RouterLink>
      <a v-else href="#" class="green" @click.prevent="handleLogout">Logout</a>
    </div>
    <nav>
      <RouterLink to="/" class="blue" @click.prevent="navigateTo('/', 'introduction')">Home</RouterLink>
      <RouterLink to="/about" class="blue" @click.prevent="navigateTo('/about', 'ourStory')">About</RouterLink>
      <RouterLink to="/features" class="blue" @click.prevent="navigateTo('/features', 'symbolDetection')">Features</RouterLink>
      <RouterLink to="/pricing" class="blue" @click.prevent="navigateTo('/pricing', 'individualPlans')">Pricing</RouterLink>
      <RouterLink to="/contact" class="blue" @click.prevent="navigateTo('/contact', 'contactUs')">Contact</RouterLink>
    </nav>
    <div class="mobile-nav">
      <a class="open blue" href="#" @click.prevent="toggleMobileMenu" title="Open Menu" :style="{ display: isMobileMenuOpen ? 'none' : 'flex' }">Menu</a>
      <a class="close green" href="#" @click.prevent="toggleMobileMenu" title="Close Menu" :style="{ display: isMobileMenuOpen ? 'flex' : 'none' }">Close</a>
    </div>
  </header>

  <main>
    <div class="sidebar">
      <nav>
        <RouterLink to="/dashboard" class="blue" @click.prevent="navigateTo('/dashboard', 'recentProjects')">Dashboard</RouterLink>
        <RouterLink to="/projects" class="blue" @click.prevent="navigateTo('/projects', 'allProjects')">Projects</RouterLink>
        <RouterLink to="/symbol-library" class="blue" @click.prevent="navigateTo('/symbol-library', 'electricalSymbols')">Symbol Library</RouterLink>
        <RouterLink to="/analytics" class="blue" @click.prevent="navigateTo('/analytics', 'recognitionAccuracy')">Analytics</RouterLink>
        <RouterLink to="/settings" class="blue" @click.prevent="navigateTo('/settings', 'accountSettings')">Settings</RouterLink>
      </nav>
    </div>
    <div class="content" :class="{ 'hidden': isMobileMenuOpen }">
      <router-view :activeTab="activeTab" @updateActiveTab="updateActiveTab" />
    </div>
    <MobileMenu
      :isMobileMenuOpen="isMobileMenuOpen"
      :activeTab="activeTab"
      @navigateTo="navigateTo"
      @toggleMobileMenu="toggleMobileMenu"
    />
  </main>

  <footer>
    <div class="logo">
      <RouterLink to="/" @click.prevent="navigateTo('/', 'home')">
        <img alt="ESD Logo" src="@/assets/esd.svg" />
      </RouterLink>
    </div>
    <div class="footer-action">
      <RouterLink v-if="!userStore.currentUser" to="/" class="green" @click.prevent="navigateTo('/', 'newUsers')">New Users</RouterLink>
      <RouterLink v-else to="/settings" class="green" @click.prevent="navigateTo('/settings', 'accountSettings')">Account</RouterLink>
    </div>
    <nav>
      <RouterLink to="/terms-of-service" class="blue" @click.prevent="navigateTo('/terms-of-service', 'overview')">Terms of Service</RouterLink>
      <RouterLink to="/privacy-policy" class="blue" @click.prevent="navigateTo('/privacy-policy', 'dataCollection')">Privacy Policy</RouterLink>
      <RouterLink to="/faq" class="blue" @click.prevent="navigateTo('/faq', 'gettingStarted')">FAQ</RouterLink>
      <RouterLink to="/support" class="blue" @click.prevent="navigateTo('/support', 'knowledgeBase')">Support</RouterLink>
      <RouterLink to="/blog" class="blue" @click.prevent="navigateTo('/blog', 'latestPosts')">Blog</RouterLink>
    </nav>
  </footer>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  font-family: "Noto Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
}
header {
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 10%;
  background: rgba(0,0,0,1);
}
.logo {
  display: flex;
  justify-content: center;
  width: 10%;
  height: 100%;
}
.logo a {
  display: flex;
}
.header-action {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100%;
}
.header-action a {
  display: flex;
}
header nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 100%;
}
.mobile-nav {
  display: none;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  width: 60%;
  height: 100%;
  padding-right: 25px;
}
.mobile-nav .close {
  display: none;
}
main {
  display: flex;
  width: 100%;
  height: 80%;
}
.sidebar {
  display: flex;
  flex-direction: column;
  padding: 25px;
  box-sizing: border-box;
  width: 15%;
  height: 100%;
  background: rgba(0,0,0,1);
}
.sidebar nav {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
}
.content {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 85%;
  height: 95%;
}
.content-nav {
  display: flex;
  padding: 5px;
  box-sizing: border-box;
  width: 100%;
  height: 5%;
  background: rgba(0,0,0,1);
}
.content-nav nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
}
.content-nav nav a {
  font-size: 22px;
  font-weight: normal;
}
.content-nav nav a.active {
  color: rgba(214,137,86,1);
}
.content-nav nav a.active:hover {
  color: rgba(214,137,86,.75);
}
.content-title {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 55px;
  background: rgba(0,0,0,1);
}
.content-notifications {
  display: flex;
  width: 100%;
}
.notification {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: rgba(255,255,255,1);
}
.notification.default {
  background-color: rgba(57,116,203,1);
}
.notification.success {
  background-color: rgba(89,189,230,1);
}
.notification.error {
  background-color: rgba(214,137,86,1);
}
.content-body {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-top: 5px solid rgba(255,255,255,1);
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,1);
  overflow-y: scroll;
}
.content-body img {
  max-width: 100%;
  margin: 0 auto;
}
.content-body form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
}
.content-body form div {
  display: flex;
  margin-bottom: 25px;
}
.content-body form div:last {
  margin-bottom: 0;
}
.content-body label {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  padding: 10px;
  width: 125px;
  height: 50px;
  font-size: 20px;
  line-height: 20px;
}
.content-body input {
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  padding: 10px;
  width: 250px;
  height: 50px;
  font-size: 25px;
  line-height: 25px;
}
.mobile-menu {
  display: none;
}
.mobile-menu nav {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0 auto;
}
.mobile-menu .accordion-section {
  display: flex;
  margin-bottom: 25px;
}
.mobile-menu .accordion-section:last  {
  margin-bottom: 0;
}
.mobile-menu .accordion-header {
  display: flex;
  cursor: pointer;
}
.mobile-menu .accordion-icon {
  font-size: 25px;
  transition: transform 0.3s ease;
  color: rgba(255,255,255,1);
}
.mobile-menu .accordion-icon:hover {
  color: rgba(255,255,255,.75);
}
.mobile-menu .accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  list-style: none;
}
.mobile-menu .accordion-content.open {
  max-height: 500px;
}
.mobile-menu .accordion-content li {
  margin-bottom: 10px;
  color: rgba(89,189,230,1);
  cursor: pointer;
}
.mobile-menu .accordion-content li:last {
  margin-bottom: 0;
}
.mobile-menu .accordion-content li:hover {
  color: rgba(89,189,230,.75);
  cursor: pointer;
}
footer {
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  height: 10%;
  background: rgba(0,0,0,1);
}
.footer-action {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 100%;
}
.footer-action a {
  display: flex;
}
footer nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 85%;
  height: 100%;
}
h1 {
  margin: 0;
  padding: 0;
  font-size: 4vh;
  line-height: 5vh;
  color: rgba(255,255,255,1);
}
a {
  margin: 0;
  padding: 0;
  font-size: 23px;
  line-height: 23px;
  font-weight: bold;
  color: rgba(57,116,203,1);
  text-decoration: none;
}
a:hover {
  color: rgba(57,116,203,.75);
}
p {
  font-size: 20px;
  line-height: 22px;
}
ol ul {
  margin-top: 5px;
}
li {
  font-size: 20px;
  line-height: 22px;
  margin-bottom: 10px;
}
li:last {
  margin-bottom: 0;
}
button {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  height: 50px;
  font-size: 25px;
  line-height: 25px;
  font-weight: bold;
  cursor: pointer;
}
nav .router-link-active {
  color: rgba(214,137,86,1);
}
nav .router-link-active:hover {
  color: rgba(214,137,86,.75);
}
.blue {
  color: rgba(57,116,203,1);
}
.blue:hover {
  color: rgba(57,116,203,.75);
}
.green {
  color: rgba(89,189,230,1);
}
.green:hover {
  color: rgba(89,189,230,.75);
}
.orange {
  color: rgba(214,137,86,1);
}
.orange:hover {
  color: rgba(214,137,86,.75);
}
.black {
  color: rgba(0,0,0,1);
}
.black:hover {
  color: rgba(0,0,0,.75);
}
.white {
  color: rgba(255,255,255,1);
}
.white:hover {
  color: rgba(255,255,255,.75);
}
@media (max-width: 1125px) {
  .logo {
    width: 20%;
  }
  .header-action {
    width: 20%;
  }
  header nav {
    display: none;
  }
  .mobile-nav {
    display: flex;
  }
  main {
    height: 90%;
  }
  .sidebar {
    display: none;
  }
  .content {
    width: 100%;
  }
  .content.hidden {
    display: none;
  }
  .content-nav {
    display: none;
  }
  .content-body {
    height: calc(100% - 55px);
  }
  .mobile-menu.visible {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,1);
    overflow-y: scroll;
  }
  footer {
    display: none;
  }
  footer nav {
    display: none;
  }
  h1 {
    font-size: 3vh;
    line-height: 3vh;
  }
}
@media (max-width: 500px) {
  .content-body form input {
    width: 150px;
  }
}
</style>
