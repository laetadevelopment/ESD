<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps<{
  isMobileMenuOpen: boolean,
  activeTab: string
}>()

const emit = defineEmits<{
  (e: 'navigateTo', path: string, tab: string): void
  (e: 'toggleMobileMenu'): void
}>()

function navigateTo(path: string, tab: string) {
  emit('navigateTo', path, tab)
}

function toggleMobileMenu() {
  emit('toggleMobileMenu')
}

function toggleAccordionSection(index: number) {
  if (openAccordionSections.value.has(index)) {
    openAccordionSections.value.delete(index)
  } else {
    openAccordionSections.value.add(index)
  }
}

const openAccordionSections = ref<Set<number>>(new Set())
</script>

<template>
  <div class="mobile-menu" :class="{ 'visible': props.isMobileMenuOpen }">
    <nav>
      <a href="#" @click.prevent="navigateTo('/', 'introduction')">Home</a>
      <div class="accordion-section">
        <div class="accordion-header" @click="toggleAccordionSection(0)">
          <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(0) }">{{ openAccordionSections.has(0) ? '-' : '+' }}</span>
        </div>
        <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(0) }">
          <li @click="navigateTo('/', 'introduction')">Introduction</li>
          <li @click="navigateTo('/', 'keyFeatures')">Key Features</li>
          <li @click="navigateTo('/', 'testimonials')">Testimonials</li>
          <li @click="navigateTo('/', 'newUsers')">New Users</li>
          <li @click="navigateTo('/', 'login')">Login</li>
        </ul>
      </div>
      <a href="#" @click.prevent="navigateTo('/about', 'ourStory')">About</a>
      <div class="accordion-section">
        <div class="accordion-header" @click="toggleAccordionSection(1)">
          <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(1) }">{{ openAccordionSections.has(1) ? '-' : '+' }}</span>
        </div>
        <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(1) }">
          <li @click="navigateTo('/about', 'ourStory')">Our Story</li>
          <li @click="navigateTo('/about', 'team')">Team</li>
          <li @click="navigateTo('/about', 'visionAndMission')">Vision and Mission</li>
          <li @click="navigateTo('/about', 'pressAndMedia')">Press and Media</li>
        </ul>
      </div>
      <a href="#" @click.prevent="navigateTo('/features', 'symbolDetection')">Features</a>
      <div class="accordion-section">
        <div class="accordion-header" @click="toggleAccordionSection(2)">
          <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(2) }">{{ openAccordionSections.has(2) ? '-' : '+' }}</span>
        </div>
        <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(2) }">
          <li @click="navigateTo('/features', 'symbolDetection')">Symbol Detection</li>
          <li @click="navigateTo('/features', 'batchProcessing')">Batch Processing</li>
          <li @click="navigateTo('/features', 'collaborationTools')">Collaboration Tools</li>
          <li @click="navigateTo('/features', 'integrations')">Integrations</li>
          <li @click="navigateTo('/features', 'pwa')">PWA</li>
        </ul>
      </div>
      <a href="#" @click.prevent="navigateTo('/pricing', 'individualPlans')">Pricing</a>
      <div class="accordion-section">
        <div class="accordion-header" @click="toggleAccordionSection(3)">
          <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(3) }">{{ openAccordionSections.has(3) ? '-' : '+' }}</span>
        </div>
        <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(3) }">
          <li @click="navigateTo('/pricing', 'individualPlans')">Individual Plans</li>
          <li @click="navigateTo('/pricing', 'teamPlans')">Team Plans</li>
          <li @click="navigateTo('/pricing', 'enterpriseSolutions')">Enterprise Solutions</li>
          <li @click="navigateTo('/pricing', 'faq')">FAQ</li>
        </ul>
      </div>
      <a href="#" @click.prevent="navigateTo('/contact', 'contactUs')">Contact</a>
      <div class="accordion-section">
        <div class="accordion-header" @click="toggleAccordionSection(4)">
          <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(4) }">{{ openAccordionSections.has(4) ? '-' : '+' }}</span>
        </div>
        <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(4) }">
          <li @click="navigateTo('/contact', 'contactUs')">Contact Us</li>
          <li @click="navigateTo('/contact', 'supportOptions')">Support Options</li>
          <li @click="navigateTo('/contact', 'salesInquiries')">Sales Inquiries</li>
          <li @click="navigateTo('/contact', 'partnershipOpportunities')">Partnership Opportunities</li>
        </ul>
      </div>
      <a href="#" @click.prevent="navigateTo('/dashboard', 'recentProjects')">Dashboard</a>
      <div class="accordion-section">
        <div class="accordion-header" @click="toggleAccordionSection(5)">
          <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(5) }">{{ openAccordionSections.has(5) ? '-' : '+' }}</span>
        </div>
        <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(5) }">
          <li @click="navigateTo('/dashboard', 'recentProjects')">Recent Projects</li>
          <li @click="navigateTo('/dashboard', 'usageStatistics')">Usage Statistics</li>
          <li @click="navigateTo('/dashboard', 'accountOverview')">Account Overview</li>
          <li @click="navigateTo('/dashboard', 'notifications')">Notifications</li>
        </ul>
      </div>
      <a href="#" @click.prevent="navigateTo('/projects', 'allProjects')">Projects</a>
      <div class="accordion-section">
        <div class="accordion-header" @click="toggleAccordionSection(6)">
          <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(6) }">{{ openAccordionSections.has(6) ? '-' : '+' }}</span>
        </div>
        <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(6) }">
          <li @click="navigateTo('/projects', 'allProjects')">All Projects</li>
          <li @click="navigateTo('/projects', 'newProject')">New Project</li>
          <li @click="navigateTo('/projects', 'importProject')">Import Project</li>
          <li @click="navigateTo('/projects', 'exportProject')">Export Project</li>
        </ul>
      </div>
      <a href="#" @click.prevent="navigateTo('/symbol-library', 'electricalSymbols')">Symbol Library</a>
      <div class="accordion-section">
        <div class="accordion-header" @click="toggleAccordionSection(7)">
          <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(7) }">{{ openAccordionSections.has(7) ? '-' : '+' }}</span>
        </div>
        <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(7) }">
          <li @click="navigateTo('/symbol-library', 'electricalSymbols')">Electrical Symbols</li>
          <li @click="navigateTo('/symbol-library', 'hvacSymbols')">HVAC Symbols</li>
          <li @click="navigateTo('/symbol-library', 'plumbingSymbols')">Plumbing Symbols</li>
          <li @click="navigateTo('/symbol-library', 'customSymbols')">Custom Symbols</li>
        </ul>
      </div>
      <a href="#" @click.prevent="navigateTo('/analytics', 'recognitionAccuracy')">Analytics</a>
      <div class="accordion-section">
        <div class="accordion-header" @click="toggleAccordionSection(8)">
          <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(8) }">{{ openAccordionSections.has(8) ? '-' : '+' }}</span>
        </div>
        <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(8) }">
          <li @click="navigateTo('/analytics', 'recognitionAccuracy')">Recognition Accuracy</li>
          <li @click="navigateTo('/analytics', 'timeSavings')">Time Savings</li>
          <li @click="navigateTo('/analytics', 'costReduction')">Cost Reduction</li>
          <li @click="navigateTo('/analytics', 'roiCalculator')">ROI Calculator</li>
        </ul>
      </div>
      <a href="#" @click.prevent="navigateTo('/settings', 'accountSettings')">Settings</a>
      <div class="accordion-section">
        <div class="accordion-header" @click="toggleAccordionSection(9)">
          <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(9) }">{{ openAccordionSections.has(9) ? '-' : '+' }}</span>
        </div>
        <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(9) }">
          <li @click="navigateTo('/settings', 'accountSettings')">Account Settings</li>
          <li @click="navigateTo('/settings', 'billingAndSubscription')">Billing and Subscription</li>
          <li @click="navigateTo('/settings', 'userManagement')">User Management</li>
          <li @click="navigateTo('/settings', 'integrationManagement')">Integration Management</li>
        </ul>
      </div>
      <a href="#" @click.prevent="navigateTo('/terms-of-service', 'overview')">Terms of Service</a>
      <div class="accordion-section">
        <div class="accordion-header" @click="toggleAccordionSection(10)">
          <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(10) }">{{ openAccordionSections.has(10) ? '-' : '+' }}</span>
        </div>
        <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(10) }">
          <li @click="navigateTo('/terms-of-service', 'overview')">Overview</li>
          <li @click="navigateTo('/terms-of-service', 'intellectualProperty')">Intellectual Property</li>
          <li @click="navigateTo('/terms-of-service', 'userResponsibilities')">User Responsibilities</li>
          <li @click="navigateTo('/terms-of-service', 'termination')">Termination</li>
        </ul>
      </div>
      <a href="#" @click.prevent="navigateTo('/privacy-policy', 'dataCollection')">Privacy Policy</a>
      <div class="accordion-section">
        <div class="accordion-header" @click="toggleAccordionSection(11)">
          <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(11) }">{{ openAccordionSections.has(11) ? '-' : '+' }}</span>
        </div>
        <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(11) }">
          <li @click="navigateTo('/privacy-policy', 'dataCollection')">Data Collection</li>
          <li @click="navigateTo('/privacy-policy', 'dataUsage')">Data Usage</li>
          <li @click="navigateTo('/privacy-policy', 'dataProtection')">Data Protection</li>
          <li @click="navigateTo('/privacy-policy', 'userRights')">User Rights</li>
        </ul>
      </div>
      <a href="#" @click.prevent="navigateTo('/faq', 'gettingStarted')">FAQ</a>
      <div class="accordion-section">
        <div class="accordion-header" @click="toggleAccordionSection(12)">
          <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(12) }">{{ openAccordionSections.has(12) ? '-' : '+' }}</span>
        </div>
        <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(12) }">
          <li @click="navigateTo('/faq', 'gettingStarted')">Getting Started</li>
          <li @click="navigateTo('/faq', 'troubleshooting')">Troubleshooting</li>
          <li @click="navigateTo('/faq', 'featureQuestions')">Feature Questions</li>
          <li @click="navigateTo('/faq', 'billingAndAccount')">Billing and Account</li>
        </ul>
      </div>
      <a href="#" @click.prevent="navigateTo('/support', 'knowledgeBase')">Support</a>
      <div class="accordion-section">
        <div class="accordion-header" @click="toggleAccordionSection(13)">
          <span :class="{ 'accordion-icon': true, 'open': openAccordionSections.has(13) }">{{ openAccordionSections.has(13) ? '-' : '+' }}</span>
        </div>
        <ul :class="{ 'accordion-content': true, 'open': openAccordionSections.has(13) }">
          <li @click="navigateTo('/support', 'knowledgeBase')">Knowledge Base</li>
          <li @click="navigateTo('/support', 'videoTutorials')">Video Tutorials</li>
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
</template>
