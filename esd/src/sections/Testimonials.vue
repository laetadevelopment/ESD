<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="testimonials">
    <div class="content-title">
      <h1>Testimonials</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>Don't just take our word for it — see what our satisfied customers have to say about their experience with ESD:</p>
      <ul>
        <li>"ESD has completely transformed the way we work with electrical blueprints. What used to take hours of manual labeling can now be done in minutes with incredible accuracy. It's a game changer!" — Janus S., Electrical Engineer</li>
        <li>"The collaboration features in ESD have been a lifesaver for our team. We can now work together seamlessly, even when we're in different locations. It's improved our communication and efficiency tremendously." — Sarah K., Project Manager</li>
        <li>"As someone who works with a high volume of blueprints, ESD's batch processing feature has been a huge time saver. I can now process hundreds of blueprints in the time it used to take me to do just a few manually." — Michael R., Contractor</li>
        <li>"The integration with our existing CAD tools has been seamless. ESD fits perfectly into our workflow and has made our lives so much easier. We can't imagine going back to the old way of doing things!" — Lisa P., Architect</li>
        <li>"The Progressive Web App is fantastic! I can access ESD from my phone, tablet, or computer, and everything syncs up perfectly. It's so convenient to be able to work on the go without sacrificing functionality." — Paul Q., Electrical Designer</li>
      </ul>
      <p>At ESD, we're proud to have helped countless professionals in the electrical industry streamline their workflow, increase their productivity, and deliver better results to their clients. Join our growing community of satisfied users and experience the difference ESD can make in your work!</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.testimonials {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
}
.content-body {
  padding: 25px;
}
</style>
