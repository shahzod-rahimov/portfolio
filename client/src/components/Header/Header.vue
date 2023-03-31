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
              <router-link to="/portfolio" class="hover:text-white active:font-medium"
                ><span class="text-[#C778DD]">#</span>portfolio</router-link
              >
            </li>
            <li>
              <router-link to="/about" class="hover:text-white active:font-medium">
                <span class="text-[#C778DD]">#</span>about-me</router-link
              >
            </li>
            <li>
              <router-link to="contact" class="hover:text-white active:font-medium">
                <span class="text-[#C778DD]">#</span>contacts
              </router-link>
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
