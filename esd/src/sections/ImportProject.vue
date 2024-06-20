<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="import-project">
    <div class="content-title">
      <h1>Import Project</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>In addition to creating new projects from scratch, ESD also allows you to import existing projects and blueprints from other sources, such as legacy systems, external storage devices, or third party applications. The Import Project feature in your Dashboard makes it easy to bring your existing data into the ESD platform, saving you time and effort in re creating projects and ensuring a smooth transition to our software.</p>
      <p>To import a project, click on the "Import Project" button in the top right corner of your Dashboard, next to the "New Project" button. This will open the Import Project wizard, which guides you through the following steps:</p>
      <ol>
        <li>Source Selection
          <ul>
            <li>Choose the source of your project data from a list of supported options, such as:
              <ul>
                <li>Local file system (e.g., your computer or network drive)</li>
                <li>Cloud storage provider (e.g., Google Drive, Dropbox, Box)</li>
                <li>Third party application (e.g., AutoCAD, Revit, Bluebeam)</li>
                <li>Legacy ESD version (e.g., ESD 1.x or 2.x)</li>
              </ul>
            </li>
            <li>Depending on the source you select, you may need to provide additional authentication or connection details, such as API keys or login credentials.</li>
          </ul>
        </li>
        <li>Data Upload
          <ul>
            <li>Select the project folder or archive file that contains your blueprints and associated data, such as symbol libraries, annotations, and metadata.</li>
            <li>ESD supports a wide range of file formats for import, including PDF, DWG, DXF, TIFF, and ZIP archives.</li>
            <li>As the data is uploaded, you'll see a progress bar and status message indicating the total size and estimated time remaining.</li>
          </ul>
        </li>
        <li>Data Mapping
          <ul>
            <li>Once your data is uploaded, ESD will analyze the contents and attempt to automatically map the files and folders to the corresponding project elements in our platform.</li>
            <li>For example, blueprint files will be mapped to the Blueprints section, symbol libraries will be mapped to the Symbol Libraries section, and so on.</li>
            <li>If ESD is unable to automatically map certain files or folders, you'll have the opportunity to manually assign them to the appropriate sections.</li>
          </ul>
        </li>
        <li>Project Configuration
          <ul>
            <li>Review and customize the project details, such as the name, description, type, and processing options.</li>
            <li>These settings will be pre populated based on the imported data, but you can modify them as needed to fit your specific requirements.</li>
            <li>If you're importing a project from a legacy ESD version, you may also have the option to migrate your settings and preferences from the old platform.</li>
          </ul>
        </li>
        <li>Import Confirmation
          <ul>
            <li>Once you've reviewed and configured your imported project, click the "Import" button to finalize the process and start processing your blueprints.</li>
            <li>Depending on the size and complexity of your project, the import may take several minutes to complete, during which time you'll see a progress indicator and status updates.</li>
            <li>Once the import is finished, your project will appear in the All Projects list, and you can access it just like any other project in ESD.</li>
          </ul>
        </li>
      </ol>
      <p>The Import Project feature is particularly useful for organizations that are transitioning to ESD from other blueprint analysis tools, or for users who have a backlog of existing projects that they want to manage and analyze in a single, centralized platform.</p>
      <p>At ESD, we understand that data migration and integration can be a complex and time consuming process. That's why we've designed our Import Project feature to be as simple, intuitive, and reliable as possible, with automatic data mapping, flexible configuration options, and comprehensive error handling and recovery.</p>
      <p>So if you have existing electrical blueprint data that you want to bring into ESD, don't hesitate to use our Import Project feature – and feel confident that your data will be seamlessly and securely transferred to our platform, ready for analysis and collaboration!</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.import-project {
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
