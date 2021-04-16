<template>
 <ConferencePage :selectedIndex="2">
   <!-- <div class="row page-title">
     <div class="col-12 no-margin-horizontal">
       <h2>Sponsors</h2>
     </div>
   </div>
   <div style="width: 100%; display: flex; flex-direction: column; align-items: flex-start" >
     <h1 class="sponsors-title">SPONSORS</h1>
   </div>
   -->
    <div class="fridge">
     <img class="background-image" src="/static/sponsors-2021.png" width="100%">
     <!--
     <div class="upper-fridge">
       <div class="logo">
         <img class="logo-image" src="/static/sponsor-logos/2021/asuw-2021.png" >
       </div>
      
      
     </div>
    
     <div class="lower-fridge">
       <div class="logo1">
           <img class="logo-image" src="/static/sponsor-logos/2021/foster-2021.png" >
       </div>
       <div class="logo2">
           <img class="logo-image" src="/static/sponsor-logos/2021/csf-2021.png" >
       </div>
      
       <div class="logo3">
           <img class="logo-image" src="/static/sponsor-logos/2021/uwmac-2021.png" >
       </div>
     </div> 
     -->
   </div>
 </ConferencePage>
</template>
 
<script>
import Arrows from "@/components/Arrows";
import ConferencePage from "@/components/ConferencePage";
export default {
 name: "SponsorPage",
 components: { Arrows, ConferencePage },
 data() {
   return {
     sponsors: [
       {
         title: 'ASUW',
         subtitle: 'Associated Students of the University of Washington',
         desc: 'The ASUW Special Appropriations Fund is a student levied, student distributed fund to support and enhance the out of class experience of students. The fund provides one-time funding grants to student initiated and developed event-centered programs which enrich the cultural, emotional, intellectual, and social well-being of the student.',
         logo: 'asuw.png'
       },
       {
         title: 'Buerk Center',
         subtitle: 'Buerk Center for Entrepreneurship',
         desc: 'The Buerk Center offers an exceptional curriculum, real-world experiences, and connections to teh Seattle entrepreneurial community to inspire students from all majors and disciplines across campus to pursue their entrepreneurial passions.',
         logo: 'buerk_center.png'
       },
       {
         title: 'CSF',
         subtitle: 'Campus Sustainabiity Fund',
         desc: 'We are creating a sustainable campus & fostering an intentional and involved university culture by funding student-led interdisciplinary projects that drive equity, resilience, and stewardship on campus.',
         logo: 'csf.png'
       },
       {
         title: 'UMAC',
         subtitle: 'UW University Marketing and Communications',
         desc: 'At UMAC we consider ourselves enthusiastic ambassadors of the University of Washington and its brand. We build awareness and increase support for the UW by collaborating with campus partners, valued supporters, and the community to further the mission of this great university!',
         logo: 'uwmac.png'
       },
       {
         title: 'Wells Fargo',
         subtitle: 'Wells Fargo Fund for Registered Student Organizations',
         desc: 'The Wells Fargo Fund for Registered Student Organizations has been created to allocate money to support the on-campus events, programs, and activities of Registered Student Organizations (RSOs). The Fund is intended to support the ability of RSOs to enrich campus culture, foster student empowerment, and enhance community impact. The funding is distributed through the Student Activities Office.',
         logo: 'wells_fargo.png'
       }
     ]
   }
 },
 methods: {
   getFileName(name) {
     return '/static/sponsor-logos/' + name;
   }
 }
};
</script>
 
<style lang="scss" scoped>
@import "@/styles/_variables.scss";
 
 
  .fridge {
   width: 100%;
 
   .upper-fridge {
     //display: grid;
     display: inline-block;
     overflow: hidden;
     position: absolute;
     //max-width: 100%;
     height: auto;
     padding-top: 60%;
     left: 27vw;
   }
 
   .lower-fridge {
     //display: grid;
     display: inline-block;
     overflow: hidden;
     position: absolute;
     //max-width: 100%;
     height: auto;
     padding-top: 100%;
     left: 27vw;
   }
 }
 
  .logo-image {
   width: 100%;
 }
 .sponsors-title {
   padding: 70px 0 0 10vw;
   margin-top: 0px;
   font-size: 3rem;
   align-self: flex-start;
 }
 
 .page-title {
   margin-top: 16px;
 
   h2 {
     width: 100%;
     display: block;
     color: black;
     text-transform: uppercase;
     text-align: left;
     font-size: 3rem;
     line-height: 1.5em;
     margin: 0;
   }
 }
 
.section-sponsors {
 margin-top: 0px;
 
 .img-container {
   display: flex;
   justify-content: center;
   align-items: center;
 
   img {
     max-width: 80%;
     height: auto;
   }
 }
 
 .content {
   .accent {
     background-color: $color-primary;
     height: 1vh;
     width: 8.2vw;
     margin-bottom: 3vh;
   }
 
   h3 {
     font-weight: 400;
   }
 }
}
</style>
