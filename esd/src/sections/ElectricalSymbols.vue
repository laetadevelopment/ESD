<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="electrical-symbols">
    <div class="content-title">
      <h1>Electrical Symbols</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>At the heart of ESD's blueprint analysis capabilities is our extensive library of electrical symbols. These symbols represent the various components, devices, and equipment that are commonly found in electrical systems, such as outlets, switches, lights, panels, and more. By accurately detecting and labeling these symbols in your blueprints, ESD helps you quickly identify and understand the key elements of your electrical design.</p>
      <p>The Electrical Symbols section of the Symbol Library in your Dashboard provides a centralized view of all the symbols that ESD can recognize and label in your blueprints. Here, you can browse, search, and manage the symbols that are most relevant to your projects and workflows.</p>
      <p>The Electrical Symbols library includes a wide range of symbol categories, such as:</p>
      <ol>
        <li>Power Devices
          <ul>
            <li>Outlets (e.g., NEMA 5-15, NEMA 14-50)</li>
            <li>Switches (e.g., single pole, three-way)</li>
            <li>Circuit breakers (e.g., GFCI, AFCI)</li>
            <li>Fuses (e.g., cartridge, plug)</li>
          </ul>
        </li>
        <li>Lighting Devices
          <ul>
            <li>Lamps (e.g., incandescent, fluorescent)</li>
            <li>Fixtures (e.g., recessed, surface mounted)</li>
            <li>Controls (e.g., dimmer, occupancy sensor)</li>
            <li>Emergency lighting (e.g., exit sign, battery backup)</li>
          </ul>
        </li>
        <li>Low Voltage Devices
          <ul>
            <li>Data outlets (e.g., RJ45, coaxial)</li>
            <li>Telephone jacks (e.g., RJ11, RJ14)</li>
            <li>Audio/visual (e.g., speaker, camera)</li>
            <li>Security (e.g., motion sensor, keypad)</li>
          </ul>
        </li>
        <li>Distribution Equipment
          <ul>
            <li>Panels (e.g., main, sub)</li>
            <li>Transformers (e.g., step down, isolation)</li>
            <li>Meters (e.g., watt-hour, demand)</li>
            <li>Disconnects (e.g., safety switch, circuit breaker)</li>
          </ul>
        </li>
        <li>Wiring Devices
          <ul>
            <li>Conduits (e.g., EMT, PVC)</li>
            <li>Cables (e.g., NM-B, THHN)</li>
            <li>Raceways (e.g., wireway, busway)</li>
            <li>Boxes (e.g., junction, pull)</li>
          </ul>
        </li>
      </ol>
      <p>Each symbol in the library includes a detailed visual representation, as well as metadata such as the symbol name, description, category, and applicable standards (e.g., NFPA 70, IEEE 315). You can view this information by clicking on a symbol in the library, which will open a detailed symbol profile page.</p>
      <p>From the symbol profile page, you can also access additional features and actions, such as:</p>
      <ul>
        <li>Editing the symbol metadata or visual representation</li>
        <li>Adding the symbol to your favorites or a custom symbol set</li>
        <li>Viewing the symbol's usage and detection statistics across your projects</li>
        <li>Accessing related documentation, such as manufacturer datasheets or installation guides</li>
      </ul>
      <p>In addition to the built in Electrical Symbols library, ESD also allows you to create and manage your own custom symbols. This is particularly useful if you have unique or proprietary components that are not included in the standard library, or if you want to use your own visual style or naming conventions for your symbols.</p>
      <p>To create a custom symbol, click the "Add Symbol" button in the top right corner of the Electrical Symbols section. This will open the Symbol Editor, where you can upload an image file, enter the symbol metadata, and assign the symbol to one or more categories. Once you've created a custom symbol, it will appear in your library alongside the built in symbols, and you can use it in your blueprint analysis just like any other symbol.</p>
      <p>At ESD, we understand that accurate and comprehensive symbol detection is essential to the success of any electrical blueprint analysis project. That's why we've invested significant time and effort into building and maintaining our Electrical Symbols library, and why we're continually expanding and improving it based on user feedback and industry standards.</p>
      <p>So whether you're working with standard components or custom devices, you can count on ESD's Electrical Symbols library to provide the visual intelligence and data you need to quickly and accurately analyze your blueprints. And with our intuitive symbol management tools and customization options, you can tailor your symbol library to meet the unique needs and preferences of your projects and workflows.</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.electrical-symbols {
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
