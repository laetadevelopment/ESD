<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="export-project">
    <div class="content-title">
      <h1>Export Project</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>Once you've analyzed your electrical blueprints and generated valuable insights and data within ESD, you may want to export that information for use in other systems, reports, or workflows. The Export Project feature in your Dashboard allows you to easily download your project data in a variety of formats, giving you the flexibility to share and integrate your results with other tools and stakeholders.</p>
      <p>To export a project, navigate to the project details page and click on the "Export" button in the top right corner. This will open the Export Project dialog, where you can configure the following options:</p>
      <ol>
        <li>Data Selection
          <ul>
            <li>Choose which project data you want to export, such as:
              <ul>
                <li>Blueprint images (original or annotated)</li>
                <li>Symbol detection results (locations, labels, and metadata)</li>
                <li>Collaboration data (comments, annotations, and assignments)</li>
                <li>Project metadata (name, description, type, and settings)</li>
              </ul>
            </li>
            <li>You can select all data categories or pick and choose the specific items you need, depending on your export requirements.</li>
          </ul>
        </li>
        <li>Format Selection
          <ul>
            <li>Select the file format(s) in which you want to export your data, such as:
              <ul>
                <li>PDF (with or without annotations)</li>
                <li>DWG or DXF (AutoCAD formats)</li>
                <li>TIFF or PNG (image formats)</li>
                <li>CSV or XLSX (spreadsheet formats)</li>
                <li>JSON or XML (structured data formats)</li>
              </ul>
            </li>
            <li>You can choose multiple formats to generate separate files for each one, or select a single format for all your exported data.</li>
          </ul>
        </li>
        <li>Export Settings
          <ul>
            <li>Configure additional settings for your exported files, such as:
              <ul>
                <li>Page size and orientation (for PDF and image exports)</li>
                <li>Layer visibility and naming conventions (for DWG and DXF exports)</li>
                <li>Column headers and data types (for CSV and XLSX exports)</li>
                <li>Data structure and encoding (for JSON and XML exports)</li>
              </ul>
            </li>
            <li>These settings allow you to customize the output of your exported files to match the requirements of your downstream systems or workflows.</li>
          </ul>
        </li>
        <li>Delivery Options
          <ul>
            <li>Choose how you want to receive your exported files, such as:
              <ul>
                <li>Direct download (as a ZIP archive)</li>
                <li>Email delivery (to one or more recipients)</li>
                <li>Cloud storage (e.g., Google Drive, Dropbox, Box)</li>
                <li>Integration with third party applications (e.g., Slack, Trello, Jira)</li>
              </ul>
            </li>
            <li>Depending on the size and complexity of your project, the export process may take several minutes to complete, and you'll receive a notification when your files are ready for download or delivery.</li>
          </ul>
        </li>
      </ol>
      <p>Once you've configured your export options, click the "Export" button to start the process. You can monitor the progress and status of your export in the Export History section of your Dashboard, which keeps a record of all your previous exports and allows you to re download or re send files as needed.</p>
      <p>The Export Project feature is particularly useful for sharing your electrical blueprint analysis results with colleagues, clients, or partners who may not have access to ESD, or for integrating your data into other design, project management, or reporting tools.</p>
      <p>At ESD, we understand that interoperability and data portability are critical factors in the success of any software platform. That's why we've designed our Export Project feature to be as flexible, customizable, and user friendly as possible, with support for a wide range of file formats, delivery options, and integration scenarios.</p>
      <p>So when you're ready to share your ESD project data with the world, don't hesitate to use our Export Project feature – and feel confident that your results will be easily accessible and usable by anyone who needs them, in whatever format they require!</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.export-project {
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
