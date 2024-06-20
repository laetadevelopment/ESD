<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
 <div class="categories">
   <div class="content-title">
     <h1>Categories</h1>
   </div>
   <Notifications />
   <div class="content-body">
     <p>The ESD Blog covers a wide range of topics related to electrical blueprint analysis, from industry news and trends to product updates and user stories. To help you find the content that's most relevant to your needs and interests, we've organized our posts into the following categories:</p>
     <ol>
       <li>Industry News and Trends
         <p>Stay informed about the latest developments and innovations in the world of electrical design and construction. This category covers news, events, and thought leadership from across the industry.</p>
       </li>
       <li>Product Updates and Releases
         <p>Get the inside scoop on the latest features, enhancements, and updates to the ESD platform. From new symbol libraries and detection capabilities to user interface improvements and integrations, this category keeps you up to date with the evolution of ESD.</p>
       </li>
       <li>Tips and Tutorials
         <p>Learn how to make the most of ESD's features and capabilities with practical tips, tutorials, and best practices. Whether you're a beginner or an advanced user, this category has something for everyone.</p>
       </li>
       <li>Case Studies and User Stories
         <p>Discover how real world users and organizations are leveraging ESD to transform their electrical blueprint analysis workflows. From small design firms to large construction companies, this category showcases the diverse applications and benefits of ESD.</p>
       </li>
       <li>Thought Leadership and Opinion
         <p>Explore the big ideas and trends shaping the future of electrical design and construction. This category features thought provoking posts and opinion pieces from ESD's team of experts and guest contributors.</p>
       </li>
     </ol>
     <p>To browse posts by category, simply click on the relevant category tag or use the search bar to find specific topics or keywords. You can also filter posts by date, author, or popularity to find the content that's most relevant to you.</p>
    <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
   </div>
 </div>
</template>

<style scoped>
.categories {
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
