import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

declare module 'vue-router' {
  interface RouteMeta {
    defaultSection?: string
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { defaultSection: 'introduction' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
      meta: { defaultSection: 'ourStory' }
    },
    {
      path: '/features',
      name: 'features',
      component: () => import('../views/Features.vue'),
      meta: { defaultSection: 'symbolDetection' }
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('../views/Pricing.vue'),
      meta: { defaultSection: 'individualPlans' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue'),
      meta: { defaultSection: 'contactUs' }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue'),
      meta: { defaultSection: 'recentProjects' }
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/Projects.vue'),
      meta: { defaultSection: 'allProjects' }
    },
    {
      path: '/symbol-library',
      name: 'symbollibrary',
      component: () => import('../views/SymbolLibrary.vue'),
      meta: { defaultSection: 'electricalSymbols' }
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: () => import('../views/Analytics.vue'),
      meta: { defaultSection: 'recognitionAccuracy' }
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/Settings.vue'),
      meta: { defaultSection: 'accountSettings' }
    },
    {
      path: '/terms-of-service',
      name: 'termsofservice',
      component: () => import('../views/TermsOfService.vue'),
      meta: { defaultSection: 'overview' }
    },
    {
      path: '/privacy-policy',
      name: 'privacypolicy',
      component: () => import('../views/PrivacyPolicy.vue'),
      meta: { defaultSection: 'dataCollection' }
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FAQ.vue'),
      meta: { defaultSection: 'gettingStarted' }
    },
    {
      path: '/support',
      name: 'support',
      component: () => import('../views/Support.vue'),
      meta: { defaultSection: 'knowledgeBase' }
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/Blog.vue'),
      meta: { defaultSection: 'latestPosts' }
    }
  ]
})

export default router
