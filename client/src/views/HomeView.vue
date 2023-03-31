<template>
  <div class="container mx-auto">
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
          With great power comes great electricity bill
        </div>
        <div class="bg-[#282C33] absolute z-10 right-8 bottom-[45px] p-2 rounded-full">
          <Mark />
        </div>
        <div class="text-2xl p-4 border border-[#ABB2BF] ml-auto w-[172px] border-t-0">
          - Dr. Who
        </div>
      </div>
      <!-- <div class="w-[91px] h-[91px] border border-r-0 border-[#ABB2BF] absolute top-0 -right-[140px]"></div> -->
    </div>
  </div>
</template>

<script setup>
import LogoOutline from '../components/icons/logo-outline.vue'
import Dots from '../components/icons/Dots.vue'
import DarkMan from '../images/Image.png'
import Mark from '../components/icons/Mark.vue'
</script>

<style scoped>
.cv:hover > i {
  color: #fff;
}
</style>
