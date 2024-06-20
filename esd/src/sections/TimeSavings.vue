<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="time-savings">
    <div class="content-title">
      <h1>Time Savings</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>In addition to improving the accuracy and reliability of your electrical blueprint analysis, ESD can also help you significantly reduce the time and effort required to extract data and insights from your drawings. By automating many of the manual and repetitive tasks involved in symbol recognition and labeling, ESD enables you to streamline your workflows, accelerate your projects, and focus on higher value activities.</p>
      <p>The Time Savings section of the Analytics dashboard in ESD provides a range of metrics and tools to help you quantify and optimize the efficiency gains from using our platform. Here, you can track and analyze data such as:</p>
      <ol>
        <li>Processing Time
          <ul>
            <li>The total time taken by ESD to process and analyze your blueprints, from upload to completion</li>
            <li>Broken down by different steps, such as image preprocessing, symbol detection, and data export</li>
            <li>Compared against benchmarks or targets based on blueprint complexity and quality</li>
          </ul>
        </li>
        <li>Manual Effort Reduction
          <ul>
            <li>An estimate of the time and effort saved by using ESD compared to manual symbol recognition and labeling methods</li>
            <li>Based on factors such as the number and type of symbols in your blueprints, the speed and accuracy of human operators, and the efficiency of ESD's automation capabilities</li>
            <li>Expressed in terms of hours, days, or percentage of total project time</li>
          </ul>
        </li>
        <li>Workflow Optimization
          <ul>
            <li>Analysis of the bottlenecks, delays, and inefficiencies in your current blueprint processing workflows</li>
            <li>Identification of opportunities to streamline or automate tasks using ESD's features and integrations</li>
            <li>Recommendations for best practices and process improvements based on your specific needs and constraints</li>
          </ul>
        </li>
        <li>Collaboration Efficiency
          <ul>
            <li>Metrics on the time and effort saved by using ESD's collaboration and communication tools, such as shared projects, real time comments, and version control</li>
            <li>Comparison of the speed and quality of collaboration using ESD versus traditional methods, such as email, phone, or in person meetings</li>
            <li>Insights into the impact of collaboration on overall project efficiency and outcomes</li>
          </ul>
        </li>
        <li>ROI Calculator
          <ul>
            <li>Interactive tool to estimate the return on investment (ROI) of using ESD based on your specific project parameters and assumptions</li>
            <li>Factors in the costs of ESD licensing, training, and support, as well as the benefits of time savings, accuracy improvements, and risk reduction</li>
            <li>Provides a customized business case and justification for adopting ESD in your organization</li>
          </ul>
        </li>
      </ol>
      <p>By leveraging the Time Savings analytics and insights in ESD, you can not only demonstrate the tangible benefits of our platform to your stakeholders, but also identify opportunities to further optimize your processes and maximize your efficiency gains.</p>
      <p>At ESD, we're passionate about helping our users work smarter, not harder. We believe that by automating the tedious and error prone aspects of electrical blueprint analysis, we can enable you to focus on the creative, strategic, and value added aspects of your work.</p>
      <p>That's why we're constantly innovating and improving our platform to provide the most advanced and efficient symbol recognition and data extraction capabilities in the industry. From our high performance algorithms and scalable cloud infrastructure, to our intuitive user interfaces and seamless integrations, every aspect of ESD is designed to help you save time and effort, and achieve better results.</p>
      <p>So whether you're a seasoned electrical engineer or a new designer, ESD's Time Savings analytics and features can help you streamline your workflows, accelerate your projects, and deliver more value to your clients and stakeholders. With ESD, you can spend less time on manual data entry and more time on what matters most — designing and building world class electrical systems.</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.time-savings {
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
