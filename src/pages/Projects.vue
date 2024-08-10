<template>
  <div class="Projects">
    <h3 class="title">Projects :</h3>
    <section class="project">
        <Project :project="item" v-for="(item, index) in boxImg" :key="index" />
    </section>
  </div>
</template>

<script setup>
import Project from "../components/Project.vue";
const boxImg = [
  {
    link: "http://joharinvoice.netlify.app/",
    title: "Invoice",
    src: "Invoice",
  },
  {
    link: "https://joharaddtocart.netlify.app/",
    title: "AddToCart",
    src: "AddToCart",
  },
  {
    link: "https://joharcooking.netlify.app/",
    title: "Cooking Blog",
    src: "cookingBlog",
  },
  {
    link: "https://employmangment.netlify.app/",
    title: "Employee Management",
    src: "Employee",
  },
  {
    link: "https://taskpaina.netlify.app/",
    title: "Task pania",
    src: "taskPania",
  },
  {
    link: "https://goharstore.netlify.app/",
    title: "Johar Store",
    src: "joharStore",
  },

  {
    link: "https://storebookjohar.netlify.app/",
    title: "Book Store",
    src: "bookStore",
  },
  {
    link: "https://mostafa-johar.github.io/ElDisha/",
    title: "LandingPage",
    src: "landingPage",
  },
];

</script>

<style lang="scss" scoped>
.Projects {
  .project {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
    gap: 10px;
  }
}


</style>
