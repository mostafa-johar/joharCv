<template>
  <div class="Resume">
    <section class="skills">
      <h3 class="title">Skills :</h3>
      <ul>
        <li v-for="(skill, index) in skills" :key="index">
          <img :src="getImg(skill.img)" alt="html" width="15" />
          <span>{{ skill.title }}</span>
        </li>
      </ul>
    </section>

    <!----------------------  -->

    <section class="knowledge">
      <h3 class="title">knowledge :</h3>
      <ul>
        <li v-for="(skill, index) in knowledge" :key="index">
          <img :src="getImg(skill.img)" alt="html" width="15" />
          <span>{{ skill.title }}</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
const skills = [
  {
    img: "html.svg",
    title: "HTML",
  },
  {
    img: "css.svg",
    title: "CSS",
  },
  {
    img: "JavaScript.svg",
    title: "JavaScript",
  },
  {
    img: "Vue.svg",
    title: "Vue3",
  },
  {
    img: "Nuxt.svg",
    title: "Nuxt3",
  },
  {
    img: "Pinia.svg",
    title: "pinia",
  },
  {
    img: "Scss.svg",
    title: "Scss",
  },
  {
    img: "Tailwind.svg",
    title: "TailWindCss",
  },
  {
    img: "Github.svg",
    title: "Github",
  },
];
const knowledge = [
  {
    img: "Node.svg",
    title: "NodeJS",
  },
  {
    img: "Node.svg",
    title: "Express",
  },
  {
    img: "MongoDB.svg",
    title: "MongoDB",
  },
  {
    img: "Figma.svg",
    title: "Figma",
  },
  {
    img: "Photoshop.svg",
    title: "Photoshop",
  },
];

const getImg = (name) => {
  return new URL(`../assets/imgs/${name}`, import.meta.url).href;
};
</script>

<style lang="scss" scoped>
// -------------------------------------------------
.Resume {
  // -- common ---
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    li {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 5px;
      span {
        color: var(--p);
        font-weight: 600;
      }
    }
  }

  // --------------------------------------

  .knowledge {
    .title {
      margin-top: 10px;
    }
  }
}
</style>
