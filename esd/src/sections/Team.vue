<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="team">
    <div class="content-title">
      <h1>Team</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>Behind ESD is a talented and dedicated team of professionals who are passionate about transforming the way people work with electrical blueprints. Our diverse group of engineers, designers, and developers bring a wealth of experience and expertise to the table, allowing us to create a truly innovative and user friendly solution.</p>
      <p>Meet some of the key members of our team:</p>
      <p>Sarah Johnson — Founder & CEO</p>
      <p>Sarah is the visionary behind ESD, with over a decade of experience in electrical engineering and a passion for leveraging technology to solve industry challenges. She leads our team with a focus on innovation, user experience, and customer success.</p>
      <p>Michael Smith — Chief Technology Officer</p>
      <p>Michael is a seasoned software architect and machine learning expert who oversees the development and optimization of ESD's core technology. He ensures that our app remains at the forefront of symbol detection and automation.</p>
      <p>Lisa Chen — Lead Product Designer</p>
      <p>Lisa brings a user centric approach to the design and functionality of ESD. With a background in UX design and a deep understanding of the electrical industry, she ensures that our app is intuitive, efficient, and visually appealing.</p>
      <p>Brandt Patterson — Head of Customer Success</p>
      <p>Brandt leads our customer success team, working closely with users to understand their needs, provide support, and gather feedback for continuous improvement. He's dedicated to ensuring that every ESD user has a positive and productive experience with our app.</p>
      <p>Our team also includes a talented group of software developers, quality assurance specialists, and customer support representatives who work tirelessly to develop, maintain, and support ESD.</p>
      <p>At ESD, we foster a culture of collaboration, innovation, and continuous learning. We believe that by bringing together diverse perspectives and skill sets, we can create a solution that truly makes a difference in the lives of our users.</p>
      <p>We're proud of the team we've built and the work we've accomplished, but we know there's always room for growth and improvement. As we continue to expand and evolve, we remain committed to our core values of user centricity, innovation, and excellence in all that we do.</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.team {
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
