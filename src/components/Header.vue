<template>
  <header class="header">
    <nav>
      <router-link to="/">
        <img src="../assets/imgs/M.svg" alt="Mostafa" width="35">
      </router-link>

      <ul class="items">
        <li class="itemList">
          <router-link to="/" exact-active-class="active">Home</router-link>
        </li>
        <li class="itemList">
          <router-link to="/resume" exact-active-class="active">Resume</router-link>
        </li>
        <li class="itemList">
          <router-link to="/projects"exact-active-class="active">Projects</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@mixin dFLex($x, $y) {
  display: flex;
  justify-content: $x;
  align-items: center;
  gap: $y;
}
// ----------------------------------
.header {
  nav {
    @include dFLex(space-between, 5px);
    border-bottom: 1px solid var(--mainColor);
    padding-bottom: 5px;
    .items {
      @include dFLex(space-between, 10px);
      .itemList{
        a{
          color: #000;
          &.active{
            color: #0277bd;
          }
        }
      }
    }
  }
}
</style>
