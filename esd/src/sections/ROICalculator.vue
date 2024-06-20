<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="roi-calculator">
    <div class="content-title">
      <h1>ROI Calculator</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>To help you quantify and demonstrate the financial benefits of using ESD for your electrical blueprint analysis, we've developed a comprehensive and customizable ROI Calculator tool within our Analytics dashboard. This interactive tool allows you to input your specific project parameters, assumptions, and goals, and generate a detailed report on the expected return on investment (ROI) from adopting ESD.</p>
      <p>The ROI Calculator takes into account a wide range of factors and variables, such as:</p>
      <ol>
        <li>Project Scope and Scale
          <ul>
            <li>Number and complexity of electrical blueprints to be analyzed</li>
            <li>Frequency and volume of blueprint updates and revisions</li>
            <li>Duration and timeline of the project or program</li>
          </ul>
        </li>
        <li>Current Costs and Processes
          <ul>
            <li>Labor costs and productivity of manual symbol recognition and data entry</li>
            <li>Error rates and rework costs associated with manual methods</li>
            <li>Software, hardware, and infrastructure expenses for current tools and systems</li>
          </ul>
        </li>
        <li>ESD Implementation and Usage
          <ul>
            <li>Selected ESD subscription plan and pricing model</li>
            <li>Number and type of users and roles accessing the platform</li>
            <li>Required training, support, and customization services</li>
          </ul>
        </li>
        <li>Expected Benefits and Savings
          <ul>
            <li>Estimated time and cost savings from automated symbol recognition and data extraction</li>
            <li>Projected error and rework reduction from improved accuracy and consistency</li>
            <li>Anticipated productivity and revenue gains from reallocating resources to higher value activities</li>
          </ul>
        </li>
      </ol>
      <p>Based on these inputs and assumptions, the ROI Calculator generates a detailed report that includes:</p>
      <ol>
        <li>Breakdown of Costs and Benefits
          <ul>
            <li>Itemized list of the direct and indirect costs of implementing and using ESD</li>
            <li>Quantified estimates of the time, cost, and productivity savings from automation</li>
            <li>Detailed analysis of the error reduction and quality improvement benefits</li>
          </ul>
        </li>
        <li>Financial Metrics and Ratios
          <ul>
            <li>ROI percentage and payback period for ESD investment</li>
            <li>Net present value (NPV) and internal rate of return (IRR) of the project</li>
            <li>Benefit cost ratio and breakeven point analysis</li>
          </ul>
        </li>
        <li>Sensitivity and Scenario Analysis
          <ul>
            <li>Impact of changing key assumptions and variables on the ROI outcomes</li>
            <li>Best case, worst case, and most likely scenarios based on different risk and uncertainty levels</li>
            <li>Identification of the critical success factors and risk mitigation strategies for maximizing ROI</li>
          </ul>
        </li>
        <li>Visualization and Communication
          <ul>
            <li>Graphical charts and dashboards to visualize the ROI results and trends over time</li>
            <li>Customizable templates and reports to communicate the business case to different stakeholders</li>
            <li>Integration with project management and financial planning tools to align with broader objectives</li>
          </ul>
        </li>
      </ol>
      <p>The ROI Calculator is designed to be flexible, transparent, and actionable, allowing you to experiment with different scenarios, assumptions, and strategies to optimize your ESD investment and outcomes.</p>
      <p>At ESD, we believe that the true value of our platform lies not just in its advanced features and capabilities, but in its measurable and demonstrable impact on your business and financial performance. We understand that in order to justify and prioritize any technology investment, you need to have a clear and compelling understanding of its costs, benefits, and ROI potential.</p>
      <p>That's why we've invested heavily in developing robust and reliable analytics and reporting tools, such as the ROI Calculator, to help you quantify and communicate the value of ESD to your stakeholders. We want to empower you with the data, insights, and confidence you need to make informed and strategic decisions about your electrical blueprint analysis processes and investments.</p>
      <p>Moreover, by providing a standardized and objective framework for calculating ROI, we aim to help you benchmark your performance against industry peers and best practices, and identify opportunities for continuous improvement and optimization.</p>
      <p>So whether you're a project manager looking to justify ESD adoption to your executive team, or a financial analyst seeking to optimize your technology portfolio, ESD's ROI Calculator can provide the clarity, credibility, and accountability you need to drive success. With ESD, you can not only improve your electrical blueprint analysis outcomes, but also demonstrate the tangible and measurable value of your investments.</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.roi-calculator {
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
