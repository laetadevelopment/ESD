<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="vision-and-mission">
    <div class="content-title">
      <h1>Vision and Mission</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>At ESD, our vision is to be the leading provider of electrical symbol detection and blueprint analysis solutions, empowering professionals across the industry to work more efficiently, accurately, and collaboratively. We envision a future where manual symbol labeling is a thing of the past, and where our app is the go to tool for anyone working with electrical blueprints.</p>
      <p>Our mission is to revolutionize the way people work with electrical blueprints by providing a cutting edge, user friendly platform that automates symbol detection, streamlines collaboration, and enhances productivity. We're committed to staying at the forefront of technology and continuously improving our app to meet the evolving needs of our users.</p>
      <p>To achieve our vision and mission, we focus on the following key areas:</p>
      <ol>
      <li>Innovation: We constantly push the boundaries of what's possible with machine learning, computer vision, and automation to create a best in class symbol detection solution.</li>
      <li>User Experience: We put our users at the center of everything we do, designing features and functionalities that are intuitive, efficient, and aligned with their needs and workflows.</li>
      <li>Collaboration: We believe that collaboration is key to success in the electrical industry, which is why we've built robust tools for teamwork and communication right into our app.</li>
      <li>Customer Success: We're dedicated to ensuring that every ESD user achieves their goals and realizes the full value of our app through personalized support, training, and resources.</li>
      <li>Continuous Improvement: We're always listening to feedback from our users and staying attuned to industry trends to identify opportunities for growth and enhancement.</li>
      </ol>
      <p>At ESD, our vision and mission drive everything we do. They serve as a compass, guiding our decision making, prioritization, and resource allocation. We believe that by staying true to these core principles, we can make a real and lasting impact on the electrical industry and the professionals who keep it running.</p>
      <p>We're excited about the future and the possibilities that lie ahead. As we continue to grow and evolve, we remain committed to our vision of transforming the way people work with electrical blueprints and to our mission of providing the most innovative, user friendly, and impactful solution on the market.</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.vision-and-mission {
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
