<script setup lang="ts">
import { ref, watch, defineEmits } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const activeTab = ref('')
const openAccordionSections = ref<Set<number>>(new Set())
const isMobileMenuOpen = ref(false)
const router = useRouter()
const emit = defineEmits<{
  (e: 'updateActiveTab', tab: string): void
}>()

watch(
  () => route.meta.defaultSection,
  (defaultSection) => {
    activeTab.value = defaultSection as string
  },
  { immediate: true }
)

function updateActiveTab(tab: string) {
  activeTab.value = tab
  emit('updateActiveTab', tab)
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
}
</script>

<template>
  <header>
    <div class="logo">
      <RouterLink to="/" @click.prevent="navigateTo('/', 'introduction')">
        <img alt="ESD Logo" src="@/assets/esd.svg" />
      </RouterLink>
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
    <div class="mobile-menu" :class="{ 'visible': isMobileMenuOpen }">
      <nav>
        <a href="#" @click.prevent="navigateTo('/','introduction')">Home</a>
        <div class="accordion-section">
          <div class="accordion-header" @click="toggleAccordionSection(0)">
            <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(0) }">{{ openAccordionSections.has(0) ? '-' : '+' }}</span>
          </div>
          <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(0) }">
            <li @click="navigateTo('/','introduction')">Introduction</li>
            <li @click="navigateTo('/','keyFeatures')">Key Features</li>
            <li @click="navigateTo('/','testimonials')">Testimonials</li>
            <li @click="navigateTo('/','newUsers')">New Users</li>
            <li @click="navigateTo('/','login')">Login</li>
          </ul>
        </div>
        <a href="#" @click.prevent="navigateTo('/about','ourStory')">About</a>
        <div class="accordion-section">
          <div class="accordion-header" @click="toggleAccordionSection(1)">
            <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(1) }">{{ openAccordionSections.has(1) ? '-' : '+' }}</span>
          </div>
          <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(1) }">
            <li @click="navigateTo('/about','ourStory')">Our Story</li>
            <li @click="navigateTo('/about','team')">Team</li>
            <li @click="navigateTo('/about','visionAndMission')">Vision and Mission</li>
            <li @click="navigateTo('/about','pressAndMedia')">Press and Media</li>
          </ul>
        </div>
        <a href="#" @click.prevent="navigateTo('/features','symbolDetection')">Features</a>
        <div class="accordion-section">
          <div class="accordion-header" @click="toggleAccordionSection(2)">
            <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(2) }">{{ openAccordionSections.has(2) ? '-' : '+' }}</span>
          </div>
          <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(2) }">
            <li @click="navigateTo('/features','symbolDetection')">Symbol Detection</li>
            <li @click="navigateTo('/features','batchProcessing')">Batch Processing</li>
            <li @click="navigateTo('/features','collaborationTools')">Collaboration Tools</li>
            <li @click="navigateTo('/features','integrations')">Integrations</li>
            <li @click="navigateTo('/features','pwa')">PWA</li>
          </ul>
        </div>
        <a href="#" @click.prevent="navigateTo('/pricing','individualPlans')">Pricing</a>
        <div class="accordion-section">
          <div class="accordion-header" @click="toggleAccordionSection(3)">
            <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(3) }">{{ openAccordionSections.has(3) ? '-' : '+' }}</span>
          </div>
          <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(3) }">
            <li @click="navigateTo('/pricing','individualPlans')">Individual Plans</li>
            <li @click="navigateTo('/pricing','teamPlans')">Team Plans</li>
            <li @click="navigateTo('/pricing','enterpriseSolutions')">Enterprise Solutions</li>
            <li @click="navigateTo('/pricing','faq')">FAQ</li>
          </ul>
        </div>
        <a href="#" @click.prevent="navigateTo('/contact','contactUs')">Contact</a>
        <div class="accordion-section">
          <div class="accordion-header" @click="toggleAccordionSection(4)">
            <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(4) }">{{ openAccordionSections.has(4) ? '-' : '+' }}</span>
          </div>
          <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(4) }">
            <li @click="navigateTo('/contact','contactUs')">Contact Us</li>
            <li @click="navigateTo('/contact','supportOptions')">Support Options</li>
            <li @click="navigateTo('/contact','salesInquiries')">Sales Inquiries</li>
            <li @click="navigateTo('/contact','partnershipOpportunities')">Partnership Opportunities</li>
          </ul>
        </div>
        <a href="#" @click.prevent="navigateTo('/dashboard','recentProjects')">Dashboard</a>
        <div class="accordion-section">
          <div class="accordion-header" @click="toggleAccordionSection(5)">
            <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(5) }">{{ openAccordionSections.has(5) ? '-' : '+' }}</span>
          </div>
          <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(5) }">
            <li @click="navigateTo('/dashboard','recentProjects')">Recent Projects</li>
            <li @click="navigateTo('/dashboard','usageStatistics')">Usage Statistics</li>
            <li @click="navigateTo('/dashboard','accountOverview')">Account Overview</li>
            <li @click="navigateTo('/dashboard','notifications')">Notifications</li>
          </ul>
        </div>
        <a href="#" @click.prevent="navigateTo('/projects','allProjects')">Projects</a>
        <div class="accordion-section">
          <div class="accordion-header" @click="toggleAccordionSection(6)">
            <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(6) }">{{ openAccordionSections.has(6) ? '-' : '+' }}</span>
          </div>
          <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(6) }">
            <li @click="navigateTo('/projects','allProjects')">All Projects</li>
            <li @click="navigateTo('/projects','newProject')">New Project</li>
            <li @click="navigateTo('/projects','importProject')">Import Project</li>
            <li @click="navigateTo('/projects','exportProject')">Export Project</li>
          </ul>
        </div>
        <a href="#" @click.prevent="navigateTo('/symbol-library','electricalSymbols')">Symbol Library</a>
        <div class="accordion-section">
          <div class="accordion-header" @click="toggleAccordionSection(7)">
            <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(7) }">{{ openAccordionSections.has(7) ? '-' : '+' }}</span>
          </div>
          <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(7) }">
            <li @click="navigateTo('/symbol-library','electricalSymbols')">Electrical Symbols</li>
            <li @click="navigateTo('/symbol-library','hvacSymbols')">HVAC Symbols</li>
            <li @click="navigateTo('/symbol-library','plumbingSymbols')">Plumbing Symbols</li>
            <li @click="navigateTo('/symbol-library','customSymbols')">Custom Symbols</li>
          </ul>
        </div>
        <a href="#" @click.prevent="navigateTo('/analytics','recognitionAccuracy')">Analytics</a>
        <div class="accordion-section">
          <div class="accordion-header" @click="toggleAccordionSection(8)">
            <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(8) }">{{ openAccordionSections.has(8) ? '-' : '+' }}</span>
          </div>
          <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(8) }">
            <li @click="navigateTo('/analytics','recognitionAccuracy')">Recognition Accuracy</li>
            <li @click="navigateTo('/analytics','timeSavings')">Time Savings</li>
            <li @click="navigateTo('/analytics','costReduction')">Cost Reduction</li>
            <li @click="navigateTo('/analytics','roiCalculator')">ROI Calculator</li>
          </ul>
        </div>
        <a href="#" @click.prevent="navigateTo('/settings','accountSettings')">Settings</a>
        <div class="accordion-section">
          <div class="accordion-header" @click="toggleAccordionSection(9)">
            <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(9) }">{{ openAccordionSections.has(9) ? '-' : '+' }}</span>
          </div>
          <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(9) }">
            <li @click="navigateTo('/settings','accountSettings')">Account Settings</li>
            <li @click="navigateTo('/settings','billingAndSubscription')">Billing and Subscription</li>
            <li @click="navigateTo('/settings','userManagement')">User Management</li>
            <li @click="navigateTo('/settings','integrationManagement')">Integration Management</li>
          </ul>
        </div>
        <a href="#" @click.prevent="navigateTo('/terms-of-service','overview')">Terms of Service</a>
        <div class="accordion-section">
          <div class="accordion-header" @click="toggleAccordionSection(10)">
            <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(10) }">{{ openAccordionSections.has(10) ? '-' : '+' }}</span>
          </div>
          <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(10) }">
            <li @click="navigateTo('/terms-of-service','overview')">Overview</li>
            <li @click="navigateTo('/terms-of-service','intellectualProperty')">Intellectual Property</li>
            <li @click="navigateTo('/terms-of-service','userResponsibilities')">User Responsibilities</li>
            <li @click="navigateTo('/terms-of-service','termination')">Termination</li>
          </ul>
        </div>
        <a href="#" @click.prevent="navigateTo('/privacy-policy','dataCollection')">Privacy Policy</a>
        <div class="accordion-section">
          <div class="accordion-header" @click="toggleAccordionSection(11)">
            <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(11) }">{{ openAccordionSections.has(11) ? '-' : '+' }}</span>
          </div>
          <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(11) }">
            <li @click="navigateTo('/privacy-policy','dataCollection')">Data Collection</li>
            <li @click="navigateTo('/privacy-policy','dataUsage')">Data Usage</li>
            <li @click="navigateTo('/privacy-policy','dataProtection')">Data Protection</li>
            <li @click="navigateTo('/privacy-policy','userRights')">User Rights</li>
          </ul>
        </div>
        <a href="#" @click.prevent="navigateTo('/faq','gettingStarted')">FAQ</a>
        <div class="accordion-section">
          <div class="accordion-header" @click="toggleAccordionSection(12)">
            <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(12) }">{{ openAccordionSections.has(12) ? '-' : '+' }}</span>
          </div>
          <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(12) }">
            <li @click="navigateTo('/faq','gettingStarted')">Getting Started</li>
            <li @click="navigateTo('/faq','troubleshooting')">Troubleshooting</li>
            <li @click="navigateTo('/faq','featureQuestions')">Feature Questions</li>
            <li @click="navigateTo('/faq','billingAndAccount')">Billing and Account</li>
          </ul>
        </div>
        <a href="#" @click.prevent="navigateTo('/support','knowledgeBase')">Support</a>
        <div class="accordion-section">
          <div class="accordion-header" @click="toggleAccordionSection(13)">
            <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(13) }">{{ openAccordionSections.has(13) ? '-' : '+' }}</span>
          </div>
          <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(13) }">
            <li @click="navigateTo('/support','knowledgeBase')">Knowledge Base</li>
            <li @click="navigateTo('/support','videoTutorials')">Video Tutorials</li>
            <li @click="navigateTo('/support','communityForum')">Community Forum</li>
            <li @click="navigateTo('/support','contactSupport')">Contact Support</li>
          </ul>
        </div>
        <a href="#" @click.prevent="navigateTo('/blog','latestPosts')">Blog</a>
        <div class="accordion-section">
          <div class="accordion-header" @click="toggleAccordionSection(14)">
            <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(14) }">{{ openAccordionSections.has(14) ? '-' : '+' }}</span>
          </div>
          <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(14) }">
            <li @click="navigateTo('/blog','latestPosts')">Latest Posts</li>
            <li @click="navigateTo('/blog','categories')">Categories</li>
            <li @click="navigateTo('/blog','featuredArticles')">Featured Articles</li>
            <li @click="navigateTo('/blog','subscribe')">Subscribe</li>
          </ul>
        </div>
      </nav>
    </div>
  </main>

  <footer>
    <div class="logo">
      <RouterLink to="/" @click.prevent="navigateTo('/', 'introduction')">
        <img alt="ESD Logo" src="@/assets/esd.svg" />
      </RouterLink>
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
  width: 15%;
  height: 100%;
}
.logo a {
  display: flex;
}
header nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 85%;
  height: 100%;
}
.mobile-nav {
  display: none;
  justify-content: flex-end;
  align-items: center;
  width: 80%;
  height: 100%;
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
  height: 100%;
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
.content-body {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-top: 5px solid rgba(255,255,255,1);
  width: 100%;
  height: calc(100% - 55px);
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
.content-body form label {
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
.content-body form input {
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
