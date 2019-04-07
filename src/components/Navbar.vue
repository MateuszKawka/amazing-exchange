<template>
  <nav class="navbar is-active is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <h1 class="navbar-item">Exchange</h1>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        @click="menuBind"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" id="navMenu" :class="{'is-active': visibleMenu}">
      <router-link to="/main" class="navbar-item" tag="a">Main</router-link>
      <a class="navbar-item">Home</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      visibleMenu: false
    };
  },
  methods: {
    menuBind() {
      this.visibleMenu = !this.visibleMenu;
    }
  }
};
</script>
