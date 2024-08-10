<script setup lang="ts">
   import Header from './components/Header.vue'
   import Footer from './components/Footer.vue'
</script>

<template>

  <div class="default">
    <!-- header -->
      <Header />

    <!-- pages -->
    <main class="pages">
      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
            <component :is="Component"></component>
        </transition>
      </router-view>
    </main>

    <!-- Footer -->
     <Footer />
  </div>

</template>

<style scoped>
.route-enter-active,
.route-leave-active{
   transition: all .3s ease-out;
}

.route-enter-from{
  /* opacity: 0; */
  transform: translateX(200px);
  /* transform: scale(.6); */
}

.route-leave-to{
  /* opacity: 0; */
  transform: translateX(0);
  /* transform: scale(1); */
}
</style>
