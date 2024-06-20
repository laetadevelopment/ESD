<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="feature-questions">
    <div class="content-title">
      <h1>Feature Questions</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>As a comprehensive electrical blueprint analysis solution, ESD offers a wide range of features and capabilities. Here are answers to some common questions about ESD's features:</p>
      <ol>
        <li>Can ESD detect custom symbols?
        <ul>
          <li>Yes, ESD allows you to define custom symbol libraries and train the detection model on your specific blueprints and symbols. This ensures that ESD can adapt to your unique needs and requirements.</li>
        </ul></li>
        <li>How many blueprints can I process at once with batch processing?
        <ul>
          <li>ESD's batch processing feature allows you to process hundreds or even thousands of blueprints at once, depending on your plan and the complexity of the blueprints. There is no hard limit, but processing very large batches may take some time.</li>
        </ul></li>
        <li>Can I collaborate with external stakeholders or clients using ESD?
        <ul>
          <li>Yes, ESD's collaboration features allow you to invite external users to view and comment on your projects, even if they don't have an ESD account. You can control their access and permissions to ensure your data remains secure.</li>
        </ul></li>
        <li>What types of files can I export from ESD?
        <ul>
          <li>ESD supports exporting annotated blueprints in a variety of formats, including PDF, DWG, DXF, and JSON. You can also export symbol data and annotations as CSV or Excel files for further analysis.</li>
        </ul></li>
        <li>Can I use ESD on mobile devices?
        <ul>
          <li>Yes, ESD is a web based application that can be accessed from any device with a modern web browser, including smartphones and tablets. However, for the best user experience, we recommend using ESD on a desktop or laptop computer.</li>
        </ul></li>
        <li>Does ESD support version control for blueprints?
        <ul>
          <li>Yes, ESD automatically tracks versions and changes to your blueprints, so you can see who made what changes when. You can also revert to previous versions or compare differences between versions.</li>
        </ul></li>
        <li>Can I use ESD with my existing CAD software?
        <ul>
          <li>Yes, ESD offers integrations with popular CAD tools like AutoCAD, Revit, and SketchUp. You can import and export files, sync changes, and access ESD's features directly from your CAD software.</li>
        </ul></li>
        <li>Does ESD offer an API for custom integrations?
        <ul>
          <li>Yes, ESD offers a fully documented API that allows you to integrate ESD's features and data into your own applications or workflows. The API supports a wide range of functions, from uploading and processing blueprints to retrieving symbol data and annotations.</li>
        </ul></li>
        <li>Can I use ESD offline?
        <ul>
          <li>Yes, ESD's Progressive Web App (PWA) functionality allows you to use the application offline or in low connectivity environments. You can access your recently viewed projects and annotations, and any changes you make will be synced automatically when you're back online.</li>
        </ul></li>
        <li>How often does ESD release new features and updates?
        <ul>
          <li>We're constantly working to improve and expand ESD's features based on user feedback and industry trends. We typically release minor updates and bug fixes every 2 4 weeks, and major feature releases every 2 3 months. You can check our release notes or subscribe to our email updates to stay informed about the latest additions and improvements.</li>
        </ul></li>
      </ol>
      <p>Remember, these are just a few examples of the many features and capabilities offered by ESD. If you have any other questions or want to learn more about a specific feature, please don't hesitate to contact our support team or consult our extensive knowledge base and documentation.</p>
      <p>At ESD, we're committed to providing a comprehensive and continuously evolving solution for electrical blueprint analysis and collaboration. We're always eager to hear from our users about how we can improve and expand our features to better meet your needs and workflows.</p>
      <p>So if there's a feature you'd like to see in ESD, or if you have any other feedback or suggestions, please let us know! We're here to help you get the most out of ESD and to ensure that it remains the leading tool for electrical blueprint analysis and collaboration.</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.feature-questions {
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
