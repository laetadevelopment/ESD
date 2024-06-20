<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="hvac-symbols">
    <div class="content-title">
      <h1>HVAC Symbols</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>In addition to electrical symbols, ESD also provides detection and labeling capabilities for HVAC (Heating, Ventilation, and Air Conditioning) symbols in your blueprints. These symbols represent the various components and equipment that are used to control the temperature, humidity, and air quality in buildings, such as air handlers, ductwork, diffusers, and thermostats.</p>
      <p>The HVAC Symbols library in ESD includes a comprehensive set of symbols organized into categories such as:</p>
      <ol>
        <li>Heating Equipment
          <ul>
            <li>Furnaces (e.g., gas, electric, oil)</li>
            <li>Boilers (e.g., steam, hot water)</li>
            <li>Heat pumps (e.g., air source, ground source)</li>
            <li>Radiant heating (e.g., floor, wall, ceiling)</li>
          </ul>
        </li>
        <li>Cooling Equipment
          <ul>
            <li>Air conditioners (e.g., split system, packaged unit)</li>
            <li>Chillers (e.g., air cooled, water cooled)</li>
            <li>Cooling towers (e.g., open, closed)</li>
            <li>Evaporative coolers (e.g., direct, indirect)</li>
          </ul>
        </li>
        <li>Ventilation Equipment
          <ul>
            <li>Air handling units (e.g., constant volume, variable air volume)</li>
            <li>Fans (e.g., supply, exhaust, return)</li>
            <li>Ductwork (e.g., rectangular, round, flexible)</li>
            <li>Dampers (e.g., fire, smoke, balancing)</li>
          </ul>
        </li>
        <li>Distribution Devices
          <ul>
            <li>Diffusers (e.g., square, linear, perforated)</li>
            <li>Registers (e.g., sidewall, floor, ceiling)</li>
            <li>Grilles (e.g., supply, return, transfer)</li>
            <li>Terminal units (e.g., VAV box, fan coil unit)</li>
          </ul>
        </li>
        <li>Control Devices
          <ul>
            <li>Thermostats (e.g., programmable, wireless)</li>
            <li>Sensors (e.g., temperature, humidity, CO2)</li>
            <li>Valves (e.g., two-way, three-way, modulating)</li>
            <li>Actuators (e.g., electric, pneumatic)</li>
          </ul>
        </li>
      </ol>
      <p>Like the Electrical Symbols library, each HVAC symbol includes a detailed visual representation and metadata, which you can access from the symbol profile page. You can also create and manage custom HVAC symbols using the Symbol Editor, allowing you to tailor your symbol library to the specific needs of your projects.</p>
      <p>Accurate detection and labeling of HVAC symbols is crucial for several aspects of building design and construction, such as:</p>
      <ul>
        <li>Load calculations and equipment sizing</li>
        <li>Ductwork layout and routing</li>
        <li>Energy modeling and simulation</li>
        <li>Commissioning and testing</li>
        <li>Maintenance and troubleshooting</li>
      </ul>
      <p>By using ESD's HVAC Symbols library in conjunction with our electrical and plumbing symbol detection capabilities, you can gain a comprehensive understanding of the mechanical, electrical, and plumbing (MEP) systems in your building, and ensure that they are properly coordinated and integrated.</p>
      <p>At ESD, we're committed to providing the most accurate and up to date HVAC symbol recognition capabilities in the industry. Our team of HVAC experts and data scientists continually research and incorporate the latest standards, best practices, and technologies into our symbol library, so you can trust that your blueprint analysis results are reliable and actionable.</p>
      <p>So whether you're working on a small residential project or a large commercial complex, ESD's HVAC Symbols library has you covered. With our intuitive tools and comprehensive data, you can quickly and easily identify and analyze the key HVAC components in your blueprints, and make informed decisions about your building's mechanical systems.</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.hvac-symbols {
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
