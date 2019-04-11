<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Bollywood Celeb Quiz</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"/>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="#" active>Level One</b-nav-item>
          <b-nav-item href="#">Level Two</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style >
#nav {
  padding: 0px;
}
</style>