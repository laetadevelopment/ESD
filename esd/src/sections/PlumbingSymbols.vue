<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="plumbing-symbols">
    <div class="content-title">
      <h1>Plumbing Symbols</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>The third major category of symbols supported by ESD is Plumbing Symbols. These symbols represent the various components, fixtures, and equipment that are used to distribute water and remove waste in buildings, such as pipes, valves, fixtures, and drains.</p>
      <p>The Plumbing Symbols library in ESD includes a wide range of symbols organized into categories such as:</p>
      <ol>
        <li>Water Supply
          <ul>
            <li>Pipes (e.g., copper, PVC, PEX)</li>
            <li>Valves (e.g., gate, globe, ball)</li>
            <li>Fittings (e.g., elbow, tee, union)</li>
            <li>Meters (e.g., water, irrigation)</li>
          </ul>
        </li>
        <li>Drainage
          <ul>
            <li>Pipes (e.g., cast iron, ABS, PVC)</li>
            <li>Cleanouts (e.g., floor, wall, yard)</li>
            <li>Traps (e.g., P-trap, S-trap, drum trap)</li>
            <li>Vents (e.g., stack, branch, air admittance)</li>
          </ul>
        </li>
        <li>Fixtures
          <ul>
            <li>Sinks (e.g., kitchen, lavatory, utility)</li>
            <li>Toilets (e.g., floor mounted, wall hung)</li>
            <li>Showers (e.g., stall, tub/shower combo)</li>
            <li>Faucets (e.g., single handle, two handle)</li>
          </ul>
        </li>
        <li>Appliances
          <ul>
            <li>Water heaters (e.g., tank, tankless)</li>
            <li>Dishwashers (e.g., built in, portable)</li>
            <li>Washing machines (e.g., top load, front load)</li>
            <li>Disposals (e.g., continuous feed, batch feed)</li>
          </ul>
        </li>
        <li>Specialties
          <ul>
            <li>Backflow preventers (e.g., reduced pressure, double check)</li>
            <li>Pressure regulators (e.g., water, gas)</li>
            <li>Pumps (e.g., circulation, sump, sewage)</li>
            <li>Tanks (e.g., storage, expansion, pressure)</li>
          </ul>
        </li>
      </ol>
      <p>As with the other symbol libraries, each Plumbing symbol includes a detailed visual representation and metadata, which you can access from the symbol profile page. You can also create and manage custom Plumbing symbols using the Symbol Editor, allowing you to adapt your symbol library to the unique requirements of your projects.</p>
      <p>Accurate detection and labeling of Plumbing symbols is essential for various aspects of building design and construction, such as:</p>
      <ul>
        <li>Piping layout and sizing</li>
        <li>Fixture and equipment selection</li>
        <li>Water supply and drainage calculations</li>
        <li>Code compliance and permitting</li>
        <li>Coordination with other building systems (e.g., electrical, HVAC)</li>
      </ul>
      <p>By leveraging ESD's Plumbing Symbols library, you can quickly and accurately identify and analyze the key plumbing components in your blueprints, and ensure that your building's water and waste systems are properly designed, installed, and maintained.</p>
      <p>At ESD, we understand the critical role that plumbing plays in the health, safety, and comfort of building occupants. That's why we've invested significant resources into developing the most comprehensive and reliable Plumbing symbol recognition capabilities on the market. Our team of plumbing experts and data scientists continually update and expand our symbol library to keep pace with the latest codes, standards, and technologies in the industry.</p>
      <p>So whether you're designing a residential bathroom or a commercial high rise, you can count on ESD's Plumbing Symbols library to provide the visual intelligence and data you need to make informed decisions about your building's water and waste systems. With our user friendly tools and extensive knowledge base, you can streamline your plumbing design and analysis workflows, and deliver projects that are safe, efficient, and compliant.</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.plumbing-symbols {
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
