<template>
  <header class="pt-8">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <Logo class="w-[16px]" />
          <p class="text-[16px] font-bold text-white">Shahzod</p>
        </div>

        <nav class="flex">
          <ul class="flex gap-8 text-[#ABB2BF]">
            <li>
              <router-link to="/" class="hover:text-white active:font-medium"
                ><span class="text-[#C778DD]">#</span>home</router-link
              >
            </li>
            <li>
              <a href="#about" class="hover:text-white active:font-medium">
                <span class="text-[#C778DD]">#</span>about-me
              </a>
            </li>
            <li>
              <router-link to="/works" class="hover:text-white active:font-medium"
                ><span class="text-[#C778DD]">#</span>works</router-link
              >
            </li>
            <li>
              <router-link to="/blog" class="hover:text-white active:font-medium">
                <span class="text-[#C778DD]">#</span>blog</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import Logo from '../icons/logo.vue'
</script>
<style scoped>
.router-link-active {
  color: #fff;
  font-weight: 500;
}
</style>
