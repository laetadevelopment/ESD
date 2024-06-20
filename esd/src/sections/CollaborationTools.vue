<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
  <div class="collaboration-tools">
    <div class="content-title">
      <h1>Collaboration Tools</h1>
    </div>
    <Notifications />
    <div class="content-body">
      <p>At ESD, we understand that electrical blueprint analysis is rarely a solo endeavor. Whether you're working with a team of colleagues, collaborating with external partners, or sharing your work with clients, effective communication and collaboration are key to success.</p>
      <p>That's why we've built a suite of powerful collaboration tools right into our app, making it easy to work together on electrical blueprints and projects. With ESD, you can:</p>
      <ol>
        <li>Share blueprints and projects: Easily share individual blueprints or entire projects with team members, partners, or clients. You can control access levels (view, edit, or admin) and set expiration dates for shared links.</li>
        <li>Co edit and co annotate: Work together on blueprints in real time, with multiple users able to view, edit, and annotate the same file simultaneously. See each other's cursors, comments, and changes as they happen.</li>
        <li>Leave comments and feedback: Add comments and feedback directly on the blueprint, tagging specific users and assigning tasks or follow ups. Keep all your communication and collaboration in one place, right where it's most relevant.</li>
        <li>Track versions and changes: ESD automatically tracks versions and changes to your blueprints, so you can see who made what changes when. Easily revert to previous versions or compare differences between versions.</li>
        <li>Integrate with other tools: Connect ESD with your existing project management, communication, and file storage tools (such as Slack, Trello, Google Drive, or Dropbox) for a seamless and integrated workflow.</li>
      </ol>
      <p>Our collaboration tools are designed to be intuitive, flexible, and powerful, supporting a wide range of collaboration scenarios and workflows. Whether you're working on a small project with a close knit team or a large, complex project with multiple stakeholders, ESD has you covered.</p>
      <p>But collaboration isn't just about features — it's also about security and control. That's why ESD provides granular access controls, secure file sharing, and robust data protection, ensuring that your blueprints and projects are always safe and secure.</p>
      <p>We also understand that effective collaboration requires more than just tools — it requires a culture and mindset of openness, transparency, and trust. That's why we've built collaboration best practices and guided workflows right into our app, helping teams establish clear communication, roles, and expectations from the start.</p>
      <p>At ESD, we believe that collaboration is the key to unlocking the full potential of electrical blueprint analysis. By bringing together diverse perspectives, expertise, and insights, teams can work faster, smarter, and more creatively — and ultimately, deliver better results.</p>
      <p>Ready to take your collaboration to the next level? Sign up for ESD today and start working together like never before!</p>
      <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
    </div>
  </div>
</template>

<style scoped>
.collaboration-tools {
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
