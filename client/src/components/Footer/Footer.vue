<template>
  <footer class="border-t-[1px] border-[#ABB2BF] mt-[145px] py-8 text-white">
    <div class="container mx-auto">
      <div class="flex justify-between">
        <div>
          <div class="flex items-center gap-6">
            <div class="flex items-center gap-2">
              <Logo class="w-4" />
              <p class="font-medium">Shahzod</p>
            </div>
            <p class="text-[#ABB2BF]">shahzod3235@gmail.com</p>
          </div>
          <p>Full Stack Web developer</p>
        </div>

        <div class="flex flex-col">
          <h1 class="text-2xl font-medium">Media</h1>
          <ul class="flex items-center gap-[14px] mt-[18px]">
            <li class="cursor-pointer">
              <a href="https://github.com/shahzod-rahimov" target="_blank">
                <i class="bx bxl-github text-[#ABB2BF] text-[25px] hover:text-white"></i>
              </a>
            </li>
            <li class="cursor-pointer">
              <a
                href="https://t.me/shahzodrahimov21"
                target="_blank"
                class="w-[23px] h-[23px] rounded-full bg-[#ABB2BF] hover:bg-white flex items-center justify-center"
              >
                <i class="bx bxl-telegram text-[#282C33]"></i>
              </a>
            </li>
            <li class="cursor-pointer">
              <a href="https://www.linkedin.com/in/shahzod-rahimov-017839256/" target="_blank">
                <i class="bx bxl-linkedin-square text-[#ABB2BF] text-[25px] hover:text-white"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p class="text-center mt-[48px] text-[#ABB2BF]">© Copyright {{ new Date().getFullYear() }}. Made by Shahzod</p>
    </div>
  </footer>
</template>

<script setup>
import Logo from '../icons/logo.vue'
import Github from '../icons/github.vue'
import Linkedin from '../icons/Linkedin.vue'
import Telegram from '../icons/Telegram.vue'
</script>

<style lang="css">
.icon > path:hover {
  fill: white;
}
</style>
