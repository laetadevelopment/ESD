<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="recognition-accuracy">
    <div class="content-title">
      <h1>Recognition Accuracy</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>One of the key benefits of using ESD for your electrical blueprint analysis is the high level of accuracy and reliability of our symbol recognition technology. We understand that the success of your projects depends on the quality and consistency of the data you extract from your blueprints, which is why we've invested heavily in developing state of the art machine learning algorithms and computer vision techniques to ensure the most precise and comprehensive symbol detection possible.</p>
      <p>The Recognition Accuracy section of the Analytics dashboard in ESD provides detailed metrics and insights into the performance of our symbol recognition engine across your projects and blueprints. Here, you can view and analyze data such as:</p>
      <ol>
        <li>Overall Accuracy Rate
          <ul>
            <li>The percentage of symbols in your blueprints that were correctly detected and labeled by ESD</li>
            <li>Tracked over time and across different projects, blueprints, and symbol libraries</li>
            <li>Benchmarked against industry standards and best practices</li>
          </ul>
        </li>
        <li>Precision and Recall
          <ul>
            <li>Precision: The percentage of detected symbols that were actually true positives (i.e., correctly identified)</li>
            <li>Recall: The percentage of true positive symbols that were actually detected by ESD</li>
            <li>Provides a more nuanced view of recognition performance, balancing false positives and false negatives</li>
          </ul>
        </li>
        <li>Confidence Scores
          <ul>
            <li>The level of confidence that ESD assigns to each detected symbol, based on factors such as image quality, context, and matching criteria</li>
            <li>Allows you to filter and prioritize symbols based on their likelihood of being correct</li>
            <li>Helps you identify areas where manual review or validation may be necessary</li>
          </ul>
        </li>
        <li>Error Analysis
          <ul>
            <li>Detailed breakdown of the types and sources of recognition errors, such as missed symbols, misclassified symbols, or false positives</li>
            <li>Enables you to identify patterns or trends in recognition performance, and take corrective actions to improve accuracy</li>
            <li>Provides insights into the limitations or challenges of different symbol libraries, blueprint styles, or image formats</li>
          </ul>
        </li>
        <li>Performance Comparison
          <ul>
            <li>Side by side comparison of recognition accuracy across different projects, teams, or time periods</li>
            <li>Allows you to benchmark your performance against internal or industry standards</li>
            <li>Helps you identify best practices or areas for improvement in your blueprint analysis workflows</li>
          </ul>
        </li>
      </ol>
      <p>By regularly monitoring and analyzing the Recognition Accuracy metrics in ESD, you can gain valuable insights into the quality and reliability of your symbol detection results, and make data driven decisions to optimize your processes and outcomes.</p>
      <p>At ESD, we're committed to providing the most accurate and reliable symbol recognition technology in the industry. Our team of machine learning experts and data scientists are constantly researching and developing new techniques to improve the precision, recall, and robustness of our algorithms, across a wide range of blueprint types, styles, and qualities.</p>
      <p>We also believe in transparency and continuous improvement when it comes to recognition accuracy. That's why we provide our users with detailed metrics and error analysis tools, so they can understand the strengths and limitations of our technology, and work with us to identify opportunities for enhancement or customization.</p>
      <p>Ultimately, our goal is to provide you with the most trustworthy and actionable data possible from your electrical blueprints, so you can make informed decisions and deliver successful projects. With ESD's Recognition Accuracy analytics and insights, you can have confidence in the quality and consistency of your symbol detection results, and focus on what matters most — designing, building, and managing high-performance electrical systems.</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.recognition-accuracy {
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
