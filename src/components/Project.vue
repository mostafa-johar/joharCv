<template>
  <a class="box" :href="project.link" target="_blank">
  
      <div class="imgBox">
        <img :src="getImg(project.src)" :alt="project.title" loading="lazy" />
      </div>
      <p>{{ project.title }}</p>
  </a>  
</template>

<script setup>
defineProps(["project"]);

const getImg = (name) => {
  return new URL(`../assets/imgs/${name}.png`, import.meta.url).href;
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  .imgBox {
    width: 100%;
    height: auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.3s ease;
      &:hover {
        transform: scale(0.9);
      }
    }
  }
  p {
    color: var(--p);
    font-size: 14px;
    font-weight: 500;
  }
}
</style>
