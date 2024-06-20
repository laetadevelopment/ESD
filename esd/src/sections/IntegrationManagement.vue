<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="integration-management">
    <div class="content-title">
      <h1>Integration Management</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>In today's fast paced and interconnected business environment, the ability to seamlessly integrate different tools, systems, and data sources is critical to achieving efficiency, agility, and innovation. That's why ESD provides a comprehensive and flexible Integration Management system, allowing you to easily connect and automate your electrical blueprint analysis workflows with your other software and platforms.</p>
      <p>The Integration Management section of the Settings dashboard gives you centralized control and visibility over your ESD account's integrations and API connections, including:</p>
      <ol>
        <li>Integration Marketplace
          <ul>
            <li>Browse and discover pre built integrations and connectors for popular software and platforms, such as AutoCAD, Revit, Bluebeam, Procore, and more</li>
            <li>Filter and search for integrations based on categories, features, and user reviews</li>
            <li>View detailed information and documentation for each integration, including setup instructions, compatibility notes, and pricing</li>
            <li>Install and configure integrations with just a few clicks, using secure authentication and authorization protocols</li>
          </ul>
        </li>
        <li>Custom Integration Builder
          <ul>
            <li>Create and deploy custom integrations and automations using ESD's powerful and flexible API and SDK</li>
            <li>Access comprehensive documentation, code samples, and developer tools to help you build and test your integrations</li>
            <li>Leverage ESD's webhooks, events, and triggers to automate workflows and data syncing across systems</li>
            <li>Get support and guidance from our developer community and technical experts</li>
          </ul>
        </li>
        <li>Integration Management Dashboard
          <ul>
            <li>View and manage all your active integrations and API connections in one centralized dashboard</li>
            <li>Monitor the status, usage, and performance of each integration, including data syncing, error rates, and latency</li>
            <li>Configure integration settings, such as data mapping, synchronization frequency, and error handling</li>
            <li>Enable or disable integrations, and control access and permissions for each connection</li>
          </ul>
        </li>
        <li>Integration Security and Compliance
          <ul>
            <li>Ensure the security and privacy of your data and workflows with industry standard encryption, authentication, and access controls</li>
            <li>Comply with relevant regulations and standards, such as GDPR, HIPAA, and SOC 2, with built in data protection and auditing features</li>
            <li>Manage user consent and authorization for third party integrations and data sharing</li>
            <li>Regularly review and audit your integration logs and activity for any suspicious or unauthorized access</li>
          </ul>
        </li>
        <li>Integration Support and Resources
          <ul>
            <li>Access comprehensive documentation, tutorials, and guides for setting up and managing your ESD integrations</li>
            <li>Get help and support from our knowledgeable and responsive technical team, via email, chat, or phone</li>
            <li>Join our community of users and developers to share best practices, ask questions, and learn from others</li>
            <li>Stay up to date with the latest integration features, updates, and releases with our regular newsletters and webinars</li>
          </ul>
        </li>
      </ol>
      <p>The Integration Management system is designed to be flexible, scalable, and user friendly, allowing you to easily connect and automate your ESD workflows with your existing tools and platforms, without requiring deep technical expertise or resources.</p>
      <p>At ESD, we believe that integration is not just a technical challenge, but also a strategic opportunity. By enabling you to seamlessly connect and leverage your different data sources, systems, and workflows, we help you break down silos, improve collaboration, and drive innovation across your organization.</p>
      <p>We also understand that integration is not a one size fits all proposition, and that every organization has unique needs and constraints when it comes to connecting and automating their workflows. That's why we provide a range of integration options and approaches, from pre built connectors to custom API development, to match your specific requirements and capabilities.</p>
      <p>Moreover, we are committed to ensuring the security, privacy, and compliance of your integration workflows, with robust data protection, access control, and auditing features built into our platform. We work closely with our integration partners and customers to maintain the highest standards of security and trust, and to help you navigate the complex regulatory and legal landscape of data integration and sharing.</p>
      <p>Ultimately, our goal is to help you unlock the full potential of your electrical blueprint analysis workflows, by enabling you to seamlessly connect and leverage your different tools, systems, and data sources. With ESD's Integration Management system, you can not only streamline your technical operations but also drive innovation, collaboration, and growth across your organization.</p>
      <p>So whether you are looking to automate your data syncing, streamline your approval workflows, or enable real time collaboration across teams and platforms, the Integration Management section provides you with the tools and resources you need to succeed. With ESD, you can not only optimize your electrical blueprint analysis processes, but also transform your entire business and industry.</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.integration-management {
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
