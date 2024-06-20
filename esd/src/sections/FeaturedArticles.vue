<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
 <div class="featured-articles">
   <div class="content-title">
     <h1>Featured Articles</h1>
   </div>
   <Notifications />
   <div class="content-body">
     <p>In addition to our regular blog posts, the ESD Blog also features in depth articles and guides on key topics and challenges in electrical blueprint analysis. These featured articles provide comprehensive insights and actionable advice for users of all levels and backgrounds.</p>
     <p>Here are some of our most popular featured articles:</p>
     <ol>
       <li>"The Ultimate Guide to Electrical Blueprint Symbols"
         <p>This comprehensive guide covers everything you need to know about electrical blueprint symbols, from the basics of reading and interpreting symbols to advanced tips and techniques for working with complex designs. Whether you're a seasoned pro or just starting out, this guide is an essential resource.</p>
       </li>
       <li>"Mastering Electrical Blueprint Analysis: Best Practices and Pro Tips"
         <p>Take your electrical blueprint analysis skills to the next level with this in depth article on best practices and pro tips. From optimizing your workspace and tools to leveraging automation and collaboration, this guide shares the secrets of the most efficient and effective blueprint analyzers.</p>
       </li>
       <li>"The Future of Electrical Design: Trends and Technologies to Watch"
         <p>What does the future hold for electrical design and blueprint analysis? This forward looking article explores the key trends and technologies that are shaping the industry, from generative design and artificial intelligence to the Internet of Things and beyond.</p>
       </li>
       <li>"Electrical Blueprint Analysis for Construction Projects: A Comprehensive Guide"
         <p>Construction projects rely heavily on accurate and efficient electrical blueprint analysis. This guide provides a comprehensive overview of the key considerations and best practices for analyzing blueprints in the context of construction projects, from coordination and collaboration to quality control and risk management.</p>
       </li>
     </ol>
     <p>To access these featured articles and more, visit the ESD Blog at <a href="/blog">esd.one/blog</a> and look for the "Featured" tag or section. You can also bookmark your favorite articles for easy reference or share them with your colleagues and peers.</p>
     <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
   </div>
 </div>
</template>

<style scoped>
.featured-articles {
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
