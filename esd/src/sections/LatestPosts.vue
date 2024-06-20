<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="latest-posts">
    <div class="content-title">
      <h1>Latest Posts</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>Stay up to date with the latest news, insights, and best practices in electrical blueprint analysis with the ESD Blog. Our team of experts and guest contributors share their knowledge and experience on a wide range of topics, from industry trends and case studies to tips and tutorials for using the ESD platform.</p>
      <p>Here are some of our latest posts:</p>
      <ol>
        <li>"5 Ways to Streamline Your Electrical Blueprint Analysis Workflow"
          <p>In this post, we share five practical tips for optimizing your blueprint analysis process, from organizing your files to leveraging automation tools. Learn how to save time and increase efficiency with these proven strategies.</p>
        </li>
        <li>"Case Study: How ACME Electric Reduced Blueprint Analysis Time by 75%"
          <p>Discover how ACME Electric, a leading electrical contracting firm, used ESD to dramatically reduce the time and effort required for blueprint analysis. From initial adoption to full scale implementation, this case study provides valuable insights and lessons learned.</p>
        </li>
        <li>"Navigating the Future of Electrical Design: Trends and Predictions"
          <p>What does the future hold for electrical design and blueprint analysis? In this thought provoking post, we explore the key trends and predictions shaping the industry, from the rise of generative design to the impact of artificial intelligence and the Internet of Things.</p>
        </li>
        <li>"Maximizing Collaboration with ESD's Team Features"
          <p>Collaboration is key to success in electrical design and construction projects. In this tutorial, we walk through ESD's powerful team collaboration features, from project sharing and commenting to real time updates and version control.</p>
        </li>
        <li>"Electrical Symbols 101: A Beginner's Guide"
          <p>New to electrical blueprint analysis? Start with the basics in this beginner's guide to electrical symbols. We cover the most common symbols and their meanings, as well as tips for identifying and interpreting them in real world blueprints.</p>
        </li>
      </ol>
      <p>To read these posts and more, visit the ESD Blog at <a href="/blog">esd.one/blog</a>. You can also subscribe to our email newsletter to get the latest posts delivered straight to your inbox, or follow us on social media for updates and insights.</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.latest-posts {
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
