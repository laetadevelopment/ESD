<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="custom-symbols">
    <div class="content-title">
      <h1>Custom Symbols</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>While ESD's built in symbol libraries cover a wide range of standard electrical, HVAC, and plumbing components, we recognize that every building project is unique, and may include custom or specialized symbols that are not included in our default collections. That's why we've made it easy for users to create, import, and manage their own Custom Symbols within the ESD platform.</p>
      <p>The Custom Symbols section of the Symbol Library allows you to:</p>
      <ol>
        <li>Create New Symbols
          <ul>
            <li>Use the Symbol Editor to draw or import custom symbol graphics</li>
            <li>Define symbol metadata, such as name, description, and category</li>
            <li>Specify detection rules and parameters for the symbol</li>
          </ul>
        </li>
        <li>Import Existing Symbols
          <ul>
            <li>Upload symbol graphics in common formats (e.g., DWG, DXF, SVG)</li>
            <li>Map symbol metadata and detection rules from a spreadsheet or database</li>
            <li>Batch import multiple symbols at once using a ZIP archive</li>
          </ul>
        </li>
        <li>Organize Symbol Sets
          <ul>
            <li>Group related custom symbols into sets for easy access and management</li>
            <li>Assign symbols to multiple sets based on different criteria or use cases</li>
            <li>Share symbol sets with other team members or projects</li>
          </ul>
        </li>
        <li>Collaborate on Symbols
          <ul>
            <li>Allow team members to view, edit, and use custom symbols</li>
            <li>Control access and permissions for each symbol or set</li>
            <li>Track changes and versions of symbols over time</li>
          </ul>
        </li>
        <li>Integrate with Other Systems
          <ul>
            <li>Export custom symbols in various formats for use in other tools (e.g., CAD, GIS)</li>
            <li>Sync custom symbols with external databases or asset management systems</li>
            <li>Use the ESD API to programmatically create, update, and manage custom symbols</li>
          </ul>
        </li>
      </ol>
      <p>Some examples of custom symbols that users might create in ESD include:</p>
      <ul>
        <li>Company specific equipment or components</li>
        <li>Regional or international symbols not used in North America</li>
        <li>Experimental or prototype devices not yet standardized</li>
        <li>Symbols for specialized systems, such as laboratory or medical equipment</li>
        <li>Graphical legends, keys, or annotations used in a particular project or firm</li>
      </ul>
      <p>By creating and managing custom symbols in ESD, users can ensure that their blueprint analysis results are tailored to the specific needs and conventions of their projects, clients, or organizations. Custom symbols also help to streamline communication and coordination among project stakeholders, by providing a common visual language and data structure for all parties involved.</p>
      <p>At ESD, we're committed to providing the most flexible and adaptable symbol recognition platform in the industry. We understand that every user has unique requirements and preferences when it comes to symbol graphics, metadata, and detection rules. That's why we've designed our Custom Symbols tools to be as intuitive and powerful as possible, while still maintaining the same level of accuracy and reliability as our built in symbol libraries.</p>
      <p>So whether you're working with standard components or one of a kind devices, ESD's Custom Symbols capabilities have you covered. With our user friendly Symbol Editor, batch import tools, and flexible metadata and detection options, you can create and manage custom symbols with ease, and ensure that your blueprint analysis results are always relevant, accurate, and actionable.</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.custom-symbols {
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
