<script setup lang="ts">
import Notifications from '@/components/Notifications.vue'
</script>

<template>
 <div class="termination">
   <div class="content-title">
     <h1>Termination</h1>
   </div>
   <Notifications />
   <div class="content-body">
     <p>This section outlines the conditions under which user access to the ESD platform may be terminated, as well as the consequences of such termination.</p>
     <ol>
       <li>Voluntary Termination
         <ul>
           <li>You may voluntarily terminate your account and end your use of the ESD platform at any time and for any reason by contacting us at <a href="mailto:support@esd.one">support@esd.one</a>.</li>
           <li>Upon voluntary termination, your account will be disabled and you will no longer have access to your User Content or any other data associated with your account.</li>
         </ul>
       </li>
       <li>Termination by ESD
         <ul>
           <li>ESD may terminate your access to all or any part of the ESD platform at any time, with or without cause, with or without notice, effective immediately.</li>
           <li>Reasons for termination by ESD may include, but are not limited to:
             <ul>
               <li>Violation of these Terms of Service or any other ESD policies.</li>
               <li>Engagement in fraudulent or illegal activities.</li>
               <li>Failure to pay any fees or charges associated with your account.</li>
               <li>Repeated infringement of intellectual property rights of others.</li>
               <li>Use of the ESD platform in a manner that could cause harm to ESD or other users.</li>
               <li>Prolonged inactivity of your account.</li>
             </ul>
           </li>
         </ul>
       </li>
       <li>Effect of Termination
         <ul>
           <li>Upon termination of your account, whether voluntary or by ESD, your right to use the ESD platform will immediately cease.</li>
           <li>All provisions of these Terms of Service which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</li>
           <li>ESD may, but has no obligation to, delete or remove your User Content from the ESD platform upon termination. ESD may also retain a copy of your User Content and other account data for archival purposes or to comply with legal obligations.</li>
           <li>ESD will not be liable to you or any third party for any termination of your access to the ESD platform.</li>
         </ul>
       </li>
       <li>Refunds
         <ul>
           <li>In the event of termination by ESD, you may be entitled to a pro rata refund of any prepaid fees for the unused portion of your subscription term.</li>
           <li>Refunds will be processed within a reasonable time after termination, and will be credited back to the original payment method used for the subscription.</li>
           <li>No refunds will be provided in cases of termination due to violation of these Terms of Service or other ESD policies.</li>
         </ul>
       </li>
       <li>Reactivation of Accounts
         <ul>
           <li>In some cases, ESD may allow you to reactivate your terminated account by contacting <a href="mailto:support@esd.one">support@esd.one</a>.</li>
           <li>Reactivation of accounts is at the sole discretion of ESD, and may be subject to additional fees or conditions.</li>
           <li>ESD makes no guarantees about the availability or completeness of your User Content or other account data after reactivation.</li>
         </ul>  
       </li>
     </ol>
     <p>We understand that termination of your account can be disruptive, and we strive to handle these situations with care and professionalism. If you have any questions or concerns about account termination, or if you believe your account has been terminated in error, please contact us at <a href="mailto:support@esd.one">support@esd.one</a>. We will review your case and work with you to find an appropriate resolution.</p>
     <p>By using the ESD platform, you acknowledge and agree to these termination provisions, and understand the potential consequences of account termination. We hope that by clearly outlining these terms, we can maintain a safe, fair, and productive environment for all users of the ESD platform.</p>
     <img alt="ESD Logo" src="@/assets/esd.svg" width="500" />
   </div>
 </div>
</template>

<style scoped>
.termination {
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
