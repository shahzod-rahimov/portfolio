<template>
  <!-- start home -->
  <section class="home">
    <div class="container mx-auto">
      <!-- start home  -->
      <div class="flex items-center mt-[62px]">
        <div class="flex flex-col gap-8 items-start w-[50%]">
          <h1 class="text-[32px] text-white font-semibold">
            Shahzod is a <span class="text-[#C778DD]">back-end</span> and
            <span class="text-[#C778DD]">front-end developer</span>
          </h1>
          <p class="text-[#ABB2BF] w-[90%]">
            He crafts responsive websites where technologies meet creativity
          </p>
          <div class="flex gap-2">
            <router-link
              to="/contact"
              class="border border-[#C778DD] text-white px-4 font-semibold flex items-center hover:bg-[#c778dd33]"
              >Contact me!!</router-link
            >
            <button
              class="cv text-white py-2 px-4 font-semibold flex items-center gap-2 border border-[#C778DD] hover:bg-[#c778dd33]"
            >
              <i class="bx bxs-cloud-download text-[#C778DD] text-2xl"></i> Download CV
            </button>
          </div>
        </div>

        <div class="w-[50%] relative flex flex-col items-end">
          <LogoOutline class="absolute opacity-50 top-[20%] left-11" />
          <img :src="DarkMan" alt="Hacker Man" class="relative z-10 w-[90%]" />
          <div class="w-[90%] border border-[#ABB2BF] p-2 flex items-center gap-3">
            <div class="bg-[#C778DD] w-4 h-4"></div>
            <p class="text-[#ABB2BF] font-medium">
              Currently working on <span class="text-white">Portfolio</span>
            </p>
          </div>
          <Dots class="absolute bottom-[100px] right-4 z-20" />
        </div>
      </div>

      <div class="relative">
        <div class="text-white relative mt-[112px] w-[70%] mx-auto">
          <div class="bg-[#282C33] absolute z-10 -top-4 left-3 p-2 rounded-full">
            <Mark />
          </div>
          <div class="font-medium text-2xl p-8 border border-[#ABB2BF]">
            First, solve the problem. Then, write the code.
          </div>
          <div class="bg-[#282C33] absolute z-10 right-8 bottom-[45px] p-2 rounded-full">
            <Mark />
          </div>
          <div class="text-2xl p-4 border border-[#ABB2BF] ml-auto w-[240px] border-t-0">
            - John Johnson
          </div>
        </div>
        <!-- <div class="w-[91px] h-[91px] border border-r-0 border-[#ABB2BF] absolute top-0 -right-[140px]"></div> -->
      </div>
    </div>
  </section>
  <!-- finish home  -->

  <!-- start projects -->
  <section class="projects text-white mt-[75px]">
    <div class="container mx-auto">
      <div class="flex justify-between">
        <div class="flex items-center gap-4 w-[80%]">
          <h1 class="text-[32px] font-medium"><span class="text-[#C778DD]">#</span>projects</h1>
          <div class="bg-[#C778DD] h-[1px] w-[55%]"></div>
        </div>

        <router-link to="/works" class="font-medium"> View all ~~> </router-link>
      </div>

      <ul class="mt-12 flex gap-10 items-baseline">
        <li class="border border-[#ABB2BF] w-[330px] h-auto">
          <img :src="ChartNodes" alt="Chart Nodes" class="" />
          <p class="p-2 text-[#ABB2BF] border-b border-[#ABB2BF]">HTML SCSS Python Flask</p>

          <div class="p-4 flex flex-col gap-4">
            <h2 class="text-2xl font-medium">ChertNodes</h2>
            <p class="text-[#ABB2BF]">Minecraft servers hosting</p>

            <a href="#" class="border border-[#C778DD] w-[40%] py-2 px-4 hover:bg-[#c778dd33]"
              >Live &lt~></a
            >
          </div>
        </li>
        <li class="border border-[#ABB2BF] w-[330px] h-auto">
          <img :src="ProtectX" alt="Protect X" class="" />
          <p class="p-2 text-[#ABB2BF] border-b border-[#ABB2BF]">
            React Express Discord.js Node.js HTML SCSS Python Flask
          </p>

          <div class="p-4 flex flex-col gap-4">
            <h2 class="text-2xl font-medium">ProtectX</h2>
            <p class="text-[#ABB2BF]">Discord anti-crash bot</p>

            <a href="#" class="border border-[#C778DD] w-[40%] py-2 px-4 hover:bg-[#c778dd33]"
              >Live &lt~></a
            >
          </div>
        </li>
        <li class="border border-[#ABB2BF] w-[330px] h-auto">
          <img :src="Kahoot" alt="Kahoot" class="" />
          <p class="p-2 text-[#ABB2BF] border-b border-[#ABB2BF]">CSS Express Node.js</p>

          <div class="p-4 flex flex-col gap-4">
            <h2 class="text-2xl font-medium">Kahoot Answers Viewer</h2>
            <p class="text-[#ABB2BF]">Get answers to your kahoot quiz</p>

            <a href="#" class="border border-[#C778DD] w-[40%] py-2 px-4 hover:bg-[#c778dd33]"
              >Live &lt~></a
            >
          </div>
        </li>
      </ul>
    </div>
  </section>
  <!-- finish projects -->

  <!-- start skills -->
  <section class="text-white mt-[102px]">
    <div class="container mx-auto">
      <div class="flex items-center gap-4">
        <h1 class="text-[32px] font-medium"><span class="text-[#C778DD]">#</span>skills</h1>
        <div class="bg-[#C778DD] h-[1px] w-[20%]"></div>
      </div>

      <div class="mt-3 flex gap-[59px]">
        <div class="left-side relative w-[32%] h-[282px] ml-5">
          <Dots class="w-[63px] absolute top-10" />
          <div class="w-[86px] h-[86px] border border-[#ABB2BF] absolute right-9 top-0"></div>
          <Dots class="w-[63px] absolute bottom-[76px] right-[107px]" />
          <div class="w-[52px] h-[52px] border border-[#ABB2BF] absolute right-0 bottom-9"></div>
          <LogoOutline class="w-[113px] absolute bottom-0 left-4" />
        </div>

        <div class="right-side flex items-start gap-4 w-[60%] mt-[45px] text-[#ABB2BF]">
          <div class="border border-[#ABB2BF]">
            <p class="border-b border-[#ABB2BF] p-2 font-semibold text-white">Languages</p>
            <p class="p-2">Node.js JavaScript TypeScript C Python</p>
          </div>
          <div class="flex flex-col gap-4">
            <div class="border border-[#ABB2BF]">
              <p class="border-b border-[#ABB2BF] p-2 font-semibold text-white">
                Back-end Frameworks
              </p>
              <p class="p-2">
                Express.js Koa.js NestJs Passport.js Sequelize.js Prisma ORM TypeOrm Mongoose EJS
                Handlebars. js
              </p>
            </div>
            <div class="border border-[#ABB2BF]">
              <p class="border-b border-[#ABB2BF] p-2 font-semibold text-white">
                Front-end Frameworks
              </p>
              <p class="p-2">Vue.js Pinia Vuex</p>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <div class="border border-[#ABB2BF]">
              <p class="border-b border-[#ABB2BF] p-2 font-semibold text-white">Databases</p>
              <p class="p-2">PostgreSQL MySQL MongoDB</p>
            </div>
            <div class="border border-[#ABB2BF]">
              <p class="border-b border-[#ABB2BF] p-2 font-semibold text-white">Other</p>
              <p class="p-2">
                HTML CSS SCSS TailwindCSS Docker GraphQL node- telegram-bot-api Telegraf.js Git
                Github
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- finish skills -->
</template>

<script setup>
import LogoOutline from '../components/icons/logo-outline.vue'
import Dots from '../components/icons/Dots.vue'
import DarkMan from '../images/Image.png'
import Mark from '../components/icons/Mark.vue'
import ChartNodes from '../images/chertNodes.jpg'
import ProtectX from '../images/protectx.jpg'
import Kahoot from '../images/kahoot.jpg'
</script>

<style scoped>
.cv:hover > i {
  color: #fff;
}
</style>
