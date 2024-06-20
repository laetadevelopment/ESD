<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import ContactUs from '../sections/ContactUs.vue'
import SupportOptions from '../sections/SupportOptions.vue'
import SalesInquiries from '../sections/SalesInquiries.vue'
import PartnershipOpportunities from '../sections/PartnershipOpportunities.vue'

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
      <a href="#" :class="['green', {'active': props.activeTab === 'contactUs'}]" title="Contact Us" @click.prevent="updateActiveTab('contactUs')">Contact Us</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'supportOptions'}]" title="Support Options" @click.prevent="updateActiveTab('supportOptions')">Support Options</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'salesInquiries'}]" title="Sales Inquiries" @click.prevent="updateActiveTab('salesInquiries')">Sales Inquiries</a>
      <a href="#" :class="['green', {'active': props.activeTab === 'partnershipOpportunities'}]" title="Partnership Opportunities" @click.prevent="updateActiveTab('partnershipOpportunities')">Partnership Opportunities</a>
    </nav>
  </div>
  <ContactUs v-if="props.activeTab === 'contactUs'" />
  <SupportOptions v-if="props.activeTab === 'supportOptions'" />
  <SalesInquiries v-if="props.activeTab === 'salesInquiries'" />
  <PartnershipOpportunities v-if="props.activeTab === 'partnershipOpportunities'" />
</template>
