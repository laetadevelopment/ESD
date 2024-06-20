<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="usage-statistics">
    <div class="content-title">
      <h1>Usage Statistics</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>As an ESD user, it's important to have visibility into your blueprint processing activity and performance over time. That's why we've included a comprehensive Usage Statistics section in your Dashboard, providing you with valuable insights and metrics to help you track your progress, optimize your processes, and demonstrate the value of ESD to your organization.</p>
      <p>The Usage Statistics section includes a range of charts, graphs, and tables that visualize your key usage metrics, such as:</p>
      <ol>
        <li>Blueprint Processing Volume
          <ul>
            <li>Track the total number of blueprints you've processed with ESD over a given time period (e.g., weekly, monthly, quarterly).</li>
            <li>Identify trends and patterns in your processing volume, such as peak periods or seasonal fluctuations.</li>
            <li>Compare your processing volume across different projects, teams, or business units.</li>
          </ul>
        </li>
        <li>Symbol Detection Accuracy
          <ul>
            <li>Monitor the accuracy of ESD's symbol detection for your processed blueprints, expressed as a percentage.</li>
            <li>Identify any blueprints or projects with lower than expected accuracy rates, and investigate potential causes (e.g., low quality scans, unusual symbols).</li>
            <li>Track improvements in detection accuracy over time as you refine your blueprint scanning and processing workflows.</li>
          </ul>
        </li>
        <li>Processing Time
          <ul>
            <li>Measure the average time it takes to process a blueprint with ESD, from upload to completion.</li>
            <li>Identify any bottlenecks or inefficiencies in your processing workflow, and explore opportunities to streamline and automate.</li>
            <li>Track reductions in processing time as you optimize your hardware, software, and network configurations.</li>
          </ul>
        </li>
        <li>Collaboration Activity
          <ul>
            <li>Track the number of collaborators and shared projects across your ESD account.</li>
            <li>Measure the frequency and volume of comments, annotations, and file sharing within your projects.</li>
            <li>Identify your most active and engaged collaborators, and recognize their contributions to your blueprint analysis process.</li>
          </ul>
        </li>
        <li>Cost Savings and ROI
          <ul>
            <li>Estimate the time and cost savings you've achieved by using ESD compared to manual blueprint analysis methods.</li>
            <li>Calculate your return on investment (ROI) based on the efficiency gains and productivity improvements enabled by ESD.</li>
            <li>Demonstrate the tangible business value of ESD to your managers, executives, and other stakeholders.</li>
          </ul>
        </li>
      </ol>
      <p>The Usage Statistics section is fully interactive, allowing you to filter, zoom, and drill down into your data for deeper analysis and insights. You can also export your usage data to Excel or CSV for further analysis or reporting.</p>
      <p>In addition to the pre built metrics and visualizations, Enterprise customers can also work with our Customer Success team to define custom metrics and dashboards tailored to their specific needs and goals.</p>
      <p>By leveraging the insights and intelligence provided by the Usage Statistics section, you can continually optimize and improve your electrical blueprint analysis process, ensuring maximum efficiency, accuracy, and value from your ESD investment.</p>
      <p>So go ahead and explore your Usage Statistics today – you might be surprised by what you discover!</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.usage-statistics {
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
