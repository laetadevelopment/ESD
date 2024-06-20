<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="faq">
    <div class="content-title">
      <h1>FAQ</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <ul>
        <li class="question">What is ESD?</li>
        <li class="answer">ESD (Electrical Symbol Detection) is a web based application that uses advanced machine learning algorithms to automatically detect and label electrical symbols in blueprints and drawings.</li>
        <li class="question">How does ESD work?</li>
        <li class="answer">ESD uses a combination of computer vision and deep learning techniques to analyze your blueprints and identify electrical symbols like outlets, switches, fixtures, and more. It then labels these symbols and exports the annotated blueprint for further analysis and collaboration.</li>
        <li class="question">What types of blueprints and drawings does ESD support?</li>
        <li class="answer">ESD supports a wide range of file formats, including PDF, DWG, DXF, and more. As long as your blueprint is in a standard digital format, ESD can analyze it.</li>
        <li class="question">How accurate is ESD's symbol detection?</li>
        <li class="answer">ESD's symbol detection accuracy is industry leading, with precision and recall rates above 95% in most cases. However, accuracy can vary depending on the quality and complexity of the blueprint.</li>
        <li class="question">Can I train ESD to recognize custom symbols?</li>
        <li class="answer">Yes, ESD allows you to define custom symbol libraries and train the detection model on your specific blueprints and symbols. This ensures that ESD can adapt to your unique needs and requirements.</li>
        <li class="question">How much does ESD cost?</li>
        <li class="answer">ESD offers a range of pricing plans for individuals and teams, starting at $9.99/month. We also offer custom enterprise solutions with flexible pricing based on your specific needs and requirements.</li>
        <li class="question">Is there a free trial available?</li>
        <li class="answer">Yes, we offer a free 14 day trial for individual plans and a free 30 day trial for team plans. This allows you to test out ESD risk free and see how it can benefit your workflow.</li>
        <li class="question">What kind of support does ESD offer?</li>
        <li class="answer">ESD offers a range of support options, including email support, live chat, and phone support (for enterprise customers). We also have an extensive knowledge base and community forum where you can find answers to common questions and connect with other users.</li>
        <li class="question">Can I integrate ESD with my existing tools and workflows?</li>
        <li class="answer">Yes, ESD offers integrations with popular CAD tools, project management platforms, and more. We also have an API that allows you to build custom integrations and automate workflows.</li>
        <li class="question">Is my data secure with ESD?</li>
        <li class="answer">Yes, data security is a top priority for us. We use industry standard security measures like encryption, access controls, and regular backups to ensure that your blueprints and data are always protected. We also offer advanced security features for enterprise customers.</li>
      </ul>
      <p>If you have any other questions or concerns, please don't hesitate to contact our support team. We're always happy to help!</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.faq {
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
