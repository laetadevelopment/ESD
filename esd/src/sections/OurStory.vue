<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="our-story">
    <div class="content-title">
      <h1>Our Story</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>At ESD, our journey began with a simple vision: to revolutionize the way professionals work with electrical blueprints. As a team of experienced engineers, designers, and software developers, we witnessed firsthand the challenges and inefficiencies that come with manual symbol detection and labeling.</p>
      <p>We knew there had to be a better way — a way to harness the power of technology to streamline the blueprint analysis process and make life easier for those in the electrical industry. That's when the idea for ESD was born.</p>
      <p>Our founder, Sarah Johnson, had spent years working as an electrical engineer, pouring countless hours into manually labeling blueprints. She realized that this tedious and time consuming task was not only slowing down projects but also increasing the risk of errors and inconsistencies.</p>
      <p>Sarah brought together a team of experts in machine learning, computer vision, and software development to create a solution that would automate the symbol detection process and provide a user friendly platform for collaboration and project management.</p>
      <p>After months of research, development, and rigorous testing, the first version of ESD was launched. The response from the industry was overwhelming — professionals from all over the world embraced our app as a game changer in electrical blueprint analysis.</p>
      <p>Since then, we've continued to refine and expand the capabilities of ESD based on feedback from our users. We've added new features, improved our algorithms, and integrated with more CAD and design tools to create a truly comprehensive solution.</p>
      <p>Today, ESD is trusted by thousands of engineers, contractors, and architects worldwide to streamline their workflow, increase their productivity, and deliver better results to their clients. We're proud of the impact our app has made in the industry and are committed to continuing to innovate and push the boundaries of what's possible.</p>
      <p>At ESD, our story is one of passion, innovation, and dedication to helping professionals work smarter, not harder. We're excited to continue growing and evolving alongside our users, and we can't wait to see what the future holds for our company and the industry as a whole.</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.our-story {
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
