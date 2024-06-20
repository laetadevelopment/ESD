<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="batch-processing">
    <div class="content-title">
      <h1>Batch Processing</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>One of the key features that sets ESD apart from other electrical blueprint analysis tools is our batch processing capability. With batch processing, you can analyze and label multiple blueprints simultaneously, saving you even more time and effort compared to processing them one by one.</p>
      <p>Here's how it works:</p>
      <ol>
        <li>Select the blueprints you want to process. You can choose individual files or entire folders.</li>
        <li>Set your processing options, such as the symbol libraries to use, detection sensitivity, and output format.</li>
        <li>Click "Start Processing" and let ESD do the rest!</li>
      </ol>
      <p>Our app will automatically detect and label symbols on each blueprint, applying your chosen settings and preferences. Depending on the number and complexity of the blueprints, the batch processing may take anywhere from a few seconds to a few minutes.</p>
      <p>Once the processing is complete, you'll have a set of fully labeled blueprints ready for review and further analysis. You can then export the labeled blueprints in your preferred format (such as DWG, PDF, or JSON) for use in other tools or workflows.</p>
      <p>Batch processing is incredibly useful for a variety of scenarios, such as:</p>
      <ul>
        <li>Processing a large backlog of blueprints when first adopting ESD</li>
        <li>Analyzing multiple revisions or versions of a blueprint set</li>
        <li>Preparing a set of blueprints for a project review or handoff</li>
        <li>Regularly processing new blueprints as they come in</li>
      </ul>
      <p>In addition to saving time, batch processing also ensures consistency and standardization across your blueprint sets. By applying the same settings and preferences to each blueprint, you can be sure that the labeling and analysis is uniform and reliable.</p>
      <p>ESD's batch processing is highly scalable and can handle thousands of blueprints at a time, making it suitable for even the largest and most complex projects. And with our cloud based infrastructure, you can process blueprints from anywhere, on any device — all you need is an internet connection.</p>
      <p>But batch processing isn't just about efficiency — it's also about flexibility. ESD allows you to create custom processing profiles with your preferred settings and symbol libraries, so you can quickly and easily process blueprints according to your specific needs and standards.</p>
      <p>At ESD, we believe that batch processing is a must have feature for any serious electrical blueprint analysis tool. By automating the labeling and analysis of multiple blueprints at once, we're helping professionals work faster, smarter, and more consistently — and ultimately, to deliver better results to their clients.</p>
      <p>Ready to see the power of batch processing for yourself? Sign up for our free 14 day trial and start processing your blueprints with ESD today!</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.batch-processing {
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
